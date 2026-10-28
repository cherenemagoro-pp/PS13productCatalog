const products = [
    { name: "Laptop", price: 8500, description: "For study and work" },
    { name: "Headphones", price: 450, description: "For music and calls" },
    { name: "Keyboard", price: 300, description: "For typing and gaming" },
    { name: "Mouse", price: 180, description: "For everyday computer use" },
    { name: "Monitor", price: 2200, description: "For a larger display" },
    { name: "USB Drive", price: 120, description: "For storing files" }
];

const productContainer = document.getElementById("products");
const searchInput = document.getElementById("search");
const message = document.getElementById("message");

function displayProducts(searchTerm = "") {
    productContainer.replaceChildren();

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filteredProducts.forEach(product => {
        const card = document.createElement("article");
        card.className = "product";

        const title = document.createElement("h3");
        title.textContent = product.name;

        const description = document.createElement("p");
        description.textContent = product.description;

        const price = document.createElement("p");
        price.className = "price";
        price.textContent = `R ${product.price.toLocaleString("en-ZA")}`;

        card.append(title, description, price);
        productContainer.appendChild(card);
    });

    message.textContent = filteredProducts.length
        ? `${filteredProducts.length} product(s) displayed.`
        : "No matching products found.";
}

searchInput.addEventListener("input", () => {
    displayProducts(searchInput.value);
});

displayProducts();
