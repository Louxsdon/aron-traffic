import Link from "next/link";
import React, {useState} from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdSearch, MdNotifications } from "react-icons/md";
import { BiCaretDown } from "react-icons/bi";

export default function Topbar() {
    const [profState, setprofState] = useState(false)
  return (
    <div className="bg-indigo-300 text-indigo-900 flex items-center justify-between w-full px-5 py-2">
      <div className="">Admin Dashboard</div>
      <div className="w-5/12">
        <form action="">
          <div className="flex space-x-1 ">
            <input
              type="text"
              name="q"
              className="form-control placeholder-indigo-400 bg-indigo-100 focus:placeholder-indigo-400 rounded-full "
              placeholder="Search..."
            />
            <button className="bg-indigo-900 px-3 text-indigo-100 rounded focus:outline-none border border-indigo-300">
              <MdSearch />
            </button>
          </div>
        </form>
      </div>
      <div className="flex items-center mr-5">
        <div className="relative" onMouseEnter={()=>setprofState(true)} onMouseLeave={()=>setprofState(false)}>
          <div className=" flex justify-center items-center">
            <div className="bg-gry-200 p-1 rounded-full text-gray900 mr-2 ">
              <FaUserCircle className="text-2xl " />
            </div>
            <h3>LouxsDon</h3>
            <BiCaretDown />
          </div>
          <div style={{display: profState?"block":"none"}} className="absolute flex flex-col z-10 -left-6 p-4 w-40 rounded space-y-4 bg-gray-100">
            <Link href="#/profile">
              <a>
                <h3>Profile</h3>
              </a>
            </Link>
            <Link href="/">
              <a>
                <h3>Logout</h3>
              </a>
            </Link>
          </div>
        </div>
        <div className="ml-12 relative flex justify-center items-center">
          <MdNotifications className="text-2xl inline-block" />
          <div className="absolute z-10 -top-2 -right-2 text-xs text-red-100 bg-red-500 p-1 font-sans inline rounded-full">
            <p>4</p>
          </div>
        </div>
      </div>
    </div>
  );
}
