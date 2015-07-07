function ModalCtrl($modalInstance) {
	this.modalInstance = $modalInstance;
}

angular.module('userApp').controller('ModalCtrl', ModalCtrl);

ModalCtrl.prototype.confirm = function confirm() {
	this.modalInstance.close();
};

ModalCtrl.prototype.cancel = function cancel() {
	this.modalInstance.dismiss();
};