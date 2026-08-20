import { Search, Bell, Moon, Sun, Plus, Menu, X } from "lucide-react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

const NavBar = ({ mode = "light", setMode = () => {} }) => {
  const navRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navbar entrance animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".logo", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        clearProps: "all",
      })
        .from(
          ".nav-link",
          {
            y: -15,
            opacity: 0,
            duration: 0.35,
            stagger: 0.06,
            clearProps: "all",
          },
          "-=0.3"
        )
        .from(
          ".nav-action",
          {
            y: -15,
            opacity: 0,
            duration: 0.35,
            stagger: 0.05,
            clearProps: "all",
          },
          "-=0.2"
        );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Letter hover animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".nav-link").forEach((link) => {
        const chars = link.querySelectorAll(".char");

        if (!chars.length) return;

        gsap.set(chars, {
          display: "inline-block",
          transformOrigin: "50% 100%",
        });

        const enter = () => {
          gsap.fromTo(
            chars,
            {
              yPercent: 100,
              rotationX: -90,
            },
            {
              yPercent: 0,
              rotationX: 0,
              duration: 0.25,
              stagger: 0.02,
              ease: "power3.out",
            }
          );
        };

        const leave = () => {
          gsap.to(chars, {
            yPercent: 0,
            rotationX: 0,
            duration: 0.2,
            stagger: 0.015,
            ease: "power2.out",
          });
        };

        link.addEventListener("mouseenter", enter);
        link.addEventListener("mouseleave", leave);
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const navLinks = [
    "Home",
    "Presentations",
    "Workspaces",
    "Shared with me",
  ];

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-[100] w-full border-b border-border bg-background/95 backdrop-blur-md transition-colors duration-300 shadow-xs"
    >
      <div className="relative flex w-full items-center justify-between px-4 py-3 md:px-6">

        {/* Logo (Left) */}
        <span className="logo shrink-0 font-primary text-2xl font-bold tracking-[-0.04em] text-primary md:text-3xl">
          Flod
        </span>

        {/* Navigation (Centered - Desktop) */}
        <nav className="hidden items-center gap-7 text-sm md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className={`nav-link whitespace-nowrap ${
                link === "Home"
                  ? "font-semibold text-primary"
                  : "font-medium text-foreground/70 hover:text-primary transition"
              }`}
            >
              <span className="nav-text inline-block">
                {link.split("").map((char, index) => (
                  <span
                    key={index}
                    className="char inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </a>
          ))}
        </nav>

        {/* Actions (Right) */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-3">

          {/* Search */}
          <button
            className="nav-action flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground hover:text-primary transition hover:bg-primary/10 cursor-pointer"
            aria-label="Search"
          >
            <Search size={17} />
          </button>

          {/* Notifications */}
          <button
            className="nav-action flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground hover:text-primary transition hover:bg-primary/10 cursor-pointer"
            aria-label="Notifications"
          >
            <Bell size={17} />
          </button>

          {/* Theme */}
          <button
            onClick={() =>
              setMode(mode === "light" ? "dark" : "light")
            }
            className="nav-action flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground hover:text-primary transition hover:bg-primary/10 cursor-pointer"
            aria-label="Toggle theme"
          >
            {mode === "light" ? (
              <Moon size={16} />
            ) : (
              <Sun size={16} />
            )}
          </button>

          {/* Create Button */}
          <button
            className="nav-action relative z-10 flex shrink-0 items-center gap-1 sm:gap-1.5 rounded-full bg-primary px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white transition hover:bg-primary-dark cursor-pointer shadow-sm"
          >
            <Plus size={15} />
            <span>Create</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground hover:bg-primary/10 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden w-full border-t border-border bg-surface px-6 py-4 space-y-3 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-base font-primary ${
                link === "Home"
                  ? "font-bold text-primary"
                  : "font-medium text-foreground/80 hover:text-primary"
              }`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavBar;