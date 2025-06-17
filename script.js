function addProduct() {
    const product = prompt("Enter product name:");
    if(product){
        const productsDiv = document.getElementById('products');
        const productItem = document.createElement('div');
        productItem.textContent = `Product: ${product}`;
        productsDiv.appendChild(productItem);
    }
}

// Simulated Safe Payment System

function holdPayment() {
    localStorage.setItem('paymentStatus', 'Held');
    document.getElementById('status').innerText = "Payment is securely held.";
}

function releasePayment() {
    const status = localStorage.getItem('paymentStatus');
    if(status === 'Held') {
        localStorage.setItem('paymentStatus', 'Released');
        document.getElementById('status').innerText = "Payment released to seller.";
    } else {
        document.getElementById('status').innerText = "No payment to release.";
    }
}

function cancelPayment() {
    const status = localStorage.getItem('paymentStatus');
    if(status === 'Held') {
        localStorage.setItem('paymentStatus', 'Cancelled');
        document.getElementById('status').innerText = "Payment refunded to buyer.";
    } else {
        document.getElementById('status').innerText = "No payment to cancel.";
    }
}
