var Schema = {
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    labels: {
        type: String
    },
};


db.payload.insert({
    id: '1',
    name: 'Abc',
    quantity: 5,
    status: 0,
    description: 'reduxreduxredux',
    vampires: 'area'
});
