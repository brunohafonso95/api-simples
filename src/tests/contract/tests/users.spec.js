/*
* arquivo destinado para a definição dos testes referencias aos Endpoints de users
*/

const db = require('../../../config/database')(); // importando e instancioando o modulo de banco de dados
/*
* extraindo os models do objeto exportado em usersModel
* ps: referencia destruct objects
*/
const { usersModelList, userModel, returnModel } = require('../models/usersModel');

/*
* o describe serve apenas para a definição de uma descrição para o teste,
* a função recebe 2 parâmetros, o primeiro é a string com a descrição e o segundo parâmetro é uma função.
*/
describe('Endpoints Users', () => {
    /*
    * hook before, neste exemplo estamos adicinando um registro a base de dados no inicio dos testes 
    */
    before((done) => {
        db
            .get('users')
            .push({
                id: 1,
                name: "John Doe",
                age: 25,
                genre: "male"
            })
            .write();
        done();
    });

    /*
    * hook after, neste exemplo estamos limpando a base de dados no final dos testes 
    */
    after((done) => {
        db
            .get('users')
            .remove({})
            .write();
        done();
    });


    describe('Endpoint GET /api/users', () => {
        /*
        * a função it define o nosso teste em si, a função recebe uma string de descrição como primeiro
        * parâmetro e uma funcão como segundo parâmetro,
        *  além disso a função que é passada como parâmetro recebe uma parâmetro como o nome done,
        * o done tem a função de informar que um teste foi finalizado e que o próximo caso exista possa ser 
        * iniciado. 
        */
        it(`Should return a list of Users like this:
            [
                {
                    id: int,
                    name: string,
                    age: int,
                    genre: string
                }
            ]`, (done) => {

                // fazendo a requisição
                request
                    // informando o endpoint
                    .get('/api/users')
                    // esse metodo serve para executar uma função quando a requisição for finalizada
                    .end(function (err, res) {
                        // fazendo a asserção do nosso contrato
                        joiAssert(res.body, usersModelList);
                        // validando o statusCode da resposta
                        expect(res.statusCode).to.be.eql(httpStatus.OK);
                        /*
                        * aqui chamomos o done para informar que o teste foi finalizado e
                        * passamos o erro como parâmetro para que o mocha registre se o teste passou ou não.
                        */
                        done(err);
                    });
            });
    });

    describe('Endpoint GET /api/users/{id}', () => {
        it(`Should return a User like this:
            {
                id: int,
                name: string,
                age: int,
                genre: string
            }`, (done) => {

                request
                    .get('/api/users/1')
                    .end((err, res) => {
                        joiAssert(res.body, userModel);
                        expect(res.statusCode).to.be.eql(httpStatus.OK);
                        done(err);
                    });
            });
    });

    describe('Endpoint POST /api/users', () => {
        it(`Should create a User and return an object liket this:
            {
                message: string
            }`, (done) => {

                const newUser = {
                    id: 1,
                    name: "John Doe",
                    age: 25,
                    genre: "male"
                };

                request
                    .post('/api/users')
                    .send(newUser)
                    .end((err, res) => {
                        joiAssert(res.body, returnModel);
                        expect(res.statusCode).to.be.eql(httpStatus.OK);
                        done(err);
                    });
            });
    });

    describe('Endpoint PUT /api/users/{id}', () => {
        it(`Should update a User and return an object liket this:
            {
                message: string
            }`, (done) => {

                const updatedUser = {
                    id: 10,
                    name: "John Doe",
                    age: 25,
                    genre: "male"
                };

                request
                    .put('/api/users/1')
                    .send(updatedUser)
                    .end((err, res) => {
                        joiAssert(res.body, returnModel);
                        expect(res.statusCode).to.be.eql(httpStatus.OK);
                        done(err);
                    });
            });
    });

    describe('Endpoint DELETE /api/users/{id}', () => {
        it(`Should delete a User and return an object liket this:
            {
                message: string
            }`, (done) => {

                request
                    .delete('/api/users/1')
                    .end((err, res) => {
                        expect(res.statusCode).to.be.eql(httpStatus.NO_CONTENT);
                        joiAssert(res.body, returnModel);
                        done(err);
                    });
            });
    });
});
