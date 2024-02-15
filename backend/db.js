const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/inotebook';

// const connectToMongo = () => {
//     mongoose.connect(mongoURI, () => {
//         console.log('Connected to MongoDB successfully!');
//     })
// }

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            family: 4
        });
        console.log('Connected to MongoDB successfully!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = connectToMongo;