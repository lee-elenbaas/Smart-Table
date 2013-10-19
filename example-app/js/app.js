'use strict';
// Declare app level module which depends on filters, and services
var app = angular.module('myApp', ['smartTable.table']).
    controller('mainCtrl', ['$scope', function (scope) {
        var
            nameAsset = ['Pierre', 'Pol', 'Jacques', 'Laurent', 'Nicolas'],
            generateRandomItem = function (id) {
                var
                    age = Math.floor(Math.random() * 100),
                    balance = Math.random() * 10000,
                    name = nameAsset[Math.floor(Math.random() * 5)],
                    email = name + balance + '@' + name + '.com';

                return {
                    id: id,
                    name: name,
                    email: email,
                    age: age,
                    balance: balance
                };
            };


        // you can load data from remote here.
        scope.ds = function(page, pageSize, sortby, reverse) {
            var rows = [];
            for (var i = 0; i < 20; i++) {
                rows.push(generateRandomItem(i));
            }
            return {
                page: page,
                count : 400,
                data: rows
            };
        };

        // load data from local
        // scope.rowCollection = [];
        // for (var i = 0; i < 400; i++) {
        //     scope.rowCollection.push(generateRandomItem(i));
        // }
        // scope.ds = scope.rowCollection;


        scope.columnCollection = [
            {label: 'id', map: 'id'},
            {label: 'Name', map: 'name'},
            {label: 'Age', map:'age'},
            {label: 'Balance', map: 'balance', isEditable: true, type: 'number', formatFunction: 'currency', formatParameter: '$'},
            {label: 'Email', map: 'email', type: 'email', isEditable: true}
        ];

        scope.globalConfig = {
            isPaginationEnabled: false,
            isGlobalSearchActivated: false,
            itemsByPage: 20,
            syncColumns: false,
            selectionMode: 'single'
        };

        scope.shuffleColumns = function() {
            function shuffle(o){ //v1.0
                for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            }
            var newColumns = scope.columnCollection.slice();
            shuffle(newColumns);
            scope.columnCollection = newColumns;
        };
    }]);