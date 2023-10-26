import { DataSource } from "typeorm"
import { Offloading } from "./entity/Offloading"

export const appDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_HOST || "localhost",
    port: parseInt(process.env.MYSQL_PORT || "3306"),
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE || "np-offloading",
    logging: true,
    synchronize: true,
    entities: [
        Offloading
    ]
})

appDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

import express from "express";
import bodyParser from "body-parser";
import offloadingController from "./controller/OffloadingController";

const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use("/offloading", offloadingController);
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});