import React, { useRef, useState } from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';
import Image from "next/image";

export function CarouselDemo({ imgArray }) {
    const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    return (
        <Carousel className="w-full max-w-[80vw]" plugins={[plugin.current]}>
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className='p-6 py-8'>
                                <CardContent className="flex items-center justify-center h-[50vh] overflow-hidden">
                                    <Image src={imgArray[index]} width={1920} height={1080} />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
