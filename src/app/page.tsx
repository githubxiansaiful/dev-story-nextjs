"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleDashboardBtn = () => {
    const password = prompt("Enter your password!");
    if (password === "123") {
      router.push("/dashboard");

    }
  }

  return (
    <div>
      <h1>Hey, welcome! Home Page</h1>
      <Button onClick={handleDashboardBtn}>Go To Dashboard</Button>
    </div>
  );
}
