import { Cd } from './../models/Cd';
import { Book } from './../models/Book';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;


export class DataService{

    books$ = new Subject<Book[]>();
    cds$ = new Subject<Cd[]>();
    
    cdList: Cd[] = [
        {
            nameCd: 'Thank u, next',
            nameArtist: 'Ariana Grande',
            yearPublish: 2019,
            labelCd: 'Republic Records',
            price: 29.90,
            isLendCd: false,
            namePerson: ''
        },
        {
            nameCd: 'The Essential',
            nameArtist: 'Mickael Jackson',
            yearPublish: 2011,
            labelCd: 'Sony Music',
            price: 23.99,
            isLendCd: true,
            namePerson: ''
        },
        {
            nameCd: 'Or Noir Part 3',
            nameArtist: 'Kaaris',
            yearPublish: 2019,
            labelCd: 'Def Jam Recordings France',
            price: 20.45,
            isLendCd: true,
            namePerson: ''
        },
        {
            nameCd: 'Ceinture noire',
            nameArtist: 'Gims',
            yearPublish: 2019,
            labelCd: 'Ultra Records, LLC',
            price: 25.45,
            isLendCd: false,
            namePerson: ''
        },
        {
            nameCd: 'La Vie de rêve',
            nameArtist: 'Bigflo et Oli',
            yearPublish: 2018,
            labelCd: '?',
            price: 20.45,
            isLendCd: true,
            namePerson: ''
        }
    ];

    bookList : Book[] = [
        {
            nameBook: 'Scrum',
            nameAuthor: "Claude Aubry",
            yearPublish: 2015,
            nameEdition: "DUNOD",
            description: [
                'Le guide pratique de la méthode agile la plus populaire.'
            ],
            price: 35.90,
            isLendBook: true,
            namePerson: ''
        },
        {
            nameBook: 'HTML5 & CSS3',
            nameAuthor: "Mathieu Nebra - Collection OpenClassrooms",
            yearPublish: 2017,
            nameEdition: "OpenClassrooms",
            description: [
                'Réalisez votre site web avec HTML 5 et CSS 3'
            ],
            price: 26.90,
            isLendBook: false,
            namePerson: ''
        },
        {
            nameBook: 'Tout JavaScript',
            nameAuthor: "Olivier Hondermarck",
            yearPublish: 2019,
            nameEdition: "Collection InfoPro - Etudes, développement et intégration",
            description: [
                'Maîtrisez les bases de la programmation JavaScript, démarrez avec les frameworks Node.js, React, Angular...',
                'Pratiquez avec le site toutjavascript.com'
            ],
            price: 29.90,
            isLendBook: true,
            namePerson: ''
        },
        {
            nameBook: 'Python 3',
            nameAuthor: "Gérard Swinnen",
            yearPublish: 2003,
            nameEdition: "Collection Noire",
            description: [
                'Apprendre à programmer avec Python 3'
            ],
            price: 32.40,
            isLendBook: false,
            namePerson: ''
        },
        {
            nameBook: 'POO',
            nameAuthor: "Hugues Bersini",
            yearPublish: 2008,
            nameEdition: "Eyrolles",
            description: [
                'La programmation orientée objet',
                ' Cours et exercices UML 2 avec Java, C#, C++, Python, PHP et LINQ.'
            ],
            price: 25,
            isLendBook: false,
            namePerson: ''
        }
    ];


    emitBooks() {
        this.books$.next(this.bookList.slice());
    }

    emitCds() {
        this.cds$.next(this.cdList.slice());
    }

    //Pour l'enregistrement des données des livres
    saveBook() {
        return new Promise((resolve,reject) => {
            firebase.database().ref('Books').set(this.bookList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    // Pour la récupération des données des livres
    retreiveBook() {
        return new Promise((resolve,reject) => {
            firebase.database().ref('Books').once('value').then(
                (data: DataSnapshot) => {
                    this.bookList = data.val();
                    this.emitBooks();
                    resolve('Données récupérées avec succés !');
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    //Pour l'enregistrement des données des CDs
    saveCd() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('Cd').set(this.cdList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }

    // Pour la récupération des données des CDs
    retreiveCd() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('Cd').once('value').then(
                (data: DataSnapshot) => {
                    this.cdList = data.val();
                    this.emitCds();
                    resolve("Données récupérées avec succes !")
                },
                (error) => {
                    reject(error);
                }
            )
        })
    }
}