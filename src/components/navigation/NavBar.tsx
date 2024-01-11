"use client"
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { MenuOverlayProps } from "@/types/types";
import StarsParticles from "../particles/StarParticles";

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const navLinks: MenuOverlayProps[] = [
        {
            title: 'CALENDAR',
            path: '/calendar',
        },
    ];

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#000] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={'/'} className="flex justify-between items-center text-2xl md:text-5xl text-white font-semibold">
                    <Image width={70} height={70} src="/assets/images/Icon.ico" alt="Logo" />
                    <span className="text-4xl text-white">
                        <h1>
                            AstroFrame
                        </h1>
                    </span>
                </Link>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <svg className="h-5 w-5"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ff4500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none" />
                                <path
                                    d="M4 6l16 0" />
                                <path
                                    d="M4 12l16 0" />
                                <path
                                    d="M4 18l16 0" />
                            </svg>
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#ff4500"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round">
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none" />
                                <path
                                    d="M18 6l-12 12" />
                                <path
                                    d="M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* @ts-ignore */}
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
}