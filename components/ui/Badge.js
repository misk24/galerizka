import React from "react";

export default function Badge({ 
  children, 
  variant = "primary",
  className = "",
  ...props 
}) {
  const baseStyles = "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium";
  
  const variants = {
    primary: "bg-dusty-rose text-white",
    secondary: "bg-mulberry-deep/10 text-mulberry-deep",
    outline: "bg-white border border-dusty-rose text-dusty-rose",
  };

  return (
    <span 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
