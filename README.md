# Demo Online Store 🚀🔥

Welcome to the **Demo Online Store**! This project is a fast, sleek, and modern example of an e-commerce application built with the latest technologies, showcasing the power of **Vue.js and Payload CMS**. 🛍️✨

## Tech Stack 🔧

- **Frontend Framework**: Vue.js 3
- **Backend Framework**: Payload CMS
- **State Management**: Pinia
- **Routing**: Vue Router
- **Localization**: vue-i18n
- **Build Tool**: Vite
- **TypeScript**: Strongly typed codebase for reliability and scalability.
- **SCSS**: Modular and maintainable styling.
- **Bulma SCSS Framework**: Old, but good

## Installation 💻

To get started, follow these steps:

1. **Install a Payload CMS**
   ```bash
   docker compose up -d
   //cd /medusa
   //chmod +x start.sh
   //npm i 
   //npm run docker:up
   //docker compose logs -f
   //docker compose run --rm medusa npx medusa user -e admin@example.com -p supersecret
   ```

2. **Run Payload CMS**
   ```bash
   cd payload
   npm run dev
   //cd /medusa
   //docker compose logs -f
   ```

4. **Run frontend (vue app)**
   add VITE_PUBLIC_MEDUSA_PUBLISHABLE_KEY in storeftont .env file (generate it in medusa admin panel)
   add VITE_DEFAULT_REGION_ID in storeftont .env file
   ```bash
   cd /storefront
   npm run dev
   ```

## License 📜

This project is licensed under the MIT License. See the `LICENSE` file for more information.

---

### Demo Online Store 🌟
This is not a functional e-commerce platform but a demonstration project designed for learning and experimentation with modern web development technologies. Enjoy exploring and customizing it to fit your needs! 🚀🔥

