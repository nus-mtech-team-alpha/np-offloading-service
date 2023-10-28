import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Module {
    @PrimaryColumn({ type: 'bigint'})
    id: number = 0;

    @Column({ type: 'varchar', length: 50, nullable: false })
    name: string = "";

    @Column({ type: 'varchar', length: 50, nullable: false })
    acronym: string = "";

    @Column({ type: 'varchar', length: 50, nullable: false })
    npalId: string = "";

    @Column({ type: 'varchar', length: 50,  nullable: false })
    npalCatalog: string = "";

    @Column({ type: 'varchar', length: 50,  nullable: false })
    semester: string = "";
}
