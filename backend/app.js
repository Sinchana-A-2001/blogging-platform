const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to Cloud Native Blogging Platform",
        status: "Backend API is Running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
