# 🕉️ VedicMaths Academy - Premium EdTech Platform

![VedicMaths Preview](./frontend/public/vedic-maths-preview.png)

A premium, full-stack Vedic Mathematics learning platform built with React, Tailwind CSS, and Supabase. It features a unique "Ancient Manuscript" UI design, secure authentication, course enrollment, interactive quizzes, and a personalized student dashboard.

## 🚀 Features

- **Premium UI/UX:** Ancient Indian manuscript aesthetic with custom typography, parchment textures, and smooth animations.
- **Authentication:** Secure login and signup using Supabase Auth (JWT).
- **Course & Batch Management:** Browse courses, view syllabus, and enroll in online/offline batches with real-time seat tracking.
- **Personalized Dashboard:** Students can track their enrolled courses, view stats, and access learning materials.
- **Interactive Practice Arena:** Filterable quizzes by topic and difficulty level, with instant feedback.
- **Notes Sharing:** Upload and download study materials (PDF/Images) securely via Supabase Storage.
- **Video Library:** Curated YouTube playlists integrated into the platform.
- **Profile & Recommendations:** Users can set their bio and select topics to get personalized learning recommendations.

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS, React Router, Lucide React (Icons)
- **Backend & Database:** Supabase (PostgreSQL, Row Level Security, Auth, Storage)
- **Deployment:** Ready for Vercel/Netlify

## ⚙️ Environment Variables

To run this project, you will need to add the following environment variables to your `frontend/.env` file.

Create a `.env` file in the `frontend` directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key