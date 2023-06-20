import express from "express";

const app = express();
app.use(express.json());

// list of allowed request:
app.get("/test", (request, response) => {
    response.send("Hello There!");
});



// what port to watch / listen to:
app.listen(3000, () => {
    console.log("Listening on http://localhost:3000/ ...");
});

const fruits = ['apple', 'banana', 'cherries', 'orange'];

app.get("/fruits", (req, res) => {
    res.send(fruits); // auto adds status 200 OK
});

app.post("/fruits", (req, res) => {
    const newFruit = req.body.fruit;
    fruits.push(newFruit);
    res.status(201).send(fruits);

})