import React from "react";

export default function Section({ id, children, className }) {
  return (
    <div id={id} className={`h-screen ${className}`}>
      {children}
    </div>
  );
}
