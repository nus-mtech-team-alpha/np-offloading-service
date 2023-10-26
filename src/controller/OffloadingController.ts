import express from "express";
import { OffloadingService } from "../service/OffloadingService";
import { Offloading } from "../entity/Offloading";

const router = express.Router();
const offloadingService = new OffloadingService();

router.get("/", async (req, res) => {
    const offloadings = await offloadingService.getAllOffloadings();
    res.json(offloadings);
});

router.get("/:id", async (req, res) => {
    const offloading = await offloadingService.getOffloadingById(Number(req.params.id));
    res.json(offloading);
});

router.post("/", async (req, res) => {
    const offloading: Offloading = req.body;
    console.log("Received offloading: ", offloading);
    const newoffloading = await offloadingService.createOffloading(offloading);
    res.json(newoffloading);
});

export default router;