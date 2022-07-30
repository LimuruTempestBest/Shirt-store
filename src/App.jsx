import React from 'react'
import shirt from './assets/shirt5(1).jpg'
import { Icon } from '@iconify/react';


function App() {
  return (

    <div className="bg-sky-100  flex justify-center items-center w-full h-screen" >

      <div className="rounded-r-lg bg-white p-10">
        <div className="flex">
          <div className="rounded-xl overflow-hidden ">
            <img src={shirt} className='md:w-96 w-14' />
          </div>
          <div className='p-5'>
            <div className="text-neutral-800 text-xl font-semibold font-['Ubuntu']">white-T-Shirt
            </div>
            <div className="font-semibold text-xl mt-4 tracking:wider"> $56
            </div>
            <div className='flex  flex-rows'>
              {Array(5)
                .fill(0)
                .map(() => (
                  <div>
                    <Icon icon="fluent:star-12-filled" className="text-yellow-300 w-4 h-4 mt-1" />
                  </div>
                ))}

              <div className="ml-2 text-blue-600">review (302)
              </div>
            </div>
            <div className="font-medium mt-5">
              Size
            </div>
            <button type="button" class="rounded font-normal mt-6 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              XXS</button>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              XS
            </button>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              S
            </button>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              M
            </button><br></br>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              L
            </button>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              XL
            </button>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              XXL
            </button>
            <button className="rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2 hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-600 dark:focus:ring-blue-800 ">
              XXXL
            </button><br></br>
            <button className="rounded font-semibold  text-white bg-blue-600 w-40 h-11 mt-10 hover:animate-bounce hover:bg-sky-900">
              Add to bag
            </button>
          </div>
          <div className='flex flex-rows'>
            {Array(1)
              .fill(0)
              .map(() => (
                <div>
                  <Icon icon="iconoir:cancel" className="text-red-500 hover:animate-bounce " />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
