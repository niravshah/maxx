System.register(["angular2/core", "./search-model"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, search_model_1;
    var SearchResultService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (search_model_1_1) {
                search_model_1 = search_model_1_1;
            }],
        execute: function() {
            SearchResultService = (function () {
                function SearchResultService() {
                    this.results = [
                        new search_model_1.SearchResultModel("Useful survey data", "Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.", "img/icon-2.png"),
                        new search_model_1.SearchResultModel("Useful survey data", "Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.", "img/icon-2.png"),
                        new search_model_1.SearchResultModel("Useful survey data", "Lorem ipsum dolor sit amet, in porro albucius qui, in nec quod novum accumsan, mei ludus tamquam dolores id. No sit debitis meliore postulant, per ex prompta alterum sanctus, pro ne quod dicunt sensibus.", "img/icon-2.png")
                    ];
                }
                SearchResultService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SearchResultService);
                return SearchResultService;
            })();
            exports_1("SearchResultService", SearchResultService);
        }
    }
});
//# sourceMappingURL=search-service.js.map