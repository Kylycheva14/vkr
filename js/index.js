const btn = document.querySelector(".show");
const input = document.querySelector(".name");
const product = document.querySelector(".list");
const addProductBtn = document.querySelector(".clear");
const work = document.querySelector(".work");
const man = document.querySelector(".man");

btn.addEventListener("click", () => {
    product.innerHTML +=`<li> Вакансия: ${input.value}  </li>` 
    product.innerHTML +=`<li> Требования: ${work.value}  </li>`
    product.innerHTML +=`<li> Oбязанности: ${man.value} </li>`
    input.value = ""
    work.value = ""
    man.value = ""
    alert("Новая вакансия");
})

addProductBtn.addEventListener("click", () => {
    product.innerHTML = ""
})