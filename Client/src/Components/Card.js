import React, { useContext } from 'react'
import { AppContext } from '../context'
import { ReqContext } from '../ReqContext';


const Card = (props) => {

  const { name, cover, url, authors = [], rating, year } = props;
  const { bookName, SetBookName, list, } = useContext(AppContext)
  const { EndpointFunc } = useContext(ReqContext)



  function handleSubmit(inputVal) {
    // Endpoint()
    console.log(inputVal)
  }

  function handleChange({ target }) {
    // SetBookName()
    let val = target.value;
    SetBookName(val)
  }



  return (
    <>
      <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required value={bookName} onChange={(e) => handleChange(e)} />
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
          EndpointFunc()
        }}>Search</button>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2  grid-cols-1  gap-4 bg-green-400  my-6 py-6  ">
        {list?.map(({ name, cover, url, authors = [], rating, year }, index) => {
          return (
            <>
            <div key={index===0 ? index + 1 : index}>
                <a href={url} className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="w-5/12   " src={cover} alt="" />
                  <div class="flex flex-col justify-between px-6 leading-normal">
                    {name ? <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {name} </h5> : 'Not found'}
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">
                   Rating    {rating}
                    </p>
             <span className='text-xl font-bold '> Author </span>
               {authors.map(author => author)}
                  </div>
                </a>

                </div>
            </>

          )
        })}
      </div>
    </>
  )
}

export default Card