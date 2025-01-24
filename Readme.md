# Project README

This project is a full-stack application consisting of a frontend and a backend, which can be run both with Docker and without Docker. This README will guide you through the steps for both methods.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- **Node.js (v18 or later)**
- **npm** (Node Package Manager)
- **Docker** (if you plan to run the project using Docker)
- **Docker Compose** (if you plan to use Docker Compose)

Additionally, it is recommended to use **Neon DB** for the database.

## Project Structure

The project is divided into the following directories:

- **frontend**: Contains the React application powered by Vite.
- **backend**: Contains the Node.js server (built with Express or similar).
- **docker-compose.yml**: The Docker Compose configuration for managing both frontend and backend services.

## Setup Instructions

### 1\. Clone the Repository

bash

CopyEdit

`git clone <repository-url> cd <repository-directory>`

### 2\. Configure Environment Variables

#### Frontend `.env`:

Create a `.env` file in the `frontend` directory with the following content:

dotenv

CopyEdit

`VITE_BACKEND_URL=http://localhost:3000 VITE_LAWYER_ROUTE=/api/v1/lawyers`

#### Backend `.env`:

Create a `.env` file in the `backend` directory with the following content:

dotenv

CopyEdit

`BACKEND_PORT=3000 CORS_ORIGIN=* JWT_SECRET=wakeel DATABASE_URL=<your-database-url>`

> **Note:** If you're using Neon DB, you can sign up for an account and get a free database URL. Replace `<your-database-url>` with your Neon database connection URL.

## Running the Project

You can run this project either using **Docker** or by setting up the environment locally without Docker. Below are the steps for both methods.

---

### Running the Project with Docker

1.  **Navigate to the Root Project Directory:**

    In your terminal, go to the root of your project:

    bash

    CopyEdit

    `cd <repository-directory>`

2.  **Build and Start the Docker Containers:**

    Run the following command to build and start both the frontend and backend services using Docker Compose:

    bash

    CopyEdit

    `docker-compose up --build`

    This will:

    - Build the Docker images for the frontend and backend.
    - Start both services.
    - Expose the frontend on port `5173` and the backend on port `3000`.

3.  **Access the Application:**

    - **Frontend**: Open your browser and navigate to `http://localhost:5173`.
    - **Backend**: The backend API will be available at `http://localhost:3000`.

---

### Running the Project Without Docker

#### 1\. **Install Dependencies:**

- **Frontend:**

  Navigate to the `frontend` directory and install the dependencies:

  bash

  CopyEdit

  `cd frontend npm install`

- **Backend:**

  Navigate to the `backend` directory and install the dependencies:

  bash

  CopyEdit

  `cd backend npm install`

#### 2\. **Start the Backend Server:**

Navigate to the `backend` directory and start the backend server:

bash

CopyEdit

`cd backend npm run dev`

This will start the backend server on port `3000`.

#### 3\. **Start the Frontend Development Server:**

Navigate to the `frontend` directory and start the frontend development server:

bash

CopyEdit

`cd frontend npm run dev`

This will start the Vite development server on port `5173`.

#### 4\. **Access the Application:**

- **Frontend**: Open your browser and navigate to `http://localhost:5173`.
- **Backend**: The backend API will be available at `http://localhost:3000`.

---

## Docker Configuration

### Frontend Dockerfile

The frontend Dockerfile uses the official Node.js 18 image to install dependencies and run the Vite development server on port `5173`.

### Backend Dockerfile

The backend Dockerfile uses Node.js 18 to install dependencies and run the backend server on port `3000`.

### Docker Compose

Docker Compose is used to define and run multi-container Docker applications. The `docker-compose.yml` file defines two services: `frontend` and `backend`.


## Troubleshooting

- If you encounter issues with file watching in Docker, ensure that you have the correct permissions for your project directory and that your system supports Docker's file watching mechanism.
- Make sure the database connection URL is correctly set in the backend `.env` file. If you're using Neon DB, ensure that `DATABASE_URL` is properly configured.

## Conclusion

This project can be run both with and without Docker, giving you flexibility in setting up the development environment. The Docker setup ensures consistency across environments, while running without Docker may be preferred if you want to manually control the setup and dependencies.

Feel free to modify the setup as per your requirements, especially if you're deploying to production.
