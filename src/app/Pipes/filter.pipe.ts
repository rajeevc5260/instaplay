import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  
  // filtering the data
  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '') {
      return value;
    }

    const dataArray = [];
    for (const item of value) {
      if (item['title'] === filteredString) {
        dataArray.push(item);
      }
    }
    return dataArray;
  }
}
