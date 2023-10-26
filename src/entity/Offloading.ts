import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offloading {
    @PrimaryGeneratedColumn({ type: 'integer'})
    offloading_id: number = 0;

    @Column({ type: 'varchar', length: 20, nullable: false })
    lecturer_module_id: string = "";

    @Column({ type: 'varchar', length: 20, nullable: false })
    lecturer_project_id: string = "";

    @Column({ type: 'integer', nullable: false })
    num_of_hour_weekly: number = 0;

    @Column({ type: 'longtext',  nullable: false })
    justification: string = "";
}
