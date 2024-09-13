// import Image from 'next/image';

// export default function Home() {
//   return (
//     <>
//      <header className="bg-gray-100 p-10 mb-8 rounded-lg ">
//       <h1 className="text-2xl font-bold mb-4">
//         {/* Logo, Search Bar, and Search Button aligned in the same line */}
//         <div className="flex items-center space-x-4">
//           {/* Logo */}
//           <Image
//             src="/Logo.svg"
//             alt="Sample Image"
//             width={150}  
//             height={100}  
//           />

//           {/* Search Bar with Icon */}
//           <div className="relative w-full flex-grow">
//             <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//             <Image
//             src="/Vector.svg"
//             alt="Sample Image"
//             width={15}  
//             height={15}  
//           />
//             </span>
//             <input
//               type="text"
//               placeholder="Search trademark here eg. Mickey Mouse"
//               className="border p-2 pl-10 flex-grow w-full text-sm text-gray-400"
//             />
//           </div>

//           {/* Search Button */}
//           <button className="bg-blue-500 text-white text-sm py-3 px-6 rounded-xl">
//             Search
//           </button>
//         </div>
//       </h1>
//       </header>
      
//     <div className="container mx-auto p-4">
//       {/* Filters */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Owner"
//           className="border p-2"
//         />
//         <input
//           type="text"
//           placeholder="Law Firm"
//           className="border p-2"
//         />
//         <input
//           type="text"
//           placeholder="Attorney"
//           className="border p-2"
//         />
//         <input
//           type="text"
//           placeholder="Status"
//           className="border p-2"
//         />
//       </div>

//       {/* Status Indicator */}
//       <p className="mb-4 text-red-500">Status: Ready to search</p>

//       {/* Results */}
//       <div className="grid grid-cols-1 gap-4">
//         <div className="border p-4 rounded">
//           <h2 className="text-xl font-bold">Trademark Result 1</h2>
//         </div>
//         <div className="border p-4 rounded">
//           <h2 className="text-xl font-bold">Trademark Result 2</h2>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



import Image from 'next/image';

export default function Home() {
  return (
    <>
     {/* Header Section */}
     <header className="bg-gray-100 p-10 mb-4 rounded-lg shadow-lg">
     <div className="flex items-center space-x-4 max-w-full mx-auto w-full">
       {/* Logo */}
       <Image
         src="/Logo.svg"
         alt="Logo"
         width={150}  
         height={100}
       />

       {/* Search Bar with Icon */}
       <div className="relative w-full flex-grow max-w-2xl">
         <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
           <Image
             src="/Vector.svg"
             alt="Search Icon"
             width={20}
             height={20}
           />
         </span>
         <input
           type="text"
           placeholder="Search Trademark here eg. Mickey Mouse"
           className="border rounded-full p-3 pl-10 flex-grow w-full text-sm text-gray-400"
         />
       </div>

       {/* Search Button */}
       <button className="bg-blue-500 text-white font-semibold text-sm py-3 px-7 rounded-xl">
         Search
       </button>
     </div>
   </header>
    <div className="container mx-auto ">
      {/* Search Results Section */}
      <section className="bg-white rounded-lg shadow-md">
        <h2 className="text-md text-gray-500 font-semibold mb-4">
          About 159 Trademarks found for "nike"
        </h2>
        <hr className="border-t-2 border-gray-300 mb-6" />
        <div className="flex items-center space-x-2 mb-4">
          <span>Also try searching for:</span>
          <button className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full">nike</button>
          <button className="bg-orange-100 text-orange-500 px-3 py-1 rounded-full">like</button>
        </div>

        <div className="flex">
          {/* Results Column */}
          <div className="w-2/3">
            {/* Example result - repeat this block for each result */}
            <div className="flex items-start mb-4 p-4 bg-gray-50 rounded-md shadow">
              {/* Trademark Icon */}
              <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
                <Image
                  src="/placeholder-image.svg"
                  alt="logo"
                  width={50}
                  height={50}
                />
              </div>
              {/* Result Info */}
              <div className="ml-4">
                <h3 className="text-lg font-bold">Meta Logo</h3>
                <p>FACEBOOK INC.</p>
                <p className="text-sm text-gray-500">88713620 - 26th Jun 2020</p>

                {/* Status */}
                <div className="flex items-center space-x-2 mt-2">
                  <span className="text-green-500 font-bold">Live/Registered</span>
                  <span className="text-gray-500 text-sm">Class 45</span>
                  <span className="text-gray-500 text-sm">Class 8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Filter Sidebar */}
          <div className="w-1/3 pl-6">
            {/* Status Filter */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
              <h4 className="font-bold mb-3">Status</h4>
              <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full mr-2">All</button>
              <button className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full mr-2">Registered</button>
              <button className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full">Pending</button>
            </div>

            {/* Owners Filter */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-6">
              <h4 className="font-bold mb-3">Owners</h4>
              <input
                type="text"
                placeholder="Search Owners"
                className="border p-2 rounded-md w-full mb-3"
              />
              <div className="flex flex-col space-y-2">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Tesla, Inc.</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">SpaceX Inc.</span>
                </label>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">LEGALFORCE RAPC</span>
                </label>
              </div>
            </div>

            {/* Display Toggle */}
            <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
              <h4 className="font-bold mb-3">Display</h4>
              <div className="flex space-x-3">
                <button className="bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                  Grid View
                </button>
                <button className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full">
                  List View
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
