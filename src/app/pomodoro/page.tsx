"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";
import TimerDisplay from "@/shared/ui/TimerDisplay";
import Image from "next/image";

const INITIAL_TIME_SECONDS = 25 * 60;

export default function Pomodoro() {
  const [secondsLeft, setSecondsLeft] = useState<number>(INITIAL_TIME_SECONDS);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) {
      if (secondsLeft <= 0 && isRunning) {
        console.log("Tempo esgotado!");
        setIsRunning(false);
      }
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isRunning, secondsLeft]);

  const handleToggle = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setIsRunning(false);
    setSecondsLeft(INITIAL_TIME_SECONDS);
  }, []);

  const handleIncreaseTime = useCallback(() => {
    if (!isRunning) {
      setSecondsLeft((prev) => prev + 5 * 60);
    }
  }, [isRunning]);

  const handleDecreaseTime = useCallback(() => {
    if (!isRunning) {
      setSecondsLeft((prev) => Math.max(0, prev - 5 * 60));
    }
  }, [isRunning]);

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
              className={`rounded-full object-cover transition-all duration-300`}
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
        <h1 className="text-4xl">Taverna</h1>
        <h2>Iniciar quest</h2>

        <div className="flex flex-row gap-4 mt-10 text-orange-700 text-3xl">
          {isRunning ? (
            <FaRegPauseCircle onClick={handleToggle} />
          ) : (
            <FaRegPlayCircle onClick={handleToggle} />
          )}
        </div>

        <div className="flex justify-center items-center w-full">
          <TimerDisplay
            secondsLeft={secondsLeft}
            isRunning={isRunning}
            onToggle={handleToggle}
            onReset={handleReset}
            onIncreaseTime={handleIncreaseTime}
            onDecreaseTime={handleDecreaseTime}
          />
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
