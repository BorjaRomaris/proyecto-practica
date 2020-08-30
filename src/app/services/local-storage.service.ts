import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  tokenName = '--token-Users&Posts';

  private set = (key, value) => {
    if (localStorage) {
      localStorage.setItem(key, value);
    } else {
      alert('El navegador no soporta el ApiStorage');
    }
  }

  private get = (key) => {
    if (localStorage) {
      if (key in localStorage){
        return localStorage.getItem(key);
      }
    } else {
      alert('El navegador no soporta el ApiStorage');
    }
  }

  public setToken = (token) => {
    this.set(this.tokenName, token);
  }

  public getToken = () => {
    return this.get(this.tokenName);
  }

  public getParsedToken = () => {
    // tslint:disable-next-line:prefer-const
    let token = this.getToken();
    return JSON.parse(atob(token.split('.')[1]));
  }

  public removeToken = () => {
    localStorage.removeItem(this.tokenName);
  }


}
