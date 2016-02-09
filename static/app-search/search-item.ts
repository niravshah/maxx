import {Component,Input} from 'angular2/core';


@Component({
    selector: 'search-list-item',
    templateUrl: 'app-search/templates/search-list-item-tmpl.html'
})


export class SearchListItem {
  @Input() searchItem;
}