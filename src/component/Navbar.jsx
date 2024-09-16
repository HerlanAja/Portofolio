import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="text-2xl font-semibold bg-white bg-clip-text text-transparent">
          Portofolio
        </h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ujang-herlan-92a30b273/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/HerlanAja/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/ujang.herlan.7568?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/herlaannnn/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@ujangherlan_?lang=en" target="_blank"
          rel="noopener noreferrer"
          aria-label="Tiktok"
        >
          <FaTiktok />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
