import {Component} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser'
import {SearchResultService} from './search-service';
import {SearchListItem} from './search-item'

@Component({
    selector: 'search-result-list',
    directives:[SearchListItem],
    templateUrl: 'app-search/templates/search-list-tmpl.html'
})


class SearchResultList {
  constructor(public searchService:SearchResultService){}
}

bootstrap(SearchResultList,[SearchResultService]);
