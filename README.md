# My Space

Welcome to My Space, a thought/diary/journal sharing platform where you can express your feelings, share your moments, and engage with a vibrant community. This documentation will guide you through the features, tech stack, and setup instructions of the project.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Structure](#project-structure)
5. [Backend](#backend)
6. [Frontend](#frontend)
7. [State Management](#state-management)
8. [Database](#database)
9. [Form Validation](#form-validation)
10. [Styling](#styling)
11. [Issue Reporting](#issue-reporting)

## Introduction
My Space is a web application designed to provide users with a personal space to share their thoughts, diaries, and journals. The platform offers personalized themes, mood selection, image uploads, and various privacy options for posts. Users can also interact with others through comments, likes, and dislikes.

## Features
- **Personalized Themes**: Customize the appearance of your posts with various themes.
- **Private and Public Posting**: Choose whether to make your posts public or keep them private.
- **Mood Selection**: Select a mood to accompany your posts.
- **Image Uploads**: Share your moments with image attachments.
- **Profile Editing**: Update your profile to reflect your unique identity.
- **Post Tracking**: Keep track of all your private and public posts.
- **Comments**: Engage with the community by commenting on posts.
- **Likes and Dislikes**: Express your opinions with like and dislike features.
- **Upcoming Features**: Search functionality and a report option for posts.

## Tech Stack
- **Backend**: Hono.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Frontend**: Next.js
- **State Management**: Zustand
- **TypeScript**: For type safety
- **UI Components**: shadcn
- **Form Validation**: Zod
- **ORM**: Mongoose
- **Styling**: Tailwind CSS

## Project Structure
The project follows a modular structure:

- `/backend`: Contains server-related code using Hono.js.
- `/frontend`: Contains client-side code using Next.js.
- `/models`: Mongoose schemas and models.
- `/utils`: Utility functions and helpers.
- `/components`: Reusable UI components.

## Backend
The backend is built with Hono.js, a lightweight and fast web framework. It handles API requests, authentication, and interaction with the MongoDB database.

### Key Files
- `server.ts`: Entry point for the server.
- `routes.ts`: Defines API routes.
- `auth.ts`: Middleware for authentication.
- `controllers/`: Contains route handler functions.

## Frontend
The frontend is built with Next.js, providing a powerful framework for server-side rendering and static site generation.

### Key Files
- `pages/`: Contains Next.js pages.
- `components/`: Reusable React components.
- `styles/`: Tailwind CSS styles.

## State Management
State management is handled using Zustand, a small but powerful state management library.

### Key Files
- `store/`: Contains Zustand stores.

## Database
MongoDB is used as the database, with Mongoose as the ORM for defining schemas and interacting with the database.

### Key Files
- `models/`: Mongoose schemas and models.
- `db.ts`: Database connection logic.

## Form Validation
Zod is used for form validation, ensuring that user inputs are correctly validated before submission.

### Key Files
- `validation/`: Contains Zod schemas.

## Styling
Tailwind CSS is used for styling, providing a utility-first approach to design.

### Key Files
- `tailwind.config.js`: Tailwind CSS configuration.
- `styles/globals.css`: Global styles.

## Issue Reporting
If you encounter any issues or have suggestions for improvements, please report them via the issue tracker on the project's repository. We appreciate your feedback and contributions to make My Space better for everyone.

Thank you for using My Space! We hope you enjoy the platform and find it useful for sharing your thoughts and moments. If you have any questions or feedback, feel free to reach out to us. Happy sharing!
