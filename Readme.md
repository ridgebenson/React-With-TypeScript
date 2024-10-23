# Product Page

This project is a simple product page built with React, TypeScript, and Vite. It showcases a shoe product with options to select different colors and sizes.

## Project Structure

```
ProductPage/
    .gitignore
    eslint.config.js
    index.html
    package.json
    pnpm-lock.yaml
    public/
    README.md
    src/
        App.css
        App.tsx
        assets/
        components/
            ProductsWrapper.css
            ProductsWrapper.tsx
            ShoeDetails.tsx
            ShoeType.tsx
        index.css
        main.tsx
        vite-env.d.ts
    tsconfig.app.json
    tsconfig.json
    tsconfig.node.json
    vite.config.ts
Readme.md
```

## Components

### [`ShoeType`](src/components/ShoeType.tsx)

Displays the shoe image.

### [`ShoeDetails`](src/components/ShoeDetails.tsx)

Allows users to select shoe color and size, and displays the product details and price.

### [`ProductsWrapper`](src/components/ProductsWrapper.tsx)

Wraps the `ShoeType` and `ShoeDetails` components.

## Styling

The styles for the components are defined in [`ProductsWrapper.css`](src/components/ProductsWrapper.css) and [`App.css`](src/App.css).

## Running the Project

To run the project locally, follow these steps:

1. Install dependencies:
    ```sh
    pnpm install
    ```

2. Start the development server:
    ```sh
    pnpm run dev
    ```

3. Open your browser and navigate to `http://localhost:5173/`.

