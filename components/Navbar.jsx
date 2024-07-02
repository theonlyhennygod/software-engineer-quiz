import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 bg-gray-800 text-white">
      <div className="text-2xl font-bold">QuizApp</div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/theonlyhennygod/software-engineer-quiz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/argenisdelarosa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
