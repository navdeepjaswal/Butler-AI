// components/DashboardShell.tsx
"use client";

import { useState } from "react";
import { DashboardClient } from "@/app/dashboard/dashboard-client";
import { ConversationHistory } from "@/components/conversation-history";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DashboardShellProps {
  initialName: string;
}

export default function DashboardShell({ initialName }: DashboardShellProps) {
  // Sidebar starts collapsed
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main className="h-full flex bg-gray-50">
      {/* Sidebar */}
      <div
        className={`
          flex flex-col
          bg-white border-r border-gray-200
          transition-[width] duration-200 ease-in-out
          ${sidebarOpen ? "w-full sm:w-80" : "w-12"}
        `}
      >
        {/* Toggle Button */}
        <button
          aria-label={sidebarOpen ? "Collapse history" : "Expand history"}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="m-2 p-1 text-black rounded hover:bg-gray-100"
        >
          {sidebarOpen ? (
            <ChevronLeft size={20} />
          ) : (
            <ChevronRight size={20} />
          )}
        </button>

        {/* Only render history when expanded */}
        {sidebarOpen && (
          <div className="flex-1 overflow-y-auto p-4">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              History
            </h2>
            <ConversationHistory />
          </div>
        )}
      </div>

      {/* Main Chat Area */}
      <div className={`h-full flex-1 md:p-8 ${sidebarOpen ? "hidden sm:block pointer-events-none opacity-30 md:pointer-events-auto md:opacity-100" : ""}`}>
        <DashboardClient initialName={initialName} />
      </div>
    </main>
  );
}
