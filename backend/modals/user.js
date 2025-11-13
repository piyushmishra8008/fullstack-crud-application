const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://piyushmishra66666_db_user:mwTuu0ZTLboQ61r8@cluster0.8b1wsgp.mongodb.net/userDB?retryWrites=true&w=majority'
)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ Connection error:', err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    job: {
        type: String,
        required: true
    },
    
    status: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);