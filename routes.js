/**
 * @param {Object} req.body
 * @returns {List[countries]}
 */
const getSearchResults = async (req, res) => {
    try {
        const { data } = req.body;
        return res.json({});
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = {
    getSearchResults
}