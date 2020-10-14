import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm';
import Orpanage from './Orphanage';

@Entity('images')

export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToMany(() => Orpanage, orphanage => orphanage.images)
    @JoinColumn({name: 'orphanage_id'})
    orphanage: Orpanage;
}