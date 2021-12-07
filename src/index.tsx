// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { Header } from './header';
// window.addEventListener('load',()=>{
//     ReactDOM.render(<Header />, document.getElementById('react_root'))
// })

// Задание 1

function concate(str1:string,str2:string):string{
    return str1+str2;
};
console.log(concate('Hello','Word'));
type typeFN= typeof concate;
// ?


// Задание 2
window.addEventListener('load',()=>{
    interface IMyHometask{
        howIDoIt: string;
        simeArray:(string|number)[];
        withData:{
            howIDoIt:string,
            simeArray:(string|number)[]
        }[];

    };
    const myHometask: IMyHometask={
        howIDoIt: "I Do it well",
        simeArray: ["string one", "string two", 42],
        withData:[{
            howIDoIt: "I Do It Wel",
            simeArray: ["string one", 23]
        }],
    };




    // Задание 3
    interface MyArray<T> {
        [N: number]: T;
        reduce( func: (prevValue:T,currentValue: T, currentIndex: number, array: T[]) =>T ):T;
    }

    // Задание 4
    
interface IHomeTaskTask4 {

    data: string;

    numbericData: number;

    date: Date;

    externalData: {

        basis: number;

        value: string;

    }

}

    type MyPartial<T>={
        [N in keyof T] ?:T[N] extends object ? MyPartial<T[N]> : T[N];
    }

    const homeTask:MyPartial<IHomeTaskTask4>={
        externalData: {
            value: 'win',
        },
    };
})  