import { Iuser } from './Iuser';

export class user implements Iuser {
    userId: number = 0;
    id: number = 0;
    title: string = 'no title'
    completed: boolean = false;
}