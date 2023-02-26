export type ProductImage = {
    imageFilename: string,
    thumbnailFilename: string,
};

export type Product = {
    id: number, 
    brand: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    images: ProductImage[],
};