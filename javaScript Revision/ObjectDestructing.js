let restaurent = {
    name:"Bismillah Restaurent😍",
    location:"Near Bongaigaon 🥰",
    summary:"Visit for tasty Food and stay😋",
    rating:4.5
};

console.log(restaurent);

//Object destructing

let {name:names,summary:summarys} = restaurent;

console.log(names,summarys);

let res = {
    Delivery:function ({start,end,hour}){
        console.log(`Order ${start} & ${end} will be deliverd at ${hour}`);
    }
}

res.Delivery({start:4,end:10,hour:12});