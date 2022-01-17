import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Wallets {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    address: string;

    @Column()
    old: boolean;

    @Column()
    fav: boolean;

}