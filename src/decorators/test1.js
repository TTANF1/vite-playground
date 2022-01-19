var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function addProp(param) {
    return function (constructor) {
        constructor.prototype.job = param;
    };
}
var Puu = /** @class */ (function () {
    function Puu(name) {
        this.name = name;
    }
    Puu = __decorate([
        addProp('fe+be')
    ], Puu);
    return Puu;
}());
var p = new Puu('林不渡');
console.log(p.job);
