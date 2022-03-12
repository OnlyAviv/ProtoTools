// String Tools
String.prototype.toInt = function toInt() {
    return parseInt(this);
}

String.prototype.capitalize = function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1).toLocaleLowerCase();
}

String.prototype.capitalizeWords = function capitalizeWords() {
    return this.split(" ").map(i => i.charAt(0).toLocaleUpperCase() + i.slice(1).toLocaleLowerCase()).join(" ")
}

String.prototype.toJSON = function toJSON() {
    return JSON.parse(this)
}

String.prototype.randomCapitalization = function randomCapitalization(chance = 50) {
    return this.split("").map(i => { 
        if (Math.round(Math.random() * 100) <= chance) {return i.toLocaleUpperCase()} else {return i.toLocaleLowerCase()};
    }).join("");
}

// Number Tools
Number.prototype.getLength = function getLength() {
    return this.toString().length
}
Number.prototype.isEven = function isEven(n) {
    return this % 2 == 0;
}
Number.prototype.isOdd = function isOdd() {
    return this % 2 == 1;
}
// Math Tools
Math.randomTo = function randomTo(v) {
    return Math.round(Math.random() * v);
}
// Array Tools
/* https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array */
Array.prototype.shuffle = function shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this[i], this[j]] = [this[j], this[i]];
    }
    return this;
}

Array.prototype.removeDuplicates = function removeDuplicates() {
    var newArray = [...new Set(this)]
    for (i in this) {
        delete this[i];
    }
    newArray.forEach((item, index) => {
        this[index] = item
    })
    this.removeEmpty();
}

Array.prototype.switchItem = function switchItem(i1,i2) {
    var item1 = this[i1];
    this[i1] = this[i2];
    this[i2] = item1;
}

Array.prototype.removeEmpty = function removeEmpty() {
    var cleaned = this.filter(function() {return true});
    var l = this.length;
    for (let i = 0; i < l; i++) {
        this.shift()
    };
    cleaned.forEach(i => this.push(i))
}

Array.prototype.crossReference = function crossReference(array) {
    var newArray = [];
    array.forEach(i => {
        if (this.includes(i)) {
            newArray.push(i);
        }
    })
    arr.removeDuplicates();
    return newArray
}
// Buffer Tools

// JSON Tools
Object.prototype.stringify = function stringify() {
    return JSON.stringify(this);
}

Object.prototype.forEach = function forEach(callback) {
    for (i in this) {
        if (this.hasOwnProperty(i)) continue;
        callback(this[i], i)
    }
}

Object.equals = function equals(obj1,obj2) {
    var match = true;
    this.forEach((value,key) => {
        if (obj2[key] != value) {
            match = false;
            return;
        }
    })
    return match;
}

// Loop
function Loop(cb, x) {
    for (let i = 0; i < x; i++) {
        cb(i+1);
    }
}