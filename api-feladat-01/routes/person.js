const service = require('../service/person.service');
const express = require('express');

const personRouter = new express.Router();

personRouter.get('/count', (req, res) => {
    const count = service.countVaccinated();
    res.json({
        'number_of_vaccinated': count
    });
});

personRouter.get('/vaccinated', (req, res) => {
    const vaccinated = service.getVaccineted();
    res.json(vaccinated);
})

module.exports = personRouter;