import React from "react";
import ItemCount from "../ItemCount/index"

const ItemDetail = ({ detail }) => {
  
  return (

    <div className="flex justify-center items-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row w-4/5 max-w-4xl">
        {/* Imagen del producto */}
        <div className="md:w-3/3 w-full mb-4 md:mb-0">
          <img
            className="w-full h-auto object-contain"
            src={`../../${detail.imageUrl}`}
            alt={detail.name}
          />
        </div>

        {/* Información del producto */}
        <div className="md:w-2/3 w-full md:pl-6 flex flex-col justify-between">
          <div className="h-96">
            <h2 className="text-2xl font-semibold mb-2">{detail.name}</h2>
            <p className="text-gray-600 mb-4">{detail.description}</p>
          </div>
          <ItemCount stock={15} initial={1}/>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
