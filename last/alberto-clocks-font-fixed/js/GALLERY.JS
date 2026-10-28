// Clocks aur Watches ka 40 items ka data
const itemsData = [
    {
        title: "Luxury Gold & Silver Watch", 
        category: "men-watch", 
        price: "RS : 1200", 
        img: "https://i.pinimg.com/736x/4c/03/d9/4c03d9a88eaf9c0e3866e5a821240cbd.jpg"
    },
    {
        title: "New Rolex Watch", 
        category: "vintage-watch", 
        price: "RS : 18000", 
        img: "https://i.pinimg.com/1200x/39/f8/d3/39f8d34ca53157f975788253eff05b11.jpg"
    },
    {
        title: "Women Watch", 
        category: "women-watch", 
        price: "RS : 2500", 
        img: "https://i.pinimg.com/736x/72/31/fc/7231fcf37e5db1608e17520f9752d8f2.jpg"
    },
    {
        title: "Modern Wall Clock", 
        category: "wall-clock", 
        price: "RS : 9000", 
        img: "https://i.pinimg.com/736x/ca/c3/e7/cac3e77e5a8dd49e682b824e47fad176.jpg"
    },
    {
        title: "Executive Table Clock", 
        category: "table-clock", 
        price: "RS : 6500", 
        img: "https://i.pinimg.com/736x/ca/34/6c/ca346c2430cc66eb56bba88001756335.jpg"
    },
    {
        title: "Chronograph Sport Watch", 
        category: "men-watch", 
        price: "RS : 2500", 
        img: "https://i.pinimg.com/1200x/19/2a/a2/192aa2d4ed06f9dda5316db918549da7.jpg"
    },
    {
        title: "Classic Retro Vintage Watch", 
        category: "vintage-watch", 
        price: "RS : 2010", 
        img: "https://i.pinimg.com/736x/75/f4/67/75f467d3623f8861c661d07eb440faac.jpg"
    },
    {
        title: "Silver Pearl Women Watch", 
        category: "women-watch", 
        price: "RS : 1750", 
        img: "https://i.pinimg.com/736x/e9/72/52/e97252963edfa9fd9c2431583cac8da4.jpg"
    },
    {
        title: "Industrial Gear Wall Clock", 
        category: "wall-clock", 
        price: "$2500", 
        img: "https://i.pinimg.com/736x/ef/60/d4/ef60d4571a4e898544e09b658873ff53.jpg"
    },
    {
        title: "Brass Desk Alarm Clock", 
        category: "table-clock", 
        price: "RS : 3500", 
        img: "https://i.pinimg.com/736x/7e/51/ac/7e51ac189085996a88be3ad27b933d7b.jpg"
    },
    {
        title: "Leather Strap Men Watch", 
        category: "men-watch", 
        price: "RS : 1900", 
        img: "https://i.pinimg.com/736x/35/09/a1/3509a14448bcf3db5184c7bc6caeb22f.jpg"
    },
    {
        title: "Victorian Era Watch", 
        category: "vintage-watch", 
        price: "RS : 3000", 
        img: "https://i.pinimg.com/736x/a9/da/6d/a9da6d1219a233c66730cbb126798ba4.jpg"
    },
    {
        title: "Gold Mesh Women Watch", 
        category: "women-watch", 
        price: "RS : 1950", 
        img: "https://i.pinimg.com/736x/13/e4/c4/13e4c4da1f3424cf735448272dead2cc.jpg"
    },
    {
        title: "Large Wooden Wall Clock", 
        category: "wall-clock", 
        price: "RS : 1400", 
        img: "https://i.pinimg.com/736x/1d/2c/cd/1d2ccd0ba5533fa9dde1d423de5f3fcc.jpg"
    },
    {
        title: "Digital Table Clock", 
        category: "table-clock", 
        price: "RS : 3500", 
        img: "https://i.pinimg.com/736x/29/82/c5/2982c5de7531498b32a3ad7ffe24ded3.jpg"
    },
    {
        title: "Smart Black Men Watch", 
        category: "men-watch", 
        price: "RS : 1990", 
        img: "https://i.pinimg.com/736x/37/dc/78/37dc788555bbbd7ae6ebf20f97f596b6.jpg"
    },
    {
        title: "Vintage Pocket Watch", 
        category: "vintage-watch", 
        price: "RS : 2400", 
        img: "https://i.pinimg.com/1200x/f3/7e/38/f37e383b4586f58c7a707b573e5da99a.jpg"
    },
    {
        title: "Classic Bracelet Watch", 
        category: "women-watch", 
        price: "RS : 1650", 
        img: "https://i.pinimg.com/736x/bf/49/e9/bf49e9723467566df2280d615a547579.jpg"
    },
    {
        title: "Roman Numeral Wall Clock", 
        category: "wall-clock", 
        price: "RS : 3000", 
        img: "https://i.pinimg.com/736x/c2/e7/07/c2e707f9fba9e6838ed5dbf25ce21a71.jpg"
    },
    {
        title: "Compact Alarm Clock", 
        category: "table-clock", 
        price: "RS : 5000", 
        img: "https://i.pinimg.com/1200x/b5/6f/28/b56f2833c59131de18648f7faaecfcac.jpg"
    },
    {
        title: "Luxury Steel Men Watch", 
        category: "men-watch", 
        price: "RS : 28000", 
        img: "https://i.pinimg.com/1200x/8c/0f/37/8c0f3752b18f27301ca63a451692e786.jpg"
    },
    {
        title: "Minimalist Men Watch", 
        category: "men-watch", 
        price: "RS : 1150", 
        img: "https://i.pinimg.com/736x/26/fa/08/26fa084b59dc5337aff8c63897688f1b.jpg"
    },
    {
        title: "Steampunk Vintage Watch", 
        category: "vintage-watch", 
        price: "RS : 3500", 
        img: "https://i.pinimg.com/736x/f8/65/bc/f865bc2acdacd7c59db652e3c2ed1ca2.jpg"
    },
    {
        title: "Gothic Pocket Clock", 
        category: "vintage-watch", 
        price: "RS : 1300", 
        img: "https://i.pinimg.com/736x/f6/ca/f8/f6caf8cb2a4d5edb3497f4f03e18564e.jpg"
    },
    {
        title: "Ruby Gem Women Watch", 
        category: "women-watch", 
        price: "RS : 2390", 
        img: "https://i.pinimg.com/736x/a6/dd/8a/a6dd8ab83834b7094abb52336a31e9bf.jpg"
    },
    {
        title: "Chic Casual Women Watch", 
        category: "women-watch", 
        price: "RS : 1405", 
        img: "https://i.pinimg.com/1200x/05/78/59/0578596da2d1ae1949d1d0db63814938.jpg"
    },
    {
        title: "Sunburst Modern Wall Clock", 
        category: "wall-clock", 
        price: "RS : 5000", 
        img: "https://i.pinimg.com/1200x/af/39/b5/af39b55dd5207cbdf8c48a926e3fc114.jpg"
    },
    {
        title: "Neon Glow Wall Clock", 
        category: "wall-clock", 
        price: "RS : 8500", 
        img: "https://i.pinimg.com/736x/d5/94/7d/d5947d45c4244a9179d120d2b5792cfe.jpg"
    },
    {
        title: "Marble Base Table Clock", 
        category: "table-clock", 
        price: "RS : 7500", 
        img: "https://i.pinimg.com/1200x/14/63/95/1463951812da3fc0daa7381264a305be.jpg"
    },
    {
        title: "Retro Flip Desk Clock", 
        category: "table-clock", 
        price: "RS : 5500", 
        img: "https://i.pinimg.com/736x/3a/2c/6f/3a2c6f4f02fda9a20155945dc55d8eac.jpg"
    },
    {
        title: "Golden Heritage Watch", 
        category: "men-watch", 
        price: "RS : 3400", 
        img: "https://i.pinimg.com/1200x/b6/93/88/b69388a375052e7422a1095b158c87a7.jpg"
    },
    {
        title: "Crystal Flower Women Watch", 
        category: "women-watch", 
        price: "RS : 2200", 
        img: "https://i.pinimg.com/736x/72/27/3d/72273d3b8deadffa1b8790f10ee4172b.jpg"
    },
    {
        title: "Elite Racer Men Watch", 
        category: "men-watch", 
        price: "RS : 2600", 
        img: "https://i.pinimg.com/1200x/0e/f1/74/0ef174e307848803ca9e1e0936fca6f2.jpg"
    },
    {
        title: "Royal Silver Pocket Watch", 
        category: "vintage-watch", 
        price: "RS : 1950", 
        img: "https://i.pinimg.com/1200x/0c/dc/ff/0cdcff127eb43f97cd1c663edcc83f89.jpg"
    },
    {
        title: "Pearl Elegance Women Watch", 
        category: "women-watch", 
        price: "RS : 2295", 
        img: "https://i.pinimg.com/736x/14/e1/5f/14e15fe09649d1ded02f1a91fb2042e3.jpg"
    },
    {
        title: "Vintage Pendulum Wall Clock", 
        category: "wall-clock", 
        price: "RS : 8000", 
        img: "https://i.pinimg.com/736x/ac/7c/1b/ac7c1be5391efcb198ca5d6f2f0d5ba4.jpg"
    },
    {
        title: "Golden Hour Desk Clock", 
        category: "table-clock", 
        price: "RS : 4500", 
        img: "https://i.pinimg.com/736x/e8/88/34/e88834eec1ab6cd82e192b2c2bce011e.jpg"
    },
    {
        title: "Carbon Fiber Men Watch", 
        category: "men-watch", 
        price: "RS : 2150", 
        img: "https://i.pinimg.com/1200x/82/8a/84/828a8470bcc8ffe76b75f37aa33a527f.jpg"
    },
    {
        title: "Classic Antique Watch", 
        category: "vintage-watch", 
        price: "RS : 2750", 
        img: "https://i.pinimg.com/1200x/39/a1/2b/39a12b10283bef735e5b625c0efe55ba.jpg"
    },
    {
        title: "Diamond Star Women Watch", 
        category: "women-watch", 
        price: "RS : 3100", 
        img: "https://i.pinimg.com/1200x/39/87/90/398790411d6ab94f2736c80a4bf7a13c.jpg"
    }
];

const grid = document.getElementById('itemGrid');

function displayItems(list) {
    grid.innerHTML = "";
    for (let i = 0; i < list.length; i++) {
        grid.innerHTML += `
            <div class="card">
                <div class="card-img-box">
                    <img src="${list[i].img}" alt="${list[i].title}">
                </div>
                <div class="card-content">
                    <div>
                        <h3>${list[i].title}</h3>
                        <p class="price">${list[i].price}</p>
                    </div>
                    <button class="view-detail-btn" onclick="openModal('${list[i].title}', '${list[i].category}', '${list[i].price}', '${list[i].img}')">View Detail</button>
                </div>
            </div>
        `;
    }
}


displayItems(itemsData);


function showCategory(cat) {
    let buttons = document.querySelectorAll('.filter-btn');
    for (let j = 0; j < buttons.length; j++) {
        buttons[j].classList.remove('active');
    }
    event.target.classList.add('active');

    if (cat === 'all') {
        displayItems(itemsData);
    } else {
        let filteredList = [];
        for (let i = 0; i < itemsData.length; i++) {
            if (itemsData[i].category === cat) {
                filteredList.push(itemsData[i]);
            }
        }
        displayItems(filteredList);
    }
}


function openModal(title, category, price, img) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalCategory').innerText = "Category: " + category.toUpperCase();
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('modalImg').src = img;
    document.getElementById('itemModal').style.display = "flex";
}


function closeModal() {
    document.getElementById('itemModal').style.display = "none";
}