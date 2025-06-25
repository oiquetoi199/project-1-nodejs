import express from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";

const PORT = process.env.PORT || 8080
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/')

app.use(express.static('public'))

console.log(__dirname);


app.listen(PORT, () => {
    console.log(`App is running ${process.env.PORT}`);

});

webRoutes(app);