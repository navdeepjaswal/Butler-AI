import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { DashboardClient } from "@/app/dashboard/dashboard-client";

export default async function DashboardPage() {
  const supabase = await createClient();

  // Get session and user data
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  const name =
    user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Friend";

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-8">
      <DashboardClient initialName={name} />
    </main>
  );
}
