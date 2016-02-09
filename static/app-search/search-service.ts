import {Injectable} from "angular2/core";
import {SearchResultModel} from "./search-model";

@Injectable()
export class SearchResultService{
    results = [
        new SearchResultModel("Fully responsive","Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.","img/icon-1.png" ),
        new SearchResultModel("Useful survey data","Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.","img/icon-2.png" ),
        new SearchResultModel("Receive it by email","Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.","img/icon-3.png" )
    ];

}