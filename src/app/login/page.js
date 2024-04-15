"use client";
import RedirectWrapper from "@/components/auth/redirectWrapper";
import AuthenticationPage from "@/components/authentication-page";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <>
      {user && (
        <RedirectWrapper isAuthenticated={!user.authenticated}>
          <AuthenticationPage />
        </RedirectWrapper>
      )}
    </>
  );
};

export default Page;
