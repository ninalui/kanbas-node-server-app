import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.json(course);
  };
  app.post("/api/courses", createCourse);

  const deleteCourse = async (req, res) => {
    const status = await dao.deleteCourse(req.params.cid);
    res.json(status);
  };
  app.delete("/api/courses/:cid", deleteCourse);

  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  app.get("/api/courses", findAllCourses);

  const updateCourse = async (req, res) => {
    const { cid } = req.params;
    const status = await dao.updateCourse(cid, req.body);
    res.json(status);
  };
  app.put("/api/courses/:cid", updateCourse);
}
