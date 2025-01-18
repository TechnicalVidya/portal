'use client'
import Profile from "@/modules/profile";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/legacy/build/pdf.worker.min.mjs`

export default function Page() {
    return (
        <Profile />
    );
}