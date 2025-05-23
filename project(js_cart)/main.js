let shop=document.getElementById("shop");
let shopItemData=[{
    id:"number1",
    name:"Casual Shirt",
    price:"45",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
    images:"images/shirts.jpg"
},
{
    id:"number2",
    name:"Genes Pants",
    price:"100",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
    images:"images/pants.jpg"
},
{
    id:"number3",
    name:"Shoes",
    price:"75",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
    images:"images/shoes.jpg"
},
{
    id:"number4",
    name:"Full Suits",
    price:"200",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing",
    images:"images/shoes.jpg"
}
];

let generateshop =()=>{
    return (shop.innerHTML=shopItemData
        .map((x)=>{
            let {id,name,price,desc,images}=x
        return `
        <div id=${id} class="item">
        <img width="220px" src="${images}" alt="">
        <div class="detail">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$${price}</h2>
                <div class="btn">
                    <i onclick="decrement(${id})" class="bi bi-dash"></i>
                    <div id=${id} class="quantity">0</div>
                    <i onclick="increment(${id})" class="bi bi-plus"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};
generateshop();

let increment=(id)=>{
    let selectitem=id;
    console.log(selectitem.id);
}
let decrement=(id)=>{
    let selectitem=id;
    console.log(selectitem.id);
}
let update=()=>{
    
}