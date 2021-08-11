import Head from "next/head";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import axios from "axios";

export default function Cases(props) {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const formSubmit = (values) => {
    axios
      .post(
        "http://192.168.1.170:8000/accounts/login/",
        JSON.stringify(values),
        config
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    console.log(JSON.stringify(values));
  };

  return (
    <div>
      <Head>
        <title>ARON | Cases</title>
      </Head>
      <div className="flex w-full">
        <Sidebar />
        <main className="w-full h-screen overflow-y-auto sticky top-0 right-0 ">
          <Topbar />

          {/* Main Dashborad Section */}
          <div className="px-8">
            <div className="flex justify-between space-x-4 max-w-full">
              <div className="table-section m-aut px-4 py-5 mt-20 w-2/3 border rounded-md">
                <div className="flex justify-between">
                  <h3 className="font-bold">Recent Cases</h3>
                  <Link href="">
                    <a className="link-btn px-3 py-1 bg-pink-600 text-pink-200 rounded">
                      View All <BsArrowRightShort className="inline-block" />
                    </a>
                  </Link>
                </div>
                <table className="w-full text-left mt-4 text-sm">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
