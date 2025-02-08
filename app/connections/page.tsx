"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

// You'll need to create these components and import them
import { GameBoard } from "@/components/connections/GameBoard";
import { GameProvider } from "@/components/connections/GameProvider";

export default function Letter() {
  return (
    <div className="min-h-screen bg-pastel-green flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-pastel-dark">
        Chanz-nections
      </h1>

      {/* Add the Connections game here */}
      <div className="w-full max-w-2xl mb-8">
        <GameProvider>
          <GameBoard />
        </GameProvider>
      </div>

      <Link href="/">
        <Button className="bg-pastel-blue hover:bg-blue-100 text-pastel-dark font-bold py-3 px-6 rounded-lg shadow-brutal">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}
