import Image from "next/image";
import Link from "next/link";
import backgroundHomepage from "@/public/assets/images/backgroundHomepage.png";
import { Metamorphous } from "next/font/google";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen gap-2 p-10 relative z-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/background-homepage.png"
          alt="Imagem de Fundo Opaca"
          layout="fill"
          objectFit="cover"
          className="opacity-5"
        />
      </div>
      <div className="flex flex-col justify-between items-center w-full h-screen gap-2 z-10">
        <Image
          alt="logo"
          width={180}
          height={180}
          src="/assets/images/hero-saga-logo.png"
        />
        <form className="flex flex-col items-center gap-4 w-full max-w-md mb-35">
          <h2 className="text-xl text-center ">Comece sua aventura aqui</h2>
          <input
            className="border border-orange-700 rounded-md w-full p-2 text-xs"
            type="email"
            placeholder="email"
          />
          <input
            className="border border-orange-700 rounded-md w-full p-2 text-xs"
            type="password"
            placeholder="senha"
          />
          <div className="flex flex-row gap-4">
            <Link href="/pomodoro">
              <button
                className="bg-orange-700 text-1xl flex justify-center items-center py-2 px-8 rounded-lg font-bold hover:bg-orange-600"
                type="submit"
              >
                Entrar
              </button>
            </Link>
            <button
              className="bg-orange-700 text-1xl flex justify-center items-center py-2 px-8 rounded-lg font-bold hover:bg-orange-600"
              type="submit"
            >
              Cadastrar
            </button>
          </div>
        </form>
        <footer className="text-xs">Hero Saga © 2025</footer>
      </div>
    </div>
  );
}
