'use client'
import dynamic from 'next/dynamic'
import React from 'react'
const Event = dynamic(() => import('@/modules/events/event'), { ssr: false });
const Page = ({ params: { event } }) => {
  return (
    <Event eventId={event} />
  )
}

export default Page