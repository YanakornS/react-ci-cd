import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-lg">
      {/* รูปสินค้า */}
      <figure className="relative">
        <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />

        {/* Badge "โฆษณา" */}
        <div className="absolute top-2 left-2">
          <span className="badge badge-warning gap-2 px-3 py-1 text-xs font-semibold">
            🔥 โฆษณา
          </span>
        </div>
      </figure>

      {/* รายละเอียดสินค้า */}
      <div className="card-body p-4">
        <h3 className="text-sm font-semibold">{product.name}</h3>
        <p className="text-lg font-bold text-gray-900">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
