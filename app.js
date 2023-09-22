const wrapper=document.querySelector(".wrapper");
const selectPhone=document.querySelector(".selectPhone");
const select=document.querySelector(`#select`);
const brands=[];

products.forEach((item)=>{
    if(!brands.includes(item.brand)){
        brands.push(item.brand);
    };
});

brands.map((brand)=>{
    const option=document.createElement("option");
    option.innerHTML=brand;
    selectPhone.appendChild(option);
});


products.map((item)=>{
    //creat card
    const card=document.createElement("div");
    card.classList.add("card","p-3","m-2","productCard");
    wrapper.appendChild(card);

    //creat img
    const img=document.createElement("img");
    img.src=item.img;
    img.classList.add("h-75", "w-100");
    card.appendChild(img);

    //creat h3
    const name=document.createElement("h3");
    name.innerHTML=item.name;
    name.classList.add("my-2");
    card.appendChild(name);

    //creat btn
    const btn=document.createElement("button");
    btn.classList.add("btn","btn-success","my-3");
    btn.innerHTML=`$ ${item.price}`
    card.appendChild(btn);

    const existBtn=document.createElement("button");
    existBtn.classList.add("btn",item.isBuy===true? "btn-primary":"btn-danger","my-2");
    existBtn.innerHTML=` ${item.isBuy===true ? `Sotuvda bor` : `Sotuvda yo'q`}`;
    card.appendChild(existBtn);
});

selectPhone.addEventListener('change' , (e)=>{
    wrapper.innerHTML="";
    const filterData=products.filter((item)=>item.brand==e.target.value);

    filterData.map((item)=>{
        //creat card
    const card=document.createElement("div");
    card.classList.add("card","p-3","m-2","productCard");
    wrapper.appendChild(card);

    //creat img
    const img=document.createElement("img");
    img.src=item.img;
    img.classList.add("h-75", "w-100");
    card.appendChild(img);

    //creat h3
    const name=document.createElement("h3");
    name.innerHTML=item.name;
    name.classList.add("my-2");
    card.appendChild(name);

    //creat btn
    const btn=document.createElement("button");
    btn.classList.add("btn","btn-success","my-3");
    btn.innerHTML=`$ ${item.price}`
    card.appendChild(btn);

    const existBtn=document.createElement("button");
    existBtn.classList.add("btn",item.isBuy===true? "btn-primary":"btn-danger","my-2");
    existBtn.innerHTML=` ${item.isBuy===true ? `Sotuvda bor` : `Sotuvda yo'q`}`;
    card.appendChild(existBtn);
    });
});
