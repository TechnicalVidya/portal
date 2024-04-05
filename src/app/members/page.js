import React from "react";
import Team from "@/components/ui/team"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faPinterest, faFacebook, faDribbble } from '@fortawesome/free-brands-svg-icons';

function Services() {
  let message = `Our Team`;
  return (
   <>
   <div className="flex flex-col items-center gap-4">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
                    Our Team
                </h1>
            </div>
            <br />
    <Team/>
    
    
   </>
  );
}

export default Services;
