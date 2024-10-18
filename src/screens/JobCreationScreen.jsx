import logo from "../assets/logo.png";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaDocker } from "react-icons/fa";

function JobCreationScreen() {
  return (
    <>
      <div className="bg-gray-100 text-gray-900">
        <nav className="container mx-auto py-4 px-6 text-gray-600 flex justify-start">
          <a href="jobs.html" className="hover:underline text-blue-600 ">
            JAVA
          </a>{" "}
          <div>/ Обяви за работа</div>
        </nav>
        <main className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
          <section className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-600">
                JAVA MID DEVELOPER
              </h2>
              <div className="flex items-center space-x-2">
                <button className="bg-blue-600 text-white py-2 px-4 rounded">
                  Кандидатствай
                </button>
              </div>
            </div>
            <p className="text-gray-500 mb-4">26.07.2024 г.</p>

            <h3 className="text-lg font-bold text-gray-700 mb-2">
              ИЗИСКВАНИ ТЕХНОЛОГИИ
            </h3>
            <div className="flex space-x-2 mb-4">
              {/* <!-- Add your technology icons here --> */}
              <FaJava className="text-4xl"/>
              <IoLogoJavascript className="text-4xl"/>
              <FaDocker className="text-4xl"/>
              <i className="fab fa-java text-2xl text-blue-500"></i>
              <i className="fab fa-js-square text-2xl text-yellow-500"></i>
              <i className="fab fa-docker text-2xl text-blue-500"></i>
              <i className="fab fa-linux text-2xl text-gray-700"></i>
              <i className="fab fa-node-js text-2xl text-green-500"></i>
            </div>
            <p className="text-lg font-bold mb-2">
              We are looking for Java Software Developer
            </p>
            <p className="text-gray-700 mb-4">
              ... to develop new features and APIs, improve existing components,
              and work with software architects on product evolution.
            </p>

            <h4 className="text-md font-bold text-gray-700">Your Role</h4>
            <ul className="grid flex justify-between list-disc text-gray-700">
              <li>Develop new features and APIs;</li>
              <li>Improve and support existing components;</li>
              <li>Participate in design sessions with architects;</li>
              <li>
                Cover your code with unit tests, fix bugs, and write
                documentation;
              </li>
              <li>Conduct code reviews and mentor teammates;</li>
              <li>Be a proactive contributor to the team.</li>
            </ul>
            <div className="flex items-center space-x-2">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">
                Кандидатствай
              </button>
            </div>
          </section>
          <aside className="bg-white shadow rounded-lg p-6">
            <img src={logo} alt="Company Logo" className="h-20 w-20 mb-4" />

            <h3 className="text-xl font-bold text-blue-600 mb-2">
              WEB-IT SOLUTIONS
            </h3>
            <p className="text-gray-700 mb-4">
              е иновативна компания работеща в сферата на финансовите услуги.
            </p>
            <button className="bg-blue-600 text-white py-2 px-4 rounded mb-4 w-full">
              Повече информация за компанията
            </button>
            <button className="bg-blue-600 text-white py-2 px-4 rounded w-full">
              Всички обяви на компанията
            </button>
          </aside>
        </main>
      </div>
    </>
  );
}

export default JobCreationScreen;
