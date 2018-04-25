const express = require('express');
const router = express.Router();
const GroupController = require('../controllers/group');

/*------------------------------------------------------------------*/

router.get('/', GroupController.group_get_all);
router.post('/', GroupController.group_create);
router.get('/:groupId', GroupController.group_get_by_id);
router.patch('/:groupId', GroupController.group_update);
router.delete('/:groupId', GroupController.group_delete);


/*------------------------------------------------------------------*/

module.exports = router;
