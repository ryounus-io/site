import React from "react";

function Linkedin() {
  return (
    <li className="px-2 social-item linkedin">
      <a
        className="no-underline tracking-tight"
        href="https://www.linkedin.com/in/rahmanyounus/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg className="social-icon" viewBox="0 0 18 18">
          <path
            fillRule="nonzero"
            d="M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"
          />
        </svg>
      </a>
    </li>
  );
}

export default Linkedin;
