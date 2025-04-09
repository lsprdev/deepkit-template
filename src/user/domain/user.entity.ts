import { entity, PrimaryKey, AutoIncrement, t, Unique, MinLength, MaxLength } from '@deepkit/type';

@entity.name('user')
export class User {
    id: number & PrimaryKey & AutoIncrement = 0;
    name: string & MinLength<2> & MaxLength<16> = '';
    email: string & Unique = '';
}