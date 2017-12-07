const express = require("express");
const recipeRoutes = express.Router();
const Recipes = require("../models/recipes");

recipeRoutes.get("/", (req, res)=>{
    Recipes.find(req.query, (err, recipe)=>{
        if(err)return res.status(500).send(err)
        return res.send(recipe)
    })
})

recipeRoutes.post("/", (req, res)=>{
    let newRecipe = new Recipes(req.body);
    newRecipe.save((err, savedRecipe)=>{
        if (err) return res.status(500).send(err)
        return res.send(savedRecipe);
    })
})

recipeRoutes.delete("/:id", (req, res)=>{
    Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe)=>{
        if(err) return res.status(500).send(err)
        return res.send(deletedRecipe)
    })
})

recipeRoutes.get("/:id", (req, res)=>{
    Recipes.findById(req.params.id, (err, foundRecipe)=>{
        if(err)return res.status(500).send(err)
        return res.send(foundRecipe)
    })
})
recipeRoutes.put("/:id", (req, res)=>{
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, foundRecipe)=>{
        if(err) return res.status(500).send(err)
        return res.send(foundRecipe)
    })
})


module.exports = recipeRoutes
