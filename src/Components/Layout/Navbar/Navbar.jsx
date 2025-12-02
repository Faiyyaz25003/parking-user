"use client";
import React from "react";
import { Bell, User, LogOut, Menu, Bookmark, Home } from "lucide-react";

export default function Navbar({ setIsMobileOpen, isCollapsed, isMobile }) {
  const sidebarWidth = isMobile
    ? "ml-0"
    : isCollapsed
    ? "ml-[96px]"
    : "ml-[0]";

  return (
    <header
      className={`${sidebarWidth} w-[calc(100%-${
        isCollapsed ? "96px" : "320px"
      })] transition-all duration-500 
      h-24 bg-white shadow-md px-10 flex items-center justify-between sticky top-0 z-30`}
    >
      {/* Mobile Sidebar Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden block text-[#1e88a8]"
      >
        <Menu size={30} />
      </button>

      <h2 className="text-2xl font-bold text-[#0f4c5c] tracking-wide">
        Welcome User
      </h2>

      <div className="flex items-center gap-8">
        <button>
          <Home size={30} className="text-[#1e88a8]" />
        </button>
        <button>
          <Bookmark size={30} className="text-[#1e88a8]" />
        </button>

        <button className="relative">
          <Bell size={30} className="text-[#1e88a8]" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-xs px-1.5 rounded-full text-white">
            2
          </span>
        </button>

        <button>
          <User size={30} className="text-[#1e88a8]" />
        </button>

        <button className="flex gap-2 items-center text-base font-semibold text-[#1e88a8] hover:text-red-500">
          <LogOut size={26} /> Logout
        </button>
      </div>
    </header>
  );
}
