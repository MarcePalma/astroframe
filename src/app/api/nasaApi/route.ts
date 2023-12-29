import { NasaApiResponse } from "@/types/nasaApiTypes";
import { NextApiResponse } from "next";

export async function GET(res: NextApiResponse) {
    try {
        const apiKey = process.env.API_KEY
        if (!apiKey) {
            throw new Error("La Api Key no esta bien configurada!")
        }
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`Error al obtener la imagen del día. Código de estado: ${response.status}`)
        }
        const data: NasaApiResponse = await response.json();
        return new Response(JSON.stringify(data), { status: 200 })
    }
    catch (error) {
        console.error("Error al obtener la imagen del dia:", error)
        return new Response(JSON.stringify({ error: "Error al obtener la imagen del día." }), { status: 500 });
    }
}