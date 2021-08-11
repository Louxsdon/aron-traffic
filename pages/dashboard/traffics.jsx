import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { IoCarSport } from "react-icons/io5";
import { FaRoute } from "react-icons/fa";
import { MdSearch, MdNotifications } from "react-icons/md";
import { GiTrafficLightsReadyToGo } from "react-icons/gi";
import { TiLocationArrow } from "react-icons/ti";
import { BiCaretDown } from "react-icons/bi";
import Alert from "../../components/Alert";
import UTopbar from "../../components/UTopbar";
import USidebar from "../../components/USidebar";

export default function Dashboard(props) {
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
              <div className="table-section m-auto px-4 py-5 mt-20 w-10/12 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="font-bold">Current Traffics</h3>
                  <Link href="">
                    <a className="link-btn px-3 py-1 bg-green-600 text-green-100 rounded">
                      Filter <BiCaretDown className="inline-block" />
                    </a>
                  </Link>
                </div>
                <table className="w-full text-left mt-4 text-sm">
                  <thead className="">
                    <tr className="">
                      <th>#</th>
                      <th>Image</th>
                      <th>City/Town</th>
                      <th>Road Name</th>
                      <th>Estimate Density Volume</th>
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
                      <td>Ho - Sogakope</td>
                      <td>50</td>
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
                      <td>Accra - Aflao</td>
                      <td>156</td>
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
                      <td>Accra - Tema</td>
                      <td>270</td>
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
                      <td>Ho - Accra</td>
                      <td>70</td>
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
