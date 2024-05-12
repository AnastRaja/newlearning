"use client"
import React from 'react';
import { SiteHeader } from '@/components/site-header';
import Pdf from "../../public/Asset/PDF.png"
import activity from "../../public/Asset/activity-light.png"
import vido from "../../public/Asset/vedio.png"
import Image from 'next/image';
import {Button} from "@/components/ui/button";
import { EyeOpenIcon } from '@radix-ui/react-icons';
import Leftmanu from '@/components/Leftmanu';
import Richtext from "@/components/Richtext"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";



function index() {
  const user = {
    name: 'Add Content',
   
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

            <div className='tilete_heade flex justify-between items-center'>
            <div>
              <span className='text-[16px] text-[#637381] font-normal uppercase mb-3'>CHAPTER OF LIGHTS</span>
            <p className='text-[#3F3F3F] text-[26px] font-semibold flex items-center gap-2 mb-3 justify-start'>Reflection of Light <span className=' border-[#6566FF] border text-[12px] py-2 px-2  text-[#6566FF] rounded-full'>PHYSICS</span> <span className='border-[#F59E0B] border text-[12px] py-2 px-2  text-[#F59E0B] rounded-full'>10TH GRADE</span></p></div>
            <div className='flex justify-end items-center gap-3'>
              <Button variant="outline" className='flex gap-1'> <EyeOpenIcon/>Preview</Button>
              <Button variant="default">Save</Button>

            </div>
            </div>
          <Tabs defaultValue="account" className="w-[100%] ">
  <TabsList className="grid w-full grid-cols-12 border-b-2 border-[#DFE4EA] h-auto bg-none rounded-none pb-0">
    <TabsTrigger value="account" className=" col-span-3 bg-transparent data-[state=active]:bg-transpatant data-[state=active]:text-[#E36863] py-3 data-[state=active]:border-b-2  border-b-2 data-[state=active]:border-[#E36863] rounded-none">Editor</TabsTrigger>
    <TabsTrigger value="Edit" className=" col-span-3 bg-transparent data-[state=active]:bg-transpatant data-[state=active]:text-[#E36863] py-3 data-[state=active]:border-b-2  border-b-2 data-[state=active]:border-[#E36863] rounded-none">Attachment</TabsTrigger>
  
  </TabsList>
  
  <TabsContent value="account"  className=" pt-5">


          <div className=" bg-white shadoew">
                  <Richtext/>
                </div>
  </TabsContent>
  <TabsContent value="Edit" className=" pt-5">
  <div className=" w-auto">
    <label
        className="flex justify-center w-full h-60 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
        <span className="flex items-center space-x-2 flex-col justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <br/>
            <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600 underline">browse</span>
            </span>
        </span>
        <input type="file" name="file_upload" className="hidden" />
    </label>
</div>

<div className='imag_items my-7'>
    <ul>
      <li className='flex justify-start items-center gap-3 mb-3'>
        <div>
          <Image src={Pdf} className=" w-16 h-16" alt="demo"/>
        </div>
        <div>
          <p className='text-[16px] font-medium text-[#046C88]'>Chapter.pdf</p>
          <span className=' text-[#403E3E] text-[16px] font-medium'>Shared by Rachit, on 23 Dec 2023</span>
        </div>
      </li>
      <li className='flex justify-start items-center gap-3 mb-3'>
        <div>
          <Image src={activity} className=" w-16 h-16" alt="demo"/>
        </div>
        <div>
          <p className='text-[16px] font-medium text-[#046C88]'>Chapter.pdf</p>
          <span className=' text-[#403E3E] text-[16px] font-medium'>Shared by Rachit, on 23 Dec 2023</span>
        </div>
      </li>
      <li className='flex justify-start items-center gap-3 mb-3'>
        <div>
          <Image src={vido} className=" w-16 h-16" alt="demo"/>
        </div>
        <div>
          <p className='text-[16px] font-medium text-[#046C88]'>Chapter.pdf</p>
          <span className=' text-[#403E3E] text-[16px] font-medium'>Shared by Rachit, on 23 Dec 2023</span>
        </div>
      </li>
    </ul>
</div>
  </TabsContent>
  
</Tabs>
          
          </div>
        </div>
      </div></div>
  )
}

export default index