import Link from "next/link"
import Image from "next/image"
import profile from "../public/Asset/activity-light.png"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ChatBubbleIcon, BellIcon } from "@radix-ui/react-icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function SiteHeader(props) {
  const { name } = props.user;
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <h3 className="text-[#3F3F3F] font-bold">
                     {name}
                    </h3>
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1 gap-4">
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "outline",
                })}
              >
                <BellIcon className="h-5 w-5 text-black" />
                {/* <Icons.gitHub className="h-5 w-5" /> */}
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant:"outline"
                  
                })}
              >
                <ChatBubbleIcon className="h-5 w-5 fill-black text-black"/>
                {/* <Icons.twitter className="h-5 w-5 fill-current" /> */}
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <DropdownMenu>
  <DropdownMenuTrigger>
    <div className=" flex gap-4">
      <div className="flex flex-col justify-start items-start" >
        <p className="text-black text-base font-semibold">Thomas Anree</p>
                <span className="text-[12px] text-[#637381] font-light">Ux Designer</span>
      </div>
    <Image src={profile} alt="" className=" w-9 h-9 rounded-full" />

    </div>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

            {/* <ThemeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  )
}
