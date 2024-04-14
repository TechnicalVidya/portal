import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import TestimonialImage from "@/assets/testimonial.png";
import TecEve from "@/assets/tecEve.png"
import EssaEve from "@/assets/eesaevent.jpg"
import wdcEve from "@/assets/wdcEve.png"
import LocationImg from "@/assets/contactus/image.png";
import CallImg from "@/assets/contactus/call.png";
import MailImg from "@/assets/contactus/mail.png";

// import FounderImage from "@/assets/founder.png";

const HeroComponent = () => {
  return (
    
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      
      <div className="flex items-center justify-center">
              <Badge
          className={
            "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
          }
        >
          <p>🎉</p>
          <p>Streamlined RSVPs, interactive schedules!</p>
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
          Technical Vidya
          <br className="hidden sm:inline" />
          We Bring Your skills to Life!
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground text-center">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex justify-center mt-3">
        <div className="flex gap-4">
          <Link
            href="/members"
            className={buttonVariants()}
          >
            See Members
          </Link>
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}
          >
            Login
          </Link>
        </div>
      </div>

      {/* <div className="bg-transparent p-4 lg:p-8">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8"> */}
        
          {/* <div className="lg:w-1/2 pl-20">
            <Image
              src={FounderImage}
              alt="founderImage"
              width={320}
                height={320}
            />
          </div>
        

          <div className="lg:w-1/2 dark:bg-transparent bg-transparent dark:text-gray-200">
            <div className="text-left">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" text-left>
            FOUNDER  
            </h1>
            <hr />
            <br />
              <h2 className="text-lg leading-relaxed ">
              Life isn&apos;t just about checking off accomplishments, acquiring possessions, and fulfilling desires. Your qualifications and job history aren&apos;t the real measure of who you are. Life is tough, filled with unexpected twists and turns beyond anyone&apos;s control. Having the humility to accept this reality can help you navigate through its challenges.

              Understand the importance of the present moment. Put your efforts into studying hard, working hard, and enjoy your life to the fullest. Don&apos;t let yourself be constrained by rules, but always be mindful of not causing harm to others. <br />
                    <br /> <p className="mt-1 text-lg text-gray-600 dark:text-gray-400 font-bold text-right"> -ANSH VARMA</p>
              </h2>
            </div>
          </div> 
          */}
        {/* </div>
      </div> */}


      {/* Recent events */}
<div className="bg-gray-2 dark:bg-dark pt-20  dark:bg-transparent bg-transparent lg:pt-[120px] lg:pb-20">
<h4 className="scroll-m-20 mb-10  text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          Recent Events
        </h4>
<div className="container mx-auto ">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               className="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <Image
                  src={TecEve}
                  alt="image"
                  class="w-full"
                  />
               <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     The English Club
                     </a>
                  </h3>
                  <p
                     className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7"
                     >
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div className="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <Image
                  src={EssaEve}
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     Department of Electrical Engineering
                     </a>
                  </h3>
                  <p class="text-base leading-relaxed text-body-color mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
         <div class="w-full px-4 md:w-1/2 xl:w-1/3">
            <div
               class="mb-10 overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3"
               >
               <Image
                  src={wdcEve}
                  alt="image"
                  class="w-full"
                  />
               <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                  <h3>
                     <a
                        href="javascript:void(0)"
                        class="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                        >
                     Women&apos;s Development Cell
                     </a>
                  </h3>
                  <p class="text-base leading-relaxed text-body-color mb-7">
                     Lorem ipsum dolor sit amet pretium consectetur adipiscing
                     elit. Lorem consectetur adipiscing elit.
                  </p>
                  <a
                     href="javascript:void(0)"
                     class="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-3 px-7 hover:text-white dark:border-dark-3 dark:text-dark-6"
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   </div>

   


      <section className="p-6 dark:bg-transparent bg-transparent dark:text-gray-200">
        <h4 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-4xl text-center">
          TECHNICAL STATS
        </h4>
        <p className="mt-1 text-lg text-gray-600 dark:text-gray-400 text-center">
          THE NUMBERS SAY IT ALL
        </p>

        <div className="mt-4 container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">500+</p>
            <p className="text-sm sm:text-base">HONORS AND ACHIEVEMENTS</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">52</p>
            <p className="text-sm sm:text-base">RESEARCH PAPERS</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">1K+</p>
            <p className="text-sm sm:text-base">STUDENTS ENROLLED</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">100%</p>
            <p className="text-sm sm:text-base">COMMITMENT</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <div className="max-w-3xl mx-auto mt-20" data-aos="zoom-y-out">
        <div className="relative flex items-start border-2 border-gray-200 rounded bg-white dark:bg-gray-800 dark:border-gray-600 p-6 md:p-8">
         
          <div className="flex-shrink-0 mr-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                className="rounded-full"
                src={TestimonialImage}
                width={96}
                height={96}
                alt="Testimonial 01"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
              <svg
                className="absolute top-0 right-0 -mt-3 -mr-8 w-16 h-16 fill-current text-blue-500 dark:text-blue-400"
                viewBox="0 0 64 64"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M37.89 58.338c-2.648-5.63-3.572-10.045-2.774-13.249.8-3.203 8.711-13.383 23.737-30.538l2.135.532c-6.552 10.033-10.532 17.87-11.939 23.515-.583 2.34.22 6.158 2.41 11.457l-13.57 8.283zm-26.963-6.56c-2.648-5.63-3.572-10.046-2.773-13.25.799-3.203 8.71-13.382 23.736-30.538l2.136.533c-6.552 10.032-10.532 17.87-11.94 23.515-.583 2.339.22 6.158 2.41 11.456l-13.57 8.283z" />
              </svg>
            </div>
            <blockquote className="text-xl font-medium mb-4 text-gray-800 dark:text-white">
              &quot;Embrace challenges as opportunities, let curiosity guide,
              determination fuel, and passion drive you towards success. Your
              potential is limitless.&quot;
            </blockquote>
            <cite className="block font-bold text-lg not-italic mb-1 text-gray-600 dark:text-gray-400">
              Dr. Satish Chaturvedi
            </cite>
            <div className="text-gray-600 dark:text-gray-400">
              <span>Founder - </span>
              <a
                className="text-blue-600 hover:underline"
                href="https://ltce.in"
              >
                Lokmanya Tilak College Of Engineering
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Contact Us */}
        <div className="mt-20 flex flex-col items-left gap-4">
  <h3 className="lg:text-2xl text-gray-600 dark:text-gray-400 text-left">
    CONTACT US
  </h3>
  <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl text-left">
    Have any queries or suggestions? We&apos;re just a message away!
    <br className="hidden sm:inline" />
  </h1>
</div>

<div className="flex flex-wrap gap-20 justify-left">
  <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Image className="h-12 w-12" src={LocationImg} alt="Location Logo" />
    </div>
    <div>
      <div className="text-xl font-medium text-black dark:text-white">LTCoE</div>
      <p className="text-gray-500 dark:text-gray-400">Koparkhairane, Maharashtra, India</p>
      <p className="text-gray-500 dark:text-gray-400">Postal Code: 400709</p>
    </div>
  </div>

  <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Image className="h-12 w-12" src={CallImg} alt="Call Logo" />
    </div>
    <div>
      <div className="text-xl font-medium text-black dark:text-white">OFFICE</div>
      <p className="text-gray-500 dark:text-gray-400">XXXXXX-0000</p>
      <p className="text-gray-500 dark:text-gray-400">0000-XXXXXX</p>
    </div>
  </div>

  <div className="p-6 max-w-sm mx-2 my-2 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Image className="h-12 w-12" src={MailImg} alt="Mail Logo" />
    </div>
    <div>
      <div className="text-xl font-medium text-black dark:text-white">Technical Vidya</div>
      <p className="text-gray-500 dark:text-gray-400">techvidya1905@gmail.com</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default HeroComponent;
