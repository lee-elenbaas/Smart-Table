# Smart Table— an easy to use table/grid 

This project is forked from [smart-table][https://github.com/lorenzofox3/Smart-Table]. 

what i do?
====
* locally data is still supported. But i didnt test all function :(, i dont need local data anyway.

* Add remote server paginate support for smart table, I do like this directive, but no remote data loading support is a pity, so i customer it.

how to use?
====
* check the example under example-app, add an attr `ds` (datasource) for the directive, and remove `rowCollections` attr.

```
<smart-table class="table table-striped" 
        table-title="Smart Table example" columns="columnCollection"
        ds="ds" config="globalConfig"></smart-table>
```

* `ds` can return a list as the old one (local data support), it can be a function too (remote server support). So, in your controller:

**remote server example ::**

```
    scope.ds = function(page, pageSize, sort) {
        var rows = [];
        for (var i = 0; i < 100; i++) {
            rows.push(generateRandomItem(i));
        }
        return {
            page: page,
            count : 400,
            data: rows
        };
    };
```

**local data example :: **
```
    scope.rowCollection = [];
    for (var i = 0; i < 400; i++) {
        scope.rowCollection.push(generateRandomItem(i));
    }
    scope.ds = scope.rowCollection;
```

* you can check the example under example-app to have a trial.


More Details
=====
please check the original rep
