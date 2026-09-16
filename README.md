# Pixabay Image Search

A React-based image search application using the Pixabay API. Users can search for images, browse results by category, view image details, download images, and save their favorite images.

## Features

* Search images by keyword
* Browse images by category
* Pagination for search results
* View images in a popup
* Add and remove favorite images
* Favorites stored using localStorage
* Download/view high-resolution images
* Loading and error handling
* Responsive design

## Technologies Used

* React.js
* JavaScript
* HTML
* CSS
* Pixabay API
* React Router
* Vite
* LocalStorage
* Git & GitHub

## Project Structure

```text
src/
├── Components/
│   ├── Layout/
│   │   ├── Card/
│   │   ├── Categories/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── Pagination/
│   └── UI/
│       └── Input/
│
├── Pages/
│   ├── Home.jsx
│   └── Favorites.jsx
│
├── App.jsx
└── main.jsx
```

## Setup

Clone the repository:

```bash
git clone https://github.com/gagana-v2004/pixabay-project.git
```

Go to the project folder:

```bash
cd pixabay-project
```

Install the dependencies:

```bash
npm install
```

Create a `.env.local` file in the project folder and add your Pixabay API key:

```env
VITE_PIXABAY_API_KEY=your_api_key
```

Start the project:

```bash
npm run dev
```

## API

This project uses the Pixabay API to search and display images.

The API key is stored in `.env.local` and is not uploaded to GitHub.

## Author

**Gagana V**

GitHub: https://github.com/gagana-v2004
