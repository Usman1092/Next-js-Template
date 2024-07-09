import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTable />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}

Tables.layout = Admin;




// import Link from "next/link";
// import React from "react";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchProducts = async (page = 0) => {
//   try {
//     const res = await axios.get(
//       `https://dummyjson.com/products?limit=10&skip=${page * 10}`
//     );
//     return res.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getServerSideProps = async () => {
//   const initialData = await fetchProducts();
//   return {
//     props: {
//       initialData,
//     },
//   };
// };

// function Products({ initialData }) {
//   const [page, setPage] = React.useState(0);

//   const { error, data, isFetching, isPlaceholderData } = useQuery({
//     queryKey: ["products", page],
//     queryFn: () => fetchProducts(page),
//     keepPreviousData: true,
//     initialData: page === 0 ? initialData : undefined,
//   });

//   if (error) {
//     return <h3>Error: {error.message}</h3>;
//   }

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-center text-4xl font-bold ">Products</h2>


       

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           {data && data.products && data.products.map((product) => (
//             <div key={product.id} className="group relative">
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                 <Link href={`/products/${product.id}`}>
//                   <img
//                     src={product.thumbnail}
//                     alt={product.title}
//                     className="h-400 w-100 object-cover object-center lg:h-full lg:w-full"
//                   />
//                 </Link>
//               </div>
//               <div className="mt-4 flex justify-between">
//                 <div>
//                   <h3 className="text-sm text-gray-700">
//                     <Link href={`/products/${product.id}`}>
//                       <span aria-hidden="true" className="absolute inset-0" />
//                       {product.title}
//                     </Link>
//                   </h3>
//                   <p className="mt-1 text-sm text-gray-500">
//                     {product.tags.join(", ")}
//                   </p>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">
//                   ${product.price}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {isFetching ? <span> Loading...</span> : null}

//         <div className="flex items-center justify-between mt-20 border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
//           <span className="bg-black px-4 pt-2 pb-2 pl-2 pr-2 rounded text-white">
//             Current Page: {page + 1}
//           </span>

//           <button
//             className="bg-black px-4 pt-2 pb-2 pl-2 pr-2 rounded text-white"
//             onClick={() => setPage((old) => Math.max(old - 1, 0))}
//             disabled={page === 0}
//           >
//             Previous Page
//           </button>
//           <button
//             className="bg-black px-4 pt-2 pb-2 pl-2 pr-2 rounded text-white"
//             onClick={() => {
//               if (!isPlaceholderData && data && data.total > (page + 1) * 10) {
//                 setPage((old) => old + 1);
//               }
//             }}
//             disabled={isPlaceholderData || data && data.total <= (page + 1) * 10}
//           >
//             Next Page
//           </button>
//         </div>
//       </div>
//      </div>
//   );
// }

// export default Products;
