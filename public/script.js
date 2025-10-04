let generatedOTP = "";

//  Unified Toast (SweetAlert2) - Top center
function showToast(message, type = "success") {
  const map = { danger: "error", error: "error", success: "success", warning: "warning", info: "info" };
  const icon = map[type] || type;
  Swal.fire({
    icon: icon,
    title: message,
    toast: true,
    position: "top", 
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  });
}

/* 
   Toggle forms & password
*/
document.getElementById("toggleFormLink").addEventListener("click", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const otpSection = document.getElementById("otpSection");
  if (loginForm.style.display !== "none") {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    otpSection.style.display = "none";
    this.innerText = "Already have an account? Login";
  } else {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    otpSection.style.display = "none";
    this.innerText = "Don't have an account? Sign up";
  }
});

document.getElementById("toggleLoginPassword").addEventListener("click", function () {
  const input = document.getElementById("loginPassword");
  const icon = this.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

document.getElementById("toggleSignupPassword").addEventListener("click", function () {
  const input = document.getElementById("signupPassword");
  const icon = this.querySelector("i");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

/* 
   OTP Flow
 */
document.getElementById("forgotPasswordLink").addEventListener("click", () => {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("signupForm").style.display = "none";
  document.getElementById("otpSection").style.display = "block";
});

document.getElementById("sendOtpBtn").addEventListener("click", () => {
  const mobile = document.getElementById("mobile").value.trim();
  if (!/^[6-9]\d{9}$/.test(mobile)) {
    showToast("Invalid mobile number ❌", "danger");
    return;
  }
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  showToast(`OTP sent ✅ (demo): ${generatedOTP}`, "success");
});

document.getElementById("verifyOtpBtn").addEventListener("click", () => {
  const entered = document.getElementById("otpInput").value.trim();
  if (entered === generatedOTP) {
    showToast("OTP verified 🎉 Reset your password", "success");
  } else {
    showToast("Invalid OTP ❌", "danger");
  }
});


/*
   Login / Signup
 */
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value.trim();
  const pass = document.getElementById("loginPassword").value.trim();

  if (!email || !pass) return showToast("Please fill all fields ❌", "danger");
  if (!/^[^\s@]+@[^\s@]+\.com$/.test(email))
    return showToast("Invalid email format ❌", "danger");
  if (pass.length < 8) return showToast("Password must be at least 8 characters ❌", "danger");

  showToast("Login Successful😍", "success");

  // ✅ Modal close (safe way)
  const modalEl = document.getElementById("userModal");
  let modal = bootstrap.Modal.getInstance(modalEl);
  if (!modal) {
    modal = new bootstrap.Modal(modalEl);
  }
  modal.hide();
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value.trim();
  const email = document.getElementById("signupEmail").value.trim();
  const pass = document.getElementById("signupPassword").value.trim();

  if (!name || !email || !pass) return showToast("Please fill all fields ❌", "danger");
  if (!/^[^\s@]+@[^\s@]+\.com$/.test(email))
    return showToast("Email must end with '.com' ❌", "danger");
  if (pass.length < 8) return showToast("Password must be at least 8 characters ❌", "danger");

  showToast("Signup Successful 🥰", "success");

  // ✅ Modal close (safe way)
  const modalEl = document.getElementById("userModal");
  let modal = bootstrap.Modal.getInstance(modalEl);
  if (!modal) {
    modal = new bootstrap.Modal(modalEl);
  }
  modal.hide();
});

// Add to Cart 

const books = [
  {
    id: 1,
    title: "THE ROAD",
    author: "CORMAC MCCARTHY",
    priceOld: 899,
    priceNew: 499,
    rating: 4.5,
    img: "./Images/book-1.jpg"
  },
  {
    id: 2,
    title: "AMERICAN PSYCHO",
    author: "BRET EASTON ELLIS",
    priceOld: 599,
    priceNew: 349,
    rating: 4,
    img: "./Images/book-2.jpg"
  },
  {
    id: 3,
    title: "GEORGE ORWELL",
    author: "PAL ATUL",
    priceOld: 699,
    priceNew: 399,
    rating: 3,
    img: "./Images/book-3.jpg"
  },
  {
    id: 4,
    title: "THE GODFATHER",
    author: "MARIO PUZO",
    priceOld: 799,
    priceNew: 499,
    rating: 5,
    img: "./Images/book-4.avif"
  },
   {
    id: 5,
    title: "FALL TO EARTH",
    author: "KEN BRITZ",
    priceOld: 759,
    priceNew: 700,
    rating: 5,
    img: "./Images/Sci-Fi-book1.jpg"
  },
  
    {

    id: 6,
    title: "ORDNARY",
    author: "STARR Z.DAVIES",
    priceOld:700,
    priceNew:500,
    rating: 3,
    img: "./Images/Sci-Fi-book2.jpg"
  },
    {

    id: 7,
    title: "NANO",
    author: "MARC STAPLETON",
    priceOld: 609,
    priceNew: 499,
    rating: 4.5,
    img: "./Images/Sci-Fi-book3.jpg"
  },
    {
     
     id: 8, 
    title: "SCIENCE FICTION",
    author: "DAVID PRINGLE",
    priceOld: 909,
    priceNew: 500,
    rating: 2,
    img: "./Images/Sci-Fi-book4.webp"
  },

   {

    id: 9,
    title: "BEST BELOVED",
    author: "CAMERON WYNTER",
    priceOld: 1000,
    priceNew: 500,
    rating: 5,
    img: "./Images/Romance-Book-1.jpg"
  },
   {

    id: 10,
    title: "SERENADE OF THE DOVE",
    author: "JANEH.DOE",
    priceOld: 950,
    priceNew: 550,
    rating: 4.5,
    img: "./Images/Romance-Book-2.jpg"
  },
   {
    id: 11,
    title: "THAT, MY DEAR LOVE",
    author: "SULA SULLIVAN",
    priceOld: 850,
    priceNew: 600,
    rating: 5,
    img: "./Images/Romance-Book-3.jpg"
  },
   {
    id: 12,
    title: "IF WE COULD REWRITE THE STARS",
    author: "TRENT LINCOIN",
    priceOld: 900,
    priceNew: 550,
    rating: 5,
    img: "./Images/Romance-Book-4.jpg"
  },
  {
    id: 13,
    title: "PANCHATANTRA",
    author: "VISHNU SHARMA",
    priceOld: 500,
    priceNew: 400,
    rating: 4.2,
    img: "./Images/Kids-Book-1.jpg"
  },
  {

    id: 14,
    title: "RUSKIN BOND",
    author: "Ruskin Bond",
    priceOld: 950,
    priceNew: 450,
    rating: 4.5,
    img: "./Images/Kids-Book-2.jpg"
  },
  {
    id: 15,
    title: "INDAINS FOLKTALES",
    author: "JAMES KENNEDY",
    priceOld: 799,
    priceNew: 699,
    rating: 3.5,
    img: "./Images/Kids-Book-3.jpg"
  },
  {
    id: 16,
    title: "INDIA TREASURE QUEST",
    author: "WOLFE & JARAMILLO",
    priceOld: 799,
    priceNew: 499,
    rating: 5,
    img: "./Images/Kids-Book-4.jpg"
  },

   
];

function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += `<i class="fa-solid fa-star text-warning"></i>`;
    } else if (i - rating < 1) {
      stars += `<i class="fa-solid fa-star-half-stroke text-warning"></i>`;
    } else {
      stars += `<i class="fa-regular fa-star text-warning"></i>`;
    }
  }
  return stars;
}

/* 
   Render Book Cards (safe)
 */
const bookList = document.getElementById("book-list");
books.forEach(book => {
 
  const safeTitle = book.title.replace(/'/g, "\\'");
  bookList.innerHTML += `
    <div class="col-md-3 col-sm-6 mb-4">
      <div class="card shadow border-0 rounded-4 hover-scale book-card position-relative">
        <button class="btn btn-light position-absolute top-0 end-0 m-2 rounded-circle shadow wishlist-btn"
          id="wishlist-btn-${book.id}"
          onclick="toggleWishlist(${book.id}, '${safeTitle}', '${book.img}')">
          <i class="fas fa-heart text-grey"></i> 
        </button>

        <img src="${book.img}" class="card-img-top" alt="${book.title}">
        <div class="card-body text-center">
          <h5 class="card-title fw-bold">${book.title}</h5>
          <p class="text-muted small mb-1">by ${book.author}</p>
          <div class="mb-2">${getStars(book.rating)}</div>
          <p class="mb-3">
            <del class="text-muted">₹${book.priceOld}</del>
            <span class="fw-bold text-danger fs-5">₹${book.priceNew}</span>
          </p>

          <button class="btn-cart-outline add-to-cart" onclick="addToCart('${safeTitle}', ${book.priceNew})">
            <i class="fa fa-cart-plus"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
});


/*
   Cart functions
 */
let cart = [];

function addToCart(bookName, price) {
  cart.push({ name: bookName, price: price });
  updateCart();
  showToast(`${bookName} Added Into Cart 🛒`, "success");
  
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        ${item.name} - ₹${item.price}
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
  });

  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}


/*
   Wishlist functions
 - */


    // Your wishlist code
    let wishlist = [];

// Toggle wishlist (global)
function toggleWishlist(id, name, image) {
  id = Number(id);
  const index = wishlist.findIndex(item => item.id === id);

  if (index === -1) {
    wishlist.push({ id, name, image });
    showToast(`${name} added to Wishlist ❤️`, "success");
  } else {
    wishlist.splice(index, 1);
    showToast(`${name} removed from Wishlist ❌`, "warning");
  }

  updateWishlist();
  refreshWishlistIcons();
  
  
}

// Render wishlist
function updateWishlist() {
  const wishlistContainer = document.getElementById("wishlist-items");
  const wishlistCount = document.getElementById("wishlist-count");
  if (!wishlistContainer) return;

  wishlistContainer.innerHTML = "";
  wishlist.forEach(item => {
    wishlistContainer.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card shadow-sm">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body text-center">
            <h6 class="card-title">${item.name}</h6>
            <button class="btn btn-sm btn-danger" onclick="removeFromWishlist(${item.id})">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  wishlistCount.textContent = wishlist.length;
}

// Remove single item
function removeFromWishlist(id) {
  id = Number(id);
  wishlist = wishlist.filter(item => item.id !== id);
  updateWishlist();
  refreshWishlistIcons();
}

function refreshWishlistIcons() {
  console.log("Wishlist icons refreshed");
  
}

// heart color

function refreshWishlistIcons() {
  const allBtns = document.querySelectorAll(".wishlist-btn");

  allBtns.forEach(btn => {
    const id = parseInt(btn.id.replace("wishlist-btn-", ""));
    const inWishlist = wishlist.some(item => item.id === id);

    if (inWishlist) {
      btn.innerHTML = `<i class="fas fa-heart text-danger"></i>`; 
    } else {
      btn.innerHTML = `<i class="fas fa-heart text-grey"></i>`;  
    }
  });
}

