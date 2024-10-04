Eighty20 Callenge
This project is for the Eighty20 challenge, it allows a user to register , login and create their favourite pokemon and logout.
- This project uses JWT Tokens for authenticating users , and only authenticated users will be able to add a Pokemon of their choice

Table of Contents
Prerequisites
Installation
Running the Application
Usage
API Endpoints
Contributing
License
Prerequisites
Before you begin, ensure you have met the following requirements:

Node.js (version v18.18.1)
Python (versionPython 3.11.4)
pip (Python package manager)

Installation
Follow these steps to set up the project locally:

Clone the repository:
bash
Copy code
git clone https://github.com/YaasinCole/Eighty20

Install backend dependencies:

Navigate to the backend directory and install the required packages:

cd backend
pip install -r requirements.txt

Install frontend dependencies:

Navigate to the frontend directory and install the required packages:

cd ../frontend
npm install

Running the Application
Backend
To run the backend server:

Ensure you are in the backend directory.

Run the following command:

python manage.py runserver
The backend will be available at http://127.0.0.1:8000.

Frontend
To run the frontend application:

Ensure you are in the frontend directory.

Run the following command:

npm run dev
The frontend will be available at http://127.0.0.1:3000.

Usage
Once the application is running youll be on the login screen.
To access the register screen you would need to update the link to http://127.0.0.1:3000/register

API Endpoints
The backend has three APIs : 
- Login api/token/
- Register  api/user/register/
- GET all Pokemon : pokemon/
- Delete Pokemon : pokemon/delete/<int:pk>/


