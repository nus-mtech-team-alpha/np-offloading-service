import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Offloading {
    @PrimaryGeneratedColumn({ type: 'bigint'})
    offloading_id: number = 0;

    @Column({ type: 'bigint', nullable: false })
    lecturer_module_id: number = 0;

    @Column({ type: 'integer', nullable: false })
    num_of_hour_weekly: number = 0;

    @Column({ type: 'longtext',  nullable: false })
    justification: string = "";
}
