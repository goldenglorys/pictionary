# Pictionary-Inspired Drawing and Guessing Game

## Overview

Welcome to **G - Vision**, a fun and interactive drawing and guessing game inspired by Pictionary. This web-based game application allows users to draw pictures or sketches and have the AI model guess the words associated with them, making it a great way to engage in creative and competitive play.

## Features

- **Interactive Drawing Board**: A user-friendly canvas where you can let your creativity flow.
- **AI-Powered Guessing**: Advanced AI tries to guess what you're drawing in real-time.
- **Secure API Key Management**: API keys are securely stored and encrypted.
- **Responsive Design**: Play on any device - desktop, tablet, or mobile.

## Getting Started

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/goldenglorys/pictionary.git
   cd pictionary
   ```

2. **Install Dependencies**:

   ```bash
   yarn install
   ```

3. **Run the Development Server**:

   ```bash
   yarn dev
   ```

4. **Open the App**:
   Navigate to `http://localhost:5173` in your web browser to start playing.

## How to Play

1. **Enter Your API Key**: Upon opening the app, you will be prompted to enter your GROQ API key. This key is securely stored and used for game features.

2. **Start Playing**: Once your API key is set, you can start drawing pictures. Use the drawing tools provided to create your masterpiece. Watch the AI guess as yu draw get creative on the canvas

3. **Have Fun**: Keep playing and see how well you can communicate with the machine through drawings!

4. **Log Out**: You can log out at any time by clicking the logout button. This will clear your securely stored API key from the storage.

## Technologies Used

- **React**: js library for the UI.
- **Vite**: fast build tool for optimal dev. ex.
- **Tailwind CSS**: utility-first CSS framework for custom designs.
- **Radix UI**: set of low-level UI primitives for accessible & customizable components.
- **Lucide React**: library of customizable icons for React app.
- **React Secure Storage**: library for securely storing data in local storage.
- **AI Models**:
  - **Groq**: high-perf AI model inference engine provider.
  - **LLaMA**: llm for nlp understanding & chat completion.
  - **LLaVA**: vvlm for image understanding & captioning.

---

Enjoy playing **pictionary** and have fun drawing and guessing!
