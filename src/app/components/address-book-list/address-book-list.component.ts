import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Contact } from 'src/app/models/Contact';
import { RandomUserService } from 'src/app/services/random-user-api.service';
import { AddressBookAnimations } from 'src/app/shared/animations';

const CONTACTS_REQUIRED = 10;

@Component({
    selector: 'app-address-book-list',
    templateUrl: './address-book-list.component.html',
    styleUrls: ['./address-book-list.component.scss'],
    animations: [
        AddressBookAnimations.loadListTransition('500ms'),
        AddressBookAnimations.leaveTransition('500ms')
    ]
})
export class AddressBookListComponent implements OnInit {
    contacts: Contact[] = [];
    selectedContact: any;
    isContactSelectedInCard: boolean = false;
    private onDestroy$ = new Subject<void>(); 

    constructor(private randomUserService: RandomUserService) { }

    ngOnInit(): void {
        this.getContactList(CONTACTS_REQUIRED);
    }

    getContactList(quantity: number): void {
        this.randomUserService.getRandomUsers(quantity)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe((x: any) => {
            this.contacts = x.results;
        })
    }

    selectContact(contact: Contact): void {
        this.selectedContact = contact;
    }

    getSelectedContactChange(selectedContactChange: Contact): void {
        this.selectedContact = selectedContactChange;
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

}
