function LoginCtrl(api, $location) {
  this.api = api;
  this.username = "";
  this.password = "";
  this.location = $location;
}

angular.module('userApp').controller('LoginCtrl', LoginCtrl);

LoginCtrl.prototype.createAccount = function createAccount() {
	console.log("LoginCtrl.createAccount is loaded");
	this.api.createAccount(this.username, this.password);
};

LoginCtrl.prototype.login = function login() {
	var self = this;
	console.log("LoginCtrl.login is loaded");
	this.api.login(this.username, this.password)
		.then(function(response) {
			self.location.path('/profile');
		});
}