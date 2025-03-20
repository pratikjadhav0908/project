let opts=document.querySelector("#select")
let selects=document.querySelector("#lawid")
opts.addEventListener("change", ()=>{
    const opt= opts.options[opts.selectedIndex];
    if(opt.value==="2"){
        selects.style="display:block";
        console.log("selected");
    }
})
