import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render(__dirname + "/views/index.ejs", {
        todayTodo: todayList,
    })
})

app.get("/work", (req, res) => {
    res.render(__dirname + "/views/worklist.ejs", {
        todayWork: workList,
    })
})


app.post("/submit", (req, res) => {
    todayList.push(req.body.newChore);
    res.redirect("/");
})


app.listen(port, () => {
    console.log(`Server is on and listening on port ${port}`);
})


const todayList = ["need to go to study", "clean the house", "vaacum the dogs"]
const workList = ["write the email", "improve the rankings", "fix the gear wheel"]