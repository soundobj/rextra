'use strict';

class SearchQueryCtrl {
    /**
     *
     * @param SearchQuery
     * @param $scope
     */
    constructor(SearchQuery,$scope,StringSanitizer) {
        this.SearchQuery = SearchQuery;
        this.StringSanitizer = StringSanitizer;
        this.$scope = $scope;
        this.searchTerms = [];
        this.userInput = [];
        this.showInputs = [];

        $scope.$on('searchTermAdded', (event, args) => {
            this.searchTerms = this.SearchQuery.getTermsAsArray();
            $scope.$apply();
        });

        $scope.$on('userInputAdded', (event, args) => {
            console.log(`input added`,args.userInput.innerText);
            this.searchTerms = this.StringSanitizer.splitString(args.userInput.innerText,"\n");
            $scope.$apply();
            console.log(`new search terms:`,this.searchTerms);
        });

        this.sortableItemsConfig = {
            onSort: (evt) => {
                this.searchTerms.clean(undefined);
                console.log(`just sorted`,evt,this.searchTerms);
            }
        }
    }

    deleteTerm(term){
        console.log(`called delete term`);
        this.SearchQuery.deleteTerm(term);
        this.searchTerms = this.SearchQuery.getTermsAsArray();
    }

    addTerm(index) {
        console.log(`adding term ${index}`);
        this.showInputs[index] = true;

    }
}

export default SearchQueryCtrl;