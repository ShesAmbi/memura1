import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardsPage from "./components/CardsPage";
import BooksPage from "./pages/BooksPage";
import BooksDetail from "./pages/BooksDetail";

function App() {
  // 👇 Your actual logic: you’ll probably fetch these after login
  const topicId = 2;
  const telegramUserId = 123456;
  const isLoggedIn = !!telegramUserId;

   return (
    <BrowserRouter>
      <Routes>
        {/* If logged in, redirect root to /books; otherwise show Cards (or login later) */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/books" replace />
            ) : (
              <CardsPage topicId={topicId} telegramUserId={telegramUserId} />
            )
          }
        />

        <Route
          path="/cards"
          element={<CardsPage topicId={topicId} telegramUserId={telegramUserId} />}
        />

        {/* Books main page (main after login) */}
        <Route path="/books" element={<BooksPage isLoggedIn={isLoggedIn} />} />
        <Route path="/books/:id" element={<BooksDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

