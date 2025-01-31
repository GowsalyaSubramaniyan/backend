const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 90; // Consider changing to 3000 or using process.env.PORT

app.use(express.json());
app.use(cors()); // Enable CORS

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
