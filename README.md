# 🥘 Chucks Kitchen – Nigerian Home Cooking

A static, responsive front‑end for a fictional Nigerian home‑cooking delivery service.  
Built with plain HTML, CSS and a little JavaScript, it showcases a multi‑page layout you could easily wire up to a back‑end in future.

---

## 📌 Overview

Chucks Kitchen presents:

- A **landing/home page** introducing the brand.
- A **menu/explore page** with category filters and popular items.
- **Product detail**, **cart**, **checkout**, and **order‑completion** screens.
- **User authentication pages** (login & sign‑up), complete with social login mock‑ups.
- Utility pages such as delivery details and order history.
- Responsive navigation (hamburger menu), search bar, and interactive buttons.
- Styling via a single `styles.css` and icons from Font Awesome.
- Minimal JavaScript (`script.js`) for toggling the mobile menu.

🎯 All files are static; there is **no server‑side logic**. Cart buttons and forms are placeholders for demonstration.

---

## 🗂 Project Structure

```
Chucks-Kitchen/
├─ assets/
│  ├─ images/        ← product/category images
│  └─ fonts/, static/
├─ cart-loading.html
├─ cart.html
├─ Create-account.html
├─ delivery-details.html
├─ explore.html
├─ index.html
├─ login-in.html
├─ order-completed.html
├─ orders.html
├─ payment.html
├─ product-detail.html
├─ script.js
├─ sign-in.html
└─ styles.css
```

- **HTML pages** correspond to the various screens of the site.
- **`styles.css`** contains layout, typography and responsive rules.
- **`script.js`** handles the hamburger/nav‑menu toggle.
- **`assets/`** holds images and any static resources.

---

## 🛠 Technologies Used

- **HTML5** – semantic markup for structure.
- **CSS3** – Flexbox/Grid, media queries for responsiveness.
- **Vanilla JavaScript** – minimal behavior (navigation).
- **Font Awesome** – icons for UI elements.
- All assets are referenced with relative paths.

---

## 🚀 Running the Project

This is a purely client‑side project. To view it:

1. Clone or download the repository to your machine.
2. Open `index.html` in your browser.
   - Alternatively, serve the folder with a simple web server (e.g., `npx http-server`, `python -m http.server 8000`, etc.) to avoid any CORS/file‑URL quirks.
3. Navigate through the pages by clicking links/buttons.

> ⚠️ No build step or package manager is required.

---

## ✅Features (what’s implemented)

- Responsive navigation bar with hamburger toggle.
- Hero section with search field.
- Category grid & chef‑special grids on the home page.
- Menu category filters on the explore page.
- Product listing cards with “Add to Cart” buttons.
- Login & registration forms with social login placeholders.
- Cart view, delivery details, payment, and order confirmation flows.
- Footer with contact info and quick links.
- Consistent branding across all pages.

---

## 📝 Notes & Future Considerations

- All interactive elements (add to cart, login) are not connected to any back‑end.
- Images are static; replace or extend them as needed.
- You can integrate this front‑end with APIs or convert it into a component library.
- CSS and JS are intentionally simple—feel free to modularize or preprocess.

---

## 👤 Credits

Created by Adeboye Taiwo Jeremiah.  
Designed as a learning project to simulate a food‑ordering interface during my internship at Truemind Innovation

---
