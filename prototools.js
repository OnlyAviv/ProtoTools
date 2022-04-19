/**
 * @class String
 */
/**
 * @class Number
 */
/**
 * @class Array
 */
/**
 * @class Math
 */
/**
 * @class Object
*/

/**
 * @summary Returns the string as a number
 * @returns {Number}
 * @example "123".toNumber() // 123
*/
String.prototype.toNumber = function toNumber() {
    return parseFloat(this);
}

/**
 * @summary Capitalizes the first letter of the string
 * @returns {String} The string with the first letter capitalized
 * @example "hello".capitalize() // Hello
 */
String.prototype.capitalize = function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLocaleLowerCase();
}

/**
 * @summary Capitalizes the first letter of every word in the string
 * @returns {String} The string with every word capitalized
 * @example "hello world".capitalizeWords() // Hello World
 */
String.prototype.capitalizeWords = function capitalizeWords() {
    return this.split(" ").map(i => i.charAt(0).toLocaleUpperCase() + i.slice(1).toLocaleLowerCase()).join(" ")
}

/**
 * @summary Returns the string in JSON format
 * @returns {Object} JSON
 * @throws {SyntaxError} If the string is not valid JSON
 * @example '{"a": 1, "b": 2}'.toJSON() // {a: 1, b: 2}
 */
String.prototype.toJSON = function toJSON() {
    return JSON.parse(this)
}

/**
 * @summary Randomly capitalizes the letters in the string based on the chance
 * @param {Number} chance The chance of any given letter being capitalized
 * @returns {String} The string with random capitalization based on the chance
 * @example "hello world".randomCapitalize(50) // hElLo wOrLd
 */
String.prototype.randomCapitalization = function randomCapitalization(chance = 50) {
    return this.split("").map(i => { 
        if (Math.round(Math.random() * 100) <= chance) {return i.toLocaleUpperCase()} else {return i.toLocaleLowerCase()};
    }).join("");
}

// Number Tools
/**
 * @summary Returns the number's stringified length
 * @returns {Number} The length of the number as a string
 * @example 123.getLength() // 3
 */
Number.prototype.getLength = function getLength() {
    return this.toString().length
}

/**
 * @summary Returns whether the number is even or odd
 * @returns {String} Even or Odd
 * @example 1.getParity() // Odd
 */
Number.getParity = function getParity() {
    return Math.parity(this);
}

// Math Tools
/**
 * @summary Returns a random number between the min and max
 * @param {Number} min The minimum number
 * @param {Number} max The maximum number
 * @returns {Number} A random number between min and max
 * @example Math.randomBetween(1, 10) // 5
 */
Math.rand = function rand(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @summary Returns the factorial of the number n
 * @param {Number} n 
 * @returns The factorial of n
 * @throws {CallStackOverflowError} If the number is too large
 * @example Math.factorial(5) // 120
 */
Math.factorial = function factorial(n) {
    if (n === 0) {return 1}
    return n * Math.factorial(n - 1);
}



/**
 * @summary Returns whether the number is even or odd
 * @param {Number} n 
 * @returns Whether the number is even or odd
 * @example Math.parity(2) // Even
 */
Math.parity = function parity(n) {
    return n % 2 == 0 ? "even" : "odd"
}

// Array Tools
/**
 * @summary Shuffles the array
 * @link https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
 * @returns {Array} The shuffled array
 * @example [1,2,3,4,5].shuffle() // [2,3,4,5,1]
 */
Array.prototype.shuffle = function shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

/**
 * @summary removes the duplicate values from an array
 * @returns {Array} The array with no duplicate values
 * @example [1,2,3,4,5,5,5].removeDuplicates() // [1,2,3,4,5]
 */
Array.prototype.removeDuplicates = function removeDuplicates() {
    var newArray = [...new Set(this)]
    for (i in this) {
        delete this[i];
    }
    newArray.forEach((item, index) => {
        this[index] = item
    })
    // remove duplicate objects
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (Object.equals(this[i], this[j])) {
                delete this[j];
            }
        }
    }
    this.removeEmpty();
    return this;
}

/**
 * @summary Returns the index of the first instance of the object in the array
 * @param {*} obj The item to be checked
 * @returns {Number} The index of the object in the array
 * @example [{a: 1}, {a: 2}, {a: 3}].indexOfObject({a: 2}) // 1
 */
Array.prototype.indexOfObject = function indexOfObject(obj) {
    for (i in this) {
        if (Object.equals(this[i], obj)) {
            return i;
        }
    }
    return -1;
}

/**
 * @summary Switches two items in an array
 * @param {*} i1 
 * @param {*} i2 
 * @example [1,2,3,4,5].switch(1,2) // [2,1,3,4,5]
 */
Array.prototype.switchItem = function switchItem(i1,i2) {
    var item1 = this[i1];
    this[i1] = this[i2];
    this[i2] = item1;
}

/**
 * @summary removes the <empty> values from an object
 * @returns {Array} The array with no empty values
 * @example [{a: 1}, {a: 2}, {a: 3}, <empty item>].removeEmpty() // [{a: 1}, {a: 2}, {a: 3}]
 */
Array.prototype.removeEmpty = function removeEmpty() {
    var cleaned = this.filter(function() {return true});
    var l = this.length;
    for (let i = 0; i < l; i++) {
        this.shift()
    };
    cleaned.forEach(i => this.push(i))
}

/**
 * @summary Takes two arrays and returns the intersection
 * @param {Array} array1 
 * @param {Array} array2 
 * @returns {Array} array with only the values that are in both arrays
 * @example [1,2,3,4,5].intersection([2,3,4,6,7,8]) // [2,3,4]
 */
Array.intersection = function intersection(array1, array2) {
    var newArray = [];
    array1.forEach(i => {
        if (array2.includes(i)) {
            newArray.push(i);
        }
    })
    newArray.removeDuplicates();
    return newArray
}
// Buffer Tools

// JSON/Object Tools
/**
 * 
 * @returns {String} the stringified JSON
 * @example {a: 1, b: 2}.toString() // {"a": 1, "b": 2}
 */
Object.prototype.toString = function toString() {
    return JSON.stringify(this);
}

/**
 * @summary does a loop for every key/value pair in the object
 * @param {Function} callback The function to be called on each item in the object
 * @example {a: 1, b: 2}.forEach(function(key, value) {console.log(key, value)}) // a 1 b 2
 */
Object.prototype.forEach = function forEach(callback) {
    for (i in this) {
        if (!this.hasOwnProperty(i)) continue;
        callback(i, this[i])
    }
}
/**
 * 
 * @callback forEachCallback
 * @param {String} key The key of the object pair
 * @param {*} value The value of the object pair
 * @example {a: 1, b: 2}.forEach(function(key, value) {console.log(key, value)}) // a 1 b 2
 */

/**
 * @summary Compares two objects, returns true if they are equal
 * @param {*} obj1 
 * @param {*} obj2 
 * @returns {Boolean} Whether the objects are equal
 * @example Object.equals({a: 1, b: 2}, {a: 1, b: 2}) // true
 */
Object.equals = function equals(obj1,obj2) {
    var match = true;
    if (typeof obj1 !== typeof obj2) {
        return false;
    } else if (typeof obj1 !== "object" && typeof obj2 !== "object") {
        return obj1 === obj2;
    } else if (JSON.stringify(obj1) == JSON.stringify(obj2)) {
        return true;
    }
    obj1.forEach((value,key) => {
        console.log(key, value)
        if (obj2[key] !== value) {
            match = false;
            return;
        }
    })
    return match;
}

// Date Tools

/**
 * @summary get's the difference between two dates in milliseconds
 * @param {(Date|Number)} start
 * @param {(Date|Number)} end
 * @returns {Number} The difference between the two dates in milliseconds
 * @example Date.timeDifference(new Date(), new Date(Date.now() + 1000)) // 1000
 */
Date.timeDifference = function timeDifference(start, end) {
    if (!(start instanceof Date)) {
        start = new Date(start);
    }
    if (!(end instanceof Date)) {
        end = new Date(end);
    }
    var difference = end.getTime() - start.getTime();
    return difference;
}

/**
 * 
 * @param {(Date|Number)} date The date to check the time until
 * @returns {Number} The time until the date in milliseconds
 * @example Date.timeUntil(new Date(Date.now() + 1000)) // 1000
 */
Date.prototype.timeUntil = function timeUntil(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    var difference = date.getTime() - this.getTime();
    return difference;
}

Date.format = {
    Milliseconds: 0,
    Seconds: 1,
    Minutes: 2,
    Hours: 3,
    Days: 4,
    Weeks: 5,
    Months: 6,
    Years: 7
}

/**
 * 
 * @param {(Number)} time The time to be converted
 * @param {Number} from The starting format
 * @param {Number} to The ending format 
 * @throws {TypeError} if the from or to format is not a valid format from Date.format
 * @returns {Number} The converted time
 * @example Date.formatTime(1000, Date.format.Milliseconds, Date.format.Seconds) // 1
 */
Date.formatTime = function formatTime(time, from, to) {
    if (from < 0 || from > 7 || to < 0 || to > 7) {
        throw new TypeError("Invalid format");
    }
    fromMS = null;
    switch (from) {
        case Date.format.Milliseconds:
            fromMS = time;
            break;
        case Date.format.Seconds:
            fromMS = time * 1000;
            break;
        case Date.format.Minutes:
            fromMS = time * 60000;
            break;
        case Date.format.Hours:
            fromMS = time * 3600000;
            break;
        case Date.format.Days:
            fromMS = time * 86400000;
            break;
        case Date.format.Weeks:
            fromMS = time * 604800000;
            break;
        case Date.format.Months:
            fromMS = time * 2592000000;
            break;
        case Date.format.Years:
            fromMS = time * 31536000000;
            break;
    }
    switch (to) {
        case Date.format.Milliseconds:
            return fromMS;
        case Date.format.Seconds:
            return fromMS / 1000;
        case Date.format.Minutes:
            return fromMS / (1000 * 60);
        case Date.format.Hours:
            return fromMS / (1000 * 60 * 60);
        case Date.format.Days:
            return fromMS / (1000 * 60 * 60 * 24);
        case Date.format.Weeks:
            return fromMS / (1000 * 60 * 60 * 24 * 7);
        case Date.format.Months:
            return fromMS / (1000 * 60 * 60 * 24 * 30);
        case Date.format.Years:
            return fromMS / (1000 * 60 * 60 * 24 * 365);
    }
}

// HTTP and HTTPS Tools
var http = require('http');
var https = require('https');

async function requestSync(url, headers, method = "GET", body = null) {
    var res = await new Promise((resolve, reject) => {
        var request = this.request({
            url: url,
            headers: headers,
            method: method,
            body: body
        }, function(response) {
            var body = '';
            response.on('data', function(chunk) {
                body += chunk;
            });
            response.on('end', function() {
                resolve(body);
            });
        });
        request.on('error', function(e) {
            reject(e);
        });
    });
    return res
}
/**
 * @summary Makes a request to the specified url
 * @param {String} url The url to be requested
 * @param {Object} headers The headers to be sent with the request
 * @param {String} method The method to be used for the request
 * @param {String} body The body to be sent with the request
 * @returns {Promise} The response from the request
 * @example http.requestSync("https://google.com", {}, "GET") // Promise
 */
http.requestSync = requestSync.bind(http);

/**
 * @summary Makes a request to the specified url
 * @param {String} url The url to be requested
 * @param {Object} headers The headers to be sent with the request
 * @param {String} method The method to be used for the request
 * @param {String} body The body to be sent with the request
 * @returns {Promise} The response from the request
 * @example https.requestSync("https://google.com", {}, "GET") // Promise
 */
https.requestSync = requestSync.bind(https);

/* Added Functions */

// Loop
/**
 * @summary Executes the given cb x times
 * @param {Function} cb Callback function
 * @param {Number} x Times to call the callback
 * @returns {Promise} The result of the last cb
 * @example await loop((i) => {console.log(i)}, 10) // Promise (10)
 */
global.Loop = async function Loop(cb, x) {
    var result = null;
    for (var i = 0; i < x; i++) {
        result = await cb(i);
    }
    return result;
}
/**
 * @callback LoopCallback
 * @param {Number} i The current iteration
 */