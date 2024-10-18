function CompanyDashboardScreen() {
    return (
      <>
         <div className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">Табло на Компанията</h1>
{/* toDo Add href */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <a href="company-dashboard/active-jobs.html" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg">
                <h2 className="text-xl font-bold">Активни обяви</h2>
                <p>Преглеждайте и управлявайте вашите активни обяви за работа.</p>
            </a>

            <a href="company-dashboard/cv-library.html" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg">
                <h2 className="text-xl font-bold">CV Библиотека</h2>
                <p>Достъп до списъка с кандидати и автобиографии.</p>
            </a>

            <a href="company-dashboard/my-questionnaires.html" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg">
                <h2 className="text-xl font-bold">Моите Въпросници</h2>
                <p>Създавайте и управлявайте вашите въпросници.</p>
            </a>

            <a href="company-dashboard/my-jobs.html" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg">
                <h2 className="text-xl font-bold">Моите Обяви</h2>
                <p>Създавайте и управлявайте въпросници за работа.</p>
            </a>

            <a href="company-dashboard/company-profile.html" className="p-4 bg-blue-100 hover:bg-blue-200 rounded-lg">
                <h2 className="text-xl font-bold">Профил</h2>
                <p>Редактирайте подробностите и информацията за вашата компания.</p>
            </a>
        </div>
    </div>
      </>
    );
  }
  
  export default CompanyDashboardScreen;