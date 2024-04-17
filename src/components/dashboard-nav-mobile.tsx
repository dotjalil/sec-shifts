import { Home } from "lucide-react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="grid gap-6 text-lg font-medium">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold">
        <Home className="h-6 w-6" />
        <span className="sr-only">Shifts App</span>
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        Sites
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        Agents
      </Link>
      <Link href="#" className="text-muted-foreground hover:text-foreground">
        Shifts
      </Link>
    </nav>
  );
}
