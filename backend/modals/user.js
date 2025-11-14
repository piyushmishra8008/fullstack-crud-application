const mongoose = require('mongoose');
mongoose.connect(
  'modgodb_url';
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
