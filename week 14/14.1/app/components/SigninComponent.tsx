const SignInComponent = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
          <form className="space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                placeholder="abcd@efg.com"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {/* Password Field */}
            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SignInComponent;
  