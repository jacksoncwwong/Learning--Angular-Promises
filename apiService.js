function ApiService($http) {
  this.$http = $http;
  this.profile = [];
  this.username = "";
  this.password = "";
  this.name = "";
  this.age = "";
  this.email = "";
}

angular.module('userApp').service('api', ApiService);

var BASE_URL = 'https://mock-login-server.herokuapp.com/api/';
var LOGIN_URL = BASE_URL + 'login';
var LOGOUT_URL = BASE_URL + 'logout';
var PROFILE_URL = BASE_URL + 'user';
var CREATE_ACCOUNT_URL = BASE_URL + 'createAccount';

ApiService.prototype.login = function(username, password) {
  return this.$http.post(LOGIN_URL, {username: username, password: password})
  .then(function(response) {
    console.log(response);
    alert("login successful");
    localStorage.authToken = response.data.authToken;
  })
  .catch(function(response) {
    console.log(response);
    alert("login unsuccessful");
  });
};

ApiService.prototype.logout = function logout() {
  return this.$http.post(LOGOUT_URL);
};

ApiService.prototype.getProfile = function getProfile() {
  return this.$http.get(PROFILE_URL);
};

ApiService.prototype.createAccount = function createAccount() {
  return this.$http.post(CREATE_ACCOUNT_URL, {username: this.username, password: this.password, name: this.name, age: this.age, email: this.email})
  .then(function(response) {
    alert("Account Created");
    console.log("apiService is loaded");
    console.log(response);
  })
  .catch(function(response) {
    console.log(response);
    alert("Status Code: " + response.status + "\nStatus Text: " + response.statusText);
  });
};