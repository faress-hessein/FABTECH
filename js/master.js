// handel close menuBar after clicked out menu
// let menuBar = document.querySelector(".navbar");
// document.addEventListener("click", (e) => {
//   if (!menuBar.contains(e.target)) {
//     menuBar.attributes.remove('aria-expanded= "false" ');
//   }
// });

// location.reload();

// get data from productus.json

let productSection = document.querySelector(".product-section");
if (productSection) {
  let products = null;
  // localStorage.getItem("lang") === "ar"
  //   ? fetch("../js/productsAr.json")
  //   : fetch("../js/products.json")
  // fetch("../js/products.json")
  // console.log(localStorage.getItem("lang"));
  fetch(
    localStorage.getItem("lang") === "en"
      ? "../js/products.json"
      : "../js/productsAr.json"
  )
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
      if (product.id == 1) {
        let h3 = document.createElement("h3");
        h3.id = "JERRYCANS";
        h3.dataset.i18n = "productSectionCANS";
        localStorage.getItem("lang") === "ar"
          ? (h3.innerText = `جراكن`)
          : (h3.innerText = `JERRY CANS`);
        listProduct.appendChild(h3);
      }
      if (product.id == 9) {
        let h3 = document.createElement("h3");
        h3.dataset.i18n = "productSectionBOTTLES";
        localStorage.getItem("lang") === "ar"
          ? (h3.innerText = `زجاجات الصابون والمنظفات`)
          : (h3.innerText = `SOAP & DETERGENT BOTTLES`);
        listProduct.appendChild(h3);
      }
      if (product.id == 13) {
        let h3 = document.createElement("h3");
        h3.dataset.i18n = "BLEACH, SANITIZERS & SPRAY BOTTLES";
        localStorage.getItem("lang") === "ar"
          ? (h3.innerText = `المبيضات والمعقمات وزجاجات الرش`)
          : (h3.innerText = `SOAP & DETERGENT BOTTLES`);
        listProduct.appendChild(h3);
      }
      // create new elment item
      let newProduct = document.createElement("a");
      newProduct.href = "product-details.html?id=" + product.id;
      let div = document.createElement("div");
      div.classList.add(
        "item",
        "col-xl-3",
        "col-lg-3",
        "col-md-4",
        "col-6",
        "mb-4"
      );
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
  fetch(
    localStorage.getItem("lang") === "en"
      ? "../js/products.json"
      : "../js/productsAr.json"
  )
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
    detail.querySelector(".thread").innerText = thisproduct.thread;
    detail.querySelector(".code").innerText = thisproduct.code;
    detail.querySelector(".proDet1").innerText = thisproduct.proDet1;
    detail.querySelector(".proDet2").innerText = thisproduct.proDet2;
    detail.querySelector(".DesP").innerText = thisproduct.DesP;
    detail.querySelector(".DesLi1").innerText = thisproduct.DesLi1;
    detail.querySelector(".DesLi2").innerText = thisproduct.DesLi2;
    detail.querySelector(".DesLi3").innerText = thisproduct.DesLi3;
    detail.querySelector(".DesLi4").innerText = thisproduct.DesLi4;
    detail.querySelector(".DesLi5").innerText = thisproduct.DesLi5;
    detail.querySelector(".DesLi6").innerText = thisproduct.DesLi6;
    detail.querySelector(".DesLi7").innerText = thisproduct.DesLi7;
    detail.querySelector(".DesLi8").innerText = thisproduct.DesLi8;
    detail.querySelector(".capacity").innerText = thisproduct.capacity;
    detail.querySelector(".weight").innerText = thisproduct.weight;
    detail.querySelector(".height").innerText = thisproduct.height;
    detail.querySelector(".length").innerText = thisproduct.length;
    detail.querySelector(".width").innerText = thisproduct.width;
    detail.querySelector(".neck").innerText = thisproduct.neck;
    detail.querySelector(".material").innerText = thisproduct.material;
    detail.querySelector(".Specification8").innerText =
      thisproduct.Specification8;
    detail.querySelector(".tamper").innerText = thisproduct.tamper;
    detail.querySelector(".recyclable").innerText = thisproduct.recyclable;
    detail.querySelector(".PackagingType").innerText =
      thisproduct.PackagingType;
    detail.querySelector(".imd-Product-one").src =
      "../img/PRODUCTS/detiles/" + thisproduct.imgProductOne;
    // detail.querySelector(".imd-Product-tow").src =
    //   "../img/PRODUCTS/detiles/" + thisproduct.imgProductTow;
    // detail.querySelector(".imd-Product-three").src =
    //   "../img/PRODUCTS/detiles/" + thisproduct.imgProductThree;
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
    detail.querySelector(".downloadimge1").src =
      "../img/PRODUCTS/Download/" + thisproduct.downloadimge1;
    detail.querySelector(".downloadimge2").src =
      "../img/PRODUCTS/Download/" + thisproduct.downloadimge2;
    detail.querySelector(".Download").innerText = thisproduct.downloadtext;
    detail.querySelector(".Download").href =
      "../img/PRODUCTS/pdf/" + thisproduct.downloadHref;
    detail.querySelector(".Printing").innerText = thisproduct.Printing;

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

    const threadElement = detail.querySelector(".thread");
    if (threadElement) {
      if (threadElement.innerText.trim() === "") {
        threadElement.style.backgroundColor = "white";
      }
    }
  }

  // handel btn box-info
  // let btns = document.querySelectorAll(".box-info a");

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
  document.querySelector(".fillter-btn a").classList.remove("active");
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

import translations from "./translations.js";

// BTN language
let languageAr = document.querySelector(".arbic-foto");
let languageEn = document.querySelector(".english-foto");
// languageAr.addEventListener("click", (fun) => {
//   languageAr.classList.toggle("d-none");
//   languageEn.classList.toggle("d-none");
// });

// languageEn.addEventListener("click", (fun) => {
//   // languageAr.classList.add("d-none");
//   languageEn.classList.add("d-none");
//   languageAr.classList.remove("d-none");
// });

const languageSelector = document.querySelector(".language-selector");
languageSelector.addEventListener("click", (event) => {
  location.reload();
  setLanguage(event.target.dataset.lan);
  localStorage.setItem("lang", event.target.dataset.lan);
  // console.log(event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  // const language = localStorage.getItem("lang");
  setLanguage(localStorage.getItem("lang"));
});
let cssRtl = document.getElementById("cssrtl");
const setLanguage = (language) => {
  const elemants = document.querySelectorAll("[data-i18n]");
  elemants.forEach((elemant) => {
    const translationKey = elemant.getAttribute("data-i18n");
    elemant.textContent = translations[language][translationKey];
  });
  if (language === "ar") {
    document.dir = "rtl";
    languageEn.classList.remove("d-none");
    languageAr.classList.add("d-none");
    if (document.querySelector(".cssrtlDot")) {
      cssRtl.href = "lib/bootstrap/bootstrap.minrtl.css";
    } else {
      cssRtl.href = "../lib/bootstrap/bootstrap.minrtl.css";
    }
  } else {
    document.dir = "ltr";
    languageEn.classList.add("d-none");
    languageAr.classList.remove("d-none");
    cssRtl.href = "";
  }
};

// // swiper
// let swiperPage = document.querySelector(".swiper");
// if (swiperPage) {
//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     freeMode: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
// }

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".mySwiper")) {
    const swiper = new Swiper(".mySwiper", {
      slidesPerView: 3, // بشكل افتراضي في الشاشات الكبيرة
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        // شاشة صغيرة (أقل من 480px)
        480: {
          slidesPerView: 1,
        },
        // شاشة متوسطة (من 481px إلى 768px)
        768: {
          slidesPerView: 2,
        },
        // شاشة كبيرة (أكثر من 768px)
        1200: {
          slidesPerView: 3,
        },
      },
    });
  }
});

// let productDetails = document.querySelector(".product-details")
if (productDetails) {
  document.querySelector("body").classList.add("body");
}
