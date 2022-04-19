## Classes

<dl>
<dt><a href="#String">String</a></dt>
<dd></dd>
<dt><a href="#Number">Number</a></dt>
<dd></dd>
<dt><a href="#Array">Array</a></dt>
<dd></dd>
<dt><a href="#Math">Math</a></dt>
<dd></dd>
<dt><a href="#Object">Object</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#LoopCallback">LoopCallback</a> : <code>function</code></dt>
<dd></dd>
<dt><a href="#forEachCallback">forEachCallback</a> : <code>function</code></dt>
<dd></dd>
</dl>

<a name="String"></a>

## String
**Kind**: global class  

* [String](#String)
    * [.toNumber()](#String+toNumber) ⇒ [<code>Number</code>](#Number)
    * [.capitalize()](#String+capitalize) ⇒ [<code>String</code>](#String)
    * [.capitalizeWords()](#String+capitalizeWords) ⇒ [<code>String</code>](#String)
    * [.toJSON()](#String+toJSON) ⇒ [<code>Object</code>](#Object)
    * [.randomCapitalization(chance)](#String+randomCapitalization) ⇒ [<code>String</code>](#String)

<a name="String+toNumber"></a>

### string.toNumber() ⇒ [<code>Number</code>](#Number)
**Kind**: instance method of [<code>String</code>](#String)  
**Summary**: Returns the string as a number  
**Example**  
```js
"123".toNumber() // 123
```
<a name="String+capitalize"></a>

### string.capitalize() ⇒ [<code>String</code>](#String)
**Kind**: instance method of [<code>String</code>](#String)  
**Summary**: Capitalizes the first letter of the string  
**Returns**: [<code>String</code>](#String) - The string with the first letter capitalized  
**Example**  
```js
"hello".capitalize() // Hello
```
<a name="String+capitalizeWords"></a>

### string.capitalizeWords() ⇒ [<code>String</code>](#String)
**Kind**: instance method of [<code>String</code>](#String)  
**Summary**: Capitalizes the first letter of every word in the string  
**Returns**: [<code>String</code>](#String) - The string with every word capitalized  
**Example**  
```js
"hello world".capitalizeWords() // Hello World
```
<a name="String+toJSON"></a>

### string.toJSON() ⇒ [<code>Object</code>](#Object)
**Kind**: instance method of [<code>String</code>](#String)  
**Summary**: Returns the string in JSON format  
**Returns**: [<code>Object</code>](#Object) - JSON  
**Throws**:

- <code>SyntaxError</code> If the string is not valid JSON

**Example**  
```js
'{"a": 1, "b": 2}'.toJSON() // {a: 1, b: 2}
```
<a name="String+randomCapitalization"></a>

### string.randomCapitalization(chance) ⇒ [<code>String</code>](#String)
**Kind**: instance method of [<code>String</code>](#String)  
**Summary**: Randomly capitalizes the letters in the string based on the chance  
**Returns**: [<code>String</code>](#String) - The string with random capitalization based on the chance  

| Param | Type | Description |
| --- | --- | --- |
| chance | [<code>Number</code>](#Number) | The chance of any given letter being capitalized |

**Example**  
```js
"hello world".randomCapitalize(50) // hElLo wOrLd
```
<a name="Number"></a>

## Number
**Kind**: global class  

* [Number](#Number)
    * _instance_
        * [.getLength()](#Number+getLength) ⇒ [<code>Number</code>](#Number)
    * _static_
        * [.getParity()](#Number.getParity) ⇒ [<code>String</code>](#String)

<a name="Number+getLength"></a>

### number.getLength() ⇒ [<code>Number</code>](#Number)
**Kind**: instance method of [<code>Number</code>](#Number)  
**Summary**: Returns the number's stringified length  
**Returns**: [<code>Number</code>](#Number) - The length of the number as a string  
**Example**  
```js
123.getLength() // 3
```
<a name="Number.getParity"></a>

### Number.getParity() ⇒ [<code>String</code>](#String)
**Kind**: static method of [<code>Number</code>](#Number)  
**Summary**: Returns whether the number is even or odd  
**Returns**: [<code>String</code>](#String) - Even or Odd  
**Example**  
```js
1.getParity() // Odd
```
<a name="Array"></a>

## Array
**Kind**: global class  

* [Array](#Array)
    * _instance_
        * [.shuffle()](#Array+shuffle) ⇒ [<code>Array</code>](#Array)
        * [.removeDuplicates()](#Array+removeDuplicates) ⇒ [<code>Array</code>](#Array)
        * [.indexOfObject(obj)](#Array+indexOfObject) ⇒ [<code>Number</code>](#Number)
        * [.switchItem(i1, i2)](#Array+switchItem)
        * [.removeEmpty()](#Array+removeEmpty) ⇒ [<code>Array</code>](#Array)
    * _static_
        * [.intersection(array1, array2)](#Array.intersection) ⇒ [<code>Array</code>](#Array)

<a name="Array+shuffle"></a>

### array.shuffle() ⇒ [<code>Array</code>](#Array)
**Kind**: instance method of [<code>Array</code>](#Array)  
**Summary**: Shuffles the array  
**Returns**: [<code>Array</code>](#Array) - The shuffled array  
**Link**: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array  
**Example**  
```js
[1,2,3,4,5].shuffle() // [2,3,4,5,1]
```
<a name="Array+removeDuplicates"></a>

### array.removeDuplicates() ⇒ [<code>Array</code>](#Array)
**Kind**: instance method of [<code>Array</code>](#Array)  
**Summary**: removes the duplicate values from an array  
**Returns**: [<code>Array</code>](#Array) - The array with no duplicate values  
**Example**  
```js
[1,2,3,4,5,5,5].removeDuplicates() // [1,2,3,4,5]
```
<a name="Array+indexOfObject"></a>

### array.indexOfObject(obj) ⇒ [<code>Number</code>](#Number)
**Kind**: instance method of [<code>Array</code>](#Array)  
**Summary**: Returns the index of the first instance of the object in the array  
**Returns**: [<code>Number</code>](#Number) - The index of the object in the array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | The item to be checked |

**Example**  
```js
[{a: 1}, {a: 2}, {a: 3}].indexOfObject({a: 2}) // 1
```
<a name="Array+switchItem"></a>

### array.switchItem(i1, i2)
**Kind**: instance method of [<code>Array</code>](#Array)  
**Summary**: Switches two items in an array  

| Param | Type |
| --- | --- |
| i1 | <code>\*</code> | 
| i2 | <code>\*</code> | 

**Example**  
```js
[1,2,3,4,5].switch(1,2) // [2,1,3,4,5]
```
<a name="Array+removeEmpty"></a>

### array.removeEmpty() ⇒ [<code>Array</code>](#Array)
**Kind**: instance method of [<code>Array</code>](#Array)  
**Summary**: removes the <empty> values from an object  
**Returns**: [<code>Array</code>](#Array) - The array with no empty values  
**Example**  
```js
[{a: 1}, {a: 2}, {a: 3}, <empty item>].removeEmpty() // [{a: 1}, {a: 2}, {a: 3}]
```
<a name="Array.intersection"></a>

### Array.intersection(array1, array2) ⇒ [<code>Array</code>](#Array)
**Kind**: static method of [<code>Array</code>](#Array)  
**Summary**: Takes two arrays and returns the intersection  
**Returns**: [<code>Array</code>](#Array) - array with only the values that are in both arrays  

| Param | Type |
| --- | --- |
| array1 | [<code>Array</code>](#Array) | 
| array2 | [<code>Array</code>](#Array) | 

**Example**  
```js
[1,2,3,4,5].intersection([2,3,4,6,7,8]) // [2,3,4]
```
<a name="Math"></a>

## Math
**Kind**: global class  

* [Math](#Math)
    * [.rand(min, max)](#Math.rand) ⇒ [<code>Number</code>](#Number)
    * [.factorial(n)](#Math.factorial) ⇒
    * [.parity(n)](#Math.parity) ⇒

<a name="Math.rand"></a>

### Math.rand(min, max) ⇒ [<code>Number</code>](#Number)
**Kind**: static method of [<code>Math</code>](#Math)  
**Summary**: Returns a random number between the min and max  
**Returns**: [<code>Number</code>](#Number) - A random number between min and max  

| Param | Type | Description |
| --- | --- | --- |
| min | [<code>Number</code>](#Number) | The minimum number |
| max | [<code>Number</code>](#Number) | The maximum number |

**Example**  
```js
Math.randomBetween(1, 10) // 5
```
<a name="Math.factorial"></a>

### Math.factorial(n) ⇒
**Kind**: static method of [<code>Math</code>](#Math)  
**Summary**: Returns the factorial of the number n  
**Returns**: The factorial of n  
**Throws**:

- <code>CallStackOverflowError</code> If the number is too large


| Param | Type |
| --- | --- |
| n | [<code>Number</code>](#Number) | 

**Example**  
```js
Math.factorial(5) // 120
```
<a name="Math.parity"></a>

### Math.parity(n) ⇒
**Kind**: static method of [<code>Math</code>](#Math)  
**Summary**: Returns whether the number is even or odd  
**Returns**: Whether the number is even or odd  

| Param | Type |
| --- | --- |
| n | [<code>Number</code>](#Number) | 

**Example**  
```js
Math.parity(2) // Even
```
<a name="Object"></a>

## Object
**Kind**: global class  

* [Object](#Object)
    * _instance_
        * [.toString()](#Object+toString) ⇒ [<code>String</code>](#String)
        * [.forEach(callback)](#Object+forEach)
    * _static_
        * [.equals(obj1, obj2)](#Object.equals) ⇒ <code>Boolean</code>

<a name="Object+toString"></a>

### object.toString() ⇒ [<code>String</code>](#String)
**Kind**: instance method of [<code>Object</code>](#Object)  
**Returns**: [<code>String</code>](#String) - the stringified JSON  
**Example**  
```js
{a: 1, b: 2}.toString() // {"a": 1, "b": 2}
```
<a name="Object+forEach"></a>

### object.forEach(callback)
**Kind**: instance method of [<code>Object</code>](#Object)  
**Summary**: does a loop for every key/value pair in the object  

| Param | Type | Description |
| --- | --- | --- |
| callback | <code>function</code> | The function to be called on each item in the object |

**Example**  
```js
{a: 1, b: 2}.forEach(function(key, value) {console.log(key, value)}) // a 1 b 2
```
<a name="Object.equals"></a>

### Object.equals(obj1, obj2) ⇒ <code>Boolean</code>
**Kind**: static method of [<code>Object</code>](#Object)  
**Summary**: Compares two objects, returns true if they are equal  
**Returns**: <code>Boolean</code> - Whether the objects are equal  

| Param | Type |
| --- | --- |
| obj1 | <code>\*</code> | 
| obj2 | <code>\*</code> | 

**Example**  
```js
Object.equals({a: 1, b: 2}, {a: 1, b: 2}) // true
```
<a name="LoopCallback"></a>

## LoopCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| i | [<code>Number</code>](#Number) | The current iteration |

<a name="forEachCallback"></a>

## forEachCallback : <code>function</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| key | [<code>String</code>](#String) | The key of the object pair |
| value | <code>\*</code> | The value of the object pair |

**Example**  
```js
{a: 1, b: 2}.forEach(function(key, value) {console.log(key, value)}) // a 1 b 2
```
