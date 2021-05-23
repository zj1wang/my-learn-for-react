const initState = [{id:'001',name:"tom",age:18}];
export default function personReducer(pre=initState,action){
    const {type,data}=action
    switch (type) {
        case 'add-person':
            return [data,...pre]
        default:
            return pre;
    }

}