import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Input from "../components/Inputs";
import { BiUser } from "react-icons/bi";

export default function Home() {
  const initial = {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    conPassword: "",
    acceptTerms: false,
  };
  const [formData, setformData] = useState(initial);

  const handleInput = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.type === "checkbox" ? input.checked : input.value;
    setformData({ ...formData, [name]: value });
    console.log(name);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.target.preventDefault;

    console.log(formData.acceptTerms);
  };

  return (
    <div className="">
      <Head>
        <title>ARON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="lg:w-3/12 md:w-2/3 sm:w-2/3 mt-3 sm:mt-8 lg:mt-24  m-auto p-5">
          <div className="text-center">
            <img
              className="w-28 inline-block"
              src="/imgs/aron.png"
              alt="Logo"
            />
            <h2 className="text-xl uppercase font-mono font-semibold text-green-600">
              ARON Traffic System
            </h2>
          </div>
          <form
            action=""
            className="px-3 py-5  mx-auto mt-8 border border-gray-200 my-6 rounded"
          >
            <div className="text-center mb-5">
              <div className="bg-blue-400 p-4 inline-block rounded-full text-white">
                <BiUser className="text-3xl" />
              </div>
              <h2 className="text-xl text-gray-400">Account Registration</h2>
            </div>
            <div className="form-group">
              <input
                onChange={handleInput}
                name="username"
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="form-group">
                <input
                  onChange={handleInput}
                  name="firstName"
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleInput}
                  name="lastName"
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="form-group">
                <input
                  onChange={handleInput}
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="form-group">
                <input
                  onChange={handleInput}
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="form-group">
              <input
                onChange={handleInput}
                name="password"
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleInput}
                name="conPassword"
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
            </div>
            <div className="mt-3">
              <input
                onChange={handleInput}
                type="checkbox"
                name="acceptTerms"
                id=""
              />
              <Link href="#">
                <a className="text-blue-900 ml-3">Terms and Conditions</a>
              </Link>
            </div>
            <input
              onClick={handleSubmit}
              type="button"
              value="Register"
              className="submit-btn"
            />
          </form>
          <div className="text-center">
            Already have account?
            <Link href="/">
              <a className="text-blue-900 ml-3">Login</a>
            </Link>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
