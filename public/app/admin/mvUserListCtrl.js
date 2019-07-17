/**
 * Created by imran on 30/07/2017.
 */
angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
  $scope.users = mvUser.query();
});