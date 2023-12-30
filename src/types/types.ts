import { NasaApiResponse } from "./nasaApiTypes";

export interface ApodCardProps {
    apodData: NasaApiResponse;
}

export interface NavLinkProps {
    href: string;
    title: string;
}
export interface MenuOverlayProps {
    title: string;
    path: string;
}