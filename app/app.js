import angular from 'angular';
//import React from 'react';
//import ngReact from 'davidchang/ngReact';
import sortable from 'RubaXa/Sortable';
import ngSortable from 'jspm_packages/github/RubaXa/Sortable@1.2.0/ng-sortable';

import SearchQuery from 'app/services/SearchQuery';
import StringSanitizer from 'app/services/StringSanitizer';
import UserSelection from 'app/directives/UserSelection';
import AddTerm from 'app/directives/AddTerm';
//import SearchTerm from 'app/search-query/SearchTerm';
import SearchQueryCtrl from 'app/search-query/SearchQueryCtrl';


angular.module('myApp',['ng-sortable']) // 'react',
    .controller('SearchQueryCtrl',['SearchQuery','$scope','StringSanitizer', SearchQueryCtrl])
    .factory('SearchQuery',SearchQuery)
    .factory('StringSanitizer',StringSanitizer)
    .directive('userTextSelection',['SearchQuery','StringSanitizer', UserSelection])
    .directive('addTerm',['SearchQuery',AddTerm])
    //.value( 'searchTerm', SearchTerm )
;

/*
    GENERIC UTILITES
 */

Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};