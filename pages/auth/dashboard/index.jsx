import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { IoCarSport } from "react-icons/io5";
import { MdSearch, MdNotifications } from "react-icons/md";
import { GiTrafficLightsReadyToGo } from "react-icons/gi";
import { RiPoliceCarFill } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import Sidebar from "../../../components/Sidebar";

import Topbar from "../../../components/Topbar";
import Alert from "../../../components/Alert";

export default function Dashboard(props) {
  const [alarm] = useState(
    typeof Audio !== "undefined" && new Audio("/audio/ring-1.mp3")
  );

  const [trafficAlert, settrafficAlert] = useState(false);
  const handleAlert = () => {
    console.log("clicked");
    settrafficAlert(!trafficAlert);
  };

  useEffect(() => {
    trafficAlert ? alarm.play() : alarm.pause();
  }, [trafficAlert]);
  return (
    <div>
      <Head>
        <title>ARON | Dashboard</title>
      </Head>
      <div className="flex w-full">
        <Sidebar handleClick={handleAlert} />
        <main className="w-full h-screen overflow-y-auto sticky top-0 right-0 ">
          <Topbar/>

          {/* Main Dashborad Section */}
          <div className="px-8">
            <div className="mt-16 font-serif text-gray-500 flex items-center justify-center">
              {/* Box 1 */}
              <div className="bg-white px-4 h-full sm:w-1/3 sm:mx-2 border p-6 lg:w-1/5 mb-8 md:mx-4 border-b-4 shadow-md border-indigo-600 rounded-lg facility text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="flex items-center justify-center">
                  <div className="inline-block mr-4 p-3 bg-indigo-50 rounded-full">
                    <GiTrafficLightsReadyToGo className="text-2xl text-indigo-600" />
                  </div>
                  <h2 className="text-gray-800 font-bold ">Total Cases</h2>
                </div>
                <p className="text-gray-500b text-4xl font-bold">67</p>
              </div>
              {/* Box 2 */}
              <div className="bg-white px-4 h-full sm:w-1/3 sm:mx-2 border p-6 lg:w-1/5 mb-8 md:mx-4 border-b-4 shadow-md border-pink-600 rounded-lg facility text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="flex items-center justify-center">
                  <div className="inline-block mr-4 p-3 bg-pink-50 rounded-full">
                    <IoCarSport className="text-2xl text-pink-600" />
                  </div>
                  <h2 className="text-gray-800 font-bold ">Active Cases</h2>
                </div>
                <p className="text-gray-500b text-4xl font-bold">27</p>
              </div>
              {/* Box 3 */}
              <div className="bg-white px-4 h-full sm:w-1/3 sm:mx-2 border p-6 lg:w-1/5 mb-8 md:mx-4 border-b-4 shadow-md border-green-600 rounded-lg facility text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                <div className="flex items-center justify-center">
                  <div className="inline-block mr-4 p-3 bg-green-50 rounded-full">
                    <RiPoliceCarFill className="text-2xl text-green-600" />
                  </div>
                  <h2 className="text-gray-800 font-bold ">Cases Resolved</h2>
                </div>
                <p className="text-gray-500b text-4xl font-bold">40</p>
              </div>
            </div>

            {/* Alert Box */}
            <Alert trigger={trafficAlert} handleAlert={handleAlert}/>

            <div className="flex justify-between space-x-4 max-w-full">
              <div className="table-section m-aut px-4 py-5 mt-20 w-2/3 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="font-bold">Cases Recorded</h3>
                  <Link href="">
                    <a className="link-btn px-3 py-1 bg-pink-600 text-pink-200 rounded">
                      View All <BsArrowRightShort className="inline-block" />
                    </a>
                  </Link>
                </div>
                <table className="w-full mt-4 text-sm">
                  <thead className="">
                    <tr className="">
                      <th>#</th>
                      <th>Car No.</th>
                      <th>City/Town</th>
                      <th>Location</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src="/imgs/vehicle-6.jpeg"
                          className="w-24"
                          alt="Image"
                        />
                      </td>
                      <td>Ho</td>
                      <td>Dome</td>
                      <td>Resolved</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img
                          src="/imgs/vehicle-5.jpeg"
                          className="w-24"
                          alt="Image"
                        />
                      </td>
                      <td>Accra</td>
                      <td>Tudu</td>
                      <td>Pending</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img
                          src="/imgs/vehicle-4.jpeg"
                          className="w-24"
                          alt="Image"
                        />
                      </td>
                      <td>Accra</td>
                      <td>Madina</td>
                      <td>Resolved</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <img
                          src="/imgs/vehicle-3.jpeg"
                          className="w-24"
                          alt="Image"
                        />
                      </td>
                      <td>Ho</td>
                      <td>Ahoe</td>
                      <td>Resolved</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="table-section m-aut px-4 py-5 mt-20 w-1/3 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="font-bold">New Cases</h3>
                  <Link href="">
                    <a className="link-btn px-3 py-1 bg-green-600 text-green-100 rounded">
                      View All <BsArrowRightShort className="inline-block" />
                    </a>
                  </Link>
                </div>
                <table className="w-full mt-4 text-sm">
                  <thead className="">
                    <tr className="">
                      <th>#</th>
                      <th>Car No.</th>
                      <th>City/Town</th>
                      <th>Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <img
                          src="/imgs/vehicle-6.jpeg"
                          className="w-14"
                          alt="Image"
                        />
                      </td>
                      <td>Ho</td>
                      <td>Dome</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <img
                          src="/imgs/vehicle-5.jpeg"
                          className="w-14"
                          alt="Image"
                        />
                      </td>
                      <td>Accra</td>
                      <td>Tudu</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <img
                          src="/imgs/vehicle-4.jpeg"
                          className="w-14"
                          alt="Image"
                        />
                      </td>
                      <td>Accra</td>
                      <td>Madina</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        <img
                          src="/imgs/vehicle-3.jpeg"
                          className="w-14"
                          alt="Image"
                        />
                      </td>
                      <td>Ho</td>
                      <td>Ahoe</td>
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
