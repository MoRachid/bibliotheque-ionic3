import * as firebase from 'firebase';
import { UrlSerializer } from 'ionic-angular';

export class AuthService{

    // l'état d'authentification retourné par Firebase 
    isAuth = false;

    constructor(){
        firebase.auth().onAuthStateChanged((user) =>{
            if(user) {
                this.isAuth = true
            }else {
                this.isAuth = false;
            }
        })
    }

    // l'inscription d'un nouvel utilisateur
    signUpUser(email: string, password: string){
        return new Promise((resolve, reject) =>{
            firebase.auth().createUserWithEmailAndPassword(email,password).then(
                (user) => {
                    resolve(user);
                },
                (error) => {
                    reject(error);
                }
            );           
        });
    }

    //la connexion d'un utilisateur existant
    singInUser(email: string, password: string){
        return new Promise((resolve, reject) =>{
            firebase.auth().signInWithEmailAndPassword(email,password).then(
                (user) => {
                    resolve(user);
                },
                (error) => {
                    reject(error);
                }
            );
        });
    }
    
    // la déconnexion de l'utilisateur connecté 
    signOut() {
        firebase.auth().signOut();
    }
}