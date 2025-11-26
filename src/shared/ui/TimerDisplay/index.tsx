import { useCallback } from "react";
import { Nova_Oval } from "next/font/google";
interface TimerDisplayProps {
  secondsLeft: number;
  isRunning: boolean;
  onToggle: () => void;
  onReset: () => void;
  onIncreaseTime: () => void;
  onDecreaseTime: () => void;
}

const novaOval = Nova_Oval({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function TimerDisplay({
  secondsLeft,
  isRunning,
  onToggle,
  onReset,
  onIncreaseTime,
  onDecreaseTime,
}: TimerDisplayProps) {
  const formatTime = useCallback((totalSeconds: number): string => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }, []);

  return (
    <div
      className={`flex justify-center items-center gap-4 ${novaOval.className}`}
    >
      <div
        className="flex justify-center items-center rounded-full w-7 h-7 font-bold bg-orange-700"
        onClick={onDecreaseTime}
      >
        -5
      </div>
      <div className="flex justify-center items-center rounded-full w-50 h-50 border-2 text-5xl">
        <h1>{formatTime(secondsLeft)}</h1>
      </div>
      <div
        className="flex justify-center items-center rounded-full w-7 h-7 font-bold bg-orange-700"
        onClick={onIncreaseTime}
      >
        +5
      </div>
    </div>
  );
}
