const HttpStatus = require('http-status');
const { resolve } = require('path');

const defaultResponse = (data, statusCode = HttpStatus.OK) => ({
    data,
    statusCode,
});

const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST) => defaultResponse({
    message: message,
}, statusCode);


class UsersController {
    constructor(app) {
        this.app = app;
        this.db = app.db;
    }

    getAllUsers() {
        return new Promise(async (resolve, reject) => {
            try {
                const projects = await this.db.get('users').value();
                resolve(defaultResponse(projects));
            } catch (error) {
                reject(errorResponse(error.message));
            }
        });
    }

    getUserById(userId) {
        return new Promise(async (resolve, reject) => {
            try {
                const user = await this.db
                    .get('users')
                    .find({ id: parseInt(userId) })
                    .value();
                if (user) {
                    resolve(defaultResponse(user));
                } else {
                    resolve(defaultResponse({ message: `User with id: ${userId} Not Found` }, HttpStatus.NOT_FOUND));
                }
            } catch (error) {
                reject(errorResponse(error.message));
            }
        });
    }

    insertUser(user) {
        return new Promise(async (resolve, reject) => {
            try {
                const projects = this.db.get('users').value();
                user.id = projects[projects.length - 1].id + 1;
                await this.db.get('users').push(user).write();
                resolve(defaultResponse({ message: 'user successfully inserted' }));
            } catch (error) {
                reject(errorResponse(`Error inserting user: ${error.message}`));
            }
        });
    }

    deleteUser(userId) {
        return new Promise(async (resolve, reject) => {
            try {
              const deletedUser = await this.db
                .get('users')
                .remove({ id: parseInt(userId) })
                .write();
              if (deletedUser.length) {
                resolve(defaultResponse({ message: `user successfully deleted` }, 204));
              } else {
                resolve(defaultResponse({ message: `user with id: ${userId} Not Found` }, HttpStatus.NOT_FOUND));
              }
            } catch (error) {
              reject(errorResponse(`Error to remove user: ${error.message}`));
            }
          });
    }
}

module.exports = UsersController;