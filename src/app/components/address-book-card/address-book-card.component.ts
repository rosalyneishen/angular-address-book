import { Contact } from 'src/app/models/Contact';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AddressBookAnimations } from 'src/app/shared/animations';

@Component({
    selector: 'app-address-book-card',
    templateUrl: './address-book-card.component.html',
    styleUrls: ['./address-book-card.component.scss'],
    animations: [
        AddressBookAnimations.loadTransition('500ms'),
        AddressBookAnimations.leaveTransition('500ms'),
        AddressBookAnimations.shiftTransition('500ms'),
    ]
})
export class AddressBookCardComponent implements OnInit {
    @Input() selectedContact: Contact | undefined;
    @Output() selectedContactChange = new EventEmitter<Contact>();

    constructor() { }

    ngOnInit(): void {}

    hideContactDetails() {
        this.selectedContactChange.emit(undefined);
    }
}
