'use client'

import { Button } from "@/components/ui/button";
import { X } from "lucide-react"
import { Fragment } from "react";

interface DiscListProps {
  disciplines: string[];
}

export default function DiscList(prop: DiscListProps) {
  
  const {disciplines} = prop;

  return (
    <div>
      <div className="flex flex-col gap-5 p-5 ">
        <h1 className="font-medium text-gray-500">MINHAS DISCIPLINAS</h1>
        {disciplines.map((discipline, index) => (
          <Fragment key={index}>
            <Button 
              className="cursor-pointer w-fit flex gap-4 text-md text-back bg-gray-100"
            >
              {discipline}
              <X className="h-4 w-4"/>
            </Button>
          </Fragment>
        ))}
      </div>
    </div>
  );
  
}
  