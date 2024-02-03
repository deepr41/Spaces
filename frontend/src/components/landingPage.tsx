import React, { useState } from 'react';

enum FormType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

const LandingPage: React.FC = () => {
  const [formType, setFormType] = useState<FormType>(FormType.SignIn);

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex-1 flex items-center justify-center p-20 text-left">
          <div>
            <h1 className="text-7xl font-bold pb-5">SPACES</h1>
            <h2 className="text-xl text-gray-500">
              Discover a world where community connections flourish and your neighborhood comes alive.
              Our platform is designed to bring communities closer, offering a space for locals to
              share, collaborate, and celebrate the unique spirit of their area. Join us in nurturing
              a more connected and vibrant community.
            </h2>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-96 p-10 bg-white border-2 border-black rounded-lg h-[450px]">
            <div className="mb-4">
              <button
                className={`text-2xl font-bold mb-4 ${
                  formType === FormType.SignIn ? 'text-blue-500' : 'text-black'
                }`}
                onClick={() => setFormType(FormType.SignIn)}
              >
                Sign In
              </button>
              <button
                className={`text-2xl font-bold mb-4 ml-6 ${
                  formType === FormType.SignUp ? 'text-blue-500' : 'text-black'
                }`}
                onClick={() => setFormType(FormType.SignUp)}
              >
                Sign Up
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              {formType === FormType.SignUp && (
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
              )}
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <button type="submit" className="px-4 py-2 bg-black text-white rounded-md">
                {formType === FormType.SignIn ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
