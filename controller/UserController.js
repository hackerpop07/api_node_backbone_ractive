const User = require("../database/model/User");

module.exports = {
    getAll: (req, res) => {
        User.find({}).limit(6)
            .then((users) => {
                res.json(users);
            }).catch((e) => {
            res.json("error: " + e);
        });
    },
    store: (req, res) => {
        let user = new User(req.body);
        user.save(function (err, doc) {
            if (err) throw next(err);
            res.send(doc);
        });
    },
    delete: (req, res) => {
        User.deleteOne({_id: req.params.id}, function (err) {
            if (err) throw  next(err);
            res.send({_id: req.params.id});
        });
    },
    update: (req, res) => {
        User.updateOne({_id: req.params.id}, req.body, function (err) {
            res.send({_id: req.params.id});
        });
    }
};