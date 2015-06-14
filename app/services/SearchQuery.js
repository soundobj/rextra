function SearchQuery () {

	let _terms = new Set();

	return {
		addTerm(term) {
			if(term) {
				_terms.add(term);
			}
		},

		getTerms() {
			return _terms;
		},

		clearTerms() {
			_terms.clear();
		},

        getTermsAsArray() {
            return [..._terms];
        },

        deleteTerm(term) {
            if(term) {
                _terms.delete(term);
            }
        },

        setTerms(terms) {
            _terms = new Set(terms);
        },
        /**
         * Moves a item in the set to a new position
         * @param {Object} term -
         * @param {Number} position -
         */
        moveItem(term,position) {
            if(term && _terms.has(term)) {
                var terms = this.getTermsAsArray();
                // remove the item from its current position
                terms.splice(terms.indexOf(term),1);
                // push item to specific position
                terms.splice(position,0,term);
                this.setTerms(terms);
            }
        }
	};
}
export default SearchQuery;