const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 5000;

app.use(cors());
const chefs = require("./data/chef.json");
const recipes = require("./data/recipes.json");
app.get("/", (req, res) => {
  res.send("Tasty Food is running");
});

app.get("/chefs", (req, res) => {
  res.send(chefs);
});
app.get("/recipes", (req, res) => {
  res.send(recipes);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find((chef) => chef.id === id);
  res.send(selectedChef);
});

app.get("/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const selectedRecipes = recipes.filter(
    (recipe) => parseInt(recipe.category_id) === id
  );
  res.send(selectedRecipes);
});
app.listen(port, () => {
  console.log(`Tasty Food listening on port ${port}`);
});
