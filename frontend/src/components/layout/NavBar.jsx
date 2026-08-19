import { Search, Bell, Moon, Sun, Plus } from "lucide-react";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

const NavBar = ({ mode = "light", setMode = () => {} }) => {
  const navRef = useRef(null);

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
      })
        .from(
          ".nav-link",
          {
            y: -15,
            opacity: 0,
            duration: 0.35,
            stagger: 0.06,
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

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 w-full border-b border-border backdrop-blur-md"
    >
      <div className="relative flex w-full items-center justify-between px-4 py-3 md:px-6">

        {/* Logo (Left) */}
        <span className="logo shrink-0 font-primary text-2xl font-bold tracking-[-0.04em] text-primary md:text-3xl">
          Flod
        </span>

        {/* Navigation (Centered) */}
        <nav className="hidden items-center gap-7 text-sm md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
          {[
            "Home",
            "Presentations",
            "Workspaces",
            "Shared with me",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className={`nav-link whitespace-nowrap ${
                link === "Home"
                  ? "font-semibold text-primary"
                  : "font-medium text-foreground/70 hover:text-primary"
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
        <div className="flex shrink-0 items-center gap-2 md:gap-3">

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

          {/* Avatar */}
          <div className="nav-action hidden h-8 w-8 shrink-0 rounded-full bg-primary sm:block" />

          {/* Create */}
          <button
            className="nav-action relative z-10 flex shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark cursor-pointer shadow-sm"
          >
            <Plus size={15} />
            <span>Create</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;