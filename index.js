express = require('express');
app = express();
const path = require('path');
student = require('./database');
port = 3000;


app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})
app.set('view engine', 'ejs')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ########   To use Static Files   ##########

app.use(express.static(path.join(__dirname, 'public')));

// ########  To Create, Read & Delete  #########
app.get('/', async (req, res) => {
    res.render(('index'))
})

app.get('/budget', async (req, res) => {
    res.render(('budget'))
})


app.get('/form', async (req, res) => {
    res.render(('form'))
})




app.post('/form', async (req, res) => {
    const {Name, phone, Email} = req.body;
    newstudent = new student({ Name, phone, Email });
    studentsave = await newstudent.save();
    res.redirect('/')
})
