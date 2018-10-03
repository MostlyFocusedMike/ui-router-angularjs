import angular from 'angular'
import uirouter from "angular-ui-router";
console.log("before")
const app = angular.module("app", [uirouter]);
app.config(['$stateProvider', function($stateProvider) {
  let helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }

  let aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>'
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
