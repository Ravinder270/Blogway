const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const dbConnect = async () => {
  await mongoose
        .connect(process.env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        .then(() => {
            console.log('db is connected');
        })
        .catch(err => console.error(
            `Error connecting to Mongoose: ${err.message}`
        ));
};

module.exports = dbConnect;
