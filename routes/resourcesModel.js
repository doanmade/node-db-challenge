const bd = require("../data/dbConfig.js");
module.exports = {
  find,
  findById,
  insert,
  update,
  remove
};
function find() {
  return db("projects");
}
async function findById(id) {
  try {
    const project = await db("projects")
      .where({ id })
      .first();
    if (project) {
      return project;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}

async function insert(project) {
  try {
    const [id] = await db("projects").insert(project);
    const newProject = await findById(id);
    return newProject;
  } catch (error) {
    console.error(error);
  }
}

async function update(changes, id) {
  try {
    const updating = await db("projects")
      .update(changes)
      .where({ id });
    const updated = await findById(id);
    return updated;
  } catch (error) {
    console.error(error);
  }
}

async function remove(id) {
  try {
    const tobeRemoved = await findById(id);
    if (tobeRemoved) {
      await db("projects").del();
      return tobeRemoved;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}
