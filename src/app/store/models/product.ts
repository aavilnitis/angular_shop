interface Variation {
    id: number;
    name: string;
    price: number;
    stock: number;
    imageUrl: string;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
    type: 'simple' | 'variable';
    description: string;
    imageUrl: string;
    variations?: Variation[];
}