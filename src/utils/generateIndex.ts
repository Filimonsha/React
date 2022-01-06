import assoc from './js/assoc'
export const generateIndex= ()=> Math.random().toString(36).substring(2,15);

export const assignID= assoc('id',generateIndex());

export const generateID=(obj:object)=>{
    return assignID(obj);
}