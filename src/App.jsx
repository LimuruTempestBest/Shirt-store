import React from 'react'
import shirt from './assets/shirt5(1).jpg'
import { Icon } from '@iconify/react';


function App() {
  return (

    <div className="bg-sky-100  flex justify-center items-center w-full h-screen" >

      <div className="rounded-r-lg bg-white p-10">
        <div className="flex">
          <div className="rounded-xl overflow-hidden ">
            <img src={shirt} className='w-96' />
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
            <div className="font-medium mt-3">
              Colour
            </div>
            <div className='flex  flex-rows'>
              {Array(1)
                .fill(0)
                .map(() => (
                  <div>
                    <Icon icon="carbon:radio-button" className="text-white-50 w-4 h-4 mt-2" />
                  </div>
                ))}
              <div className='flex flex-rows'>
                {Array(1)
                  .fill(0)
                  .map(() => (
                    <div>
                      <Icon icon="material-symbols:radio-button-unchecked" className="text-stone-900 w-4 h-4 mt-2 ml-1" />
                    </div>
                  ))}
              </div>
            </div>
            <div className="font-medium mt-5">
              Size
            </div>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white">
              XXS
            </button>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2">
              XS
            </button>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2">
              S
            </button>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2">
              M
            </button><br></br>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml">
              L
            </button>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2">
              XL
            </button>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2">
              XXL
            </button>
            <button className=" rounded font-normal mt-1 bg-cyan-400 w-10 text-white ml-2">
              XXXL
            </button><br></br>
            <button className="rounded font-semibold  text-white bg-blue-700 w-40 h-11 mt-10">
              Add to bag
            </button>
          </div>
          <div className='flex flex-rows'>
            {Array(1)
              .fill(0)
              .map(() => (
                <div>
                  <Icon icon="iconoir:cancel" className="text-stone-900  " />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>

  )
}

export default App