import { NasaApiResponse } from "@/types/nasaApiTypes";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      throw new Error("La Api Key no está bien configurada!");
    }

    console.log('Consulta recibida:', req.url);

    const url = new URL(req.url || '', 'http://localhost');
    const date = url.searchParams.get("date");

    if (!date) {
      console.error('La fecha no está presente en la consulta.');
      return new Response(JSON.stringify({ error: "La fecha no esta presenten en la consulta" }), { status: 400 })
    }

    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    const apiResponse = await fetch(apiUrl);

    if (apiResponse.ok) {
      const data: NasaApiResponse = await apiResponse.json();
      return new Response(JSON.stringify(data), { status: 200 });
    } else {
      throw new Error(`Error al obtener la imagen del día. Código de estado: ${apiResponse.status}`);
    }
  } catch (error) {
    console.error("Error en /app/api/calendarApi/route.ts:", error);
    return new Response(JSON.stringify({ error: "Error interno en el servidor." }), { status: 500 });
  }
}