'use client'

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface AddDiscProps {
  getDisciplines: () => void; 
}

export default function AddDisc(prop: AddDiscProps) {
  const [discipline, setDiscipline] = useState<string>("");

  const {getDisciplines} = prop;

  const getInputValue  = (event:any) => {
    const value = event.target.value.trim()
    if (/^[a-zA-ZÀ-ÿ\s]*$/.test(value)) {
      setDiscipline(value);
    }
  }

  const add = () => {
    const disciplines: string[] = JSON.parse(localStorage.getItem('disciplines') || '[]');
    disciplines.push(discipline);
    localStorage.setItem( 'disciplines',JSON.stringify(disciplines));
    setDiscipline("");
    getDisciplines();
  }

  return (
    <div>
      <div className="p-5">
        <h1 className="font-bold mb-5">CRONOGRAMA</h1>
        <Dialog>
          <DialogTrigger 
            className="cursor-pointer flex gap-3 p-2 rounded-xl text-md text-white bg-purple-700">
            <Plus /> Adicionar disciplina
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nova disciplina</DialogTitle>
            </DialogHeader>
            <Input
              value={discipline}
              className="focus-visible:ring-0" 
              placeholder="Ex: Direito Constitucional"
              onChange={getInputValue}
            />
            <DialogClose asChild>
              <Button 
                className="cursor-pointer text-md text-white bg-purple-700"
                onClick={add}
                >
                Adicionar
              </Button>
            </DialogClose>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );

}
  