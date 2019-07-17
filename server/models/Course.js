var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
  title: {type:String, required:'{PATH} is required!'},
  featured: {type:Boolean, required:'{PATH} is required!'},
  published: {type:Date, required:'{PATH} is required!'},
  tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
  Course.find({}).exec(function (err, collection) {
    if(collection.length === 0) {
      Course.create({title: 'C# for All', featured: true, published: new Date('10/8/2017')});
      Course.create({title: 'C++ for New Devs', featured: true, published: new Date('10/12/2017')});
      Course.create({title: 'Positive C++', featured: true, published: new Date('01/02/2018')});
      Course.create({title: 'JavaScript Starter', featured: true, published: new Date('14/09/2017')});
      Course.create({title: 'JavaScript for Project Managers', featured: true, published: new Date('01/08/2017')});
      Course.create({title: 'Extreme Programming', featured: true, published: new Date('01/08/2017')});
      Course.create({title: 'Java for New Programmers', featured: true, published: new Date('10/08/2017')});
      Course.create({title: 'Object Oriented Development', featured: true, published: new Date('14/10/2017')});
      Course.create({title: 'Design Patterns', featured: true, published: new Date('01/02/2018')});
      Course.create({title: 'Docker for Beginners', featured: true, published: new Date('04/08/2017')});
      Course.create({title: 'What is Kubernetes', featured: false, published: new Date('11/08/2017')});
      Course.create({title: 'Cloud Computing from the Ground Up', featured: false, published: new Date('11/08/2017'), tags: 'development'});
      Course.create({title: 'IT Project Management', featured: false, published: new Date('08/01/2018'), tags: 'managerial'});
      Course.create({title: 'Advanced C#', featured: false, published: new Date('10/08/2017'), tags: 'microsoft development'});
      Course.create({title: 'Visual Basic for Rapid Development', featured: false, published: new Date('07/08/2017'), tags: 'microsoft development'});
    }
  })
}

exports.createDefaultCourses = createDefaultCourses;