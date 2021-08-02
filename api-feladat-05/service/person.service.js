const fs = require('fs').promises;

const dbPath = './db/db.json';

const getAll = async () => {
    const content = await fs.readFile(dbPath, 'utf-8');
    return JSON.parse(content);
}

const personId = async (id) => {
    const persons = await getAll();
    const personsIndex = persons.findIndex((p) => p.id === id);
    return persons[personsIndex];
}

const update = async (id, person) => {
    const people = await getAll();
    const personIndex = people.findIndex((p) => p.id === id);
    people[personIndex] = {...person, id};

    await fs.writeFile(dbPath, JSON.stringify(people), 'utf-8');

    return people[personIndex];
}

const del = async (id) => {
    const people = await getAll();
    const personIndex = people.findIndex((p) => p.id === id);
    people.splice(personIndex, 1);
    
    await fs.writeFile(dbPath, JSON.stringify(people), 'utf-8');

    return {};
}

const isVaccinated = async (id) => {
    const people = await getAll();
    const person = people.find((f) => f.id === id);

    if (typeof person === 'undefined') {
        return null;
    }

    return person.vaccine !== '';
}

const addPerson = async (nPerson) => {
    const people = await getAll();
    let id = 1;
    if (people.length !== 0) {
        id = people[people.length - 1].id + 1;
    }

    const newP = {...nPerson, id};
    people.push(newP);
    
    await fs.writeFile(dbPath, JSON.stringify(people), 'utf-8');

    return newP;
}

const getVaccineted = async () => {
    const data = await getAll();
    return data.filter((p) => p.vaccine !== '');
};

const countVaccinated = async () => {
    const vaccinated = await getVaccineted();
    return vaccinated.length;
};


module.exports = {
    countVaccinated,
    getVaccineted,
    isVaccinated,
    addPerson,
    update,
    del,
    getAll,
    personId
}