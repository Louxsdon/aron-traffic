import Link from "next/link";
import React from "react";
import { MdDashboard, MdHistory } from "react-icons/md";
import { FaTrafficLight } from "react-icons/fa";

export default function USidebar(props) {
  return (
    <>
      <aside className=" w-80 bg-gray-900 h-screen text-gray-200">
        <div className="text-center bg-gray-800 p-4">
          <img className="w-24 inline-block" src="/imgs/aron.png" alt="Logo" />
          <h2>ARON Traffic System</h2>
        </div>

        <div className="pl-8 space-y-1 mt-12 text-lg">
          <div className="side-link active">
            <MdDashboard className="inline-block" />
            <Link href="/dashboard">
              <a>Dashboard</a>
            </Link>
          </div>
          <div className="side-link">
            <FaTrafficLight className="inline-block" />
            <Link href="/dashboard/traffics">
              <a>Traffics</a>
            </Link>
          </div>
          <div className="side-link">
            <MdHistory className="inline-block" />
            <Link href="/dashboard/history">
              <a>History</a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
