function ProfileCtrl(api, app, $location) {
  this.api = api;
  this.profile = app.data;
  this.location = $location;
}

angular.module('userApp').controller('ProfileCtrl', ProfileCtrl);

ProfileCtrl.prototype.logout = function () {
  var self = this;
	console.log("logging out");
	this.api.logout()
		.then(function(response){
			console.log(response);
			self.location.path('/login');
		});
};
