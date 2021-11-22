const router = require("express").Router();
const { getUsers, getUser, deleteUser } = require("../controllers/user.controller");
const { checkToken } = require("../middleware/token_validation");

router.get('/', checkToken, getUsers);
router.get('/user', checkToken, getUser);
router.get('/deleteUser', checkToken, deleteUser);


module.exports = router;
