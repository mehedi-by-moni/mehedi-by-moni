function orderNow(productName) {
    let phone = "8801929174650"; // তোমার নাম্বার (0 বাদ দিয়ে)
    
    let message = `আসসালামু আলাইকুম, আমি ${productName} অর্ডার করতে চাই। বিস্তারিত জানাবেন।`;
    
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}
