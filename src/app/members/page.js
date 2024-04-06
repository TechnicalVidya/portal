import React from "react";
import Team from "@/components/ui/team"

function Services() {
  let message = `Our Team`;
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
          Our Team
        </h1>
      </div>
      <Team />
    </>
  );
}

export default Services;
