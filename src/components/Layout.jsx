import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="page-shell min-h-screen flex flex-col text-white">
      <div className="noise-overlay" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-0 h-[36rem] bg-[radial-gradient(circle_at_top,rgba(118,240,214,0.16),transparent_45%)]" />
      <div className="pointer-events-none fixed bottom-0 left-1/2 z-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,155,103,0.16),transparent_68%)] blur-3xl" />
      <Navbar />
      <main className="relative z-10 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
