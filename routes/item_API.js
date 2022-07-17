const controller = require('../controllers/item_C');
const verifyJWT = require('../middlewares/verifyJWT');

module.exports = (app)=>{

    app.post('/olx/v1/users/create',[verifyJWT.token],controller.create);
    app.get('/olx/v1/users/getItem/:id',controller.getItem);
    app.delete('/olx/v1/users/delItem/:id',[verifyJWT.token],controller.deleteItem);
    
}