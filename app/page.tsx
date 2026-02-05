"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  if (answer) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#efefef]">
        <img
          src="/eminem.png"
          alt="Eminem throwing flowers"
          className="w-80 md:w-[28rem] rounded-2xl mb-8"
        />
        {answer === "no" && (
          <p className="text-xl md:text-2xl text-[#8785a2] mb-4 animate-pulse">
            i think you meant to say yes 🙄
          </p>
        )}
        <h1 className="text-2xl md:text-4xl font-bold text-[#5c5470]">
          you are gay but i still love you 💕
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#efefef]">
      <h1 className="text-3xl md:text-5xl font-bold text-[#5c5470] mb-4">
        do you love me? 🥺
      </h1>
      <p className="text-[#a0a0a0] mb-8">be honest pookie</p>
      <div className="flex gap-4">
        <button
          onClick={() => setAnswer("yes")}
          className="neu-button font-bold text-xl"
        >
          Yes
        </button>
        <button
          onClick={() => setAnswer("no")}
          className="neu-button font-bold text-xl"
        >
          No
        </button>
      </div>
    </main>
  );
}
