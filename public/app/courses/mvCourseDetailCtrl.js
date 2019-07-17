/**
 * Created by imran on 01/08/2017.
 */
angular.module('app').controller('mvCourseDetailCtrl', function ($scope, mvCachedCourses, $routeParams) {
  mvCachedCourses.query().$promise.then(function (collection) {
    collection.forEach(function (course) {
      if(course._id === $routeParams.id) {
        $scope.course = course;
      }
    })
  })
});