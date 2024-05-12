import Link from "next/link"
import Image from 'next/image'
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Logoimg from "../public/Asset/logo.png"
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function IndexPage() {
  return (
    <section className="section_banner h-screen">
<div className="container px-4 md:px-8 flex-grow flex flex-col h-full">
        <div className="logo_section px-4 ">
        <div className=" flex justify-start mt-4">
            <div>
              <Image src={Logoimg} alt="logo" className=" w-[150px] h-auto" />
            </div>
            <div></div>
          </div>
        </div>

        <div className="form_xontentin grid grid-cols-12 px-11 mt-24">
            <div className=" col-span-8"></div>
            <div className=" col-span-4">
              <h1 className="text-[40px] text-black mb-2">Login</h1>
              <p className="text-[#3F3F3F] text-[18px]">
                Login to continue using the app
              </p>
              <form className=" mt-5">
                <div className=" mb-4">
                  <label className=" mb-2 block">Email</label>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className=" h-[50px] border-[#2D6882] bg-white"
                  />
                </div>
                <div className=" mb-4">
                  <label className=" mb-2 block">Your Password</label>
                  <Input
                    type="email"
                    placeholder="Your Password"
                    className=" h-[50px] border-[#2D6882] bg-white"
                  />
                </div>
                <div className="flex justify-between align-middle">
                  <a href="" className="text-[#E36863]">
                    Forget Password?
                  </a>
                  <span>
                    Don't have an account?{" "}
                    <a href="" className="text-[#E36863]">
                      Sign Up
                    </a>
                  </span>
                </div>
                <Button className="w-[100%] h-[50px] mt-4"> Log In</Button>
              </form>
            </div>
          </div>
</div>
</section>
  )
}
