import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BiCurrentLocation } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import { FaRoute, FaTrafficLight } from "react-icons/fa";
import { MdLocationOn, MdNotifications } from "react-icons/md";
import { GiTrafficLightsReadyToGo } from "react-icons/gi";
import { TiLocationArrow } from "react-icons/ti";
import { BsArrowRightShort } from "react-icons/bs";
import Alert from "../../components/Alert";
import UTopbar from "../../components/UTopbar";
import USidebar from "../../components/USidebar";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Dashboard(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [searched, setsearched] = useState(false);
  const [route, setRoute] = useState(null);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formSubmit = (values) => {
    setsearched(true);
    axios
      .get(
        `http://192.168.1.170:8000/Routes/?From=${values.From}&To=${values.To}`,
        config
      )
      .then((res) => {
        setRoute(res.data[0]);
        console.log({ data: res.data });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Head>
        <title>ARON | Dashboard</title>
      </Head>
      <div className="flex w-full">
        <USidebar />
        <main className="w-full h-screen overflow-y-auto sticky top-0 right-0 ">
          <UTopbar />

          {/* Main Dashborad Section */}
          <div className="px-8">
            <div className="flex justify-between items-start space-x-4 max-w-full">
              <div className="table-section m-aut px-4 py-5 mt-20 w-2/3 border rounded-md">
                <div className="w-11/12 m-auto text-center">
                  <h3 className="text-xl font-bold capitalize text-indigo-700 mb-4">
                    Search Availble Less dense Routes
                  </h3>
                  <form onSubmit={handleSubmit(formSubmit)} action="">
                    <div className="flex items-cente justify-evenly space-x-1 ">
                      <div>
                        <input
                          type="text"
                          {...register("From", {
                            required: "Enter Location",
                          })}
                          className="form-control placeholder-indigo-400 bg-indigo-100 focus:placeholder-indigo-400 rounded-full "
                          placeholder="Location"
                        />
                        {errors.From && (
                          <p className="text-red-500">{errors.From.message}</p>
                        )}
                      </div>
                      <div>
                      <FaRoute className="text-2xl" />
                      </div>
                      <div>
                        <input
                          type="text"
                          {...register("To", { required: "Enter Destination" })}
                          className="form-control placeholder-indigo-400 bg-indigo-100 focus:placeholder-indigo-400 rounded-full "
                          placeholder="Destination"
                        />
                        {errors.To && (
                          <p className="text-red-500">{errors.To.message}</p>
                        )}
                      </div>
                      <div>
                        <button className="flex py-2 items-center justify-center bg-indigo-900 px-3 text-indigo-100 rounded focus:outline-none border border-indigo-300">
                          <TiLocationArrow />
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {searched ? (
                  typeof route !== "undefined" && route !== null ? (
                    <div className="border mt-5 py-3 px-4 rounded border-indigo-300">
                      <h2 className="font-bold text-indigo-600 mb-5">
                        Search Result
                      </h2>
                      <div className="text-lg">
                        <div className="flex items-center px-2">
                          <BiCurrentLocation className="mr-2" />
                          {route.From}
                        </div>
                        <div className="flex items-center px-2">
                          <MdLocationOn className="mr-2" />
                          {route.To}
                        </div>
                        <div className="inline-block w-28 px-2 bg-purple-50 rounded text-purple-600 border border-purple-400">
                          <div className="flex items-center ">
                            <FaTrafficLight className="mr-2" />
                            {route.density_value}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="inline-block mt-12 px-4 py-2 m-auto w-full bg-purple-50 rounded text-purple-600 border border-purple-400">
                      No result found
                    </div>
                  )
                ) : null}
              </div>

              <div className="table-section m-aut px-4 py-5 mt-20 w-1/3 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="font-bold">Current Traffics</h3>
                  <Link href="/dashboard/traffics">
                    <a className="link-btn px-3 py-1 bg-green-600 text-green-100 rounded">
                      View All <BsArrowRightShort className="inline-block" />
                    </a>
                  </Link>
                </div>
                <table className="w-full mt-4 text-sm">
                  <thead className="">
                    <tr className="">
                      <th>#</th>
                      <th>Image</th>
                      <th>City/Town</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src="/imgs/traffic1.jpg"
                          className="w-40"
                          alt="Image"
                        />
                      </td>
                      <td>Ho</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img
                          src="/imgs/traffic2.jpg"
                          className="w-40"
                          alt="Image"
                        />
                      </td>
                      <td>Accra</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img
                          src="/imgs/traffic3.jpg"
                          className="w-40"
                          alt="Image"
                        />
                      </td>
                      <td>Accra</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <img
                          src="/imgs/traffic4.jpg"
                          className="w-40"
                          alt="Image"
                        />
                      </td>
                      <td>Ho</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
