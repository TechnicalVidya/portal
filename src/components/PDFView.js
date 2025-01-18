import { useState } from 'react';
import { Document, Page } from 'react-pdf';

export function PDFView({ pdfUrl }) {
    const [numPages, setNumPages] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='bg-gray-100 p-2 rounded-lg shadow-lg max-w-full h-[350px] overflow-auto '>
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.from({ length: numPages }, (_, i) => (
                    <Page
                        key={`page_${i + 1}`}
                        pageNumber={i + 1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={250}
                        height={100}
                        className='my-3 w-full h-auto'
                    />
                ))}
            </Document>
        </div>
    );
}
