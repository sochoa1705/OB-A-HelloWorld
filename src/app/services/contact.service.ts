import { Injectable } from '@angular/core';
//Import mock contacts
import { CONTACTS } from 'src/app/mocks/contacts.mocks';
import { IContact } from 'src/models/contact.interface';
//Import the Observable and of operators from rxjs
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  getContacts(): Promise<IContact[]> {
    //return CONTACTS; //It retuns the array of contacts 
    return Promise.resolve(CONTACTS); //It returns a promise that resolves with the array of contacts
  }
/*
  getContactById(id: number): IContact | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);
    if (contact) {
      return contact;
    }else{
      return;
    }
  }
  */
 //get function using promises
 
 /*getContactById(id: number): Promise<IContact> | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);
    if (contact) {
      return Promise.resolve(contact);
    }else{
      return;
    }
  }*/
  //get function using observables
  getContactById(id: number): Observable<IContact> | undefined {
    const contact = CONTACTS.find((contact: IContact) => contact.id === id);
    
    let observable = new Observable<IContact>((observer) => {
      observer.next(contact);//Emit the contact
      observer.complete();//Complete the observable
    } ); 
    
    if (contact) {
      return observable;
    }else{
      return;
    }
  }

}
