document.addEventListener('DOMContentLoaded', function () {
  
    const productsData = [
        {
            id: 1,
            name: 'Product 1',
            image: 'product1.jpg',
            price: '$19.99',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            name: 'Product 2',
            image: 'product2.jpg',
            price: '$29.99',
            description: 'Praesent eget erat sed justo bibendum tempus.',
        },
    
    ];

    const productContainer = document.querySelector('.product-list');

   
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = `images/${product.image}`;
        productImage.alt = product.name;
        productCard.appendChild(productImage);

        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = `Price: ${product.price}`;
        productCard.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productCard.appendChild(productDescription);

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Add to Cart';
        productCard.appendChild(addToCartButton);

        productContainer.appendChild(productCard);
    }

 
    productsData.forEach(product => createProductCard(product));
});
