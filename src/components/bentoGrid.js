import img1 from "@/assets/3.jpg"
import Image from "next/image";
import SparklesText from "@/components/ui/magicalText";

const BentoGrid = () => {
  return (
    <section>
      <div className="container pt-10">
        <div className="relative">
          <div className="relative z-1 flex items-center h-[30rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[35rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <Image
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="image"
                height={730}
                src={img1}
              />
            </div>

            <div className="absolute  pt-60 z-1 max-w-[20rem] ml-auto">
              <h4 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4"><SparklesText text="The Cult"/></h4>
              <p className="md:text-lg ">
                "Where music meets mysticism, and rock 'n' roll legends are born."
              </p>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                <Image
                  src={img1}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
                </div>
                <div className="absolute bottom-0 pb-14 left-0 p-4 max-w-[30rem] z-10">
                    <h4 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl       mb-4"><SparklesText text="Technical Zephyr"/></h4>
                </div>
            </div>
            <div className="relative min-h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                <Image
                  src={img1}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
                </div>
                <div className="absolute bottom-0 pb-14 left-0 p-4 max-w-[17rem] z-10">
                    <h4 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-4xl       mb-4"><SparklesText text="Sports Zephyr"/></h4>
                </div>
            </div>

              
          </div>

        </div>
      </div>
    
    </section>

  )
};

export default BentoGrid;