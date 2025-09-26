<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->


# 🎬 Netflix GPT

A Netflix-inspired movie browsing and search application powered by **React**, **Firebase**, **Redux Toolkit**, **TailwindCSS**, **TMDB API**, and **OpenAI GPT API**.
This project integrates **AI-powered movie search** with a sleek Netflix-like UI.

---

## 🚀 Tech Stack

* **React** (CRA)
* **TailwindCSS**
* **Firebase Authentication & Hosting**
* **Redux Toolkit** (State Management)
* **TMDB API** (Movie Data)
* **OpenAI GPT API** (AI-powered search)

---

## 📂 Features

### 🔐 Authentication

* Login / Sign Up with Firebase
* Form validation using **useRef** hook
* Profile update (name, photo)
* Sign out functionality
* Redirect logic:

  * If user is not logged in → redirect `/browse` → `/login`
  * If user is logged in → redirect `/login` → `/browse`

### 🎥 Browse Page

* Header with navigation & sign out
* Main container with:

  * Autoplay muted **YouTube trailer video**
  * Movie title & description
* Secondary containers with:

  * Multiple movie lists
  * Movie cards
* Responsive design with **TailwindCSS**

### 🤖 GPT Search

* GPT-powered movie search
* Smart suggestions fetched from **TMDB**
* Reused `MovieList` component for GPT suggestions
* Multi-language support

---

## 🛠️ Project Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/netflix-gpt.git
cd netflix-gpt
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Environment Variables

Create a `.env` file in the root folder:

```
REACT_APP_TMDB_KEY=your_tmdb_key
REACT_APP_OPENAI_KEY=your_openai_key
```

⚠️ Make sure `.env` is added to `.gitignore`.

### 4️⃣ Run the Project

```bash
npm start
```

### 5️⃣ Build for Production

```bash
npm run build
```

---

## 📸 Screenshots

> *(Add screenshots of Login, Browse, and GPT Search UI here)*

---

## 🔑 Key Implementations

* **Custom Hooks**:

  * `useNowPlayingMovies`
  * `usePopularMovies`
* **Redux Slices**:

  * `userSlice`
  * `moviesSlice`
  * `gptSlice`
  * `configSlice`
* **Firebase Integration**:

  * Authentication
  * Hosting (Deploy app)
* **Bug Fixes**:

  * Signup user `displayName` & profile picture update
  * Redirect fixes with `onAuthStateChanged` unsubscribe

---

## 🌟 Features List (Summary)

* Login / Sign Up Form
* Browse Page (after authentication)
* Header
* Main Movie with trailer
* Movie Suggestions
* GPT Movie Search
* Multi-language Support
* Responsive UI

---

## 📜 License

This project is for educational purposes. Feel free to fork and improve!

---

### 👨‍💻 Author

Developed by **Satyam Kumar**

* [GitHub](https://github.com/satyamkumar1507)
* [LinkedIn](https://www.linkedin.com/in/satyam-kumar-9a711b28b)
