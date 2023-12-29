import { NasaApiResponse } from "@/types/nasaApiTypes";
import { NextApiResponse } from "next";

export default async function getImages(res: NextApiResponse) {
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
        res.status(200).json(data)
    }
    catch (error){
        console.error("Error al obtener la imagen del dia:", error)
        res.status(500).json({error:"Error al obtener la imagen del dia."})
    }
}