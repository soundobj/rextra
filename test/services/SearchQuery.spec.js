import angular from 'angular';
import 'angular-mocks';

describe('SearchQuery', () => {

	beforeEach(angular.mock.module('myApp'));

	let SearchQuery;

	beforeEach(inject(function(_SearchQuery_,_$rootScope_) {
		SearchQuery = _SearchQuery_;
	}));

	it('add items to search Term but do not allow duplicates', () => {
		SearchQuery.addTerm("one");
		expect(SearchQuery.getTerms().has("one")).toBe(true);
		SearchQuery.addTerm("one");
		expect(SearchQuery.getTerms().size).toBe(1);
	});

	it('clears SearchQuerys from factory', () => {
		SearchQuery.addTerm("one");
		SearchQuery.clearTerms();
		expect(SearchQuery.getTerms().size).toBe(0);
	});

	it('deletes terms from SearchQuery', () => {
		SearchQuery.addTerm("one");
		SearchQuery.deleteTerm("one");
		expect(SearchQuery.getTerms().size).toBe(0);
	});

	it('moves an item position on the Set terms', () => {
		SearchQuery.setTerms(["one","two","three"]);
		SearchQuery.moveItem("three",1);

		let terms = SearchQuery.getTermsAsArray();
		expect(terms.indexOf("three")).toBe(1);
	});

	afterEach(() =>{
		SearchQuery.clearTerms();
	});
});