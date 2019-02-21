// Modèle de donnée de CD ...
export class Cd{
    nameArtist: string;
    yearPublish: number;
    labelCd: string;
    price: number;
    isLendCd: boolean;
    namePerson: string;

    constructor(public nameCd: string){
        this.isLendCd = false;
        this.namePerson = '';
    }
}