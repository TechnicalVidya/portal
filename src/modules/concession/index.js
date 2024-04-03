import React from 'react'
import { Badge } from "@/components/ui/badge";

const Concession = () => {
    return (
        <div className="flex flex-col pt-8">
  <header className="py-4">
    {/* Your header content */}
  </header>

  <main className="flex-grow flex flex-col items-center justify-center">
    <div className="flex items-center justify-center mb-4">
      <Badge
        className={
          "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
        }
      >
        <p>🎉</p>
        <p>Streamlined Form for Railway Passengers!</p>
      </Badge>
    </div>

    <div className="flex flex-col items-center gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
        SmartRail Concession
        <br className="hidden sm:inline" />
        Application
      </h1>
    </div>

    {/* Buttons */}
    <div className="flex justify-center gap-4 mt-8">
  <button className="bg-primary text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
    Students
  </button>
  <button className="bg-secondary text-white px-4 py-2 rounded-lg transition duration-300 transform hover:scale-105 hover:bg-secondary-dark focus:outline-none focus:ring-2 focus:ring-secondary">
    Admin
  </button>
</div>

  </main>
</div>



    )
}

export default Concession;