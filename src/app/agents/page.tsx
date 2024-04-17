import AgentsTable from "@/components/agents-table";
import { Button } from "@/components/ui/button";

export default function Agents() {
  return (
    <div>
      <div className="flex flex-row">
        <Button className="mb-3" variant="outline">
          + Add Agent
        </Button>
      </div>
      <AgentsTable />
    </div>
  );
}
