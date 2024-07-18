# installing

* frist  install important extension is suppose like "express" and to be aware of which node were using such as common.js or node js

# creading GPPD => GET POST PUT DELETE

* create these functions using app.GPPD and were using req and res here.

* here app is express we assign to the app so that can be used in the project with name 'APP'

* And to read the res we give we need to send it in the Json format so we need to write this line
=> {const app = express();
app.use(express.json());}

//config port

"app.listen(config.port, () => {
  console.log(`print it http://localhost:${config.port}`);
});"

 => this line should be the last line of the project cuz we dont need it after calling for the first time

# FINDINGI AND CREATING ID 

* for id we need to write it like 

=>   app.get('/pathname/:id', (req, res, next) => {
     const newemo = functionname(req.params.id);})

     here function is we create to find the index of the id to delete post get etc

