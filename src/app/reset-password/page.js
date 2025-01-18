"use client";
import { useSearchParams } from 'next/navigation';
import ResetPasswordForm from "@/components/hero/resetPassword-form";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  return (
    <div className="grid place-items-center h-screen">
      <ResetPasswordForm token={token} />
    </div>
  );
}