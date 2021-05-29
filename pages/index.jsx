import Head from "next/head";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { IoLogInOutline } from "react-icons/io5";

import {useForm} from 'react-hook-form'
import axios from "axios";

export default function Home() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  const errMsg=(msg)=><span className="text-red-500">{msg}</span>

  const config = {
    headers: {
      "Content-Type": "application/json"
    },
  }
  const formSubmit = (values)=>{
    axios.post("http://192.168.1.170:8000/accounts/login/", JSON.stringify(values), config)
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
    console.log(JSON.stringify(values))
  }

  return (
    <div className="">
      <Head>
        <title>ARON</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div className="lg:w-3/12 md:w-2/3 sm:w-2/3 mt-3 sm:mt-8 lg:mt-24  m-auto p-5">
          <div className="text-center">
            <img className="w-28 inline-block" src="/imgs/aron.png" alt="Logo"/>
            <h2 className="text-xl uppercase font-mono font-semibold text-green-600">ARON Traffic System</h2>
          </div>
          <form
          onSubmit={handleSubmit(formSubmit)}
            action=""
            className="px-3 py-5  mx-auto mt-8 border border-gray-200 my-6 rounded"
          >
            <div className="text-center mb-5">
              <div className="bg-blue-400 p-4 inline-block rounded-full text-white">
                <BiUser className="text-3xl" />
              </div>
              <h2 className="text-xl text-gray-400">Account Login</h2>
            </div>
            <div className="form-group">
              <input
              {...register("username", {required: true})}
                type="text"
                className="form-control"
                placeholder="User name or Email"
              />
              {errors.username && errMsg("Username is required")}
            </div>
            <div className="form-group">
              <input
              {...register("password", {required: true})}
                type="password"
                className="form-control"
                placeholder="Password"
              />
              {errors.password && errMsg("Password can't be empty")}
            </div>
            <div className="mt-3 flex justify-between items-center">
           <span className="inline-block"> <input type="checkbox" name="remember" id=""/> Remember Me</span>
            <Link href="#">
              <a className="text-blue-900">Forget password</a>
            </Link>
            </div>
            <button className="submit-btn py-2 text-gray-200" >
              <IoLogInOutline className="inline-block mr-3 text-xl"/>
              Sign In</button>
          </form>
          <div className="text-center">
            Don't have an account?
            <Link href="/register">
              <a className="text-blue-900 ml-4">Create Account</a>
            </Link>
          </div>
        </div>
      </main>

      <footer className=""></footer>
    </div>
  );
}
