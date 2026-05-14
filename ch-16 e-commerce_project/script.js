const products = [
  {
    id: 1,
    name: "Women's Floral Dress",
    price: 1299,
    image: "https://images.pexels.com/photos/9361923/pexels-photo-9361923.jpeg",
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    price: 899,
    image:
      "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Stylish Sunglasses",
    price: 499,
    image:
      "https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Leather Handbag",
    price: 1999,
    image:
      "https://images.pexels.com/photos/23223854/pexels-photo-23223854.jpeg",
  },
  {
    id: 5,
    name: "Running Shoes",
    price: 2499,
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Women's Heels",
    price: 1599,
    image:
      "https://images.pexels.com/photos/22589305/pexels-photo-22589305.jpeg",
  },
  {
    id: 7,
    name: "Denim Jacket",
    price: 1799,
    image:
      "https://images.pexels.com/photos/23506701/pexels-photo-23506701.jpeg",
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 2999,
    image:
      "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 9,
    name: "Backpack Bag",
    price: 1099,
    image:
      "https://images.pexels.com/photos/32620409/pexels-photo-32620409.jpeg",
  },
  {
    id: 10,
    name: "Wireless Headphones",
    price: 3499,
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Women's Kurti",
    price: 799,
    image:
      "https://images.pexels.com/photos/24866501/pexels-photo-24866501.jpeg",
  },
  {
    id: 12,
    name: "Men's Jeans",
    price: 1399,
    image:
      "https://images.pexels.com/photos/19785429/pexels-photo-19785429.jpeg",
  },
  {
    id: 13,
    name: "Casual T-Shirt",
    price: 599,
    image:
      "https://images.pexels.com/photos/34156906/pexels-photo-34156906.jpeg",
  },
  {
    id: 14,
    name: "Women's Makeup Kit",
    price: 2199,
    image: "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg",
  },
  {
    id: 15,
    name: "Sports Cap",
    price: 399,
    image:
      "https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
function showProduct() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach((p) => {
    productList.innerHTML += `
    
        <div class="col-md-4 mt-3">
            <div class="card product-card shadow rounded-5">
                <img src="${p.image}" class="card-img-top img img-fluid rounded-5" alt="${p.name}">
                <div class="card-body text-center">
                    <div class="card-title">${p.name}</div>
                    <h4 class="card-text">₹${p.price}</h4>
                     <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to cart</button>
                     <button class="btn btn-outline-warning " onclick="updateProductModal(${p.id})" >✏️</button>
                     <button class="btn btn-outline-danger" onclick="deleteProduct(${p.id})" >🗑️</button>
                </div>
            </div>
            </div>
    `;
  });
}
