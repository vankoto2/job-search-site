function EmployeeDashboardScreen() {
    return (
      <>
        <main className="container mx-auto my-12 p-6 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>
        
        {/* <!-- Profile Picture --> */}
        <div className="mb-8">
            <label for="profile-picture">
                <img id="profile-pic-preview" src="https://placehold.co/150x150" alt="Profile Picture" className="rounded-full mx-auto mb-4 cursor-pointer hover:opacity-80" />
            </label>
            <input type="file" id="profile-picture" className="hidden" accept="image/*" onchange="previewProfilePicture(event)" />
        </div>

        {/* <!-- Name and Personal Information --> */}
        <form className="max-w-lg mx-auto">
            <div className="mb-4">
                <label for="name" className="block text-left text-lg font-medium mb-2">First Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your first name" required />
            </div>

            <div className="mb-4">
                <label for="second-name" className="block text-left text-lg font-medium mb-2">Second Name (Optional)</label>
                <input type="text" id="second-name" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your second name" />
            </div>

            <div className="mb-4">
                <label for="surname" className="block text-left text-lg font-medium mb-2">Surname</label>
                <input type="text" id="surname" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your surname" required />
            </div>

            <div className="mb-4">
                <label for="email" className="block text-left text-lg font-medium mb-2">Email Address</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded" placeholder="Enter your email" required />
            </div>

            {/* <!-- Upload CV --> */}
            <div className="mb-4">
                <label for="cv" className="block text-left text-lg font-medium mb-2">Upload CV</label>
                <input type="file" id="cv" className="w-full p-3 border border-gray-300 rounded" accept=".pdf,.doc,.docx" />
            </div>

            {/* <!-- My Applications Link --> */}
            <div className="mb-4">
                <a href="my-applications.html" className="text-blue-500 underline">My Applications</a>
            </div>

            <button type="submit" className="w-full p-3 bg-[#004AAD] text-white rounded hover:bg-blue-700">Save Profile</button>
        </form>
    </main>
      </>
    );
  }
  
  export default EmployeeDashboardScreen;