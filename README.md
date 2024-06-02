# Netflix-GPT

Netflix-GPT is a React-based web application that integrates with Google's Bard API and TMDB API to provide personalized movie recommendations. The application allows users to search for movies and get suggestions based on their input using Bard. It also fetches detailed movie information, including trailers, from TMDB.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Screenshots](#screenshots)


## Features
- **Movie Search:** Search for movies using a search bar.
- **Google's Bard API Integration:** Get movie suggestions based on user input.
- **Movie Details:** Fetch and display detailed movie information from TMDB.
- **Trailers:** Display movie trailers.
- **Multi-language Support:** Supports multiple languages including English, Hindi, and Spanish.
- **Responsive Design:** Works well on both desktop and mobile devices.

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- A TMDB API key
- Access to Google's Bard API

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/SatyamGarde/netflix-gpt.git
    cd netflix-gpt
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root of the project and add your TMDB API key and Google's Bard API credentials:
    ```env
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    REACT_APP_BARD_API_KEY=your_bard_api_key
    ```

4. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

## Usage
1. Navigate to `http://localhost:3000` in your browser.
2. Use the search bar to enter a movie name or genre.
3. Get movie suggestions from Google's Bard API.
4. Click on a movie to see detailed information and watch trailers.

## Configuration

### API Options
The API options are configured in the `Constants.js` file located in the `Utils` directory. Ensure you have the correct endpoints and options set for TMDB and Google's Bard APIs.

```js
// src/Utils/Constants.js
export const API_OPTIONS = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export const BG_URL = 'path_to_background_image';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
export const LOGO_URL = 'path_to_logo_image';

export const SUPPORTED_LANGUAGES = {
  en: "English",
  Hindi: "हिन्दी",
  Spanish: "Español",
};
```

### Firebase Authentication
The project uses Firebase for authentication. Make sure you have Firebase configured correctly in the Firebase.js file located in the Utils directory.

## Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **Redux:** A Predictable State Container for JavaScript Apps.
- **TMDB API:** To fetch movie details and trailers.
- **Google's Bard API:** For generating movie suggestions.
- **Firebase:** For user authentication.
- **Tailwind CSS:** For styling the application.

## Screenshots

Here are some screenshots of the application:

### Login Page

![Login PAge](https://github.com/SatyamGarde/Netflix-Clone/blob/main/src/assets/Login%20Page.jpg)

### Home Page

![Home Page](https://github.com/SatyamGarde/Netflix-Clone/blob/main/src/assets/home%20page.jpg)

### Movies List

![Movies List](https://github.com/SatyamGarde/Netflix-Clone/blob/main/src/assets/home%20List.jpg)

### Movie Search

![Movie Search](https://github.com/SatyamGarde/Netflix-Clone/blob/main/src/assets/search%20page.jpg)

### Movie Popup

![movie Popup](https://github.com/SatyamGarde/Netflix-Clone/blob/main/src/assets/Popup%20page.jpg)

### Movie Suggestions

![movie suggestions](https://github.com/SatyamGarde/Netflix-Clone/blob/main/src/assets/suggested%20popup.jpg)

