# 🏋️ Gym Ecommerce — Frontend

## 📖 Description

Gym Ecommerce is a modern full-featured ecommerce frontend application focused on fitness products and membership management.
The project was designed following scalable frontend architecture principles, emphasizing maintainability, performance, and developer experience.

It includes authentication flows, guest and authenticated cart handling, Stripe checkout integration, multilingual support, theming, and reusable UI abstractions.

The application demonstrates production-level patterns using modern React ecosystem tools such as Redux Toolkit, React Query, and modular component design.

---

## 🌐 Live Demo

👉 [https://gymecommerceb.onrender.com/](https://gymecommerceb.onrender.com/)

---

## ✨ Features

* 🌍 Internationalization (i18n) with language detection
* 🎨 Theme toggle (light / dark mode)
* 🔐 Authentication & protected routes
* 🛒 Cart system for:

  * Guest users
  * Authenticated users
* 💳 Stripe checkout integration
* 🎟 Discount handling during checkout
* 📦 Membership purchasing system
* 🔄 Persistent global state (Redux Persist)
* ⚡ Server state management with React Query
* 🧩 Highly reusable component architecture
* 🎞 Interactive sliders & animations
* 🔔 Context-aware toast notifications
* 📱 Fully responsive UI

---

## 🧰 Tech Stack

**Core Framework**

* React 19
* TypeScript
* Vite

**State Management**

* Redux Toolkit
* Redux Persist
* TanStack React Query

**Routing**

* React Router v7

**Styling & UI**

* Tailwind CSS
* Framer Motion
* Lucide Icons
* Swiper & Embla Carousel

**Forms & UX**

* React Hook Form
* React Hot Toast

**Payments**

* Stripe.js + React Stripe

**Internationalization**

* i18next
* react-i18next

---
## 🧩 Architecture & Folder Structure

The frontend follows a **feature-based architecture**, separating UI from business logic and external integrations.

<p align="center">
  <img
    src="./docs/readme.png"
    alt="VS Code folder structure"
  />
</p>

Architecture goals:

* Separation of concerns
* Reusability
* Feature isolation
* Scalable growth for full-stack expansion

---

## 🚀 Implementation Highlights

* **Dual cart architecture** supporting both guest and authenticated users.
* **Protected routing system** with authentication guards.
* **Toaster outlet pattern** enabling route-specific notifications.
* **Server vs Client state separation** using React Query + Redux.
* **Persistent sessions** via Redux Persist.
* **Abstraction-first design** using custom hooks and service layers.
* **Stripe checkout flow** integrated with backend session creation.
* **Dynamic theme system** applied globally via context.
* Comprehensive component testing using Jest + React Testing Library
* Unit & integration tests for views, forms, and UI interactions
* Fully typed with TypeScript for type safety and scalable development

---

## 📦 Libraries & Integrations

* Stripe Payment Gateway
* REST API backend integration
* Internationalization engine
* Carousel engines (Embla + Swiper)
* Animation system via Framer Motion

---

## ⚙️ Core Dependencies

* react
* react-router-dom
* @reduxjs/toolkit
* @tanstack/react-query
* axios
* react-hook-form
* i18next
* stripe-js

---

## 🧪 Dev & Tooling

* TypeScript
* ESLint
* Vitest
* Testing Library
* Vite Dev Server
* PostCSS + Autoprefixer

Scripts:

```bash
npm run dev      # development server
npm run build    # production build
npm run test     # run tests
```

---

## 👨‍💻 Developer Experience & Best Practices

* Strong typing with TypeScript
* Feature-based architecture
* Custom hooks for logic reuse
* Clear separation between UI and business logic
* API abstraction layer
* Scalable routing strategy
* Performance-oriented state management
* Clean and maintainable component composition

---

### ⏲️ Time Tracking

- Total tracked development time: **39h 33m**
- Sessions logged individually across architecture, frontend, backend, and integrations

---

## 📬 Contact

**Facundo Robert**  
Full Stack Developer  

- 💼 LinkedIn: [Facundo Robert](https://www.linkedin.com/in/robertfacundodev/) 
- 💻 Portfolio: [My Portfolio](https://facundorobert.vercel.app/)   
- 📧 Email: robertf.coder@gmail.com 

---

⭐ If you like this project or found it useful, feel free to star the repo!
