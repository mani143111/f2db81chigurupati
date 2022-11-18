"use strict";

var express = require('express');

var router = express.Router(); // Require controller modules.

var api_controller = require('../controllers/api');

var Apple_controller = require('../controllers/Apple'); /// API ROUTE ///
// GET resources base.


router.get('/', api_controller.api); /// Apple ROUTES ///
// POST request for creating a Apple.  

router.post('/Apples', Apple_controller.Apple_create_post); // DELETE request to delete Apple.

router["delete"]('/Apples/:id', Apple_controller.Apple_delete); // PUT request to update Apple.

router.put('/Apples/:id', Apple_controller.Apple_update_put); // GET request for one Apple.

router.get('/Apples/:id', Apple_controller.Apple_detail); // GET request for list of all Apple items.

router.get('/Apples', Apple_controller.Apple_list);
/* GET detail costume page */

router.get('/detail', Apple_controller.Apple_view_one_Page);
module.exports = router;
/* GET create electronics page */

router.get('/create', Apple_controller.Apple_create_Page);
/* GET create update page */

router.get('/update', Apple_controller.Apple_update_Page);
/* GET delete electronics page */

router.get('/delete', Apple_controller.Apple_delete_Page);
//# sourceMappingURL=resource.dev.js.map
