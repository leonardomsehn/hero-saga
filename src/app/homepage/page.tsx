import Image from "next/image";
import backgroundHomepage from "@/public/assets/images/backgroundHomepage.png";
import { Metamorphous } from "next/font/google";

export default function Homepage() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen gap-2 p-10 bg-stone-900">
      {/* <Image
        alt="background"
        src="/assets/images/background-homepage.png"
        // src={backgroundHomepage}
        quality={100}
        fill
        sizes="100%"
        style={{
          objectFit: "cover",
        }}
      /> */}
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
          <button
            className="bg-orange-700 text-1xl flex justify-center items-center py-2 px-8 rounded-lg font-bold hover:bg-orange-600"
            type="submit"
          >
            Entrar
          </button>
          <button
            className="bg-orange-700 text-1xl flex justify-center items-center py-2 px-8 rounded-lg font-bold hover:bg-orange-600"
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
      <footer className="text-xs">por Leonardo Sehn</footer>
    </div>
  );
}
