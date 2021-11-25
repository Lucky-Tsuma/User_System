const router = require("express").Router();
const { getProjects, getProject, deleteProject } = require("../controllers/project.controller");
const { checkToken } = require("../middleware/token_validation");

router.get('/', checkToken, getProjects);
router.get('/project', checkToken, getProject);
router.get('/deleteProject', checkToken, deleteProject);

module.exports = router;
