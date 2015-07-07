function ModalCtrl($modalInstance, api) {
	this.api = api;
	this.modalInstance = $modalInstance;
}

angular.module('userApp').controller('ModalCtrl', ModalCtrl);

ModalCtrl.prototype.confirm = function confirm() {
	var self = this;
	this.api.createAccount(this.api.username, this.api.password)
		.then(function(response){
			console.log(response);
			self.modalInstance.close();
		});
};

ModalCtrl.prototype.cancel = function cancel() {
	this.modalInstance.dismiss();
};