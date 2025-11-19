//Author: Md Hamid Muntasir 
//Course Email: hmovi0007@gmail.com

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    } else if (typeof value === 'boolean') {
        return !value;
    }
    throw new Error('Invalid input type');
}

function getLength(value: string | any[]): number {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }
    throw new Error('Invalid input type');
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }  
}

interface Item {
    title: string;
    rating: number;
}

function filterByRating(items: { title: string; rating: number }[]) {
    return items
        .filter(item => item.rating >= 1 && item.rating <= 5) // validation in-block
        .filter(item => item.rating >= 4);                
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`);
}

/*function getUniqueValues<T extends string | number>(arr1: T[], arr2: T[]): T[] {
    const combined: T[] = [];
    for (const item of arr1) {
        if (!combined.includes(item)) {
            combined.push(item);
        }
    }
    for (const item of arr2) {
        if (!combined.includes(item)) {
            combined.push(item);
        }
    }
    return combined;
} */ //Deprecated due to usage of .includes
 
function getUniqueValues<T extends number | string>(
    arr1: T[],
    arr2: T[]   //Takes two arrays but with generics
): T[] {
    const result: T[] = [];
    let resultIndex = 0; // Pointer strategy

    // Lets check the exists but manually implemented exhaustive apporach
    function exists(value: T): boolean {
        for (let i = 0; i < resultIndex; i++) {
            if (result[i] === value) return true;
        }
        return false;
    }

    // Do the arrays separately
    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];
        if (!exists(value)) {
            result[resultIndex] = value; // pure indexing
            resultIndex++;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        const value = arr2[j];
        if (!exists(value)) {
            result[resultIndex] = value; // pure indexing
            resultIndex++;
        }
    }

    return result;
}


interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, product) => {
        const productTotal = product.price * product.quantity;
        const discountAmount = product.discount ? (productTotal * product.discount) / 100 : 0;
        return total + (productTotal - discountAmount);
    }, 0);
}