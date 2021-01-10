import { Pipe, PipeTransform } from '@angular/core';
import { Voice } from '../core/models/Voice';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(items: Voice[], searchText: string | undefined): any {
        if (!items) {
            return [];
          }
          if (!searchText) {
            return items;
          }
          searchText = searchText.toLocaleLowerCase();
      
          return items.filter(it => {
            return it.name.toLocaleLowerCase().includes(searchText || "");
          });
    }
}