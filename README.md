# Nextjs G-Analytics

This project is a simple google analytics clone webapp with 1 screens.

## Highlights

-   project has been built using nextjs (reactjs framework).
-   used css preprocessor sass for styling purpose.
-   redux-toolkit for handling global states.
-   used [google charting library](https://www.react-google-charts.com/) to draw required charts.
-   a dockerfile and docker-compose.yml has been provided to up and run the app in container.
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

## Design Philosophy

#### src/components

This folder includes stateless components meaning no state has been handled inside the components.

Main components:

- Header
- Sidebar
- Toolbar
- Filter By Date
- Charts

#### src/containers

- This foldre is actually where we are importing and using our components as required.
- In these containers, we are handling all the states and side effects.

#### src/data

Inludes 2 files: chartData and sidebarData.

- chartData file has an exported custom function called generateRandomChartData() which is responsible for generating fake static data for our charts.

## Charts used

- Line Chart
- Bar Chart
- Pie Chart

