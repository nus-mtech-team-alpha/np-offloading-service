import { coreDataSource } from "../app";
import { Module } from "../entity/Module";

export class ModuleDAO {
    private coreRepository = coreDataSource.getRepository(Module);

    async all() {
        return this.coreRepository.find();
    }

    async one(id: number) {
        return this.coreRepository.findOne({ where: { id: id } });
    }
}