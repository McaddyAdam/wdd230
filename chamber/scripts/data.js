const requestData = 'js/data.json';
const display = document.querySelector('article')

async function getCompanies() {
    let response = await fetch(requestData);
    if (response.ok) {
        let data = await response.json();
        console.log(data);
        buildCompanydisplay(data)
    } else {
        throw Error(response.statusText);
    }
};

function buildCompanydisplay(data) {
    data.businesses.forEach(company => {
        let card = document.createElement('section');
        let p = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let a = document.createElement('a');
        let h3 = document.createElement('h3');
        let img = document.createElement('img');


        h3.innerHTML = company.name;
        p.innerHTML = company.address;
        p2.innerHTML = company.phone;
        p3.innerHTML = company.membership;
        a.setAttribute('href', company.website);
        a.innerHTML = 'Visit us!';
        img.setAttribute('src', company.image)
        img.setAttribute('alt', company.name)
        img.setAttribute('loading', 'lazy')

        card.append(img);
        card.append(h3);
        card.append(p);
        card.append(p2);
        card.append(a);
        card.append(p3);

        display.appendChild(card)
    })
}

getCompanies()

const gridBtn = document.querySelector(".gridBtn");
const listBtn = document.querySelector(".listBtn");

gridBtn.addEventListener('click', () => {
    display.classList.add("cards");
    display.classList.remove("list");
})

listBtn.addEventListener('click', () => {
    display.classList.add("list");
    display.classList.remove("cards");
})