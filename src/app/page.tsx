"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  // const { q } = router.;
  const q = null;
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function randomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setPosition({ x: randomInteger(100, 300), y: randomInteger(200, 400) });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <h1 className="text-4xl font-bold text-center">
        {q ? q : "Quer ficar comigo?"}
      </h1>

      <div className="flex flex-row gap-2">
        <button
          onClick={() =>
            (window.location.href =
              "https://www.youtube.com/watch?v=izGwDsrQ1eQ")
          }
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Sim
        </button>
        <button
          style={{ position: "relative", top: position.y, left: position.x }}
          onClick={handleClick}
          onMouseEnter={handleClick}
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
        >
          Não
        </button>
      </div>
    </main>
  );
}
