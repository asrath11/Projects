let inp = document.querySelector("input");
let btn = document.querySelector(".btn");
let orderli = document.querySelector("ol");

btn.addEventListener("click", function () {
    let items = document.querySelectorAll("li");
    let itemExists = false;

    items.forEach(function (item) {
        if (item.innerText === inp.value) {
            itemExists = true;
        }
    });

    if (!itemExists && inp.value !== "") {
        let li = document.createElement("li");
        let button = document.createElement("button")
        button.classList.add("delete")
        button.classList.add("btn")
        button.innerHTML = "X"
        li.innerHTML = inp.value;
        orderli.appendChild(li);
        li.appendChild(button)
    }
    let delbtn = document.querySelectorAll(".delete")
    for (btn of delbtn) {
        btn.addEventListener("click",function(){
            let parent = this.parentElement;
            orderli.removeChild(parent)
        })
    }
    // orderli.addEventListener("click",function(e){
    //     if(e.target.nodeName=="BUTTON"){
    //         let listItem = e.target.parentElement
    //         listItem.remove()
    //     };
    // })

    inp.value = ""; // Clear the input field after adding the item
});
