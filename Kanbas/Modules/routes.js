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
  app.get("/api/modules", findAllModules);

  const findModuleById = async (req, res) => {
    const module = await dao.findModuleById(req.params.moduleId);
    res.json(module);
  };
  app.get("/api/modules/:moduleId", findModuleById);

  const findModuleByCourse = async (req, res) => {
    const modules = await dao.findModuleByCourse(req.params.course);
    res.json(modules);
  };
  app.get("/api/courses/:course/modules", findModuleByCourse);

  const updateModule = async (req, res) => {
    const { moduleId } = req.params;
    const status = await dao.updateModule(moduleId, req.body);
    res.json(status);
  };
  app.put("/api/modules/:moduleId", updateModule);
}