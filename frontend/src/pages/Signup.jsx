import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleRegister = async (e) => {
    e.preventDefault();
	if(!username || !password){
		toast.error("Username and password are required!");
		return;
	}

	if(password.length < 6){
		toast.error("Password must be at least 6 characters!");
		return;
	}

    await register(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-2 bg-gray-100">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-20 w-full max-w-md border rounded-md bg-white text-black">
        <div className="w-full">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight ">
            Create your account
          </h2>
        </div>

        <div className="mt-10 w-full">
          <form className="space-y-6" onSubmit={handleRegister}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 "
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5  shadow-sm ring-1 ring-inset ring-gray-300  focus:ring-2 focus:ring-inset text-black  sm:text-sm sm:leading-6 p-2"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-2 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset text-black sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#2A9D8F] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#264653] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
