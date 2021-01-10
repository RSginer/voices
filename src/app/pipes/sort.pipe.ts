import { Pipe, PipeTransform } from '@angular/core';
import { Voice } from '../core/models/Voice';


@Pipe({
    name: 'sortVoices'
})
export class SortPipe implements PipeTransform {
    transform(items: any, sortOption: number): any {
        switch (sortOption) {
            case 0:
                return items.sort((a: Voice, b: Voice) => a.name > b.name);
            case 1:
                return items.sort((a: Voice, b: Voice) => a.name < b.name)
        }
    }
}