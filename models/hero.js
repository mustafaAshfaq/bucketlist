const mongoose = require('mongoose');

const heroSchema = mongoose.Schema({
    name: { type: String, required: true },
    powers: { type: String, required: true, enum: ['Fly', 'Invisible', 'Super Strength'] },
    nemesis: {type:String,required:true}
})
const hero = module.exports = mongoose.model('Hero', heroSchema);

module.exports.getAllHeroes = (callback) => {
    hero.find(callback);
};

module.exports.addHero = (newHero, callback) => {
    newHero.save(callback);
};
module.exports.removeHero = (id, callback) => {
    let query = { _id: id };
    hero.remove(query, callback);
};

module.exports.getHeroById = (id, callback) => {
    hero.findById(id, callback);
};
module.exports.updateHero = (updatedHero, callback) => {
    updatedHero.save(callback);
};