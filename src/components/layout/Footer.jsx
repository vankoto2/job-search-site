import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import hr from "../../assets/hr.png";

function Footer() {
  return (
    <>
      <footer className="bg-white text-[#004AAD] py-8  border-t border-blau-200">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="index.html">
              <img src={hr} alt="Footer Logo" className="h-12 w-auto" />
            </a>
          </div>

          <div className="text-center mb-4 md:mb-0">
            <ul className="sm:space-x-6 text-[#004AAD]">
              <li>
                <Link to="/about" className="hover:underline">
                  За Нас
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Контакти
                </Link>
              </li>
              <li>
                <Link to="/create" className="hover:underline">
                  За Работодатели
                </Link>
              </li>
              <li>
                <Link to="/general" className="hover:underline">
                  Общи Условия
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">
                  Уведомление за поверителност
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="hover:underline">
                  Политика за използване на бисквитки
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="text-[#004AAD]"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="text-[#004AAD]"
            >
              <FaFacebook className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              className="text-[#004AAD]"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>
        </div>
        <p></p>
        <div className="text-center mt-4">
          <p>&copy; 2024 Job Listings. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
