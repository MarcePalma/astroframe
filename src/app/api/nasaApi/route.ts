import { NasaApiResponse } from "@/types/nasaApiTypes";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(res: NextApiResponse, req: NextApiRequest) {
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("La Api Key no está bien configurada!");
        }

        const currentDate = new Date().toISOString().split('T')[0];

        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Error al obtener la imagen del día. Código de estado: ${response.status}`);
        }

        const data: NasaApiResponse = await response.json();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error("Error al obtener la imagen del día:", error);
        return new Response(JSON.stringify({ error: "Error al obtener la imagen del día." }), { status: 500 });
    }
}
