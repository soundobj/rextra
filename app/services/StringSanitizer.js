function StringSanitizer () {

	return {
		sanitize(string){
			return string.trim().replace(/(\r\n|\n|\r)/gm," ");
		},

		splitString(string,delimiter) {
			var items =string.replace(/<(?:.|\n)*?>/gm, '')
				.split(delimiter)
				//requires http://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
				.clean("")
			;

			items = items.map( (element) => {
				return this.sanitize(element);
			});

			return items;
		}
	};
}
export default StringSanitizer;