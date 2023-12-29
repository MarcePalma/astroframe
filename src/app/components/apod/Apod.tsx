import { NasaApiResponse } from "@/app/types/nasaApiTypes"
import { useEffect, useState } from "react"
import React from 'react'


export default function Apod() {
    const [apodData, setapodData] = useState<NasaApiResponse | null>(null);

    useEffect(() => {
        const getApod = async () => {
            try {
                const response = await fetch("/api/nasaApi")
                if (!response.ok) {
                    throw new Error("Error al obtener la imagen del dia")
                }
                const data: NasaApiResponse = await response.json();
                setapodData
            } catch (error) {
                console.error("Error al obtener la imagen del dia:", error)
            }
        }
        getApod()
    }, [])

    return (
        <div>Apod</div>
    )
}
