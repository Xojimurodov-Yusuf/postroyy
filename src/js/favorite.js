
let getLocal = JSON.parse(localStorage.getItem("yoqtirgantovari"));

let boxFather = document.querySelector(".card-father");

function createBoxx(element) {
    let box = document.createElement("div");

    box.innerHTML = `
       <div class="card">
                            <div class="card-images">
                                <img class="card-img" src="${element.image}" alt="pic">
                                <img class="icon-top" src="pastroy-img/icon_top.svg" alt="icon_top">
                            </div>

                            <div class="card-item">
                                <p class="card-name">${element.name}</p>

                                <div class="price-star">
                                    <p class="price">${element.price}</p>

                                    <img class="star" src="pastroy-img/star.svg" alt="star">
                                </div>
                            </div>
                        </div>

        `; 

    boxFather.append(box);
}

getLocal.forEach(item => createBoxx(item));
