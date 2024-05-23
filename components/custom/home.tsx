import { BellRing, Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const Information = [
  {
    title: "Write Your Journals/Diaries📝.",
    description: "Fast, secure and simple",
  },
  {
    title: "set your mood status😊",
    description: "manage your emotional status",
  },
  {
    title: "Control accessibility🔎",
    description: "private and public Diaries",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function Registration({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] bg-secondary", className)} {...props}>
      <CardHeader>
        <CardTitle>MineSpace.com</CardTitle>
        <CardDescription>Welcome to Minespace.com</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              About Minespace.com
            </p>
            <p className="text-sm text-muted-foreground">Minespace in short</p>
          </div>
          <Switch />
        </div>
        <div>
          {Information.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-gray-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">🚀 Get started</Button>
      </CardFooter>
    </Card>
  );
}
