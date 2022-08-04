import React from 'react'
import shirt from './assets/shirt5(1).jpg'
import { Icon } from '@iconify/react';


function App() {
  return (

    <div className="bg-sky-100  flex justify-center items-center w-full h-screen" >

      <div className="rounded-md bg-white p-5 md:p-10">
        <div className="md:flex">
          <div className="rounded-md overflow-hidden ">
            <img src={shirt} className="mr-10 mt-14 h-56 md:w-80 h-auto " />
          </div>
          <div className="p-2 md:p-5">
            <div className="text-neutral-800 text-base md:text-xl font-semibold font-['Ubuntu']">black & white-T-Shirt
            </div>
            <div className="font-semibold text-base md:text-xl mt-4 tracking:wider"> $56
            </div>
            <div className='flex  flex-rows'>
              {Array(5)
                .fill(0)
                .map(() => (
                  <div>
                    <Icon icon="fluent:star-12-filled" className="text-yellow-300 w-3 h-3 md:w-4 h-4 mt-1" />
                  </div>
                ))}

              <div className="ml-2 text-blue-600 text-sm md:text-base">review (302)
              </div>
            </div>
            <div className="font-medium text-sm md:text-base mt-1 md:mt-3 font-['Ubuntu']">
              Colour
            </div>

            <div className="border-indigo-600 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="accent-orange-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 font-['Abel']" >White</label>
            </div>
            <div className="border-indigo-600 flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
              <input id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="accent-orange-300 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="bordered-radio-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300 font-['Abel']">Black</label>
            </div>


            <div className="font-medium mt-2 md:mt-5 text-sm md:text-base font-['Ubuntu']">
              Size
            </div>
            <div class="inline-flex rounded-md shadow-sm mt-1 md:mt-2" role="group" aria-Label="Size Group">

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
              <div class="inline-flex rounded-md shadow-sm mt-2" role="group" aria-Label="Size Group">
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

            <button className="font-['Ubuntu'] rounded font-semibold  text-white bg-blue-600 w-24 h-8 md:w-40 h-11 mt-5 hover:animate-bounce hover:bg-sky-900">
              Add to bag
            </button>
          </div>
        </div>
      </div>
    </div>




  )
}

export default App
