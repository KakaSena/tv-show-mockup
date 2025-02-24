# TV Show Details Screen 📺

This project is a TV show application that displays details of a TV show, including its cast, seasons, and episodes.

## Technologies Used </>

- **React**

## Project Structure

The project folder and file structure is organized as follows:

```
tv-show-mockup/
├── public/
├── src/
│   ├── components/
│   │   ├── Background/
│   │   ├── Cast/
│   │   ├── EpisodeDetails/
│   │   ├── Episodes/
│   │   ├── Footer/
│   │   ├── General/
│   │   └── Seasons/
│   ├── hooks/
│   ├── services/
│   ├── App.js
│   └── index.ks
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
```

- `public/`: Contains static public files.
- `src/`: Main source code directory.
  - `components/`: Contains reusable interface components.
    - `Background/`: Component responsible for displaying the tv title and genre.
    - `Cast/`: Component responsible for displaying the cast.
    - `EpisodeDetails/`: Component responsible for displaying the episodes details.
    - `Episodes/`: Component responsible for displaying the episodes.
    - `Footer/`: Component responsible for displaying the footer.
    - `General/`: Component responsible for displaying the general information.
    - `Seasons/`: Component responsible for displaying the seasons.
  - `hooks/`: Contains custom hooks, including PokéAPI calls.
  - `services/`: Contains services for interacting with external APIs.
  - `App.tsx`: Application root component.
- Configuration files:

  - `.gitignore`: Specifies files and folders to be ignored by Git.

  ## Installation 🛠️

      Prerequisites
          Node.js (v16 or higher)
          npm (v8 or higher)

  To configure and execute the project locally, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/tv-show-details.git
   cd tv-show-details
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run start
   ```

   The application will be available at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
