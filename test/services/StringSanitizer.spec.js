import angular from 'angular';
import 'angular-mocks';

describe('StringSanitizer scenarios', () => {

	let stringSanitizer;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(inject(function(_StringSanitizer_,_$rootScope_) {
        stringSanitizer = _StringSanitizer_;
    }));

	it('trims white spaces', () => {
		expect(stringSanitizer.sanitize(" bla ")).toBe("bla");
        expect(stringSanitizer.sanitize("the world bla ")).toBe("the world bla");
	});

	it('trims new lines and tabs', () => {
        expect(stringSanitizer.sanitize("\n \r\n bla \r")).toBe("bla");
	});

	it('splits a string delimited by return spaces and cleans any html markup', () => {
		var items = stringSanitizer.splitString("\nthis\n with spaces    \n<p>markup</p>","\n");
        expect(items.length).toBe(3);
		expect(items[1]).toBe('with spaces');
		expect(items[2]).toBe('markup');
	});

	afterEach(() => {
		stringSanitizer = null;
	});
});