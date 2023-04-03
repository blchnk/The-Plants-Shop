const {badRequest} = require("../error/ApiError");

class UserController {
    async registration(req, res) {

    }

    async login(req, res){

    }

    async check(req, res, next) {
        const {id} = req.query;
        if (!id) {
            return next(badRequest('Не задан ID'));
        }
        res.json(id);
    }
}

module.exports = new UserController()