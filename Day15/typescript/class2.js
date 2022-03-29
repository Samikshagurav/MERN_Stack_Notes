var sam = /** @class */ (function () {
    function sam(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    sam.prototype.toJSON = function () {
        return JSON.stringify(this);
    };
    return sam;
}());
var obj1 = new sam("Sam", " Gurav");
console.log(obj1.toJSON());
