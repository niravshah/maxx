System.register([], function(exports_1) {
    var SearchResultModel;
    return {
        setters:[],
        execute: function() {
            SearchResultModel = (function () {
                function SearchResultModel(title, body, img) {
                    if (title === void 0) { title = ""; }
                    if (body === void 0) { body = ""; }
                    if (img === void 0) { img = ""; }
                    this.title = title;
                    this.body = body;
                    this.img = img;
                }
                return SearchResultModel;
            })();
            exports_1("SearchResultModel", SearchResultModel);
        }
    }
});
//# sourceMappingURL=search-model.js.map