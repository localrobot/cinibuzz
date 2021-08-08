# Cinibuzz

This project was generated using [Nx](https://nx.dev). [Orval](https://orval.dev/) was used to generate custom hooks for api calls using `react-query` and `axios`.

## Development server

- Run `npm install` to install all dependencies.
- Run `npm start` to start a local server at `http://localhost:4200/`.

## Known Issues

### Problem with API client generation

Orval was not able to generate the exact parameters in some cases, specially involving optional query parameters. These had to be manually fixed.

### No Data

- Sometimes the api calls are made to `localhost` instead of `tmdb` servers.
- Try clicking on other buttons that will make api calls (one of the genre buttons, or the movie card and navigating back to home)
- This will happen when the page is refreshed.

### Not an exact Figma replica

This is by design. It's extremly tedious to measure each width and space, font size etc, for every element. Also, there is no logic associated with these measurement (as it would be, if it were a style guide) that can help in modularising components and styles.
