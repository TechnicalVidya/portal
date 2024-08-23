'use client'
import dynamic from "next/dynamic";
import React from "react";
const Concession = dynamic(() => import('@/modules/concession'), { ssr: false });

const Page = () => {
  return (
    <Concession />
  );
};

export default Page;
