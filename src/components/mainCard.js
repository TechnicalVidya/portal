import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CardWithForm({ card }) {
  return (
    <Card className="pt-6">
      <CardContent>
        <div key={card.id}>
          <div className="overflow-hidden">
            <Image
              className="rounded-lg"
              src={card.imageUrl}
              alt={card.altText}
            />
          </div>
          <CardTitle className="mt-4">{card.title}</CardTitle>
          <CardDescription className="text-gray-500 text-sm mt-2">
            {card.description}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription variant="outline">- {card.managedBy}</CardDescription>
        <Button>See Activity</Button>
      </CardFooter>
    </Card>
  );
}
