var Apple = require('../models/Apple');
// List of all Apples
exports.Apple_list = async function (req, res) {
    try {
        theapples = await Apple.find();
        res.send(theapples);
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};

// for a specific Apples.
// for a specific Apples.
exports.Apple_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Apple.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle Apples update form on PUT.
exports.Apple_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Apple.findById(req.params.id)
        // Do updates of properties
        if (req.body.Apple_colour) toUpdate.Apple_colour = req.body.Apple_colour;
        if (req.body.Apple_price) toUpdate.Apple_price = req.body.Apple_price;
        if (req.body.Apple_quantity) toUpdate.Apple_quantity = req.body.Apple_quantity;
        let result = await toUpdate.save();
        console.log("Success " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// Handle Apples create on POST.
exports.Apple_create_post = async function (req, res) {
    console.log(req.body)
    try {
        let document = new Apple();
        
        document.Apple_colour = req.body.Apple_colour;
        document.Apple_price = req.body.Apple_price;
        document.Apple_quantity = req.body.Apple_quantity;

        let result = await document.save();
        res.send(result);
    } catch (err) {
        // console.log(err);
        res.send(err)
        res.status(500);
    }
};
// Handle Apples delete on DELETE.
exports.Apple_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Apple.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};


// VIEWS
// Handle a show all view
exports.Apples_view_all_Page = async function (req, res) {
    try {
        theApples = await Apple.find();
        res.render('Apples', {
            title: 'Apple Search Results',
            results: theApples
        });
    } catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle a show one view with id specified by query
exports.Apple_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Apple.findById(req.query.id)
        res.render('Appledetail', {
            title: 'Apple Detail',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a Apple.
// No body, no in path parameter, no query.
// Does not need to be async
exports.Apple_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('Applecreate', {
            title: 'Apple Create'
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a Apples.
// query provides the id
exports.Apple_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Apple.findById(req.query.id)
        res.render('Appleupdate', {
            title: 'Apple Update',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a delete one view with id from query
exports.Apple_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Apple.findById(req.query.id)
        res.render('Appledelete', {
            title: 'Apple Delete',
            toShow: result
        });
    } catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle a show one view with id specified by query 
exports.Apple_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Apple.findById( req.query.id) 
        res.render('Appledetail',  
{ title: 'Apple Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a Apples. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.Apple_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('Applecreate', { title: 'Apple Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a Apples. 
// query provides the id 
exports.Apple_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Apple.findById(req.query.id) 
        res.render('Appleupdate', { title: 'Apple Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.Apple_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Apple.findById(req.query.id) 
        res.render('Appledelete', { title: 'Apple Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};