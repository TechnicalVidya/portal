'use client'
import dynamic from 'next/dynamic';
import React from 'react'
const Internship = dynamic(() => import('@/modules/internship'), { ssr: false });


const page = () => {
  return (
    <Internship />
  )
}

export default page