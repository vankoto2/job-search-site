function LoginRegistrerScreen() {
  return (
    <>
    <div className="bg-gray-100 text-[#08075F] max-h-full pb-10">
      <div className="container mx-auto p-6">
        {/* <!-- Login and Registration Tabs --> */}
        <div className="flex justify-center mb-6">
          <button id="login-tab" className="px-4 py-2 active-tab rounded-l">
            Login
          </button>
          <button id="register-tab" className="px-4 py-2 inactive-tab rounded-r">
            Register
          </button>
        </div>

        {/* <!-- Employee | Company selection --> */}
        <div className="flex justify-center mb-6">
          <button id="employee-btn" className="px-4 py-2 active-tab rounded-l">
            Employee
          </button>
          <button id="company-btn" className="px-4 py-2 inactive-tab rounded-r">
            Company
          </button>
        </div>

        {/* <!-- Login Form --> */}
        <form
          id="login-form"
          className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
          <label for="login-mail" className="block mb-2">
            Email
          </label>
          <input
            type="email"
            id="login-mail"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <span id="login-mail-error" className="error hidden">
            Invalid email.
          </span>

          <label for="login-password" className="block mb-2">
            Password
          </label>
          <input
            type="password"
            id="login-password"
            className="w-full p-2 border border-gray-300 rounded mb-4"
            required
          />
          <span id="login-password-error" className="error hidden">
            Password is required.
          </span>

          <button
            type="submit"
            className="w-full p-2 bg-[#004AAD] text-white rounded"
          >
            Login
          </button>
        </form>

        {/* <!-- Registration Form --> */}
        <form
          id="registration-form"
          className="hidden bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4 text-center" id="register-title">
            Register
          </h2>

          {/* <!-- Employee Registration Form --> */}
          <div id="employee-register" className="">
            <label for="first-name" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label for="last-name" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label for="gsm" className="block mb-2">
              GSM (Optional)
            </label>
            <input
              type="text"
              id="gsm"
              className="w-full p-2 border border-gray-300 rounded mb-4"
            />

            <label for="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            {/* <!-- Password Field (Always visible) --> */}
            <div className="relative mb-4">
              <label for="password" className="block mb-2">
                Password
              </label>
              <input
                type="text"
                id="password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
            </div>

            {/* <!-- Confirm Password Field (Always visible) --> */}
            <div className="relative mb-4">
              <label for="confirm-password" className="block mb-2">
                Confirm Password
              </label>
              <input
                type="text"
                id="confirm-password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
            </div>

            {/* <!-- Error Message for Mismatched Passwords --> */}
            <span id="password-error" className="error hidden">
              Passwords do not match!
            </span>

            {/* <!-- Terms and Conditions Checkbox --> */}
            <div className="mb-4">
              <input type="checkbox" id="terms-checkbox" className="mr-2" />
              <label for="terms-checkbox">
                I agree to the
                <a
                  href="general-conditions.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  General Conditions
                </a>
                and
                <a
                  href="privacy-notice.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Privacy Notice
                </a>
                .
              </label>
            </div>

            {/* <!-- Error Message (Initially hidden) --> */}
            <p id="error-message" className="text-red-500 mb-4 hidden">
              You must accept the terms to register.
            </p>

            <button
              type="submit"
              id="register-button"
              className="w-full p-2 bg-[#004AAD] text-white rounded"
            >
              Register
            </button>
          </div>

          {/* <!-- Company Registration Form --> */}
          <div id="company-register" className="hidden">
            <label for="company-name" className="block mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company-name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label for="vat" className="block mb-2">
              VAT Number
            </label>
            <input
              type="text"
              id="vat"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label for="owner-name" className="block mb-2">
              Owner Name
            </label>
            <input
              type="text"
              id="owner-name"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label for="company-gsm" className="block mb-2">
              GSM
            </label>
            <input
              type="text"
              id="company-gsm"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            <label for="company-email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="company-email"
              className="w-full p-2 border border-gray-300 rounded mb-4"
              required
            />

            {/* <!-- Password Field (Always visible) --> */}
            <div className="relative mb-4">
              <label for="company-password" className="block mb-2">
                Password
              </label>
              <input
                type="text"
                id="company-password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
            </div>

            {/* <!-- Confirm Password Field (Always visible) --> */}
            <div className="relative mb-4">
              <label for="company-confirm-password" className="block mb-2">
                Confirm Password
              </label>
              <input
                type="text"
                id="company-confirm-password"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
            </div>

            {/* <!-- Error Message for Mismatched Passwords --> */}
            <span id="company-password-error" className="error hidden">
              Passwords do not match!
            </span>

            {/* <!-- Terms and Conditions Checkbox --> */}
            <div className="mb-4">
              <input type="checkbox" id="company-terms-checkbox" className="mr-2" />
              <label for="company-terms-checkbox">
                I agree to the
                <a
                  href="general-conditions.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  General Conditions
                </a>
                and
                <a
                  href="privacy-notice.html"
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Privacy Notice
                </a>
                .
              </label>
            </div>

            {/* <!-- Error Message (Initially hidden) --> */}
            <p id="company-error-message" className="text-red-500 mb-4 hidden">
              You must accept the terms to register.
            </p>

            <button
              type="submit"
              id="company-register-button"
              className="w-full p-2 bg-[#004AAD] text-white rounded"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}

export default LoginRegistrerScreen;
