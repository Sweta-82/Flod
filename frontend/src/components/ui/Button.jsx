import React from "react";

export const FlipButton = ({
  frontText = "Front",
  backText = "Back",
  href,
  className = "",
  onClick,
  ...props
}) => {
  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`group relative inline-block select-none overflow-hidden rounded-2xl font-primary text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer cursor-target ${className}`}
      style={{ perspective: "1000px" }}
      {...props}
    >
      {/* Front Face */}
      <span className="relative flex h-11 items-center justify-center px-7 rounded-2xl bg-surface border border-border text-foreground shadow-xs transition-all duration-400 ease-in-out group-hover:opacity-0 group-hover:translate-y-full group-hover:[transform:rotateX(90deg)]">
        {frontText}
      </span>

      {/* Back Face */}
      <span className="absolute inset-0 flex h-11 items-center justify-center px-7 rounded-2xl bg-primary text-white shadow-md transition-all duration-400 ease-in-out opacity-0 -translate-y-full [transform:rotateX(-90deg)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:[transform:rotateX(0deg)]">
        {backText}
      </span>
    </Component>
  );
};

const Button = ({
  children,
  frontText,
  backText,
  variant = "primary",
  href,
  className = "",
  onClick,
  icon: Icon,
  type = "button",
  ...props
}) => {
  if (variant === "flip" || (frontText && backText)) {
    return (
      <FlipButton
        frontText={frontText || children}
        backText={backText || children}
        href={href}
        className={className}
        onClick={onClick}
        {...props}
      />
    );
  }

  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider font-primary transition-all duration-200 cursor-pointer active:scale-95 select-none cursor-target";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-sm",
    secondary: "bg-surface border border-border text-foreground hover:border-primary/40 hover:bg-primary/5",
    outline: "border border-border text-muted hover:text-foreground hover:bg-elevated",
    ghost: "text-foreground hover:bg-primary/10 hover:text-primary",
  };

  const Component = href ? "a" : "button";

  return (
    <Component
      href={href}
      type={href ? undefined : type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {Icon && <Icon className="h-4 w-4 shrink-0" />}
      {children}
    </Component>
  );
};

export default Button;
