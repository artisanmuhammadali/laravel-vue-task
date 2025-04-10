# Laravel Vue Task

A simple boilerplate for starting a Laravel 12 + Vue 3 project with built-in multi-authentication support. This app demonstrates how to configure Laravel with custom guards to support multiple entities like `User` and `Employee`.


## 🚀 Tech Stack

- **Backend:** Laravel 12, MySQL  
- **Frontend:** Vue 3, Pinia, Axios, TailwindCSS  
- **Server:** Apache 2.4.57

## 📁 Project Structure

laravel-vue-task/  
├── backend/  # Laravel 12 application  
└── frontend/ # Vue 3 + Pinia + Axios + TailwindCSS frontend

## 📋 Prerequisites

Make sure you have the following installed on your system:

- PHP **8.3**  
- Composer **2.4.1**  
- Apache HTTP Server **2.4.57**  
- Node.js **22.11**  
- npm **11.2**  
- MySQL **8.0**

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/artisanmuhammadali/laravel-vue-task.git
cd laravel-vue-task
```
### 2. Backend Setup

```bash    
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
```
⚠️ setup your FRONTEND_URL and Database creds

### 3. Frontend Setup

```bash
cd ../frontend
cp .env.example .env
npm install
```
### 4. Running the Project

#### 1. Server
```bash
cd backend
php artisan serve
```
#### 2. Frontend
```bash
cd frontend
npm run dev
```
