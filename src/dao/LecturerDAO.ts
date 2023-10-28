
import { coreDataSource } from "../app";
import { Lecturer } from "../entity/Lecturer";

export class LecturerDAO {
    private coreRepository = coreDataSource.getRepository(Lecturer);

    async all() {
        return this.coreRepository.find();
    }

    async one(id: number) {
        return this.coreRepository.findOne({ where: { id: id } });
    }
}