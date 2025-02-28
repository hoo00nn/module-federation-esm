# How to Run the Project

## Running the Remote Application

1. Navigate to the `remote-app` directory.
   ```bash
   cd remote-app
   ````

2. Build the library
    ```bash
    pnpm i && pnpm build:lib
    ```

3. Start the server.
    ```bash
    pnpm serve
    ```

4. Server will run on port `3004`.

## Running the CJS Module-Based NestJS Project

1. Navigate to the cjs-nest directory.
    ```bash
    cd cjs-nest
    ```

2. Start the server in development mode.
    ```bash
    pnpm i && pnpm start:dev
    ```

3. server will be running on port `3000`. 


## Running the ESM Module-Based NestJS Project
1. Navigate to the cjs-nest directory.
    ```bash
    cd esm-nest
    ```

2. Start the server in development mode.
    ```bash
    pnpm i && pnpm start:dev
    ```

3. server will be running on port `3000`. 