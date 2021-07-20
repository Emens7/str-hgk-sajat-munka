const personDB = require('../db/db.json');


const getVaccineted = () => personDB.filter( (p) => {
    return p.vaccine !== '';
});

const countVaccinated = () => getVaccineted().length;

module.exports = {
    countVaccinated,
    getVaccineted
}