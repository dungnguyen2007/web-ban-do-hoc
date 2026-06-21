const products = [
  {
    id: 1,
    name: "Cặp Spiderman",
    category: "Marvel/Backpack",
    price: "120.000",
    image: "img/cap.png",
  },
  {
    id: 2,
    name: "Bút Màu Doraemon",
    category: "Doraemon/Pencil",
    price: "47.000",
    image: "img/butmau.jpg",
  },
  {
    id: 3,
    name: "Bút Chì Elsa",
    category: "Disney/Pencil",
    price: "22.000",
    image: "ct/el1.jpg",
  },
  {
    id: 4,
    name: "Kéo Doraemon",
    category: "Doraemon/Scissors",
    price: "55.000",
    image: "img/keo.jpg",
  },
  {
    id: 5,
    name: "Bút Chì Doraemon",
    category: "Doraemon/Pencil",
    price: "20.000",
    image: "img/but.jpg",
  },
  {
    id: 6,
    name: "Sticker Doraemon",
    category: "Doraemon/Sticker",
    price: "10.000",
    image: "img/stk.jpg",
  },
  {
    id: 7,
    name: "Vở Doraemon",
    category: "Doraemon/Book",
    price: "7.000",
    image: "img/vod.png",
  },
  {
    id: 8,
    name: "Hộp Bút Doraemon",
    category: "Doraemon/PencilCase",
    price: "35.000",
    image: "img/hopb.png",
  },
  {
    id: 9,
    name: "Cặp Doraemon",
    category: "Doraemon/Backpack",
    price: "200.000",
    image: "img/capdo.jpg",
  },
  {
    id: 10,
    name: "Tẩy Doraemon",
    category: "Doraemon/Eraser",
    price: "30.000",
    image: "img/tay.jpg",
  },
  {
    id: 11,
    name: "Bút Màu Elsa",
    category: "Disney/Pencil",
    price: "50.000",
    image: "ct/el2.jpg",
  },
  {
    id: 12,
    name: "Sticker Elsa",
    category: "Disney/Sticker",
    price: "13.000",
    image: "ct/el3.jpg",
  },
  {
    id: 13,
    name: "Vở Elsa",
    category: "Disney/Book",
    price: "10.000",
    image: "ct/el7.png",
  },
  {
    id: 14,
    name: "Hộp Bút Elsa",
    category: "Disney/PencilCase",
    price: "37.000",
    image: "ct/el8.png",
  },
  {
    id: 15,
    name: "Kéo Elsa",
    category: "Disney/Scissors",
    price: "66.000",
    image: "ct/el4.jpg",
  },
  {
    id: 16,
    name: "Cặp Elsa",
    category: "Disney/Backpack",
    price: "217.000",
    image: "ct/el5.jpg",
  },
  {
    id: 17,
    name: "Tẩy Elsa",
    category: "Disney/Eraser",
    price: "31.000",
    image: "ct/el6.jpg",
  },
  {
    id: 18,
    name: "Bút Chì Marvel",
    category: "Marvel/Pencil",
    price: "25.000",
    image: "ah/ah1.jpg",
  },
  {
    id: 19,
    name: "Bút Màu Spiderman",
    category: "Marvel/Pencil",
    price: "58.000",
    image: "ah/ah2.jpg",
  },
  {
    id: 20,
    name: "Sticker Ironman",
    category: "Marvel/Sticker",
    price: "20.000",
    image: "ah/ah3.jpg",
  },
  {
    id: 21,
    name: "Vở Batman",
    category: "Marvel/Book",
    price: "15.000",
    image: "ah/ah.png",
  },
  {
    id: 22,
    name: "Hộp Bút Captain",
    category: "Marvel/PencilCase",
    price: "40.000",
    image: "ah/ah6.pmng.webp",
  },
  {
    id: 23,
    name: "Kéo Superman",
    category: "Marvel/Scissors",
    price: "70.000",
    image: "ah/ah4.jpg",
  },
  {
    id: 24,
    name: "Tẩy Marvel",
    category: "Marvel/Eraser",
    price: "41.000",
    image: "ah/ah5.jpg",
  },
  {
    id: 25,
    name: "Kẹp photo",
    category: "School",
    price: "15.000",
    image: "ok/a1.png",
  },
  {
    id: 26,
    name: "Giấy A4",
    category: "School",
    price: "35.000",
    image: "ok/a2.png",
  },
  {
    id: 27,
    name: "Kéo",
    category: "School",
    price: "50.000",
    image: "ok/a3.png",
  },
  {
    id: 28,
    name: "Keo Dán",
    category: "School",
    price: "16.000",
    image: "ok/a4.png",
  },
  {
    id: 29,
    name: "Bút Màu",
    category: "School",
    price: "20.000",
    image: "ok/a5.png",
  },
  {
    id: 30,
    name: "Bút Highlight",
    category: "School",
    price: "15.000",
    image: "ok/a6.png",
  },
  {
    id: 31,
    name: "Giấy Nhớ",
    category: "School",
    price: "13.000",
    image: "ok/a7.png",
  },
  {
    id: 32,
    name: "Giấy Kiểm Tra",
    category: "School",
    price: "30.000",
    image: "ok/a8.png",
  },
  {
    id: 33,
    name: "Cặp Sách",
    category: "School",
    price: "100.000",
    image: "ok/a9.png",
  },
  {
    id: 34,
    name: "Vở",
    category: "School",
    price: "8.000",
    image: "ok/a10.png",
  },
  {
    id: 35,
    name: "Gọt Bút Chì",
    category: "School",
    price: "9.000",
    image: "ok/a11.png",
  },
  {
    id: 36,
    name: "E ke",
    category: "School",
    price: "17.000",
    image: "ok/a12.png",
  },
  {
    id: 37,
    name: "Compa",
    category: "School",
    price: "20.000",
    image: "ok/a13.png",
  },
  {
    id: 38,
    name: "Thước Kẻ",
    category: "School",
    price: "14.000",
    image: "ok/a14.png",
  },
  {
    id: 39,
    name: "Tẩy",
    category: "School",
    price: "10.000",
    image: "ok/a15.png",
  },
  {
    id: 40,
    name: "Bút Chì",
    category: "School",
    price: "3.000",
    image: "ok/a16.png",
  },
  {
    id: 41,
    name: "Bút Bi",
    category: "School",
    price: "5.000",
    image: "ok/a17.png",
  },
  {
    id: 42,
    name: "Bảng",
    category: "School",
    price: "40.000",
    image: "ok/a18.png",
  },
  {
    id: 43,
    name: "Lọ Mực",
    category: "School",
    price: "22.000",
    image: "ok/a19.png",
  },
  {
    id: 44,
    name: "Phấn",
    category: "School",
    price: "29.000",
    image: "ok/a20.png",
  },
  {
    id: 45,
    name: "Bút Xóa",
    category: "School",
    price: "33.000",
    image: "ok/a21.png",
  },
];

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

const product = products.find((p) => p.id === id);

if (product) {
  document.getElementById("mainimg").src = product.image;
  document.getElementById("category").textContent = product.category;
  document.getElementById("name").textContent = product.name;
  document.getElementById("price").textContent = product.price;
}
const addBtn = document.querySelector(".normal");

const qtyInput = document.querySelector("input[type='number']");

addBtn.addEventListener("click", () => {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    alert("Bạn phải đăng nhập trước!");
    return;
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const quantity = Number(qtyInput.value);

  const existing = cart.find((item) => item.id === product.id);

  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Đã thêm vào giỏ hàng!");
});
