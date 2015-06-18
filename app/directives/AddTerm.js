function AddTerm(SearchQuery){

    var delay = (function(){

        var timer = 0;
        return function(callback, ms){
            clearTimeout (timer);
            timer = setTimeout(callback, ms);
        };
    })();

    return {
        restrict: 'E',

        template :
            `
            <span ng-click="toggle()"
                ng-class="showInput ? 'glyphicon glyphicon-minus' : 'glyphicon glyphicon-plus' "></span>
            <input type="text" ng-show="showInput">
            `,

        controller: ($scope,$element,$attrs) => {

            $scope.showInput = false;

            $scope.toggle = () => {

                $scope.showInput = ! $scope.showInput;

                // focus on the expanded input
                if($scope.showInput) {
                    var el = $element.find('input')[0];

                    // http://stackoverflow.com/questions/1096436/
                    window.setTimeout( () => { el.focus(); }, 0);
                }
            };
        },

        scope : {
            index: '='
        },

        link : (scope,element,attrs) => {

            element.find('input').bind('input',function(e){

                // wait until the user has stopped typing
                delay(() => {
                    console.log(`input entered`,scope.index);
                    var end = element.find('input')[0].value;
                    console.log(`user input`,end);
                    //scope.$emit('userInputAdded',{userInput: element[0]});
                    //sanitizeUserInput(element[0].getElementsByTagName('li'));

                    //scope.$digest();
                    //console.log(`start end`,
                    //    SearchQuery.getTermsAsArray(),
                    //    end);
                    //start = undefined;


                },1500);
            });
        }
    }
}

export default AddTerm;