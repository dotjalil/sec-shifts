import Link from "next/link";
import { DollarSign } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { NameInitialsAvatar } from "react-name-initials-avatar";

export default function Dashboard() {
  return (
    <div>
      <div className="flex flex-row">
        <Button className="mb-3" variant="outline">
          + Add site
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
        <Card x-chunk="dashboard-01-chunk-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Site</CardTitle>
            <div className="flex gap-1">
              <Badge variant="secondary">secure.sa</Badge>
              <Badge variant="secondary">security.com.sa</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium mt-4">Active shift</p>
            <div className="text-xl font-bold mt-3 flex gap-3 items-center">
              <NameInitialsAvatar name="عادله" />
              <div className="text-l">966537755562</div>
              {/* <Badge variant="outline"></Badge> */}
            </div>
          </CardContent>
          <CardFooter>
            {/* <Button className="w-full">View shifts</Button> */}
            <Link href="/shifts">
              <Button size="sm" variant="secondary">
                View shifts
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
