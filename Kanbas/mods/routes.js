import * as dao from "./dao.js";

export default function ModuleRoutes(app) {
  const createModule = async (req, res) => {
    const module = await dao.createModule(req.body);
    res.json(module);
  };
  app.post("/api/courses/:cid/modules", createModule);

  const deleteModule = async (req, res) => {
    const status = await dao.deleteModule(req.params.moduleId);
    res.json(status);
  };
  app.delete("/api/modules/:moduleId", deleteModule);

  const findAllModules = async (req, res) => {
    const modules = await dao.findAllModules();
    res.json(modules);
  };
  app.get("/api/courses/:cid/modules", findAllModules);

  const findAllModulesByCourseId = async (req, res) => {
    const { cid } = req.params.course;
    const modules = await dao.findAllModulesByCourseId(cid);
    res.json(modules);
  };
  app.get("/api/courses/:cid/modules", findAllModulesByCourseId);

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.findAllModulesByCourseId(moduleId, req.body);
    res.json(status);
  };
  app.put("/api/modules/:moduleId", updateModule);
}
 