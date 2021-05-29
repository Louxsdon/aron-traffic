import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Input from "../components/Inputs";
import { BiUser } from "react-icons/bi";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import axios from "axios";

export default function Home() {
  const schema = yup.object().shape({
    firstname: yup.string(),
    lastname: yup.string(),
    username: yup.string().required("This field is required"),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    termsConditions: yup.boolean().required("You must agree to the terms  and conditions"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const handleFormSubmit = (values) => {
    axios
      .post(
        "http://192.168.1.170:8000/accounts/register/",
        JSON.stringify(values),
        config
      )
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err.response.data["username"]);
      });
    console.log(JSON.stringify(values));
  };

  const errMsg = (msg) => <span className="text-red-500">{msg}</span>;

  return (
    <div className="">
      <Head>
        <title>ARON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="lg:w-4/12 md:w-2/3 sm:w-2/3 mt-3 sm:mt-8 lg:mt-24  m-auto p-5">
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
            onSubmit={handleSubmit(handleFormSubmit)}
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
                {...register("username", { required: true })}
                type="text"
                className="form-control"
                placeholder="User Name"
              />
              {errors.username && errMsg("Username is required")}
              {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="form-group">
                <input
                  {...register("firstname")}
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
                {errMsg(errors.firstname?.message)}
              </div>
              <div className="form-group">
                <input
                  {...register("lastname")}
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
                {errMsg(errors.lastname?.message)}
              </div>
            </div>
            <div className="form-group">
              <input
                {...register("email", { required: true })}
                type="email"
                className="form-control"
                placeholder="Email Address"
              />
              {errMsg(errors.email?.message)}
            </div>
            <div className="form-group">
              <input
                {...register("password", { required: true })}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {errMsg(errors.password?.message)}
            </div>
            <div className="form-group">
              <input
                {...register("confirmPassword", { required: true })}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
              />
              {errMsg(errors.confirmPassword?.message)}
            </div>
            <div className="mt-3">
              <input
                {...register("termsConditions")}
                type="checkbox"
                name="acceptTerms"
                id=""
              />
              <Link href="#">
                <a className="text-blue-900 ml-3">Terms and Conditions</a>
              </Link>
            </div>
            <input type="submit" value="Register" className="submit-btn py-2" />
          </form>
          <div className="text-center">
            Already have account?
            <Link href="/">
              <a className="text-blue-900 ml-3">Login</a>
            </Link>
          </div>
          {errMsg(errors.termsConditions?.message)}
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
