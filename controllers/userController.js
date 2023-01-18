exports.getMe = async (req, res, next) => {
    try {
       

        res.json({ message: "success"});
      } catch (err) {
        next(err);
        // res.status(400).send({error});
      }
}

