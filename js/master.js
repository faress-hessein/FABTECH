// handel close menuBar after clicked out menu
// let menuBar = document.querySelector(".navbar");
// document.addEventListener("click", (e) => {
//   if (!menuBar.contains(e.target)) {
//     menuBar.attributes.remove('aria-expanded= "false" ');
//   }
// });

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
    detail.querySelector(".img-main").src =
      "../img/PRODUCTS/" + thisproduct.imge;
    detail.querySelector(".capacity").innerText = thisproduct.capacity;
    detail.querySelector(".weight").innerText = thisproduct.weight;
    detail.querySelector(".height").innerText = thisproduct.height;
    detail.querySelector(".length").innerText = thisproduct.length;
    detail.querySelector(".width").innerText = thisproduct.width;
    detail.querySelector(".neck").innerText = thisproduct.neck;
    detail.querySelector(".material").innerText = thisproduct.material;
    detail.querySelector(".tamper").innerText = thisproduct.tamper;
    detail.querySelector(".recyclable").innerText = thisproduct.recyclable;
    detail.querySelector(".imd-Product-one").src =
      "../img/PRODUCTS/detiles/" + thisproduct.imgProductOne;
    detail.querySelector(".imd-Product-tow").src =
      "../img/PRODUCTS/detiles/" + thisproduct.imgProductTow;
    detail.querySelector(".imd-Product-three").src =
      "../img/PRODUCTS/detiles/" + thisproduct.imgProductThree;
    thisproduct.recyclable;
    detail.querySelector(".Packaging").src =
      "../img/PRODUCTS/detiles/" + thisproduct.imgProductPackaging;
    thisproduct.recyclable;
    detail.querySelector(".height-pallet").innerText = thisproduct.heightPallet;
    detail.querySelector(".length-pallet").innerText = thisproduct.lengthPallet;
    detail.querySelector(".width-pallet").innerText = thisproduct.widthPallet;
    detail.querySelector(".layers-pallet").innerText = thisproduct.layersPallet;
    detail.querySelector(".units-pallet").innerText = thisproduct.unitsPallet;
    detail.querySelector(".number-pallet").innerText = thisproduct.numberPallet;
    detail.querySelector(".Download").innerText = thisproduct.downloadtext;
    detail.querySelector(".Download").href =
      "../img/PRODUCTS/pdf/" + thisproduct.downloadHref;

    // cap color
    for (let i = 0; i < thisproduct.capColor.length; i++) {
      let capsColors = document.querySelector(".caps-colors");
      let span = document.createElement("span");
      span.innerHTML = `
      <div>
          <span class="${thisproduct.capColor[i]}" data-color="${thisproduct.capColor[i]}"></span>
      </div>
      `;
      capsColors.appendChild(span);
    }

    // bottle color
    for (let i = 0; i < thisproduct.bottleColor.length; i++) {
      let bottleColors = document.querySelector(".bottle-colors");
      let span = document.createElement("span");
      span.innerHTML = `
      <div>
          <span class="${thisproduct.bottleColor[i]}" data-color="${thisproduct.bottleColor[i]}"></span>
      </div>
      `;
      bottleColors.appendChild(span);
    }
  }

  // handel btn box-info
  let btns = document.querySelectorAll(".box-info a");

  // btns.forEach((btn) => {
  //   btn.addEventListener("click", () => {
  //     btns.forEach((el) => {
  //       el.classList.remove("active");
  //     });

  //     btn.classList.add("active");
  //   });
  // });
}

// handel choice info detiles info
let fillterBtnse = document.querySelectorAll(".fillter-btn a");
let fillterBoxse = document.querySelectorAll(".detiles-info .box");

const filltercards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  // handel ti add class hide
  fillterBoxse.forEach((card) => {
    card.classList.add("hide");

    if (card.dataset.name === e.target.dataset.name) {
      card.classList.remove("hide");
    }
  });
};

fillterBtnse.forEach((button) =>
  button.addEventListener("click", filltercards)
);
