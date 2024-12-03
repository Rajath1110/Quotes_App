
# Quotes App

This Quotes App is a simple web application built to demonstrate the integration of **Django** as the backend and **React** as the frontend. The app fetches quotes stored in the Django database and displays them using the React frontend. The quotes data is served via an API created using Django REST Framework (DRF).

## Table of Contents
1. [About](#about)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Setup Instructions](#setup-instructions)
5. [API Documentation](#api-documentation)
6. [CORS and Authentication](#cors-and-authentication)
7. [Usage](#usage)
8. [Contributing](#contributing)
9. [License](#license)

## About

The **Quotes App** fetches quotes from a Django backend and displays them on the frontend, which is powered by React. This app doesn't require user authentication and is designed to demonstrate the integration between Django (with Django REST Framework) and React.

- **Backend**: Django with Django REST Framework to expose a RESTful API.
- **Frontend**: React for displaying quotes.
- **No Authentication**: The app does not include user authentication or authorization as it is for demonstration purposes.

## Features

- **Display Quotes**: Fetches a list of quotes and shows them one at a time.
- **Previous/Next Navigation**: Navigate through the list of quotes using Previous and Next buttons.
- **Responsive Design**: The app is built to work well on mobile and desktop devices.

## Technologies Used

- **Backend**: Django (v4.0+) and Django REST Framework (v3.12+)
- **Frontend**: React (v17+)
- **CORS**: Django CORS Headers (for cross-origin requests)
- **Database**: SQLite (default for Django, but can be switched to PostgreSQL or MySQL)
- **API**: RESTful API served by Django for fetching quotes data.

## Setup Instructions

### Prerequisites

- **Python** (v3.8 or higher)
- **Node.js** (v14 or higher)
- **npm** (for managing React dependencies)

### 1. Clone the Repository

Clone this repository to your local machine:


git clone https://github.com/your-username/quotes-app.git


### 2. Setup Django Backend

#### a. Navigate to the `backend` directory

```bash
cd backend
```

#### b. Create and activate a virtual environment

```bash
python -m venv venv
```

Activate the virtual environment:

- **Windows**:
  ```bash
  venv\Scripts\activate
  ```

- **Mac/Linux**:
  ```bash
  source venv/bin/activate
  ```

#### c. Install dependencies

```bash
pip install -r requirements.txt
```

#### d. Run Migrations

```bash
python manage.py migrate
```

#### e. Install CORS Headers

To enable CORS (Cross-Origin Resource Sharing) for communication between Django and React:

```bash
pip install django-cors-headers
```

In your `settings.py`, add `'corsheaders'` to the `INSTALLED_APPS` and configure the middleware:

```python
INSTALLED_APPS = [
    ...,
    'corsheaders',
    ...,
]

MIDDLEWARE = [
    ...,
    'corsheaders.middleware.CorsMiddleware',
    ...,
]

# Allow all domains (for development only)
CORS_ALLOW_ALL_ORIGINS = True
```

#### f. Create a superuser

To access the Django Admin panel:

```bash
python manage.py createsuperuser
```

#### g. Run the Django Development Server

```bash
python manage.py runserver
```

The backend should now be running at [http://127.0.0.1:8000](http://127.0.0.1:8000).

### 3. Setup React Frontend

#### a. Navigate to the `frontend` directory

```bash
cd frontend
```

#### b. Install dependencies

```bash
npm install
```

#### c. Start the React Development Server

```bash
npm start
```

The React app should now be running at [http://localhost:3000](http://localhost:3000).

## API Documentation

The Quotes App exposes an API that allows you to interact with the quotes data.

### Endpoint: `/api/quotes/`
- **Method**: GET
- **Response**: A list of quotes in JSON format.

Sample response:
```json
[
    {
        "id": 1,
        "text": "The best way to predict the future is to create it.",
        "author": "Abraham Lincoln",
        "likes": 100
    },
    {
        "id": 2,
        "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "author": "Winston Churchill",
        "likes": 120
    }
]
```

## CORS and Authentication

The app does not require authentication. It is designed purely for demonstration purposes. CORS is configured to allow all origins for development.

- **CORS**: Enabled via the `django-cors-headers` package, which allows cross-origin requests from the React frontend running on a different port (3000).

## Usage

Once the backend and frontend are set up and running, navigate to [http://localhost:3000](http://localhost:3000) to view the Quotes Gallery.

- **Navigation**: Use the "Previous" and "Next" buttons to cycle through the quotes.
- **Like Quotes**: You can extend the app to allow users to like quotes by updating the backend and frontend accordingly.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. All contributions are welcome!

