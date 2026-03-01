import CV from "../assets/Kshitij Datta CV.pdf";

export const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="copyright">
        © {new Date().getFullYear()} Kshitij Datta - Built with React.
      </div>
      <div className="footer-links">
        <a download="Kshitij_Datta_CV.pdf" href={CV} className="footer-link">
          Download CV <i className="uil uil-file-info-alt"></i>
        </a>
      </div>
    </div>
  </footer>
);
