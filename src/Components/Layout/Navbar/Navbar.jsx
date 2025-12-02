"use client";
import React from "react";
import { Bell, User, LogOut, Menu, Bookmark, Home } from "lucide-react";

export default function Navbar({ setIsMobileOpen }) {
  return (
    <header className="w-full h-20 bg-white shadow-md px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Mobile Sidebar Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden block text-[#1e88a8]"
      >
        <Menu size={28} />
      </button>

      <h2 className="text-xl font-bold text-[#0f4c5c]">Welcome User</h2>

      <div className="flex items-center gap-6">
        <button>
          <Home size={26} className="text-[#1e88a8]" />
        </button>

        <button>
          <Bookmark size={26} className="text-[#1e88a8]" />
        </button>

        <button className="relative">
          <Bell size={26} className="text-[#1e88a8]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1 rounded-full text-white">
            2
          </span>
        </button>

        <button>
          <User size={26} className="text-[#1e88a8]" />
        </button>

        <button className="flex gap-2 items-center text-sm font-semibold text-[#1e88a8] hover:text-red-500">
          <LogOut size={22} />
          Logout
        </button>
      </div>
    </header>
  );
}
