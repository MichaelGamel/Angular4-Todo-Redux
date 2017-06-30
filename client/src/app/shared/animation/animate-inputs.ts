import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

export const ExplainerAnim = [
    trigger('explainerAnim', [
        transition('* => *', [
            query('.input-group', style({ opacity: 0, transform: 'translateX(-40px)' })),
            query('.input-group', stagger('500ms', [
                animate('500ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
            ])),
            query('.input-group', [
                animate(1000, style('*'))
            ])
        ])
    ])
]