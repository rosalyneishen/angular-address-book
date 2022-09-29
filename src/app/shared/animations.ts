import { animate, style, transition, trigger } from "@angular/animations";

export class AddressBookAnimations {
    static leaveTransition(duration: string = '300ms') {
        return trigger('leave' + duration, [
            transition(':leave', [
                style({height:'600px', opacity : 1}),
                animate(duration, style({height : '200px', opacity : 0}))
            ])
        ])
    }

    static loadTransition(duration: string = '300ms') {
        return trigger('load' + duration, [
            transition(':enter', [
                style({height: '0', opacity:0}),
                animate(duration, style({height: '100px', opacity : 1}))
            ])
        ])
    }

    static loadListTransition(duration: string = '300ms') {
        return trigger('loadList' + duration, [
            transition(':enter', [
                style({height: '200px', opacity:0}),
                animate(duration, style({height: '500px', opacity : 1}))
            ])
        ])
    }

    static shiftTransition(duration: string = '500ms') {
        return trigger('shift' + duration, [
            transition(':leave', [
                style({transform: 'translateX(0%)'}),
                animate(duration, style({transform : 'translateX(50%)'}))
            ])
        ])
    }
}