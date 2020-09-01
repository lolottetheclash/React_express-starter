const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        { id: 1, firstname: "John", lastname: "Doe"},
        { id: 2, firstname: "Jules", lastname: "Doetty"},
        { id: 3, firstname: "Maria", lastname: "Garcia"},
    ]
    res.json(customers);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port: ${port}`));