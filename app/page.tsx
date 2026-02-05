"use client";

import { useState } from "react";

export default function Home() {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);
  const [noScale, setNoScale] = useState(1);
  const [glitching, setGlitching] = useState(false);

  const shrinkNo = () => {
    setGlitching(true);
    setTimeout(() => setGlitching(false), 500);
    setNoScale((prev) => Math.max(0, prev - 0.25));
  };

  if (answer) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#efefef]">
        <img
          src="/eminem.png"
          alt="Eminem throwing flowers"
          className="w-80 md:w-[28rem] rounded-2xl mb-8"
        />
        <h1 className="text-2xl md:text-4xl font-bold text-[#5c5470] pixel-font">
          you are gay but i still love you 💕
        </h1>
      </main>
    );
  }

  return (
    <main className={`min-h-screen flex flex-col items-center justify-center p-4 text-center bg-[#efefef] ${glitching ? "glitch" : ""}`}>
      <h1 className="text-3xl md:text-5xl font-bold text-[#5c5470] mb-4 pixel-font">
        do you still love me?
      </h1>
      <p className="text-[#a0a0a0] mb-8 pixel-font">be honest pookie</p>
      <div className="flex gap-4 items-center">
        <button
          onClick={() => setAnswer("yes")}
          className="neu-button font-bold text-xl pixel-font"
        >
          Yes
        </button>
        {noScale > 0 && (
          <button
            onClick={shrinkNo}
            className="neu-button font-bold text-xl pixel-font transition-all duration-300"
            style={{
              transform: `scale(${noScale})`,
              opacity: noScale,
            }}
          >
            No
          </button>
        )}
      </div>
      {noScale === 0 && (
        <p className="mt-4 text-[#8785a2] pixel-font animate-pulse">
          stfu and say yes
        </p>
      )}
    </main>
  );
}
