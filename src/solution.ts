const formatValue = (input: string | number | boolean): string | number | boolean => {

    if (typeof input === 'string') {

        const test = input.toUpperCase();
        return test;
    }
    else if (typeof input === 'number') {
        return input * 10;
    }
    else if (typeof input === 'boolean') {
        return !input;
    }

    else {
        throw new Error("Invalid input type");
    }
};


const getLength = (info: any[] | string): number => {
    if (typeof info === 'string') {
        return info.length;
    }
    else if (Array.isArray(info)) {
        return info.length;
    }
    else {
        throw new Error("Invalid input type");
    }
};


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;

    }
};


type Items = {
    title: string;
    rating: number;
};

const filterByRating = (bookShelf: Items[]): Items[] => {
    return bookShelf.filter(book => book.rating >= 4);
};



type user = {
    id: number,
    name: string,
    email: string,
    isActive: boolean,
};

const filterActiveUsers = (userData: user[]): user[] => {
    return userData.filter(user => user.isActive === true);
}


interface Book {
    title: string,
    author: string,
    publishedYear: number,
    isAvailable: boolean,
};

const printBookDetails = (library: Book): void => {
    const { title, author, publishedYear, isAvailable } = library;

    const availability = isAvailable ? "Yes" : "No";

    console.log(
        `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${availability}`
    );

}


function getUniqueValues(
    arrayOne: (string | number)[],
    arrayTwo: (string | number)[]
): (string | number)[] {

    const newArray: (string | number)[] = [];

    function isDuplicate(value: string | number): boolean {
        for (let i = 0; i < newArray.length; i++) {
            if (newArray[i] === value) return true;
        }
        return false;
    }

    for (let i = 0; i < arrayOne.length; i++) {
        const value = arrayOne[i];
        if (value !== undefined && !isDuplicate(value)) {
            newArray[newArray.length] = value;
        }
    }

    for (let i = 0; i < arrayTwo.length; i++) {
        const value = arrayTwo[i];
        if (value !== undefined && !isDuplicate(value)) {
            newArray[newArray.length] = value;
        }
    }

    return newArray;
}


type Products = {
    name: string,
    price: number,
    quantity: number,
    discount?: number,
}

const calculateTotalPrice = (products: Products[]): number => {
    return products.reduce((total, product) => {
        let totalPrice = product.price * product.quantity;
        if (product.discount !== undefined && product.discount >= 0 && product.discount <= 100) {
            totalPrice = totalPrice * (1 - product.discount / 100);
        }
        return total + totalPrice;
    }, 0);


}


