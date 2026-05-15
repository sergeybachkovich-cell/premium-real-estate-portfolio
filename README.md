🟢 tolkiHandMade | Craft Store SPA
https://sergeybachkovich-cell.github.io/tolkiHandMade
<img width="1252" height="925" alt="image" src="https://github.com/user-attachments/assets/052e761e-e77d-4b02-8b23-26765fd5405d" />


    Авторская мастерская сувениров и полиграфии.  SPA с уникальным дизайном и динамическим управлением контентом.

 Особенности проекта

    Dynamic City Switching: Полная смена контента (прайсы, адреса, галереи) в зависимости от выбранного города через единый contentConfig.

    Performance First: Оптимизированная загрузка страниц с использованием React.lazy и Suspense.

    Pixel-Perfect Design: Кастомная дизайн-система на SCSS Modules с использованием дизайн-токенов для отступов и цветов.

    Seamless Navigation: Бесшовная навигация между разделами без перезагрузки страницы с помощью React Router 6.

🛠 Стек технологий

    Frontend: React 18, TypeScript.

    Стилизация: SCSS Modules (BEM), CSS Variables (Design Tokens).

    Роутинг: React Router v6.

    Анимации: Framer Motion (плавные переходы и микровзаимодействия).

    Сборка: Vite.

### 📂 Project Structure

```text
src/
├── assets/              # Static assets (images, global fonts)
├── components/          # React components
│   ├── common/          # Atomic components (Buttons, Inputs)
│   ├── section/         # Page sections (Hero, ProductsSection)
│   └── ui/              # Complex UI modules (CitySwitcher, Modals)
├── config/              # Content & contact configurations
├── pages/               # Page-level components (CatalogPage, etc.)
├── routes/              # Routing logic (AppRoutes.tsx)
├── styles/              # Global SCSS, variables, and design tokens
├── types/               # TypeScript interfaces & definitions
├── utils/               # Helpers and mock data (storeData.ts)
├── App.tsx              # Root component
└── main.tsx             # Application entry point

⚙️ Установка и запуск

    Клонируйте репозиторий:
    Bash

git clone https://github.com/sergeybachkovich-cell/premium-real-estate-portfolio.git

Установите зависимости:
Bash

npm install

Запустите проект:
Bash

    npm run dev

    Элементы: Пиксельные рамки (pixel-border) и интерактивные Bento-карточки.

Разработчик: Сергей Понтелеенко 🤝
