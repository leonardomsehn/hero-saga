import { useState } from "react";

interface Timer {
  seconds: string;
  minutes: string;
  hours: string;
}

export default function Timer() {
  const [timer, setTimer] = useState("30:00");

  return <h1>{timer}</h1>;
}
