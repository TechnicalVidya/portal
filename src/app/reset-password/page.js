"use client";
import { useSearchParams } from 'next/navigation';
import ResetPasswordForm from "@/components/hero/resetPassword-form";
import { Suspense } from 'react';

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  )
}

function App() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div className="grid place-items-center h-screen">
      <ResetPasswordForm token={token} />
    </div>
  );
}
