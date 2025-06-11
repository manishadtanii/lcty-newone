import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaSearch,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Arrow from "./Arrow";

const logo = "logo.png";
const profileImage = "sample.png";

const programsData = {
  "physical-therapy": {
    hero: {
      title: [
        { text: "Physical ", class: "font-calvino" },
        { text: "therapy", class: "font-calvino-italic" },
      ],
    },
  },
  "music-therapy": {
    hero: {
      title: [
        { text: "Music ", class: "font-calvino" },
        { text: "therapy", class: "font-calvino-italic" },
      ],
    },
  },
  "speech-therapy": {
    hero: {
      title: [
        { text: "Speech ", class: "font-calvino" },
        { text: "therapy", class: "font-calvino-italic" },
      ],
    },
  },
  // Add more programs as needed
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let lastScrollTop = 0;
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (!header) return;

      const st = window.pageYOffset || document.documentElement.scrollTop;
      header.style.transform =
        st > lastScrollTop && st > 50 ? "translateY(-100%)" : "translateY(0)";
      lastScrollTop = st <= 0 ? 0 : st;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about-us" },
    { name: "Programs", path: "/programs" },
    { name: "Prospective clients", path: "/prospective-clients" },
    { name: "Our team", path: "/our-team" },
    { name: "Community partners", path: "/community-partners" },
  ];

  const Overlay = ({ children, onClose, side, btnSide }) => (
    <div className="fixed inset-0 p-3 bg-[#ffffffb2] z-50">
      <div className={`md:fixed ${side} w-full md:w-[500px] p-6 rounded-xl primary-bg-2 text-white`}>
        <button
          onClick={onClose}
          className={`absolute top-4 ${btnSide} text-xl flex items-center gap-2`}
        >
          <span>Close</span>
          <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">✕</div>
        </button>
        {children}
      </div>
    </div>
  );

  const filteredPrograms = Object.entries(programsData).filter(([key, program]) =>
    program.hero.title
      .map((t) => t.text.toLowerCase())
      .join("")
      .includes(searchTerm.toLowerCase())
  );

  return (
    <header className="w-full bg-white fixed top-0 left-0 z-40 transition-transform duration-300" id="header">
      <div className="flex justify-between items-center px-6 py-4">
        <button onClick={() => setMenuOpen(true)} className="primary-bg-2 text-xl text-white rounded-full p-3">
          <FaBars />
        </button>
        <Link to="/" className="flex items-center gap-2">
          <img src={`/${logo}`} alt="Logo" className="logo h-10" />
        </Link>
        <button onClick={() => setSearchOpen(true)} className="primary-bg-2 text-xl text-white rounded-full p-3">
          <FaSearch />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <Overlay onClose={() => setMenuOpen(false)} side="left-4" btnSide="right-4">
          <nav className="mt-20 space-y-6">
            {navLinks.map(({ name, path }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block hover:underline text-white text-lg"
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="flex gap-4 mt-10 justify-between items-center">
            <Link className="text-white">Location</Link>
            <div className="flex gap-2">
              <a href="#" className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center">
                <FaLinkedin />
              </a>
              <a href="#" className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center">
                <FaInstagram />
              </a>
              <a href="#" className="bg-white text-black rounded-full w-10 h-10 flex justify-center items-center">
                <FaFacebook />
              </a>
            </div>
          </div>
          <div className="mt-6 h-60 relative">
            <img src={profileImage} alt="Contact" className="rounded-lg w-full h-full object-cover" />
            <Link
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between absolute bottom-0 w-full bg-black/50 text-white p-2"
            >
              <span>Contact us</span> <Arrow />
            </Link>
          </div>
        </Overlay>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <Overlay
          onClose={() => {
            setSearchOpen(false);
            setSearchTerm("");
          }}
          side="right-4"
          btnSide="left-4"
        >
          <div className="mt-16">
            <div className="flex items-center bg-white overflow-hidden rounded-lg p-2">
              <input
                type="text"
                placeholder="Search therapy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-4 py-2 text-black outline-none"
              />
              <button className="px-3 rounded-full secondary-bg-1 text-white w-10 h-10 flex justify-center items-center">
                <FaSearch />
              </button>
            </div>

            {searchTerm && (
              <div className="mt-6">
                <h2 className="text-lg font-semibold text-center mb-4">Results</h2>
                {filteredPrograms.length > 0 ? (
                  <div className="space-y-2">
                    {filteredPrograms.map(([key, program]) => (
                      <Link
                        to={`/programs/${key}`}
                        key={key}
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchTerm("");
                        }}
                        className="block p-3 bg-white text-black rounded hover:bg-gray-200"
                      >
                        {program.hero.title.map((part, i) => (
                          <span key={i} className={part.class}>
                            {part.text}
                          </span>
                        ))}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-center text-red-500">No programs found</p>
                )}
              </div>
            )}
          </div>
        </Overlay>
      )}
    </header>
  );
}

export default Header;
