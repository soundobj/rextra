function UserSelection (SearchQuery,StringSanitizer) {

	return function(scope, element, attrs) {
		element.bind('click', function(e){

			function checkKeyPressed(e){
				/* add the user selection to SearchQuery if user
				 * selected text whilst holding down the x
				 * keyboard character
			     */
				if (e.keyCode === 88) {
					console.log(`selection: ${window.getSelection().toString()}`);
					SearchQuery.addTerm(
                        StringSanitizer.sanitize(
                            window.getSelection().toString()));
                    scope.$emit('searchTermAdded',{});
				}
			}
			window.addEventListener('keyup', checkKeyPressed, false);
		});
	};
}
export default UserSelection;