
import { appDataSource } from "../app";
import { Offloading } from "../entity/Offloading";

export class OffloadingDAO {
    private offloadingRepository = appDataSource.getRepository(Offloading);

    async all() {
        return this.offloadingRepository.find();
    }

    async one(id: number) {
        return this.offloadingRepository.findOne({ where: { offloading_id: id } });
    }

    async save(offloading: Offloading) {
        return this.offloadingRepository.save(offloading);
    }

    async delete(id: number) {
        return await this.offloadingRepository.delete(id);
    }
}