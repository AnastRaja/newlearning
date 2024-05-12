"use client"
import React from 'react'
import { SiteHeader } from '@/components/site-header';


import {Button} from "@/components/ui/button";
import { DatePickerWithRange } from "@/components/Datepic";
import { Input } from "@/components/ui/input"
import Leftmanu from '@/components/Leftmanu';
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


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
    name: 'Content Management',
   
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
          <Tabs defaultValue="account" className="w-[100%] ">
  <TabsList className="grid w-full grid-cols-12 border-b-2 border-[#DFE4EA] h-auto bg-none rounded-none pb-0">
    <TabsTrigger value="account" className=" col-span-3 bg-transparent data-[state=active]:bg-transpatant data-[state=active]:text-[#E36863] py-3 data-[state=active]:border-b-2  border-b-2 data-[state=active]:border-[#E36863] rounded-none">Pending Tasks (3)</TabsTrigger>
    <TabsTrigger value="password" className=" col-span-3 bg-transparent data-[state=active]:bg-transpatant data-[state=active]:text-[#E36863] py-3 data-[state=active]:border-b-2  border-b-2 data-[state=active]:border-[#E36863] rounded-none">All Contents</TabsTrigger>
  </TabsList>
  <TabsContent value="account"  className=" pt-5">
  <div className="flex justify-between">
                  <div className="flex gap-4 align-middle mb-5">
                   <div>
                    <DatePickerWithRange/>
                   </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Select>
                        <SelectTrigger className="w-[150px] bg-[#F6F7F8]">
                          <SelectValue placeholder="Grade" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Active</SelectLabel>
                            <SelectItem value="apple">Deactive</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="input">
                  <Input  type="search" placeholder="Search"/>
                  </div>
                </div>

          <div className=" bg-white shadoew">
                  <Table>
                    <TableHeader className="bg-[#F9FAFB]">
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Grade</TableHead>

                        <TableHead>Assigned By</TableHead>

                        <TableHead>Created On</TableHead>
                        <TableHead>Status</TableHead>

                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium py-3">
                            {invoice.id}
                          </TableCell>
                          <TableCell className=" py-3">
                            <b>{invoice.name}</b>
                            <br />
                            {invoice.nameLable}
                          </TableCell>
                          <TableCell className=" py-3">{invoice.subjct}</TableCell>
                          <TableCell className=" py-3">{invoice.grad}</TableCell>
                          <TableCell className=" py-3">{invoice.Assigned}</TableCell>
                          <TableCell className=" py-3">{invoice.Created}</TableCell>
                          <TableCell className=" py-3">
                          {
  invoice.Status === 'Approve'
    ? <span className=" px-4 py-3 bg-[#3758F926] text-[#3758F9] font-medium rounded-[50px]">Approve</span>
    : invoice.Status === 'Live'
    ? <span  className=" px-4 py-3 bg-[#DAF8E6] text-[#1A8245] font-medium rounded-[50px]">Live</span>
    : <span className=" px-4 py-3 bg-[#3758F926] text-[#E10E0E] font-medium rounded-[50px]">Rejected</span>
}
                            {/* <span>
                            {invoice.Status === 'Approve'? <span>Approve</span> : <span>Rejected</span>}
                            </span> */}
                          </TableCell>
                          <TableCell>
                            <span>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </svg>
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
                  </Table>
                </div>
  </TabsContent>
  <TabsContent value="password" className=" pt-5">
  <div className="flex justify-between">
                  
                  <div className="input">
                  <Input  type="search" placeholder="Search"/>
                  </div>
                  <div className="flex gap-4 align-middle mb-5">
                   <div>
                    <DatePickerWithRange/>
                   </div>
                   <div>
                    <Button variant="outline" className='flex gap-2'>  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M8 1.25C10.0663 1.25 12.0913 1.424 14.0623 1.7585C14.462 1.826 14.75 2.1755 14.75 2.5805V3.3635C14.75 3.58511 14.7064 3.80455 14.6216 4.00928C14.5367 4.21402 14.4124 4.40005 14.2557 4.55675L10.1818 8.63075C10.0251 8.78745 9.90075 8.97348 9.81595 9.17822C9.73114 9.38296 9.6875 9.6024 9.6875 9.824V12.0193C9.68756 12.3327 9.6003 12.64 9.43551 12.9067C9.27071 13.1734 9.0349 13.3888 8.7545 13.529L6.3125 14.75V9.824C6.3125 9.6024 6.26886 9.38296 6.18405 9.17822C6.09925 8.97348 5.97495 8.78745 5.81825 8.63075L1.74425 4.55675C1.58755 4.40005 1.46325 4.21402 1.37845 4.00928C1.29364 3.80455 1.25 3.58511 1.25 3.3635V2.5805C1.25 2.1755 1.538 1.826 1.93775 1.7585C3.94068 1.41939 5.96857 1.24929 8 1.25Z" stroke="black" stroke-width="1.125" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    Filter</Button>
                   </div>
                   
                  </div>
                </div>

          <div className=" bg-white shadoew">
                  <Table>
                    <TableHeader className="bg-[#F9FAFB]">
                      <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Grade</TableHead>

                        <TableHead>Assigned By</TableHead>

                        <TableHead>Created On</TableHead>
                        <TableHead>Status</TableHead>

                        <TableHead className="text-right"></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">
                            {invoice.id}
                          </TableCell>
                          <TableCell>
                            <b>{invoice.name}</b>
                            <br />
                            {invoice.nameLable}
                          </TableCell>
                          <TableCell>{invoice.subjct}</TableCell>
                          <TableCell>{invoice.grad}</TableCell>
                          <TableCell>{invoice.Assigned}</TableCell>
                          <TableCell>{invoice.Created}</TableCell>
                          <TableCell>
                            <span>{invoice.Status}</span>
                          </TableCell>
                          <TableCell>
                            <span>
                              <svg
                                stroke="currentColor"
                                fill="currentColor"
                                stroke-width="0"
                                viewBox="0 0 24 24"
                                height="20px"
                                width="20px"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                              </svg>
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    {/* <TableFooter>
                  <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                  </TableRow>
                </TableFooter> */}
                  </Table>
                </div>
  </TabsContent>
</Tabs>
          
          </div>
        </div>
      </div></div>
  )
}

export default index