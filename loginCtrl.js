function LoginCtrl(api, $location, $modal) {
  this.api = api;
  this.username = "";
  this.password = "";
  this.location = $location;
  this.modal = $modal;
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
};

LoginCtrl.prototype.openModal = function openModal() {
	var self = this;
	console.log("LoginCtrl.openModal is loaded");
	this.modal.open({
		templateUrl: 'modal.html',
		controller: 'ModalCtrl as ctrl'
	});
};