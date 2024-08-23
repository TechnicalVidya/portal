'use client'
import dynamic from "next/dynamic";
import React from "react";
const Events = dynamic(() => import('@/modules/events'), { ssr: false });

const Page = () => {
  return <Events />;
};

export default Page;
