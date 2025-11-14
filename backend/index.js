const express = require('express');
const app = express();
const cors= require('cors');
  
const usermodels = require('./modals/user');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/read', async (req, res) => {
  let users = await usermodels.find()
  res.json(users);
});
app.get('/edit/:id', async (req, res) => {
  let user = await usermodels.findOne({ _id: req.params.id });
  
});
app.post('/update/:id', async (req, res) => {
  let { name, email, job, favouriteColor, status, Rate } = req.body;
  let user = await usermodels.findOneAndUpdate({ _id: req.params.id },{ name, email, job, favouriteColor, status, Rate },{ new: true });

});
app.delete('/delete/:id', async (req, res) => {
  try {
    await usermodels.findOneAndDelete({ _id: req.params.id });
    res.json({ success: true, message: "User deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

app.post('/create', async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const newUser = await usermodels.create({
      name: req.body.name,
      email: req.body.email,
      job: req.body.job,
      status: req.body.status,
      rate: req.body.rate
    });

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser
    });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ success: false, message: err.message });
  }
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
 