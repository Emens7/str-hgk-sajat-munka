const service = require('../service/person.service');
const express = require('express');

const personRouter = new express.Router();

personRouter.get('/:id/vaccinated', async (req, res) => {
    const isVaccinated = await service.isVaccinated(parseInt(req.params.id));
    res.json({
        is_vaccinated: isVaccinated
    });
});

personRouter.post('/', async (req, res) => {
    const newPerson = await service.addPerson({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        vaccine: req.body.vaccine
    });

    res.json(newPerson);

});

personRouter.put('/:id', async (req, res) => {
    const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        vaccine: req.body.vaccine
    };

    const updatedPerson = await service.update(parseInt(req.params.id), data);
    res.json(updatedPerson);
})

personRouter.delete('/:id', async (req, res) => {
    const del = await service.del(parseInt(req.params.id));
    res.json(del);
})

personRouter.get('/count', async (req, res) => {
    const count = await service.countVaccinated();
    res.json({
        'number_of_vaccinated': count
    });
});

personRouter.get('/vaccinated', async (req, res) => {
    const vaccinated = await service.getVaccineted();
    res.json(vaccinated);
});

module.exports = personRouter;