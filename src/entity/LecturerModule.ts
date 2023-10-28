import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class LecturerModule {
    @PrimaryColumn({ type: 'bigint'})
    id: number = 0;

    @Column({ type: 'bigint', nullable: false })
    lecturer_id: number = 0;

    @Column({ type: 'bigint', nullable: false })
    module_id: number = 0;
}
