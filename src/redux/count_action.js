export function createIncrementAction(data){
    return {
        type:'increment',
        "data": data
    }
}
export function createDecrementAction(data){
    return{
        type:'decrement',
        data
    }
}
