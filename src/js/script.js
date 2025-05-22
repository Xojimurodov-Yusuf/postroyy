const tovar = [
    {
        id: 1,
        image: "pastroy-img/pic.svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 2,
        image: "pastroy-img/pic (1).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 3,
        image: "pastroy-img/pic (2).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 4,
        image: "pastroy-img/pic (3).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 5,
        image: "pastroy-img/pic (4).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 6,
        image: "pastroy-img/pic (5).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 7,
        image: "pastroy-img/pic (6).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 8,
        image: "pastroy-img/pic (7).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 9,
        image: "pastroy-img/pic (8).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 10,
        image: "pastroy-img/pic (9).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 11,
        image: "pastroy-img/pic (10).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },

    {
        id: 12,
        image: "pastroy-img/pic (11).svg",
        name: "Паркетная доска из деревянного",
        price: "1.000.000 cум"
    },
]



let burger = document.querySelector(".burger");
let resdiv = document.querySelector(".res-burger");

burger.addEventListener("click", () => {
    resdiv.classList.toggle("active");
    let isOpen = burger.classList.toggle("burger-responsive");

    if (isOpen) {
        let burger2 = burger.src = "pastroy-img/Frame 64 (1).svg";
    } else {
        let cansel = burger.src = "pastroy-img/burger.svg"
    }
});


function createtovar(tovarlar) {
    let cardFather = document.querySelector(".all-card")
    cardFather.innerHTML = " "

    let createBox = tovarlar.map((element) => {
        let createDiv = document.createElement("div")
        let createCard = createDiv.innerHTML = `
         <div class="card" id="${element.id}">
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

        `
        cardFather.append(createDiv)
    })
}

createtovar(tovar)

function saqla(saqlatovar) {

    let stars = document.querySelectorAll(".star");

    stars.forEach(star => {
        let bosildi = star.addEventListener("click", () => {
            function saqla2(saqlatovar) {
                let stars = document.querySelectorAll(".star");

                stars.forEach(star => {
                    star.addEventListener("click", () => {
                        if (star.src.includes("star.svg")) {
                            star.src = "pastroy-img/yellow-star.svg";
                            localStorage.setItem("yoqtirgantovari", JSON.stringify(saqlatovar));
                        } else {
                            star.src = "pastroy-img/star.svg";
                            localStorage.removeItem("yoqtirgantovari");
                        }
                    });
                });
            }
            saqla2(tovar)

        });
    });
}

saqla(tovar)

let favorite = document.getElementById("favorite-tovar")

favorite.addEventListener("click", () => {
    window.location.href = "favorite.html"
})

let instagram = document.getElementById("instagram")

instagram.addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/just_user.01/"
})

let telegram = document.getElementById("telegram")

telegram.addEventListener("click", () => {
    window.location.href = "https://t.me/y_bahodirovich"
})

let categoriCard = document.querySelector(".catalog")

categoriCard.addEventListener("click", () => {
    window.location.href = "categori.html"
})

