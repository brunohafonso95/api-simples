/*
* arquivo para definição das models usados nos Endpoints de users
* definimos os modelos num arquivo separado para deixar o código mais limpo  
* e caso necessário a refatoração, alteramos em um único local.
*/

/*
* aqui definimos um modelo de array de objetos com a seguinte estrutura
*   [
*       {
*            id: 1,
*            name: "John Doe",
*            age: 25,
*            genre: "male"
*        }
*   ]
*/
const usersModelList = joi.array().items(joi.object().keys({
    id: joi.number(),
    name: joi.string(),
    age: joi.number(),
    genre: joi.string()
}));


/*
* aqui definimos um modelo de objeto com a seguinte estrutura
*       {
*            id: 1,
*            name: "John Doe",
*            age: 25,
*            genre: "male"
*        }
*/
const userModel = joi.object().keys({
    id: joi.number(),
    name: joi.string(),
    age: joi.number(),
    genre: joi.string()
});

/*
* aqui definimos um modelo de objeto com a seguinte estrutura
*       {
*           message: "mensagem"
*       }
*/
const returnModel = joi.object().keys({
    message: joi.string()
});

module.exports = { 
    usersModelList,
    userModel,
    returnModel
};