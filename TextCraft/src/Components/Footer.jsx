import React from "react";

export default function Footer({ mode }) {
  return (
    <footer
      className={`text-center fixed-bottom py-3 mt-5 ${
        mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      <p className="mb-1">© {new Date().getFullYear()} TextCraft</p>
      <small>
        Made with ❤️ by <strong>Pranav</strong>
      </small>
    </footer>
  );
}
