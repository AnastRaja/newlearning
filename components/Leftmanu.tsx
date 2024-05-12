import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import Logoimg from "../public/Asset/logo.png";

function Leftmanu() {
  return (
   <>
   <div className="logo">
            <Image src={Logoimg} className=" w-[160px] mx-auto" />
          </div>

          <div className="nav_link pt-7">
            <Link
              href="/dashboard"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Home
            </Link>
            <Link
              href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Dashboard
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Products
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Messages
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Order
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Calendar
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Static
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Documents
            </Link>
            <hr className="my-5"></hr>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Chat
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Settings
            </Link>
            <Link
             href="/new"
              className="w-[100%] block py-3 px-3 pl-10 text-[#637381] hover:bg-[#FE70621A]"
            >
              Log out
            </Link>
          </div></>
  )
}

export default Leftmanu