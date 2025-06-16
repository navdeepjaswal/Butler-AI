// import { createClient } from "@/lib/supabase/server";
// import { redirect } from "next/navigation";
// import { DashboardClient } from "@/app/dashboard/dashboard-client";
// import { ConversationHistory } from "@/components/conversation-history";

// export default async function DashboardPage() {
//   const supabase = await createClient();

//   // Get session and user data
//   const {
//     data: { session },
//   } = await supabase.auth.getSession();

//   if (!session) {
//     redirect("/auth/login");
//   }

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();
//   const name =
//     user?.user_metadata?.full_name || user?.email?.split("@")[0] || "Friend";

//   return (
//     <main className="bg-gray-50">
//       <div className="flex h-full">
//         {/* Conversation History Sidebar */}
//         <div className="w-80 border-r border-gray-200 bg-white p-4">
//           <h2 className="mb-4 text-lg font-semibold text-gray-800">History</h2>
//           <ConversationHistory />
//         </div>

//         {/* Main Chat Area */}
//         <div className="flex-1 p-4 md:p-8">
//           <DashboardClient initialName={name} />
//         </div>
//       </div>
//     </main>
//   );
// }

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import DashboardShell from "./DashboardShell";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect("/auth/login");
  }

  const { data: { user } } = await supabase.auth.getUser();
  const name =
    user?.user_metadata?.full_name ||
    user?.email?.split("@")[0] ||
    "Friend";

  return <DashboardShell initialName={name} />;
}