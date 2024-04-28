import React from 'react';
import { FaEdit,FaTrashAlt,FaRegArrowAltCircleDown,FaRegEye } from "react-icons/fa";

export  const Table:React.FC=()=> {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                 
                  <th scope="col" className="px-6 py-4">Description</th>
                  <th scope="col" className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                 
                  <td className="whitespace-nowrap px-6 py-4 h-36 w-52">Use responsive table component, with helper examples for table column width, bordered and striped tables, pagination, fixed header, overflow, spacing & more.</td>
                 <td className="whitespace-nowrap px-6 py-2 flex space-x-4  ">
                        <button className="text-white  px-3 py-1 m-1 rounded-md bg-gray-600"><FaRegArrowAltCircleDown/></button>
                        <button className="text-white  m-1 px-3 py-1 rounded-md bg-red-500"><FaEdit/></button>
                        <button className="text-white  m-1 px-3 py-1 rounded-md bg-red-500"><FaTrashAlt/></button>
                         <button className="text-white  m-1 px-3 py-1 rounded-md bg-red-500"><FaRegEye/></button>
                    </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}