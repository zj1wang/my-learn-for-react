export default function counterReducer(pre = 0,action){
    const type = action.type
    const {data} =action
    switch (type) {
        case 'increment':
            return pre+data

        case 'decrement':
            return pre-data
        default:
            return pre

    }


}