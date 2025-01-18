"use client";
import { useSearchParams } from 'next/navigation';
import ResetPasswordForm from "@/components/hero/resetPassword-form";
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid place-items-center h-screen">
        <ResetPasswordForm token={token} />
      </div>
    </Suspense>
  );
}
