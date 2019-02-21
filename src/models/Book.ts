// Modèle de donnée pour un livre ...
export class Book{
    nameAuthor: string;
    yearPublish: number;
    nameEdition: string;
    description: string[];
    price: number;
    isLendBook: boolean;
    namePerson: string;

    constructor(public nameBook: string){
        this.isLendBook = false;
        this.namePerson = '';
    }

}