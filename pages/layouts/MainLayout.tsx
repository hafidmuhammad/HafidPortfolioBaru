import React, { useState } from "react";
import Section from "./Section";
import Navbar from "../components/navbarComponent/Navbar";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Navbar />

      <main className="flex-1 p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center dark:bg-gray-700">
        <p>© 2024 Muhammad Hafidl. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="https://www.linkedin.com/in/username/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:underline mx-2"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:underline mx-2"
          >
            GitHub
          </a>
          <a
            href="mailto:email@example.com"
            className="text-yellow-500 hover:underline mx-2"
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
};
