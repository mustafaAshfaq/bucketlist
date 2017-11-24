const express = require('express');
const model = require('../models/hero');
const router = express.Router();

router.get('/', (req, res) => {
    model.getAllHeroes((err, lists) => {
        if (err)
            res.json({ success: false, message: `Error occured in getting heroes:${err}` });
        else if (lists) {
            res.write(JSON.stringify({ success: true, lists: lists }));
            res.end();
        }
    });
});
router.post('/', (req, res, next) => {
    let newHero = new model({
        name: req.body.name, powers: req.body.powers, nemesis: req.body.nemesis
    });
    model.addHero(newHero, (err, list) => {
        if (err)
            res.json({ success: false, message: `Error occured in adding hero:${err}` });
        else
            res.json({ success: true, message: `hero added` });
    });
})
router.put('/:id', (req, res, next) => {
    console.log(`got hero:${req.params.id}`);
    if (req.params.id) {
        console.log(`got hero`);
        model.getHeroById(req.params.id, (err, hero) => {
            if (err)
            {
                res.json({ success: false, message: `Error occured in updating hero:${err}` });

            }
                
            else {
                console.log(`got hero`);
                if (hero)
                {
                    console.log(`id:${hero._id}`);
                    hero.set({
                        name: req.body.name, powers: req.body.powers, nemesis: req.body.nemesis
                    });
                    hero.save((err, updatedHero) => {
                        if (err)
                            res.json({ success: false, message: `Error occured in updating hero:${err}` });
                        else
                            res.json({ success: true, message: `hero updated` });
                    });
                }
               
            }
        });
    }
   
});

router.delete('/:id', (req, res, next) => {
    model.removeHero(req.params.id, (err, list) => {
        if (err)
            res.json({ success: false, message: `Error occured in removing hero:${err}` });
        else
            res.json({ success: true, message: `hero removed` });
    });
})

module.exports = router;