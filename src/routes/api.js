const express = require('express');
const router = express.Router();
const ProfileController = require('../controllers/ProfileController');
const ToDoListController = require('../controllers/ToDoListController');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware')



router.post('/create-profile', ProfileController.CreateProfile)
router.post('/user-login', ProfileController.UserLogin)
router.get('/select-profile', AuthVerifyMiddleware, ProfileController.SelectProfile)
router.post('/update-profile', AuthVerifyMiddleware, ProfileController.UpdateProfile)


router.post('/create-todo', AuthVerifyMiddleware, ToDoListController.CreateToDo)
router.get('/select-todo', AuthVerifyMiddleware, ToDoListController.SelectToDo)
router.get('/select-todo', AuthVerifyMiddleware, ToDoListController.SelectToDo)
router.post('/update-status-todo', AuthVerifyMiddleware, ToDoListController.UpdateStatusToDo)
router.post('/remove-todo', AuthVerifyMiddleware, ToDoListController.RemoveToDo)
router.post('/select-todo-by-status', AuthVerifyMiddleware, ToDoListController.SelectToDoByStatus)
router.post('/select-todo-by-date', AuthVerifyMiddleware, ToDoListController.SelectToDoByDate)


module.exports = router;