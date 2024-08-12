import model from "./model.js";
export const createModule = (module) => {
  delete module._id;
  return model.create(module);
}

export const findAllModules = () => model.find();
export const findAllModulesByCourseId = (courseName) => model.find({ course: courseName });

export const deleteModule = (moduleId) => model.findByIdAndDelete({_id: moduleId});

export const updateModule = (moduleId, module) => model.findByIdAndUpdate(moduleId, module, { new: true }); 