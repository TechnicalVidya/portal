// import Image from "next/image";
// import React from "react";

// import LocationImg from "@/assets/contactus/image.png";
// import CallImg from "@/assets/contactus/call.png";
// import MailImg from "@/assets/contactus/mail.png";

// const ContactUs = () => {
//   return (
//     <div>
//       <div className="mt-20 flex flex-col items-center gap-4">
//         <h3 className="lg:text-2xl text-gray-600 dark:text-gray-400 text-left">
//            ON A MISSION TO TEACH MILLIONS
//         </h3>
//         {/* <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-left">
//           Have any queries or suggestions? We&apos;re just a message away!
//           <br className="hidden sm:inline" />
//         </h1> */}
//       </div>

//       {/* <div className="flex flex-wrap gap-20 justify-left">
//         <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <Image
//               className="h-12 w-12"
//               src={LocationImg}
//               alt="Location Logo"
//             />
//           </div>
//           <div>
//             <div className="text-xl font-medium text-black dark:text-white">
//               LTCoE
//             </div>
//             <p className="text-gray-500 dark:text-gray-400">
//               Koparkhairane, Maharashtra, India
//             </p>
//             <p className="text-gray-500 dark:text-gray-400">
//               Postal Code: 400709
//             </p>
//           </div>
//         </div>

//         <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <Image className="h-12 w-12" src={CallImg} alt="Call Logo" />
//           </div>
//           <div>
//             <div className="text-xl font-medium text-black dark:text-white">
//               OFFICE
//             </div>
//             <p className="text-gray-500 dark:text-gray-400">XXXXXX-0000</p>
//             <p className="text-gray-500 dark:text-gray-400">0000-XXXXXX</p>
//           </div>
//         </div>

//         <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
//           <div className="flex-shrink-0">
//             <Image className="h-12 w-12" src={MailImg} alt="Mail Logo" />
//           </div>
//           <div>
//             <div className="text-xl font-medium text-black dark:text-white">
//               Technical Vidya
//             </div>
//             <p className="text-gray-500 dark:text-gray-400">
//               techvidya1905@gmail.com
//             </p>
//           </div>
//         </div>
//       </div>*/}
//     </div> 
//   );
// };

// export default ContactUs;


import React from 'react'

const contactUs = () => {
  return (
    <section className='flex flex-col justify-center items-center'>
    <div className='items-center font-bold text-3xl md:text-5xl pb-6 md:pb-12 text-center'>
      Our Goal is to help people to Grow.
    </div>
  
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-100 md:h-96 md:w-100">
          <img className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125" src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 md:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-base md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        </div>
      </div>
  
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-100 md:h-96 md:w-100">
          <img className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 md:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-base md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default contactUs