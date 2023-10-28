import express from "express";
import { OffloadingService } from "../service/OffloadingService";
import { Offloading } from "../entity/Offloading";
import bodyParser from "body-parser";
import cors from "cors";

const router = express.Router();
const offloadingService = new OffloadingService();

router.use(bodyParser.json());
router.use(cors());

router.get("/offloadings", async (req, res) => {
    const offloadings = await offloadingService.getAllOffloadings();
    res.json(offloadings);
});

router.get("/offloadings/:id", async (req, res) => {
    const offloading = await offloadingService.getOffloadingById(Number(req.params.id));
    res.json(offloading);
});

router.post("/offloadings", async (req, res) => {
    try {
        const offloading: Offloading = req.body;
        const newoffloading = await offloadingService.createOffloading(offloading);
        res.json(newoffloading);
    } catch (error: any) {
        res.status(400).json({ 'messsage': error.message });
    }
});

export default router;