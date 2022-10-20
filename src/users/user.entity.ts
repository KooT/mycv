import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        unique: true,
        nullable: false
    })
    email: string;

    @Column()
    password: string;

    @AfterInsert()
    log(){
        console.log(`Inserted user with id: ${this.id}`);
    }

    @AfterUpdate()
    logU(){
        console.log(`Updated user with id: ${this.id}`);
    }
    @AfterRemove()
    logR(){
        console.log(`Removed user with id: ${this.id}`);
    }    
}