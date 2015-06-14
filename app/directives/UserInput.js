function UserInput () {

    var delay = (function(){
        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    return function(scope,element,attrs) {
        element.bind('input',function(e) {
            delay(() => {
                console.log(`input entered`,element[0].innerText);
                // TODO: once we emit the user input then remove the newly added item
                // otherwise it will appear twice once its added to the search terms array.
                scope.$emit('userInputAdded',{userInput: element[0]});
            },1500);
        });
    }
}

export default UserInput;