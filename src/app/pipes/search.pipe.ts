import { Pipe, PipeTransform } from '@angular/core';
import { Voice } from '../core/models/Voice';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(items: Voice[], searchText: string | undefined, tag: string): any {
    if (!items) {
      return [];
    }
    if (!searchText && tag === "All") {
      return items;
    }

    if (tag !== "All") {
      items = items.filter((item) => item.tags.includes(tag.toLocaleLowerCase()))
    }

    if (searchText) {
      searchText = searchText.toLocaleLowerCase();

      return items.filter(it => it.name.toLocaleLowerCase().includes(searchText || ""));
    }


    return items;

  }
}
