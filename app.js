const express = require("express");
const app = express();
const PORT = 3000;

const items = [
  { id: 1, name: "Samsung Galaxy S25 Ultra", price: 2500, amount: 50 },
  { id: 2, name: "Samsung Galaxy S24", price: 1600, amount: 60 },
  { id: 3, name: "Samsung Galaxy Z Flip7", price: 2250, amount: 80 },
  { id: 4, name: "Lenovo ThinkBook 14 G6 IRL", price: 1930, amount: 45 },
  { id: 5, name: "Monitor Lenovo D32-40", price: 450, amount: 60 },
  {
    id: 6,
    name: "Sistem bloku Asus ROG G700TF-09285K0640",
    price: 5600,
    amount: 20,
  },
  {
    id: 7,
    name: "Monitor Asus TUF Gaming VG27AQML5A 90LM0BG0-B02971",
    price: 950,
    amount: 10,
  },
  { id: 8, name: "Fen BaByliss D6555DE", price: 300, amount: 47 },
  { id: 9, name: "Fen BaByliss D572DE", price: 90, amount: 64 },
  { id: 10, name: "Fen Laifen SE Special 3476", price: 230, amount: 32 },
];

app.get("/items", (req, res) => {
  res.json(items);
});

app.get("/items/:id", (req, res) => {
  const idOfItem = parseInt(req.params.id);
  const item = items.find((user) => user.id === idOfItem);
  if (!item) {
    res.status(404).send();
  } else {
    res.status(200).json(item);
  }
});

app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
