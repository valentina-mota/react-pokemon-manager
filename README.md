# Pikareact – Pokédex App

Pikareact is a Single Page Application built with **React** and **TypeScript** that simulates an interactive Pokédex. It includes a basic login system, protected routes, and full CRUD functionality.

🔗 Live demo: [https://pikareact.netlify.app/pokemons/](https://pikareact.netlify.app/pokemons/)

## 🔐 Authentication

The app starts with a login screen that accepts a valid `username` and `password`. Routes are protected using a `PrivateRoute` component that restricts access to authenticated users only.

## 🧭 Routing

The app is built as a **Single Page Application (SPA)** using React Router. All pages are rooted at `/pokemons/` and dynamically rendered without page reload.

## 🧩 Main Features

- **Pokémon List:** Displays a list of Pokémon cards.
- **Details Page:** Clicking a card opens a detail page where Pokémon stats can be edited and saved.
- **Delete Pokémon:** Option to delete a Pokémon permanently.
- **Add Pokémon:** A "+" icon leads to a form where new Pokémon can be added (name, HP, CP, types, and image).
  - The image uses a URL template: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/XXX.png`
- **Search with Autocomplete:** A search input filters the list with autocomplete suggestions.

## 🔄 Data Handling

CRUD operations are handled via a local `db.json` file, served by [JSON Server](https://github.com/typicode/json-server), which simulates a RESTful API at `http://localhost:3001`.

To start the API server, use:

bash:
npm run start:api

## 🛠️ Tech Stack

- React
- TypeScript (.tsx for UI components, .ts for services and type models)
- React Router DOM
- JSON Server for simulating REST API
- Netlify (for deployment)

## 📁 File Structure

- *.tsx: UI components using JSX + TypeScript

- *.ts: logic, services, and type definitions

## 🚀 Installation

git clone https://github.com/your-username/pikareact.git
cd pikareact
npm install
npm run start         # Starts the React app
npm run start:api     # Starts the fake API server (JSON Server)

## 📌 Conclusion 

- Implementing basic authentication and route protection
- Managing local state and UI updates in React
- Structuring logic and models using TypeScript
- Simulating a REST API with JSON Server

## 🔮 Future Improvements

- Replace mock backend with a real database (Firebase, Supabase, etc.)
- Improve UI/UX with a design system like TailwindCSS or Material UI
- Add advanced filters (by type, CP, HP, etc.)