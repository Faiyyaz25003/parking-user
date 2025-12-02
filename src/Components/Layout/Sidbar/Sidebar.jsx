// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   LayoutDashboard,
//   CalendarCheck,
//   CarFront,
//   FileText,
//   CreditCard,
//   Bookmark,
//   ChevronLeft,
//   ChevronRight,
//   Menu,
//   X,
// } from "lucide-react";
// import Image from "next/image";

// // Import your page components
// import Dashboard from "@/Components/Dashboard/Dashboard";
// import VehicleEntry from "@/Components/VehicleEntry/VehicleEntry";
// import Booking from "@/Components/Booking/Booking";

// export default function SidebarLayout() {
//   const [currentView, setCurrentView] = useState("dashboard");
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkMobile = () => {
//       const mobile = window.innerWidth < 1024;
//       setIsMobile(mobile);
//       if (mobile) setIsCollapsed(false);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const menuItems = [
//     { id: "dashboard", name: "Dashboard", icon: LayoutDashboard },
//     { id: "booking", name: "Booking", icon: Bookmark },
//     { id: "entry", name: "Vehicle Entry", icon: CarFront },
//   ];

//   const renderContent = () => {
//     switch (currentView) {
//       case "dashboard":
//         return <Dashboard />;
//       case "booking":
//         return <Booking />;
//       case "entry":
//         return <VehicleEntry />;
//       default:
//         return <Dashboard />;
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Mobile toggle button */}
//       {isMobile && (
//         <button
//           onClick={() => setIsMobileOpen(!isMobileOpen)}
//           className="fixed top-4 left-4 bg-[#0f4c5c] p-3 rounded-xl text-white shadow-xl z-50"
//         >
//           {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       )}

//       {/* Sidebar */}
//       <div
//         className={`h-screen bg-gradient-to-r from-[#0f4c5c] via-[#1e88a8] to-[#2596be] text-white flex flex-col shadow-2xl transition-all duration-500
//         ${isCollapsed && !isMobile ? "w-24" : "w-80"}
//         ${isMobile ? "fixed top-0 left-0 z-40" : "relative"}
//         ${isMobile && !isMobileOpen ? "-translate-x-full" : "translate-x-0"}
//       `}
//       >
//         {!isMobile && (
//           <button
//             onClick={() => setIsCollapsed(!isCollapsed)}
//             className="absolute -right-4 top-8 bg-white text-[#1e88a8] p-2 rounded-full shadow-lg"
//           >
//             {isCollapsed ? (
//               <ChevronRight size={20} />
//             ) : (
//               <ChevronLeft size={20} />
//             )}
//           </button>
//         )}

//         {/* Logo */}
//         <div
//           className={`flex items-center gap-3 px-6 py-6 transition-all ${
//             isCollapsed ? "justify-center" : ""
//           }`}
//         >
//           <Image
//             src="/logo.jpeg"
//             alt="Logo"
//             width={isCollapsed ? 50 : 80}
//             height={isCollapsed ? 50 : 80}
//             className="rounded-lg shadow-xl"
//           />
//           {!isCollapsed && (
//             <div>
//               <h1 className="text-2xl font-bold">Parking System</h1>
//               <p className="text-xs text-cyan-200/70">Book . Park . Exit</p>
//             </div>
//           )}
//         </div>

//         {/* Menu */}
//         <nav className="flex flex-col px-4 gap-2 flex-1">
//           {menuItems.map((item) => {
//             const isActive = currentView === item.id;
//             return (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setCurrentView(item.id);
//                   if (isMobile) setIsMobileOpen(false);
//                 }}
//                 className={`flex items-center gap-4 px-5 py-4 rounded-xl duration-300
//                   ${
//                     isActive
//                       ? "bg-white text-[#1e88a8] shadow-xl"
//                       : "hover:bg-white/20"
//                   }
//                   ${isCollapsed ? "justify-center" : ""}`}
//               >
//                 <item.icon size={22} />
//                 {!isCollapsed && <span>{item.name}</span>}
//               </button>
//             );
//           })}
//         </nav>
//       </div>

//       <div className="flex-1 bg-gray-50 min-h-screen">{renderContent()}</div>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  CalendarCheck,
  CarFront,
  FileText,
  CreditCard,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

// Import your page components
import Dashboard from "@/Components/Dashboard/Dashboard";
import VehicleEntry from "@/Components/VehicleEntry/VehicleEntry";
import Booking from "@/Components/Booking/Booking";
import Navbar from "../Navbar/Navbar";

export default function Sidebar() {
  const [currentView, setCurrentView] = useState("dashboard");
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
  ];

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "booking":
        return <Booking />;
      case "entry":
        return <VehicleEntry />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <div
        className={`h-screen bg-gradient-to-r from-[#0f4c5c] via-[#1e88a8] to-[#2596be] text-white flex flex-col shadow-2xl transition-all duration-500
        ${isCollapsed && !isMobile ? "w-24" : "w-80"}
        ${isMobile ? "fixed top-0 left-0 z-40" : "relative"}
        ${isMobile && !isMobileOpen ? "-translate-x-full" : "translate-x-0"}
      `}
      >
        {!isMobile && (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="absolute -right-4 top-8 bg-white text-[#1e88a8] p-2 rounded-full shadow-lg"
          >
            {isCollapsed ? (
              <ChevronRight size={20} />
            ) : (
              <ChevronLeft size={20} />
            )}
          </button>
        )}

        {/* Logo */}
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

        {/* Menu Items */}
        <nav className="flex flex-col px-4 gap-2 flex-1">
          {menuItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  if (isMobile) setIsMobileOpen(false);
                }}
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

      {/* Right Section */}
      <div className="flex-1 min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar
          isCollapsed={isCollapsed}
          isMobile={isMobile}
          setIsMobileOpen={setIsMobileOpen}
        />

        {/* Page Content */}
        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
}
