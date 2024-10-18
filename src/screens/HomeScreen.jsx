import hiring from "../assets/hiring.jpg";
import frontend from "../assets/frontend.jpg";
import backend from "../assets/backend.png";
import database from "../assets/database.png";
import marketing from "../assets/marketing.jpg";
import support from "../assets/support.jpg";

function HomeScreen() {
  return (
    <>
      <main className="container mx-auto my-8 bg-white text-[#08075F]">
        <section className="my-12">
          <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={hiring}
              alt="Frontend development image with code on screen and developers"
              className="w-full md:w-1/2 mb-6 md:mb-0"
            />
            <div className="md:mr-8 text-center w-full">
              <h2 className="text-3xl font-semibold mb-4">
                Намери Мечтаната Работа Бързо и Лесно
              </h2>
              <p className="text-xl">Много Възможности</p>
              <a
                href="#"
                className="mt-4 inline-block px-8 py-4 bg-[#A55DD8] text-white font-semibold rounded"
              >
                Виж Всички Обяви
              </a>
            </div>
          </div>
        </section>
        <section className="my-12">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={backend}
              alt="Backend development image with coding and server icons"
              className="w-full md:w-1/2 mb-6 md:mb-0"
            />
            <div className="md:ml-8 text-center w-full">
              <h2 className="text-3xl font-semibold mb-4">BackEnd</h2>
              <p className="text-xl">Свободни позиции</p>
              <a
                href="#"
                className="mt-4 inline-block px-8 py-4 bg-[#4A008B] text-white font-semibold rounded"
              >
                Виж Всички Обяви
              </a>
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={frontend}
              alt="Frontend development image with code on screen and developers"
              className="w-full md:w-1/2 mb-6 md:mb-0"
            />
            <div className="md:mr-8 text-center w-full">
              <h2 className="text-3xl font-semibold mb-4">FrontEnd</h2>
              <p className="text-xl">Свободни позиции</p>
              <a
                href="#"
                className="mt-4 inline-block px-8 py-4 bg-[#A55DD8] text-white font-semibold rounded"
              >
                Виж Всички Обяви
              </a>
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={database}
              alt="Database management image with database icons"
              className="w-full md:w-1/2 mb-6 md:mb-0"
            />
            <div className="md:ml-8 text-center w-full">
              <h2 className="text-3xl font-semibold mb-4">Database</h2>
              <p className="text-xl">Свободни позиции</p>
              <a
                href="#"
                className="mt-4 inline-block px-8 py-4 bg-[#004AAD] text-white font-semibold rounded"
              >
                Виж Всички Обяви
              </a>
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="flex flex-col md:flex-row-reverse items-center bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={marketing}
              alt="Marketing image with social media icons"
              className="w-full md:w-1/2 mb-6 md:mb-0"
            />
            <div className="md:mr-8 text-center w-full">
              <h2 className="text-3xl font-semibold mb-4">Marketing</h2>
              <p className="text-xl">Свободни позиции</p>
              <a
                href="#"
                className="mt-4 inline-block px-8 py-4 bg-[#5E48D9] text-white font-semibold rounded"
              >
                Виж Всички Обяви
              </a>
            </div>
          </div>
        </section>

        <section className="my-12">
          <div className="flex flex-col md:flex-row items-center bg-white shadow-lg p-6 rounded-lg text-center">
            <img
              src={support}
              alt="Support role image showing customer service icons"
              className="w-full md:w-1/2 mb-6 md:mb-0"
            />
            <div className="md:ml-8 text-center w-full">
              <h2 className="text-3xl font-semibold mb-4">Support</h2>
              <p className="text-xl">Свободни позиции</p>
              <a
                href="#"
                className="mt-4 inline-block px-8 py-4 bg-[#F9B75E] text-white font-semibold rounded"
              >
                Виж Всички Обяви
              </a>
            </div>
          </div>
        </section>

        <section className="my-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Всички Обяви</h2>
          <p className="text-xl">
            Последно добавените обяви от всяка категория
          </p>
          <a
            href="#"
            className="mt-6 inline-block px-8 py-4 bg-[#3CBDDC] text-white font-semibold rounded"
          >
            Виж Всички Обяви
          </a>
        </section>
      </main>
{/* to Do move as separate omponent */}
      {/* <div
        id="cookie-banner"
        className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 z-50"
      >
        <div className="container mx-auto flex justify-between items-center">
          <p>
            By clicking 'Accept All', you agree to the use of all types of
            cookies to enhance site navigation. For more information, please
            visit our{" "}
            <a href="cookie-policy.html" className="underline text-blue-300">
              cookie policy
            </a>
            .
          </p>
          <div className="space-x-4">
            <button
              id="accept-cookies"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Accept All
            </button>
            <button
              id="reject-cookies"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Reject All
            </button>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default HomeScreen;
