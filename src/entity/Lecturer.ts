import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Lecturer {
    @PrimaryColumn({ type: 'bigint'})
    id: number = 0;

    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string = "";

    @Column({ type: 'varchar', length: 50, nullable: false })
    email: string = "";

    @Column({ type: 'varchar', length: 50, nullable: false })
    short_email: string = "";

    @Column({ type: 'varchar', length: 50,  nullable: false })
    workdayId: string = "";
}
