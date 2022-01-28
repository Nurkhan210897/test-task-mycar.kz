export let cars = [{
        id: Math.random(),
        brand: 'Audi',
        model: 'A4',
        numberPlate: '356VZA01',
        status: 'booked',
        clients: null
    },
    {
        id: Math.random(),
        brand: 'BMW',
        model: '6 Gran Turismo',
        numberPlate: '121VZA03',
        status: 'in rent',
        clients: {
            client: 'Max holloway',
            dateOfIssue: '2022-01-17',
            returnDate: '2022-01-27'
        }
    },
    {
        id: Math.random(),
        brand: 'Mercedes-Benz',
        model: 'CLA AMG',
        numberPlate: '521AWA02',
        status: 'in the parking',
        clients: null
    },
]