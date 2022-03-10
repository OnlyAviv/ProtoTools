# ProtoTools
> Version 0.0.1

ProtoTools allows for more prototype tools to make coding easier.

## Installing
First, install using NPM
```sh
npm i @redyetidev/prototools
```
Next, require it into your script
```js
require("@redyetidev/prototools") 
// No need to assign prototools to a variable
```

## Prototypes included

### String
* `toInt`
 
    The `toInt` function returns  a string as an int. It is the same as `parseInt(string)`.

    ```js
    var string = "1";
    strint.toInt() // returns 1
    ```


* `capitalize`

    The `capitalize` function returns a version of the string with the first letter capitalized

    ```js
    var string = "hello there"
    string.capitalize() // returns "Hello there"
    ```
* `capitalizeWords`
    The `capitalizeWords` function returns a version of the string with the first letter of every word capitalized

    ```js
    var string = "hello there"
    string.capitalize() // returns "Hello There"
    ```
* `randomCapitalization`

    The `randomCapitalization` takes a string, and a random chance parameter and returns a capitalized version of the string based on that parameter

    ```js
    var string = "hello there"
    string.randomCapitalization(50) // returns "hELlO THerE"
    ```
* `toJSON`

    The `toJSON` function returns the string as JSON. It is the same as running `JSON.parse(string)`

    ```js
    var string = '{"id":1}'
    string.toJSON() // returns {id: 1}
    ``` 
### Number
* `getLength`
    The `getLength` function returns the length of the number. It is the same as running `number.toString().length`
    
    ```js
    var number = 100
    number.getLength() // returns 3
    ```
### Array
* `shuffle`

    The `shuffle` function shuffles the contents of the array<sup><a href="#f1">1</a></sup>

    ```js
    var array = [1,2,3]
    array.shuffle(); // array = [1,3,2]
    ```
* `removeDuplicates`

    The `removeDuplicates` function removes all duplicates from the array

    ```js
    var array = [1,1,2,2,3]
    array.removeDuplicates() // array = [1,2,3]
    ```

* `switchItem`

    The `switchItem` function switches two items in the array by their indexes
    
    ```js
    var array = [1,2,3]
    array.switchItem(0,2) // array = [3,2,1]
    ```
* `removeEmpty`

    The `removeEmpty` function removes all items that are `empty`.

    ```js
    var array = [1,,,2,3] // [1,<2 empty items>,2,3];
    array.removeEmpty() // array = [1,2,3]
    ```
* `crossReference`

    The `crossReference` functions matches items in two arrays

    ```js
    var array = [1,2,3]
    var cross = [1,3,4,5]
    array.crossReference(cross) // [1,3]
    ```

### Object
* `stringify`

    The `stringify` function returns the object as a string. It is the same as `Object.stringify(obj)`

    ```js
    var obj = {id: 1}
    obj.stringify() // returns '{"id":1}'
    ```
* `forEach`

    The `forEach` function loops a callback on each of the objects keys/values

    ```js
    var obj = {id: 1, user: 2}
    obj.forEach((key, value) => {
        console.log(key) // "id" then "user"
        console.log(value) // 1 then 2
    })
    ```

## Methods Included

### Math
* `randomTo`
    
    The `randomTo` function gets a random number up to a value.

    ```js
    Math.randomTo(100) // Random number 0-100
    ```
### Object
* `equals`

    The `equals` function compares two objects and returns if they are the same

    ```js
    var obj1 = {id: 1};
    var obj2 = {id: 2};
    var obj3 = {id: 3};
    Object.equals(obj1, obj2) // returns false
    Object.equals(obj1, obj3) // returns true
    ```

## Classes Included

## Functions Included
* ### `Loop`

    The `Loop` function creates runs the callback given the amount of times given. The current loop index is passed to the callback

    ```js
    // Loop(callback, times)
    Loop(function(index) {
        console.log(index) // 1 then 2 then 3 then 4 then 5
    }, 5)
    ```

## More Coming Soon
 