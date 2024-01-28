
const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")
const  EmployeeModel = require ("./models/Employee.js")

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:false})) // added
app.use(cors({
    credentials : true,
    origin : 'http://localhost:3000' //added here you have to keep your fronted origin , it mean you are telling that give all the permission to that url to access and do to some kind of action react why only we keep 3000 not something else because react runs on 3000 port right that's why
}))

mongoose.connect("mongodb+srv://admin:admin@cluster0.41qym7q.mongodb.net/_login").then(()=>console.log("databsee connected")).catch((err)=> console.log("databse not connected")); // added , keep your url here , i pasted my url to work here

app.post('/register', (req, res) => {
EmployeeModel.create(req.body)
.then(employees => res.json(employees))
.catch(err => res.json(err))

})

const PORT = 3001;
app.listen(PORT, () => console.log(`server is running successfully on PORT ${PORT}`));

// const app = require(`express`)();
// const http = require(`http`).Server((app));
// const mongoose = require(`mongoose`);
// const cors = require ("cors")
// const EmployeeModel = require(`./models/Employee.js`);
// app.use(cors());

// mongoose.connect("mongodb+srv://vidyass1996:2WabQVw3IGamqDPs@seconddb.tx454il.mongodb.net/?retryWrites=true&w=majority")



// app.post('/register', (req, res) => {
// EmployeeModel.create(req.body)
// .then(employees => res.json(employees))
// .catch(err => res.json(err))

// })

// http.listen(3001, function(){
//     console.log(`Server is running`);
// });


// try{
//     let url = 'http://localhost:3001/register';
//     let {result} = await axios.post(url, {name, email, password})
//     alert(result.message);
//    console.log(result);
// }catch(error) {
//     alert("server error");
// }