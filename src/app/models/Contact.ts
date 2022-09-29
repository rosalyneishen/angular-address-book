export interface Contact {
    name: ContactName;
    phone: string;
    id: string;
}

interface ContactName {
    first: string;
    last: string;
}