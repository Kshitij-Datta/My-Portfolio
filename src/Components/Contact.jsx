import { useState } from "react";
import CV from "../assets/Kshitij_Datta.pdf";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "kshitijdatta14@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <section id="contact" className="section-contact">
      <div className="contact-content">
        <h2 className="contact-title">
          Let's build something <span className="italic">extraordinary</span>{" "}
          together.
        </h2>
        <p className="contact-description">
          Whether you have a specific project in mind or just want to chat about
          the future of tech, I'd love to hear from you.
        </p>
        <div className="contact-actions">
          <a href={`mailto:${email}`} className="btn-contact">
            <i className="uit uit-envelope-alt w-5 h-5"></i>
            Get in Touch
          </a>

          <button
            onClick={copyToClipboard}
            className="btn-copy"
            title="Copy email to clipboard"
          >
            <i
              className={`uil ${copied ? "uil-check-circle" : "uil-copy"} w-5 h-5`}
            ></i>
            <span className="copy-text">
              {copied ? "Email Copied!" : "Copy Email"}
            </span>
          </button>

          <div className="contact-social">
            <a
              href="https://github.com/Kshitij-Datta"
              className="contact-social-btn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt w-5 h-5"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kshitij-datta-sde"
              className="contact-social-btn"
              target="_blank"
              rel="noreferrer"
            >
              <i className="uit uit-linkedin-alt w-5 h-5"></i>
            </a>
            <a
              download="Kshitij_Datta.pdf"
              href={CV}
              className="contact-social-btn"
            >
              <i className="uil uil-file-info-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
