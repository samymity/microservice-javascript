

import express from 'express';

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Hello function
function hello(a: string): string {
    return a;
}

// Endpoint to receive a string and return it
app.post('/hello', (req, res) => {
    const { name } = req.body; // Expecting { "name": "sandeep" }
    if (typeof name === 'string') {
        const output = hello(name);
        res.json({ message: output });
    } else {
        res.status(400).json({ error: 'Invalid input' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});