// get data from productus.json

let productSection = document.querySelector(".product-section");
if (productSection) {
  let products = null;
  fetch("../js/products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      // console.log(products);
      addDataToHTML();
    });
  //   add data products to html
  let listProduct = document.querySelector(".list-product");
  function addDataToHTML() {
    products.forEach((product) => {
      // create new elment item
      let newProduct = document.createElement("a");
      newProduct.href = "product-details.html?id=" + product.id;
      let div = document.createElement("div");
      div.classList.add("item", "col-lg-3", "col-md-4", "col-sm-6", "mb-4");
      div.innerHTML = `
            <div class="box">
              <img
                src="../img/PRODUCTS/${product.imge}"
                class="img-fluid"
                loading="lazy"
              />
              <span>${product.name}</span>
              <a href="${newProduct}">View Details</a>
          </div>   `;
      listProduct.appendChild(div);
      div.appendChild(newProduct);
    });
  }
}

// get datas from product in productus.json
let productDetails = document.querySelector(".product-details");
if (productDetails) {
  let productsInf = null;
  fetch("../js/products.json")
    .then((response) => response.json())
    .then((data) => {
      productsInf = data;
      showDetail();
    });
  //  find this product
  function showDetail() {
    let detail = document.querySelector(".product-details");
    let productId = new URLSearchParams(window.location.search).get("id");
    let thisproduct = productsInf.filter((value) => {
      return value.id == productId;
    })[0];
    //   if there is product has id =  productId return to home page
    if (!thisproduct) {
      window.location.href = "../pages/produst.html";
    }
    //   and if has, add data this product in html
    detail.querySelector("h1").innerText = thisproduct.name;
    detail.querySelector("img").src = "../img/PRODUCTS/" + thisproduct.imge;
    detail.querySelector(".capacity").innerText = thisproduct.capacity;
    detail.querySelector(".weight").innerText = thisproduct.weight;
    detail.querySelector(".height").innerText = thisproduct.height;
    detail.querySelector(".length").innerText = thisproduct.length;
    detail.querySelector(".width").innerText = thisproduct.width;
    detail.querySelector(".neck").innerText = thisproduct.neck;
    detail.querySelector(".material").innerText = thisproduct.material;
    detail.querySelector(".tamper").innerText = thisproduct.tamper;
    detail.querySelector(".recyclable").innerText = thisproduct.recyclable;
    // color
    // detail.querySelector(".c-red").contains = thisproduct.colorRed;
    // detail.querySelector(".c-red").className = thisproduct.colorRed;
  }
  $(document).on("click", ".box-info a", function () {
    $(this).removeClass("active");
    $(this).addClass("active");
  });

  // handel love prodacte (heart)
  let hearts = document.querySelectorAll(".box-info a");

  hearts.forEach((heart) => {
    heart.addEventListener("click", (event) => {
      event.target.classList.toggle("active");
      event.removeClass("active");
      //   if (event.target.classList.contains("fa-solid")) {
      //     event.target.style.color = "red";
      //   } else {
      //     event.target.style.color = "black";
      //   }
    });
  });
}
