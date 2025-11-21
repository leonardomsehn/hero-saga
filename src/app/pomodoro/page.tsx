import { RxHamburgerMenu } from "react-icons/rx";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import Image from "next/image";

export default function pomodoro() {
  return (
    <div className="flex flex-col justify-between items-center w-full h-screen gap-2 p-10 relative">
      <header className="flex flex-col w-full justify-between items-center gap-2">
        <div className="flex flex-row w-full justify-between items-center gap-2">
          <div>
            <RxHamburgerMenu size={30} />
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="/assets/images/user.png"
              alt="Avatar de Usuário"
              width={30}
              height={30}
              className={`rounded-full object-cover transition-all duration-300
          }`}
            />
            <h2>leofx</h2>
          </div>
          <div>Lvl 2</div>
        </div>
        {/* xp bar */}
        <div className="flex flex-row w-full justify-center">
          <div className="mt-2 w-full h-4 rounded border border-green-400">
            <div className="w-50 bg-green-300 rounded h-4"></div>
          </div>
        </div>
      </header>

      <main className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-3xl">Taverna</h1>
        <h2>Iniciar quest</h2>
        <div className="flex flex-row gap-4 mt-10 text-orange-500">
          <FaPlay />
          <FaPause />
        </div>
      </main>
      <footer>
        <button
          className="bg-orange-700 text-1xl flex justify-center items-center py-2 px-8 rounded-lg font-bold hover:bg-orange-600"
          type="submit"
        >
          Sair
        </button>
      </footer>
    </div>
  );
}
