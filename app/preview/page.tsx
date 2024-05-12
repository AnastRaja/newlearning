"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card"

import {Button} from "@/components/ui/button";
import { Link1Icon } from '@radix-ui/react-icons';
import Leftmanu from '@/components/Leftmanu';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
// import { Link } from 'lucide-react';

const invoices = [
  {
    id: "#1",
    name: "Multidisciplinary Web Entrepreneur",
    nameLable: "Chapter Name here",
    subjct: "Physics",
    grad: "10th Grade",
    Assigned: "Purnima Sharma",
    Created: "12 Mar 2023",

    Status: "Rejected",
  },
  {
    id: "#2",
    name: "Multidisciplinary Web Entrepreneur",
    nameLable: "Chapter Name here",
    subjct: "Physics",
    grad: "10th Grade",
    Assigned: "Purnima Sharma",
    Created: "12 Mar 2023",

    Status: "Approve",
  },
  {
    id: "#3",
    name: "Multidisciplinary Web Entrepreneur",
    nameLable: "Chapter Name here",
    subjct: "Physics",
    grad: "10th Grade",
    Assigned: "Purnima Sharma",
    Created: "12 Mar 2023",

    Status: "Live",
  },
];


function index() {
  const user = {
    name: 'Preview',
   
  };

  return (
    <div>
    
    
    <div className="layoutWrapper">
        <div className="layoutSidebar pl-0 pr-0">

          <Leftmanu/>
          
        </div>
        <div className="layoutContainer">
          <div className="layoutSubHeader"> <SiteHeader  user={user}/>
          
          </div>
          <div className="layoutBody">

            
         
         <div className='grid grid-cols-12'>
        <div className=' col-span-9'>

        <Card>
  <CardHeader className=' pb-0 border border-[#ECECEC] mb-3'>
  <div className='tilete_heade flex justify-between items-center'>
            <div className='flex flex-col'>
              <span className='text-[16px] text-[#637381] font-normal uppercase mb-1'>CHAPTER OF LIGHTS</span>
            <p className='text-[#3F3F3F] text-[26px] font-semibold flex items-center gap-2 justify-start'>Reflection of Light <span className=' border-[#6566FF] border text-[12px] py-2 px-2  text-[#6566FF] rounded-full'>PHYSICS</span> <span className='border-[#F59E0B] border text-[12px] py-2 px-2  text-[#F59E0B] rounded-full'>10TH GRADE</span></p>
            <span className='text-[12px] text-[#637381]  mb-3'>23 June 2023</span>
            </div>
            </div>
  </CardHeader>
  <CardContent>
    <div className='contet'>
      <h2 className=' text-2xl text-black mb-2 font-semibold'>Quill</h2>
      <p className=' text-base'> is a free, open source WYSIWYG editor built for the modern web. With its modular architecture and expressive API, it is completely customizable to fit any need.
<Link href="" className=' decoration-solid underline'>https://player.vimeo.com/video/253905163</Link></p>

<br className='mb-5'/>
<h2 className=' text-2xl text-black mb-2 font-semibold'>Getting Started is Easy</h2>
      <p className=' text-base'> Granular access to the editor&apos;s content, changes and events  through a simple API. Works consistently and deterministically with JSON  as both input and output.Granular access to the editor's content, changes and events  through a simple API. Works consistently and deterministically with JSON  as both input and output.Granular access to the editor's content, changes and events  through a simple API. Works consistently and deterministically with JSON  as both input and output.Granular access to the editor's content, changes and events  through a simple API. Works consistently and deterministically with JSON  as both input and output.Granular access to the editor's content, changes and events  through a simple API. Works consistently and deterministically with JSON  as both input and output.</p>
    </div>
  </CardContent>
 
</Card>


        
        </div>
        <div className=' col-span-3'>
        <div className='atachment p-5 pt-0'>
          <h3 className=' text-xl font-medium text-[#3F3F3F] mb-3'>Attachments</h3>

          <ul>
            <li className='mb-2'>
              <div className='flex justify-start items-center gap-2'>
<Link1Icon className=' w-[20px] h-[20px]'/> <Link href="" className=' text-lg text-[#2D6882] font-medium'>Activity-1.2.pdf</Link>
              </div>
            </li>
            <li className='mb-2'>
              <div className='flex justify-start items-center gap-2'>
<Link1Icon className=' w-[20px] h-[20px]'/> <Link href="" className=' text-lg text-[#2D6882] font-medium'>Activity-1.2.pdf</Link>
              </div>
            </li>
            <li className='mb-2'>
              <div className='flex justify-start items-center gap-2'>
<Link1Icon className=' w-[20px] h-[20px]'/> <Link href="" className=' text-lg text-[#2D6882] font-medium'>Activity-1.2.pdf</Link>
              </div>
            </li>
            <li className='mb-2'>
              <div className='flex justify-start items-center gap-2'>
<Link1Icon className=' w-[20px] h-[20px]'/> <Link href="" className=' text-lg text-[#2D6882] font-medium'>Activity-1.2.pdf</Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
         </div>
          
          </div>
        </div>
      </div></div>
  )
}

export default index