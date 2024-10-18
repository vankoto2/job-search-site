import { FaJava } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

let categories = [
  {
    categorieName: "Backend Development",
    color: "bg-[#3CBDDC]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Frontend Development",
    color: "bg-[#A55DD8]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Full Stack Development",
    color: "bg-[#6600CC]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Infrastructure",
    color: "bg-[#008B45]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Mobile Development",
    color: "bg-[#F9A825]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Quality Assurance",
    color: "bg-[#9400D3]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "PM/BA and more",
    color: "bg-[#F45D22]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "ERP / CRM Development",
    color: "bg-[#003F5E]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Data Science",
    color: "bg-[#3CB371]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "UI/UX, Arts",
    color: "bg-[#FF6347]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "IT Management",
    color: "bg-[#2E8B57]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
  {
    categorieName: "Marketing & Sales",
    color: "bg-[#B22222]",
    href: "#",
    dropdown: "",
    dropdowns: [
      {
        dropdownName: "Java",
        image: <FaJava />,
      },
      {
        dropdownName: "PHP",
        image: <FaPhp />,
      },
      {
        dropdownName: "Python",
        image: <FaPython />,
      },
      {
        dropdownName: "Node.js",
        image: <FaNodeJs />,
      },
      {
        dropdownName: "MySQL",
        image: <FaDatabase />,
      },
      {
        dropdownName: ".NET",
        image: <FaMicrosoft />,
      },
    ],
  },
];
function CategoriesList() {
  return (
    <>
      {categories.map((categorie) => {
        return (
          <>
            <Menu
              as="div"
              key={categorie.categorieName}
              className="dropdown active"
            >
              <div
                className={
                  categorie.color +
                  " text-white px-8 py-4 rounded text-center cursor-pointer"
                }
              >
                <MenuButton>{categorie.categorieName}</MenuButton>
              </div>

              <div className="">
                <MenuItems transition>
                  {categorie.dropdowns.map((dropdown) => {
                    return (
                      <MenuItem className="block">
                        <div className="dropdown-content">
                          <a href="#">
                            <div className="flex">
                              <div>{dropdown.image}</div>
                              <div>{dropdown.dropdownName}</div>
                            </div>
                          </a>
                        </div>
                      </MenuItem>
                    );
                  })}
                </MenuItems>
              </div>
            </Menu>
          </>
        );
      })}
    </>
  );
}

export default CategoriesList;
