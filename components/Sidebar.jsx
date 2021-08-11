import Link from "next/link";
import React from "react";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaTrafficLight } from "react-icons/fa";
import { RiPoliceCarFill } from "react-icons/ri";

export default function Sidebar(props) {
  return (
    <>
      <aside className=" w-80 bg-gray-900 h-screen text-gray-200">
        <div className="text-center bg-gray-800 p-4">
          <button onClick={props.handleClick} className="focus:outline-none">
            <img
              className="w-24 inline-block"
              src="/imgs/aron.png"
              alt="Logo"
            />
          </button>
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
            <RiPoliceCarFill className="inline-block" />
            <Link href="/dashboard/cases">
              <a>Cases</a>
            </Link>
          </div>
          <div className="side-link">
            <FaTrafficLight className="inline-block" />
            <Link href="/dashboard/traffics">
              <a>Traffics</a>
            </Link>
          </div>
          <div className="side-link">
            <MdSettings className="inline-block" />
            <Link href="/dashboard">
              <a className="block">Settings</a>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
