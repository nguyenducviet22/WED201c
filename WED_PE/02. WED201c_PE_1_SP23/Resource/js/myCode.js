function CalTotal() {
    let total = 0,
        menuListProduct = document.querySelectorAll(".menu-list")[0],
        menuListCart = document.querySelectorAll(".menu-list")[1],
        totalPrice = document.getElementById("total-price"),
        checkedProducts = menuListProduct.querySelectorAll('input[type="checkbox"]:checked'),
        menuListFooter = menuListCart.querySelector(".menu-list-footer"),
        menuListCartContent = menuListCart.querySelector(".menu-list-content2");

    menuListCartContent.innerHTML = "";
    checkedProducts.forEach((product) => {
        const productName = product.parentElement.querySelector('label').innerText;
        total += Number(product.value);
        menuListCartContent.innerHTML += `<div class="menu-list-product-name"><div><label>${productName}</label></label></div></div></div>`;
    });
    totalPrice.innerText = `${total}$`;
    if (total > 0){
        menuListFooter.style.display = "block";
    } else {
        menuListFooter.style.display = "none";
    }
}