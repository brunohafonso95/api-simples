/*
* Esse arquivo serve para se colocar todas as dependencias necessárias e evitar que
* tenha que se repetir esses trechos em todos os arquivos de teste,
* dessa forma importamos ele no nosso arquivo mocha.opts e setando as variaveis globais,
* os pacostes ficam acessiveis nos arquivos de teste.
*
*/

const chai = require('chai'); // lib de assert
const joi =  require('@hapi/joi'); // lib para montar os contratos
const joiAssert = require('joi-assert'); // lib para fazer assert nos contratos
const supertest = require('supertest'); // lib que faz as requicições
const app = require('../../app'); // importando o app (só é feito nesse exemplo porque eu contrui uma API para testes)
const httpStatus = require('http-status'); // lib que tem todos os statusCodes, para não termos que decorar e ficar mais legivel no código

global.httpStatus = httpStatus;
/*
* intanciando a função de request (nesse caso passamos o app como parâmetro pois há uma API construida para teste, 
* em outras apçicação informariamos a url como parâmetro)
*/
global.request = supertest(app); 
global.expect = chai.expect; // extraindo apenas o classe de expect da lib de assert
global.joi = joi; 
global.joiAssert = joiAssert;
global.app = app;
