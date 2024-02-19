const fs = require("fs").promises;

const JsonFile = require("../data.json");

function getAllPosts() {
  return JsonFile;
}

async function createPost() {
  const creatpost = JSON.stringify(JsonFile);
  await fs.writeFile("./data.json", creatpost);
};


module.exports = {
  getAllPosts,
  createPost,
};
