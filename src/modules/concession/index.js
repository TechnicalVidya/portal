import React, { useEffect, useState } from 'react'
import { Badge } from "@/components/ui/badge";
import { AddConcession } from './addConcession';
import Heading from "@/components/ui/heading";
import FormDisplay from '@/components/formDisplay';
import { fetchForms } from '@/utils/concession';
import { useSelector } from "react-redux";
import AuthenticationAlert from '@/components/authentication-alert';

const Concession = () => {
  const { user } = useSelector((state) => state.user)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.authenticated)
      fetchForms(setData, setLoading)
  }, [])

  return (
    <>
      {
        user?.authenticated ?
          (
            <div className="flex flex-col pt-8">
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

                <div className="flex flex-col items-center gap-4 p-4">
                  <h1 className="scroll-m-20 text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-center">
                    SmartRail Concession  <br />
                    Application
                  </h1>
                </div>
                <div className='flex flex-row gap-5 pt-5'>
                  <AddConcession />
                </div>
                <div className="pt-10  md:space-y-16 space-y-6 ">
                  <Heading heading={"Previous Forms"} />
                  <div className="pt-16 center flex flex-wrap">
                    {
                      data ?
                        <FormDisplay data={data} loading={loading} />
                        :
                        <p className='text-center w-full font-semibold text-xl'>No forms found</p>
                    }
                  </div>
                </div>
              </main>
            </div>
          )
          :
          (
            <AuthenticationAlert />
          )
      }
    </>
  )
}

export default Concession;