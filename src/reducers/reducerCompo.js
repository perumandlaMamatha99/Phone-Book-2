const updateState=(state=[{
    firstname:"Mamatha",
    lastname:"perumandla",
    number:"9878878999",
    isFav:0
},
{
    firstname:"devee",
    lastname:"peram",
    number:"9878878909",
    isFav:0
},
{
    firstname:"bhavs",
    lastname:"peram",
    number:"9878878909",
    isFav:0
},

],action)=>{
    switch (action.type) {
        case 'ADD-CONTACT':
            return [...state,action.payload];
            break;
        //  case 'TOGGLEFAV':
        //     console.log("toogle called");
        //     const tmpstate=[...state];
        //    tmpstate.map((contact,index)=>{
        //     if(index===action.payload){
        //         contact.isFav=(contact.isFav+1)%2;
        //         return contact;
        //         console.log("hello")
        //     }
        //     return contact;
        //    })
        //     return [...tmpstate];
        //     break;
        default:
            return state;
            break;
    }

}
export default updateState;
