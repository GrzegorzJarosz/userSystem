const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

/*------------------------------------------------------------------*/

router.get('/', UserController.user_get_all);
router.post('/', UserController.user_create);
router.get('/:userId', UserController.user_get_by_id);
router.patch('/:userId', UserController.user_update);
router.delete('/:userId', UserController.user_delete);


/*------------------------------------------------------------------*/

module.exports = router;
