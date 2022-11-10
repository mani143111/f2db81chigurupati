var Apple = require('../models/Apple');
// List of all Apple
exports.Apple_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Apple list');
};
// for a specific shoe.
exports.Apple_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Apple detail: ' + req.params.id);
};
// Handle Apple create on POST.
exports.Apple_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Apple();
    document.Apple_colour = req.body.Apple_colour;
    document.Apple_price = req.body.Apple_prize;
    document.Apple_quantity = req.body.Apple_quantity;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle Apple delete form on DELETE.
exports.Apple_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: Apple delete DELETE ' + req.params.id);
};
// Handle Apple update form on PUT.
exports.Apple_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: Apple update PUT' + req.params.id);
};
exports.Apple_list = async function(req, res) {
    try{
        theApples = await Apple.find();
        res.send(theApples);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// VIEWS
// Handle a show all view
exports.Apple_view_all_Page = async function(req, res) {
    try{
        theApples = await Apple.find();
        res.render('Apple', { title: 'Apple Search Results', results: theApples });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
