"use client";
import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  CarFront,
  Menu,
  X,
  Bookmark,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function Sidebar({ currentView, setCurrentView }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) setIsCollapsed(false);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
    { id: "booking", name: "Booking", icon: Bookmark },
    { id: "entry", name: "Vehicle Entry", icon: CarFront },
    { id: "exit", name: "Vehicle Exit & Payment", icon: CreditCard },
  ];

  const handleLinkClick = (id) => {
    setCurrentView(id);
    if (isMobile) setIsMobileOpen(false);
  };

  return (
    <div
      className={`h-screen bg-gradient-to-r from-[#0f4c5c] via-[#1e88a8] to-[#2596be] text-white flex flex-col shadow-2xl transition-all duration-500
        ${isCollapsed && !isMobile ? "w-24" : "w-80"}
        ${isMobile ? "fixed top-0 left-0 z-40" : "fixed"}
        ${isMobile && !isMobileOpen ? "-translate-x-full" : "translate-x-0"}
      `}
    >
      {isMobile && (
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed top-4 left-4 bg-[#0f4c5c] p-3 rounded-xl text-white shadow-xl"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {!isMobile && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-4 top-8 bg-white text-[#1e88a8] p-2 rounded-full shadow-lg"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      )}

      <div
        className={`flex items-center gap-3 px-6 py-6 transition-all ${
          isCollapsed ? "justify-center" : ""
        }`}
      >
        <Image
          src="/logo.jpeg"
          alt="Logo"
          width={isCollapsed ? 50 : 80}
          height={isCollapsed ? 50 : 80}
          className="rounded-lg shadow-xl"
        />
        {!isCollapsed && (
          <div>
            <h1 className="text-2xl font-bold">Parking System</h1>
            <p className="text-xs text-cyan-200/70">Book . Park . Exit</p>
          </div>
        )}
      </div>

      <nav className="flex flex-col px-4 gap-2 flex-1">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleLinkClick(item.id)}
              className={`flex items-center gap-4 px-5 py-4 rounded-xl duration-300
              ${
                isActive
                  ? "bg-white text-[#1e88a8] shadow-xl"
                  : "hover:bg-white/20"
              }
              ${isCollapsed ? "justify-center" : ""}`}
            >
              <item.icon size={22} />
              {!isCollapsed && <span>{item.name}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
