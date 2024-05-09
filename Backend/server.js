import express from 'express';

const app = express();

app.get('/', (req, res)=>{
    res.send('Server is ready')
});

//get a list of five jokes
app.get('/jokes', (req,res) =>{
    const jokes =[
        {
            id:1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id:1,
            title: 'A joke',
            content: 'this is a joke'
        },
        {
            id:2,
            title: 'Another joke',
            content: 'this is a joke'
        },
        {
            id:3,
            title: 'Another joke',
            content: 'this is a joke'
        },
        {
            id:4,
            title: 'Another joke',
            content: 'this is a joke'
        },
        {
            id:5,
            title: 'Another joke',
            content: 'this is a joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Serve at  http://localhost:${port}`);
});