exports.register = async(req, res, next) => {
    try {

         // const e = new user({
        //   email: req.body.email,
        //   password: req.body.password,
        //   first_name: req.body.first_name,
        //   last_name: req.body.last_name,
        //   role: req.body.role,
        //   position: req.body.position,
        // });
        // const result = await e.save();
        // res.send(result);
        res.json({ message: "register success"});
    } catch (err) {
        next(err);
    }
}