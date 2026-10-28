let allProducts = [];
let activeCategory = 'All';
let activeView = 'grid';

let productGrid = document.getElementById('productGrid');
let priceListWrapper = document.getElementById('priceListWrapper');
let priceTableBody = document.getElementById('priceTableBody');

let filterBtns = document.querySelectorAll('.filter-btn');
let btnGridView = document.getElementById('btnGridView');
let btnListView = document.getElementById('btnListView');

let modal = document.getElementById('productModal');
let closeModal = document.getElementById('closeModal');



function loadProducts() {
    fetch('products.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        allProducts = data;
        renderPage();
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
}


function getFilteredItems() {
    if (activeCategory == 'All') {
        return allProducts;
    }

    let filtered = [];
    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].category == activeCategory) {
            filtered.push(allProducts[i]);
        }
    }
    return filtered;
}

function renderPage() {
    let items = getFilteredItems();

    if (activeView == 'grid') {
        productGrid.style.display = 'grid';
        priceListWrapper.style.display = 'none';
        renderGrid(items);
    } else {
        productGrid.style.display = 'none';
        priceListWrapper.style.display = 'block';
        renderTable(items);
    }
}


function renderGrid(items) {
    productGrid.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let p = items[i];

        let html = "<div class='product-card'>" +
            "<div class='card-img-box'>" +
                "<span class='badge'>" + p.badge + "</span>" +
                "<img src='" + p.image + "' alt='" + p.name + "'>" +
                "<span class='rating'>" + p.rating + "</span>" +
            "</div>" +
            "<div class='card-body'>" +
                "<h3>" + p.name + "</h3>" +
                "<div class='card-meta'>" +
                    "<span class='price'>" + p.price + "</span>" +
                    "<span class='cat-label'>" + p.category + "</span>" +
                "</div>" +
                "<button class='view-btn' onclick='openProductModal(" + p.id + ")'>View Details</button>" +
            "</div>" +
        "</div>";

        productGrid.innerHTML = productGrid.innerHTML + html;
    }
}


function renderTable(items) {
    priceTableBody.innerHTML = "";

    for (let i = 0; i < items.length; i++) {
        let p = items[i];

        let rowHtml = "<tr>" +
            "<td><div class='table-product'><img src='" + p.image + "'><span><strong>" + p.name + "</strong></span></div></td>" +
            "<td>" + p.category + "</td>" +
            "<td style='color: #d4af37;'>" + p.rating + "</td>" +
            "<td><strong>" + p.price + "</strong></td>" +
            "<td><button class='view-btn' onclick='openProductModal(" + p.id + ")'>Details</button></td>" +
        "</tr>";

        priceTableBody.innerHTML = priceTableBody.innerHTML + rowHtml;
    }
}


for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].onclick = function() {
        for (let j = 0; j < filterBtns.length; j++) {
            filterBtns[j].classList.remove('active');
        }
        this.classList.add('active');
        activeCategory = this.getAttribute('data-category');
        renderPage();
    }
}


btnGridView.onclick = function() {
    btnGridView.classList.add('active');
    btnListView.classList.remove('active');
    activeView = 'grid';
    renderPage();
}

btnListView.onclick = function() {
    btnListView.classList.add('active');
    btnGridView.classList.remove('active');
    activeView = 'list';
    renderPage();
}


function openProductModal(id) {
    let item = null;

    for (let i = 0; i < allProducts.length; i++) {
        if (allProducts[i].id == id) {
            item = allProducts[i];
        }
    }

    if (item == null) {
        return;
    }

    document.getElementById('modalImg').src = item.image;
    document.getElementById('modalTitle').innerHTML = item.name;
    document.getElementById('modalBadge').innerHTML = item.badge;
    document.getElementById('modalRating').innerHTML = item.rating;
    document.getElementById('modalPrice').innerHTML = item.price;
    document.getElementById('modalDesc').innerHTML = item.description;

    modal.classList.add('show');
}


closeModal.onclick = function() {
    modal.classList.remove('show');
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.classList.remove('show');
    }
}


loadProducts();