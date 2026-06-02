import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function AddDisc() {
  return (
    <div className="p-10">
      <h1>CRONOGRAMA</h1>
      <Button variant="outline" size="sm">
        <Plus /> Adicionar
      </Button>
    </div>
  );
}
