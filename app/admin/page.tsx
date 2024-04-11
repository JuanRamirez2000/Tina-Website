import { redirect } from "next/navigation";
import { checkRole } from "@/utils/roles";
import { auth } from "@clerk/nextjs";

export default function Page() {
  const { userId }: { userId: string | null } = auth();

  if (!checkRole("admin")) {
    redirect("/");
  }

  return (
    <div>
      <h1>{userId}</h1>
    </div>
  );
}
