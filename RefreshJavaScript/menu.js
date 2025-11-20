const products = [
    {
        id: 1,
        name: "Jollof Rice with chicken",
        price: 4500,
        description: "Delicious jollof rice served with fried chicken.",
        imageurl: "./Assets/jollof Rice.jpg"
    }, 
    {
        id: 2,
        name: "Beans and plantain",
        price: 3000,
        description: "Well spiced beans with plantains.",
        imageurl: "./Assets/beansAndPlantain.jpg"
    },
    {
        id: 3,
        name: "Egusi Soup with Swallow",
        price: 4500,
        description: "Rich and Creamy Egusi soup.",
        imageurl: "./Assets/images/egusi.jpg"
    },
     {
        id: 4,
        name: "Hot Yam Pottage",
        price: 2500,
        description: "Hot Sizzling Yam Pottage like Mama's own.",
        imageurl: "./Assets/yam.jpg"
    },
     {
        id: 5,
        name: "Egusi Soup with Swallow",
        price: 4500,
        description: "Rich and Creamy Egusi soup.",
        imageurl: "./Assets/pottage.jpg"
    },
     {
        id: 6,
        name: "Egusi Soup with Swallow",
        price: 4500,
        description: "Rich and Creamy Egusi soup.",
        imageurl: "./Assets/images/egusi.jpg",
        
    },
     {
        id: 7,
        name: "Egusi Soup with Swallow",
        price: 4500,
        description: "Rich and Creamy Egusi soup.",
        imageurl: "./Assets/images/egusi.jpg"
    },
     {
        id: 8,
        name: "Yam Pottage",
        price: 3500,
        description: "Rich and delicious yam pottage with pumpkin leaves.",
        imageurl: "./Assets/pottage.jpg"
    }
];

function renderProducts() {
    const container = document.getElementById("product-container");

    const fragment = document.createDocumentFragment();

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productName = document.createElement("h2");
        productName.textContent = product.name;

        const productPrice = document.createElement("p");
        productPrice.classList.add("price");
        productPrice.textContent = `Price = ${product.price.toFixed(2)} naira`;

        const productDescription = document.createElement("p");
        productDescription.textContent = product.description;

        const productImage = document.createElement("img");
        productImage.src = product.imageurl;
        productImage.alt = product.name;

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productDescription);

        fragment.appendChild(productCard);
    });

    container.appendChild(fragment);
}

renderProducts();
