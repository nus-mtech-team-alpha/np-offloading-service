import express from "express";
import path from "path";
import { Offloading } from "../entity/Offloading";
import { OffloadingService } from "../service/OffloadingService";

const router = express.Router();
const offloadingService = new OffloadingService();
router.use(express.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, '../../public')));
router.post('/add', async (req, res) => {
    try {
        const offloading: Offloading = new Offloading();
        console.log(req.body);
        offloading.lecturer_module_id = req.body.lecturer_module_id;
        offloading.num_of_hour_weekly = req.body.num_of_hour_weekly;
        offloading.justification = req.body.justification;
        await offloadingService.createOffloading(offloading);
        res.sendFile(path.join(__dirname, '../../public', 'index.html'));
    } catch (error: any) {
        res.status(400).json({ 'messsage': error.message });
    }
});
export default router;