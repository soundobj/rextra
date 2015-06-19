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

            // toggles the <input> visibility
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

        link : (scope,element,attr) => {

            element.find('input').bind('input',function(e){

                // wait until the user has stopped typing
                delay(() => {

                    let input = element.find('input')[0];
                    scope.$emit('userInputAdded',{
                        userInput: input.value,
                        insertAfter: scope.index + 1 // insert after the prior element
                    });

                    // clean up and close the <input>
                    input.value = "";
                    scope.showInput = false;
                    scope.$apply();

                },1500);
            });
        }
    }
}

export default AddTerm;