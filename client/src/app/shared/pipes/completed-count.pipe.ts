import { ITodo } from './../models/ITodo.interface';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'completedOnly'
})

export class CompletedOnlyPipe implements PipeTransform {
    transform(value: any, ...args: any[]): number {

        if (value instanceof Array) {
            let arr = value as Array<ITodo>;
            if (arr.length > 0) {
                return arr.filter((t: ITodo) => t.isCompleted).length;
            } else {
                return 0;
            }
        } else {
            return 0;
        }

    }
}