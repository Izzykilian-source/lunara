# Lunara Signature Clinic 🌸

> **Live Demo:** lunara-omega.vercel.app


## 👋 About The Project

I built **Lunara** because I noticed many portfolio projects look like generic templates. I wanted to challenge myself to build a **"Premium" feel** application—something that feels expensive, smooth, and trustworthy, just like a real high-end aesthetic clinic would require.

This project isn't just a static landing page. It's a study in **User Experience (UX)** and **Performance**. I focused heavily on micro-interactions, smooth page transitions, and structuring data to be scalable.

---

## 💡 Key Technical Decisions

Instead of just grabbing a template, here is why I made specific technical choices:

### 1. Performance First (Lazy Loading)
I realized that loading all high-res assets at once would kill the user experience, especially on mobile.
* **Solution:** I implemented `React.lazy()` and `Suspense` for route-based code splitting.
* **Result:** The initial bundle size is smaller, and pages like "Treatments" or "About" are only fetched when the user actually clicks them.
### 2. "Database" Simulation
I didn't want to hardcode HTML for every single treatment card. It’s unmaintainable.
* **Solution:** I created a centralized data structure (`src/data/treatments.js`) that acts as a mock database.
* **Result:** Adding a new service is as easy as adding an object to the array. The UI updates automatically.
### 3. Interactive Components (No jQuery)
I wanted a "Before & After" slider to showcase results.
* **Solution:** Built a custom React component using `useState` and simple math to calculate the clip-path based on mouse/touch position. No heavy external libraries were used for this feature.

---

## 📸 Feature Highlights

### 🔄 Dynamic Routing
Users can click on any service card to view a detailed breakdown.
* **Route:** `/treatments/:slug`
* **Logic:** The app reads the URL parameter (slug) and fetches the corresponding data from the centralized file. Handles 404s gracefully if a slug doesn't exist.
### 📱 Mobile-First UX
* **Sticky Booking Bar:** On mobile devices, the "Book Now" button stays fixed at the bottom, ensuring the CTA is always accessible (crucial for conversion rates).
* **Touch Optimized:** The sliders and carousels support touch events for a native feel on phones.
### ✨ Polish & Animations
* **Framer Motion:** Used for staggered reveal animations. Content doesn't just "appear"; it flows in as you scroll, guiding the user's eye.

---

## 🛠️ Tech Stack

* **Framework:** React (Vite) - *For speed and component architecture.*
* **Styling:** Tailwind CSS - *For rapid, consistent styling.*
* **Animation:** Framer Motion - *For layout transitions.*
* **Icons:** Lucide React - *Clean, lightweight SVG icons.*
* **Routing:** React Router DOM v6.

---

## 🚀 How to Run Locally

If you'd like to poke around the code:

1.  **Clone the repo**
    ```bash
    git clone [https://github.com/yourusername/lunara-clinic.git](https://github.com/yourusername/lunara-clinic.git)
    ```
2.  **Install packages**
    ```bash
    npm install
    ```
3.  **Run development server**
    ```bash
    npm run dev
    ```

---

## 📝 Lessons Learned

Building this project taught me a lot about:
* **The importance of Z-Index management:** Especially when dealing with sticky navbars, overlays, and floating action buttons.
* **Asset Optimization:** Handling high-quality images without slowing down the site.
* **Component Composition:** Breaking down complex sections (like the Treatment Detail page) into reusable parts.

---

## 📬 Contact

Created by **Izzy**. I'm open to freelance work or full-time opportunities.

* [LinkedIn](https://linkedin.com/in/yourprofile](https://www.linkedin.com/in/mohamed-izzy-kilian/))
* [Email](mohamedizzykilian@gmail.com)
