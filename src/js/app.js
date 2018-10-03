import angular from 'angular'
import uirouter from "angular-ui-router";
console.log("before")
const app = angular.module("app", [uirouter]);

app.controller('hello', function() {
  this.greeting = 'hello';

  this.toggleGreeting = function() {
    this.greeting = (this.greeting == 'hello') ? 'whats up' : 'hello'
  }
})

app.config(['$stateProvider', function($stateProvider) {
  let helloState = {
    name: 'hello',
    url: '/hello',
    views: {
      '': {
        template: '<h3>{{helloCtrl.greeting}} Solar System!</h3>' +
                  '<button ng-click="helloCtrl.toggleGreeting()">toggle greeting</button>' +
                  '<div ui-view="goodbye"></div>',
        controller: 'hello',
        controllerAs: 'helloCtrl',
      },
      'goodbye@hello': {
        template: "<h1>Test of child state</h1>"
      }
  },
  }

  let aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>{{$ctrl.greeting}} Its the UI-Router hello world app!</h3>',
    controller: 'hello',
    controllerAs: '$ctrl',
  }

  let contactState = {
    name: 'contact',
    url: '/contact',
    template: '<h3>I\'m the contact part</h3>'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(contactState);
}]);

// VERSION 1.0
// app.config(['$stateProvider', function($stateProvider) {
//   let helloState = {
//     name: 'hello',
//     url: '/hello',
//     template: '<h3>hello world!</h3>'
//   }

//   let aboutState = {
//     name: 'about',
//     url: '/about',
//     template: '<h3>Its the UI-Router hello world app!</h3>'
//   }

//   let contactState = {
//     name: 'contact',
//     url: '/contact',
//     template: '<h3>I\'m the contact part</h3>'
//   }

//   $stateProvider.state(helloState);
//   $stateProvider.state(aboutState);
//   $stateProvider.state(contactState);
// }]);
