'use client'

import { useEffect, useState } from "react";
import AddDisc from "./components/AddDisc";
import DiscList from "./components/DiscList";

export default function Home() {
  const [disciplines, setDisciplines] = useState<string[]>([]);
  
  const getDisciplines = () => {
    const disciplines: string[] = JSON.parse(localStorage.getItem('disciplines') || '[]');
    setDisciplines(disciplines);
  }

  useEffect(() => {
    getDisciplines();
  }, []);
  
  return (
    <div>
      <AddDisc getDisciplines={getDisciplines} />
      <DiscList disciplines={disciplines} />
    </div>
  );
}
