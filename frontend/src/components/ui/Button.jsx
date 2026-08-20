import React from "react";

export const FlipButton = ({
  frontText = "Front",
  backText = "Back",
  href = "#",
  className = "",
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group relative inline-block select-none overflow-hidden rounded-2xl font-primary text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-target ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Front Face */}
      <span className="relative flex h-11 items-center justify-center px-7 rounded-2xl bg-surface border border-border text-foreground shadow-xs transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:translate-y-full group-hover:[transform:rotateX(90deg)]">
        {frontText}
      </span>

      {/* Back Face */}
      <span className="absolute inset-0 flex h-11 items-center justify-center px-7 rounded-2xl bg-primary text-white shadow-md transition-all duration-400 ease-in-out opacity-0 -translate-y-full [transform:rotateX(-90deg)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:[transform:rotateX(0deg)]">
        {backText}
      </span>
    </a>
  );
};

const Button = ({
  children,
  frontText,
  backText,
  variant = "flip",
  href = "#",
  className = "",
  onClick,
  ...props
}) => {
  if (variant === "flip" || frontText || backText) {
    return (
      <FlipButton
        frontText={frontText || children}
        backText={backText || children}
        href={href}
        className={className}
        onClick={onClick}
      />
    );
  }

  const baseStyles =
    "inline-flex items-center justify-center px-6 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider font-primary transition-all duration-200 cursor-target active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-sm",
    secondary: "bg-surface border border-border text-foreground hover:border-primary/40",
    outline: "border border-border text-muted hover:text-foreground hover:bg-elevated",
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default Button;
