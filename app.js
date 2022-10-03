const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/peoplesDb");
  const peopleSchema = mongoose.Schema({
    name: String,
    age: Number,
  });
  const People = mongoose.model("People", peopleSchema);
  await People.find({}).then(function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
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
