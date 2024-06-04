'use client'
import Event from '@/modules/events/event'
import React from 'react'

const Page = ({ params: { event } }) => {
  return (
    <Event eventId={event} />
  )
}

export default Page