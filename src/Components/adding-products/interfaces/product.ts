export interface Product {
    id: string
    brand: string
    title: string
    price: number
    availabilityStatus: string
    thumbnail: string[]
    description: string
}

export interface AddingProductsProps {
    handleCreatedProds: (product: Product) => void
    handleEdit: (product: Product) => void
    editData?: Product | null
}