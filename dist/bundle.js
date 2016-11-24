(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
var greeter_1 = require("./greeter");
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + middleInitial + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student('Giancarlos', "M:", "User");
function showHello(divName, name) {
    var elt = document.getElementById(divName);
    elt.innerText = greeter_1.sayHello(name);
}
showHello('greeting', 'Jose');
console.log('its a testing for watchify');
document.getElementById('greeter').innerText = greeter(user);
console.log(greeter(user));
console.log(greeter_1.sayHello('TypeScript'));
},{"./greeter":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXRlci50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0FBLGtCQUF5QixJQUFZO0lBQ25DLE1BQU0sQ0FBQyxnQkFBYyxJQUFNLENBQUE7QUFDN0IsQ0FBQztBQUZlLGdCQUFRLFdBRXZCLENBQUE7OztBQ0ZELHdCQUF5QixXQUV6QixDQUFDLENBRm1DO0FBRXBDO0lBRUUsaUJBQW1CLFNBQVMsRUFBUyxhQUFhLEVBQVMsUUFBUTtRQUFoRCxjQUFTLEdBQVQsU0FBUyxDQUFBO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQUE7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFBO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNuRSxDQUFDO0lBQ0gsY0FBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBT0QsaUJBQWlCLE1BQWM7SUFDN0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO0FBQzlELENBQUM7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRW5ELG1CQUFtQixPQUFlLEVBQUUsSUFBWTtJQUM5QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNqQyxDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7QUFDMUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9YFxyXG59XHJcbiIsImltcG9ydCB7IHNheUhlbGxvIH0gZnJvbSBcIi4vZ3JlZXRlclwiXHJcblxyXG5jbGFzcyBTdHVkZW50IHtcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBmaXJzdE5hbWUsIHB1YmxpYyBtaWRkbGVJbml0aWFsLCBwdWJsaWMgbGFzdE5hbWUpIHtcclxuICAgIHRoaXMuZnVsbE5hbWUgPSBmaXJzdE5hbWUgKyAnICcgKyBtaWRkbGVJbml0aWFsICsgJyAnICsgbGFzdE5hbWU7XHJcbiAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGVyc29uIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBncmVldGVyKHBlcnNvbjogUGVyc29uKSB7XHJcbiAgcmV0dXJuIFwiSGVsbG8sIFwiICsgcGVyc29uLmZpcnN0TmFtZSArIFwiIFwiICsgcGVyc29uLmxhc3ROYW1lO1xyXG59XHJcblxyXG52YXIgdXNlciA9IG5ldyBTdHVkZW50KCdHaWFuY2FybG9zJywgXCJNOlwiLCBcIlVzZXJcIik7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICBjb25zdCBlbHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTtcclxuICBlbHQuaW5uZXJUZXh0ID0gc2F5SGVsbG8obmFtZSk7XHJcbn1cclxuXHJcbnNob3dIZWxsbygnZ3JlZXRpbmcnLCAnSm9zZScpO1xyXG5jb25zb2xlLmxvZygnaXRzIGEgdGVzdGluZyBmb3Igd2F0Y2hpZnknKTtcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dyZWV0ZXInKS5pbm5lclRleHQgPSBncmVldGVyKHVzZXIpO1xyXG5jb25zb2xlLmxvZyhncmVldGVyKHVzZXIpKTtcclxuY29uc29sZS5sb2coc2F5SGVsbG8oJ1R5cGVTY3JpcHQnKSk7XHJcbiJdfQ==
