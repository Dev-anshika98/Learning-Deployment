import express from 'express';
// import cors from 'cors';

const app = express();

// Enable CORS middleware
// app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is ready');
});

// Get a list of jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id: 3,
            title: 'Another joke',
            content: 'this is a joke'
        },
        {
            id: 4,
            title: 'Another joke',
            content: 'this is a joke'
        },
        {
            id: 5,
            title: 'Another joke',
            content: 'this is a joke'
        },
        {
            id: 6,
            title: 'Another joke',
            content: 'this is a joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
