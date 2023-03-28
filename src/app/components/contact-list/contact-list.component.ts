import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/models/contact.interface';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit, OnDestroy {

  //Create a property to store the contacts
  contacts: IContact[] = [];
  //Create a property to store the subscription
  subscription: any;
  //To Use a services we need to inject it in the constructor
  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    //Get the contact list that service returns
    //this.contacts = this.contactService.getContacts();
    this.contactService.getContacts()
    .then((contacts: IContact[]) => this.contacts = contacts)
    .catch((error: any) => console.error(error))
    .finally(() => console.log('Request completed'));
    //Show the contacts in the console as table
    console.table(this.contacts);

  }
  //Get contact details
  getContactDetails(id: number): void {
    //Get the contact by id
    //const contact = this.contactService.getContactById(id);
    /*this.contactService.getContactById(id)
    ?.then((contact: IContact) => console.log(contact))
    .catch((error: any) => console.error(error))
    .finally(() => console.log('Request completed'));*/
    this.subscription = this.contactService.getContactById(id)?.subscribe(
      (contact: IContact) => console.log(contact));
    //Show the contact in the console
    //console.log(contact);
  }
  ngOnDestroy(): void {
    //Unsubscribe the subscription
    this.subscription?.unsubscribe();
  }

}


