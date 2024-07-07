# Nextjs G-Analytics

This project is a simple google analytics clone webapp with 1 screens.

## Highlights

-   project has been built using nextjs (reactjs framework).
-   used css preprocessor sass for styling purpose.
-   redux-toolkit for handling global states.
-   used [google charting library](https://www.react-google-charts.com/) to draw required charts.
-   a dockerfile and docker-compose.yml has been provided to up and run.
-   use of react-icon package for icons.
-   use of typscript for type safety.

## Requirements

You need node version >= 18 to run this web app.

## Getting Started

From your command line:

```sh
# Clone this repository
git clone https://github.com/neeleshio/analytics-clone.git

# Go into the repository
$ cd analytics-clone
```

#### with docker, to run the app:

```sh
docker compose up
```

#### without docker:

```sh
# Install dependencies
npm install

# Run the frontend
npm run dev
```

## IDE setup

VSCode is highly preferred. Please ensure you have installed these extensions:

-   Prettier
-   eslint
