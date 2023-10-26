import { Offloading } from '../entity/Offloading';
import { OffloadingDAO } from '../dao/OffloadingDAO';

export class OffloadingService {

    private offloadingDAO: OffloadingDAO;

    constructor() {
        this.offloadingDAO = new OffloadingDAO();
    }

    async getAllOffloadings(): Promise<Offloading[]> {
        return await this.offloadingDAO.all();
    }

    async getOffloadingById(id: number): Promise<Offloading | null> {
        return await this.offloadingDAO.one(id);
    }

    async createOffloading(offloading: Offloading): Promise<Offloading> {
        return await this.offloadingDAO.save(offloading);
    }

    async updateOffloading(id: number, offloading: Offloading): Promise<Offloading | null> {
        await this.offloadingDAO.delete(id);
        offloading.offloading_id = id;
        return await this.offloadingDAO.save(offloading);
    }

    async deleteOffloading(id: number): Promise<void> {
        await this.offloadingDAO.delete(id);
    }
}
