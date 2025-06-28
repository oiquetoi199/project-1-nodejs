import express, { urlencoded } from "express";
import 'dotenv/config';
import webRoutes from "./routes/web";


const PORT = process.env.PORT || 8080
const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views/')

// Su dung file tinh (cap quyen tury cap thu muc public cho client)
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => {
    console.log(`App is running ${process.env.PORT}`);

});

webRoutes(app);