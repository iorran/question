import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">Quer ficar comigo?</h1>

      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Sim
      </button>
      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
        Não
      </button>
    </main>
  );
}
