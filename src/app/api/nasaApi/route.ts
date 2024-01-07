import { NasaApiResponse } from "@/types/nasaApiTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("La Api Key no está bien configurada!");
        }

        let currentDate = new Date().toISOString().split('T')[0];
        console.log(currentDate);

        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

        const apiResponse = await fetch(apiUrl);

        if (apiResponse.ok) {
            const data: NasaApiResponse = await apiResponse.json();
            return new Response(JSON.stringify(data), { status: 200 });
        } else if (apiResponse.status === 404) {
            const yesterday = new Date(new Date(currentDate).getTime() - 24 * 60 * 60 * 1000);
            currentDate = yesterday.toISOString().split('T')[0];

            const fallbackUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;
            const fallbackResponse = await fetch(fallbackUrl);

            if (fallbackResponse.ok) {
                const fallbackData: NasaApiResponse = await fallbackResponse.json();
                return new Response(JSON.stringify(fallbackData), { status: 200 });
            } else {
                throw new Error(`Error al obtener la imagen del día. Código de estado: ${fallbackResponse.status}`);
            }
        } else {
            throw new Error(`Error al obtener la imagen del día. Código de estado: ${apiResponse.status}`);
        }
    } catch (error) {
        console.error("Error al obtener la imagen del día:", error);
        return new Response(JSON.stringify({ error: "Error al obtener la imagen del día." }), { status: 500 });
    }
}
