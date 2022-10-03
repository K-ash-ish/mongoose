const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/peoplesDb");
  //two collections present linking one with another
  //fruits collections
  const fruitSchema = mongoose.Schema({
    name: String
  });
  //create one model 
  const Fruit = mongoose.model('Fruit',fruitSchema);
  //create a fruit name anything we have to save this with .save() method
  const fruit = new Fruit({
    name: "Apple"
  });
  fruit.save();//need to save this id's were diff without it
  const peopleSchema = mongoose.Schema({
    name: String,
    age: Number,
    fruit: fruitSchema
  });
  const People = mongoose.model("People", peopleSchema);
  const people = new People({
    name: "Noob",
    age: 23,
    fruit: fruit // updating schema and then adding the above saved fruit in the people collection
  })
  await people.save();

  
  // await fruit.save();
  // await People.find({}, { name: 1, _id: 0 })
  //   .then(function (err, docs) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(docs);
  //     }
  //   })
  //   .then(() => mongoose.connection.close());
  //   const arr = [{name:"hello", age: 24}];
  //   await People.insertMany(arr, function(err, docs){
  //     if(err){
  //         console.log(err);
  //     }
  //     else{
  //         console.log("success");
  //         console.log(docs);
  //     }
  //   })

  //   await Peoples.save();
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}
