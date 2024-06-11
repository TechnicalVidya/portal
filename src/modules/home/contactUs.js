import Image from "next/image";
import React from "react";

import LocationImg from "@/assets/contactus/image.png";
import CallImg from "@/assets/contactus/call.png";
import MailImg from "@/assets/contactus/mail.png";

const ContactUs = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-center gap-4">
        <h3 className="lg:text-2xl text-gray-600 dark:text-gray-400 text-left">
           ON A MISSION TO TEACH MILLIONS
        </h3>
        {/* <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-left">
          Have any queries or suggestions? We&apos;re just a message away!
          <br className="hidden sm:inline" />
        </h1> */}
      </div>

      {/* <div className="flex flex-wrap gap-20 justify-left">
        <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image
              className="h-12 w-12"
              src={LocationImg}
              alt="Location Logo"
            />
          </div>
          <div>
            <div className="text-xl font-medium text-black dark:text-white">
              LTCoE
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Koparkhairane, Maharashtra, India
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Postal Code: 400709
            </p>
          </div>
        </div>

        <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image className="h-12 w-12" src={CallImg} alt="Call Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black dark:text-white">
              OFFICE
            </div>
            <p className="text-gray-500 dark:text-gray-400">XXXXXX-0000</p>
            <p className="text-gray-500 dark:text-gray-400">0000-XXXXXX</p>
          </div>
        </div>

        <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <Image className="h-12 w-12" src={MailImg} alt="Mail Logo" />
          </div>
          <div>
            <div className="text-xl font-medium text-black dark:text-white">
              Technical Vidya
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              techvidya1905@gmail.com
            </p>
          </div>
        </div>
      </div>*/}
    </div> 
  );
};

export default ContactUs;
