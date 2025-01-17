import { FaLinkedin, FaGithub, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* You can add a logo or title here if needed */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/nhlakanipho-philani-khumalo-679726224/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Philani56" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://wa.me/0676555315" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.tiktok.com/@techbyphilani" target="_blank" rel="noopener noreferrer">
          <FaTiktok />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
