"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function DashboardNav() {
  const pathname = usePathname();
  return (
    <nav
      className="grid gap-4 text-sm text-muted-foreground"
      x-chunk="dashboard-04-chunk-0"
    >
      <Link
        href="/"
        className={`${pathname === "/" ? "font-semibold text-primary" : ""}`}
      >
        Sites
      </Link>
      <Link
        href="/agents"
        className={`${
          pathname === "/agents" ? "font-semibold text-primary" : ""
        }`}
      >
        Agents
      </Link>
      <Link
        href="/shifts"
        className={`${
          pathname === "/shifts" ? "font-semibold text-primary" : ""
        }`}
      >
        Shifts
      </Link>
    </nav>
  );
}
