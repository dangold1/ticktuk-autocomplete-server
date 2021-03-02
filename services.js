const countries = require('./js.json');

/**
 * @param {Object} req.body
 * @returns {List[countries]}
 */
const getSearchResults = async (req, res) => {
    try {
        const { text } = req.body;
        const filterCountries = countries.filter((country) => country.name.toLowerCase().includes(text.toLowerCase()));
        return res.json(filterCountries);
    } catch (err) {
        res.status(400).send(err.message);
    }
}

module.exports = {
    getSearchResults
}