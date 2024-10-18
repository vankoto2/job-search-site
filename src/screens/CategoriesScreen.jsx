// import { FaJava } from "react-icons/fa";
// import { FaPhp } from "react-icons/fa";
// import { FaPython } from "react-icons/fa";
// import { FaNodeJs } from "react-icons/fa";
// import { FaDatabase } from "react-icons/fa";
// import { FaMicrosoft } from "react-icons/fa";
import CategoriesList from "../components/CategoriesList";

function CategoriesScreen() {
//   let categories = [
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//     {
//       categorieName: "Backend",
//       color: "bg-[#3CBDDC]",
//       href: "#",
//       dropdowns: [
//         {
//           dropdownName: "Java",
//           image: <FaJava />,
//         },
//         {
//           dropdownName: "PHP",
//           image: <FaPhp />,
//         },
//         {
//           dropdownName: "Python",
//           image: <FaPython />,
//         },
//         {
//           dropdownName: "Node.js",
//           image: <FaNodeJs />,
//         },
//         {
//           dropdownName: "MySQL",
//           image: <FaDatabase />,
//         },
//         {
//           dropdownName: ".NET",
//           image: <FaMicrosoft />,
//         },
//       ],
//     },
//   ];
  return (
    <>
      <main className="container mx-auto my-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#08075F]">
          Категории и Обяви
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          <CategoriesList />
        </div>
      </main>
    </>
  );
}

export default CategoriesScreen;
