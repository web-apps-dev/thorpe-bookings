/**
 * Created by imran on 01/08/2017.
 */
angular.module('app').factory('mvCourse', function ($resource) {
  var CourseResource = $resource('/api/courses/:_id', {_id: "@id"}, {
    update: {method:'PUT', isArray: false}
  });

  return CourseResource;
})