import React from 'react'
import shirt from './assets/shirt5(1).jpg'
import { Icon } from '@iconify/react';


function App() {
  return (

    <div className="bg-sky-100  flex justify-center items-center w-full h-screen" >

      <div className="rounded-r-lg bg-white p-5 md:p-10 ">
        <div className="flex">
          <div className="rounded-xl overflow-hidden ">
            <img src={shirt} className='w-60 md:w-96 ' />
          </div>
          <div className='p-2 md:p-5'>
            <div className="text-neutral-800 text-base md:text-xl font-semibold font-['Ubuntu']">black & white-T-Shirt
            </div>
            <div className="font-semibold text-base md:text-xl mt-4 tracking:wider"> $56
            </div>
            <div className='flex  flex-rows'>
              {Array(5)
                .fill(0)
                .map(() => (
                  <div>
                    <Icon icon="fluent:star-12-filled" className="text-yellow-300 w-2 h-2 md:w-4 h-4 mt-1" />
                  </div>
                ))}

              <div className="ml-2 text-blue-600 text-sm md:text-base">review (302)
              </div>
            </div>
            <div className="font-medium text-sm md:text-base mt-1 md:mt-3 font-['Ubuntu']">
              Colour
            </div>
            <div class="inline-flex rounded-md shadow-sm mt-1 md:mt-2" role="group">
              <button type="button" className="font-['Abel'] w-12 md:w-20 h-8 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 
              hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                White
              </button>
              <button type="button" className="font-['Abel'] w-12 md:w-20 h-8 text-sm font-medium text-gray-900 bg-transparent rounded-r-lg  border border-gray-900
              hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                Black
              </button>
            </div>
            <div className="font-medium mt-2 md:mt-5 text-sm md:text-base font-['Ubuntu']" role="button">
              Size
            </div>
            <div class="inline-flex rounded-md shadow-sm mt-1 md:mt-2" role="group">

              <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                XXXS
              </button>
              <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                XS
              </button>
              <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-l border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                S
              </button>
              <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                M
              </button>
            </div>

            <div>
              <div class="inline-flex rounded-md shadow-sm mt-2" role="group">
                <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  L
                </button>
                <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  XL
                </button>
                <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent border-l border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  XXL
                </button>
                <button type="button" class="font-['Abel'] w-11 md:w-12 h-8 md:h-10 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                  XXXL
                </button>
              </div>
            </div>
            
            <button className="font-['Ubuntu'] rounded font-semibold  text-white bg-blue-600 w-24 h-8 md:w-40 h-11 mt-10 hover:animate-bounce hover:bg-sky-900">
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
