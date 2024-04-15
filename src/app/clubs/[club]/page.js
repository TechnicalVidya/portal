"use client";
import Club from "@/modules/clubs/club";
import React from "react";

const Page = ({ params: { club } }) => {
  return <Club clubName={club} />;
};

export default Page;
