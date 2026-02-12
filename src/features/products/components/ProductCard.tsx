import type { FC } from "react";

interface ProductProps {
    name: string,
    imageUrl: string,
    description: string,
    price: number
};

const ProductCard: FC<ProductProps> = ({ name, imageUrl, description, price }) => {
    return (
        <div className="border rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
            <img src={imageUrl} alt={name} className="w-24 h-24 object-contain" />
            <h2 className="text-lg font-medium text-center">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">{description}</p>
            <p className="font-bold">${price}</p>
            {/* Aquí podrías agregar más adelante el botón de Add to Cart */}
        </div>
    )
};

export default ProductCard;