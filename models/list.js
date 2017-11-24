const mongoose = require('mongoose');
const bucketListSchema = mongoose.Schema({
    title: {
        required:true,type:String
    },
    description: String,
    category: {type:String,required:true,enum:['High','Medium','Low']}
});

const bucketList = module.exports = mongoose.model('BucketList', bucketListSchema);

module.exports.getAllLists = (callback) => { bucketList.find(callback); };
module.exports.addList = (newList, callback) => {
    if (newList)
        newList.save(callback);
    else {
        var newItem =  new bucketList({ title: 'Mr', category: 'High', description: 'test1' });
        newItem.save(callback)
    }
};
module.exports.deleteById = (id, callback) => {
    let query = {_id: id };
    bucketList.remove(query, callback);
};