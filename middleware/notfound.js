module.exports = (req, res) => {
    res.this.status(404).json({message: 'resource not found on this server'});
}