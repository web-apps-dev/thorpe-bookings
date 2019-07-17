/**
 * Created by imran on 01/08/2017.
 */
angular.module('app').factory('mvCachedCourses', function (mvCourse) {
  var courseList;

  return {
    query: function () {
      if (!courseList) {
        courseList = mvCourse.query();
      }
      return courseList;
    }
  }
});