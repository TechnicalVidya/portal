import Heading from "@/components/ui/heading";
import Image from "next/image";
import heroImg from "@/assets/internHero.svg";
import { AddInternship } from "./addInternship";
import Cards from "@/components/cards";
import { fetchInternships } from "@/utils/internships";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AuthenticationAlert from "@/components/authentication-alert";

const Internship = () => {
  const { user } = useSelector((state) => state.user);
  const [cardData, setCardDate] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(user)
    if (user?.authenticated) {
      fetchInternships(setCardDate, setLoading);
    }
  }, []);
  return (
    <>
      {
        user?.authenticated ? (
          <section>
            <div className=" bg-contain pt-5 md:py-10">
              <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                <div className="flex flex-col justify-center gap-8">
                  <h1 className="font-bold text-6xl">
                    Connect, Network, Succeed: Your Career Journey Starts Here!
                  </h1>
                  <p className="text-lg md:text-xl">
                    Unlock unforgettable moments with our platform, Explore
                    Opportunities, Build Connections, and Celebrate Achievements with
                    Us.
                  </p>
                  <AddInternship />
                </div>

                <Image
                  src={heroImg}
                  alt="hero"
                  width={1000}
                  height={1000}
                  className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
                />
              </div>
            </div>
            <div className="pt-10  md:space-y-16 space-y-6 ">
              <Heading heading={"Explore Internship"} />
              <div className="pt-16 center">
                <Cards
                  cardData={cardData}
                  btnText={"Participate"}
                  type={"internship"}
                  loading={loading}
                />
              </div>
            </div>
          </section>
        ) : (
          <AuthenticationAlert />
        )
      }
    </>
  );
};

export default Internship;
