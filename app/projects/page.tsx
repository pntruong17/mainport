"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

const socials = [
  {
    image: "/images/pro3.png",
    href: "https://brainup-three.vercel.app/",
    label: "Brain Up",
    handle: "Game App",
  },
  {
    image: "/images/pro1.png",
    href: "flexfashion.vercel.app",
    label: "Window Simulation",
    handle: "Web App",
  },
  {
    image: "/images/pro2.png",
    href: "https://flexfashion.vercel.app",
    label: "Flex Fashion",
    handle: "Shop",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" relative flex flex-col items-center gap-4 duration-700 group md:gap-8 lg:pb-10"
              >
                <Image
                  src={s.image}
                  width={500}
                  height={500}
                  alt={s.label}
                  className="h-[400px] object-cover opacity-50 hover:opacity-100 duration-75"
                />
                <div className="z-10 flex flex-col items-center">
                  <span className="text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-3">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
