export default function accos<K extends string, T>(key:K, value:T){
    return <O extends Object>(item:O)=>{
        return {
            ...item,
            [key]:value,
        }
    }
}