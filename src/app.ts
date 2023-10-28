import { DataSource } from "typeorm"
import { Offloading } from "./entity/Offloading"
import { Lecturer } from "./entity/Lecturer"
import { Module } from "./entity/Module"
import Consul from "consul"


export const offloadDataSource = new DataSource({
    type: "mysql",
    host: process.env.OFFLOADING_DB_HOST,
    port: parseInt(process.env.OFFLOADING_DB_PORT || "3306"),
    username: process.env.OFFLOADING_DB_USER,
    password: process.env.OFFLOADING_DB_PASSWORD,
    database: process.env.OFFLOADING_DB_DATABASE,
    logging: true,
    synchronize: true,
    entities: [
        Offloading
    ]
})

export const coreDataSource = new DataSource({
    type: "mysql",
    host: process.env.CORE_DB_HOST,
    port: parseInt(process.env.CORE_DB_PORT || "3306"),
    username: process.env.CORE_DB_USER,
    password: process.env.CORE_DB_PASSWORD,
    database: process.env.CORE_DB_DATABASE,
    entities: [Lecturer, Module]
})

offloadDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })
coreDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

import express from "express";
import offloadingController from "./controller/OffloadingController";
import viewController from "./controller/ViewController";

const app = express();
const port = 3000;
const router = express.Router();
router.get('/health', (req, res) => {
    res.sendStatus(200);
});
router.use('/api', offloadingController);
router.use('/', viewController);
app.use('/offload', router);
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}/offload`);
});

const consul = new Consul({ host: 'consul', port: '8500', promisify: true});
const serviceDetails = {
    id: 'np-offloading',
    name: 'np-offloading',
    address: 'offloading-service',
    port: 3000,
    check: {
        http: 'http://offloading-service:3000/offload/health',
        interval: '10s',
        timeout: '1s',
    },
};

consul.agent.service.register(serviceDetails, (err) => {
    if (err) {
        throw new Error('Failed to register service with Consul');
    }
    console.log('Service successfully registered with Consul');
});

process.on('exit', () => {
    consul.agent.service.deregister(serviceDetails.id, (err) => {
        if (err) {
            console.error('Failed to deregister service from Consul:', err);
        } else {
            console.log('Service successfully deregistered from Consul');
        }
    });
});
