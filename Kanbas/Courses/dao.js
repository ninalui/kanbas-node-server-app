import model from "./model.js";
export const createCourse = (course) => {
  delete course._id
  return model.create(course);
}
export const findAllCourses = () => model.find();
export const updateCourse = (courseId, course) => model.findByIdAndUpdate(courseId, course, { new: true });
export const deleteCourse = (courseId) => model.findByIdAndDelete({ _id: courseId });
