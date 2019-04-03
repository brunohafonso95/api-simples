const UsersController = require('../controllers/usersController');

/* 
* exportando a função que inicia as rotas de users
*  a função recebe o app como parâmetro para que o mesmo seja utilizado na definição das rotas,
*  dessa forma podemos deixar as rotas de forma modularizada e deixar nosso código mais organizado.
*/
module.exports = (app) => {
    const usersController = new UsersController(app);

    app
        .route('/api/users')
        .get((req, res) => {
            usersController.getAllUsers()
                .then(response => {
                    res.status(response.statusCode).json(response.data);
                })
                .catch(response => res.status(response.statusCode).json(response.data));
        })
        .post((req, res) => {
            usersController.insertUser(req.body)
                .then(response => {
                    res.status(response.statusCode).json(response.data);
                })
                .catch(response => res.status(response.statusCode).json(response.data));
        });

    app
        .route('/api/users/:userId')
        .get((req, res) => {
            usersController.getUserById(req.params['userId'])
                .then(response => {
                    res.status(response.statusCode).json(response.data);
                })
                .catch(response => res.status(response.statusCode).json(response.data));
        })
        .put((req, res) => {
            usersController.updateUser(req.body, req.params['userId'])
                .then(response => {
                    res.status(response.statusCode).json(response.data);
                })
                .catch(response => res.status(response.statusCode).json(response.data));
        })
        .delete((req, res) => {
            usersController.deleteUser(req.params['userId'])
                .then(response => {
                    res.status(response.statusCode).json(response.data);
                })
                .catch(response => res.status(response.statusCode).json(response.data));
        });
};