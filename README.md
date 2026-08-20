# My Portfolio

A modern, responsive personal portfolio website built with **React** and **Vite**. The portfolio showcases personal information, skills, education, services, projects, and contact details in a clean and interactive interface.

## 🚀 Features

- Responsive and modern portfolio design
- Hero/Home section with profile information
- About Me section
- Skills section with frontend and backend technologies
- Qualification/Education section
- Services section
- Projects/Works showcase
- Contact form
- Social media links
- Downloadable resume
- Smooth navigation between sections
- Responsive layout for desktop, tablet, and mobile devices
- Framer Motion support for animations
- EmailJS integration for contact form functionality

## 🛠️ Technologies Used

### Frontend
- **React 19**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5**
- **CSS3**

### Libraries & Tools
- **React Router DOM** – Routing
- **Framer Motion** – Animations
- **React Icons** – Icons
- **Boxicons React** – Icons
- **EmailJS** – Contact form/email functionality
- **ESLint** – Code quality
- **Prettier** – Code formatting

## 📂 Project Structure

```text
My Portfolio/
│
├── public/
│   ├── favicon.svg
│   └── icons.svg
│
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── resume/
│   │
│   ├── components/
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── SocialLinks/
│   │
│   ├── data/
│   │   ├── project.js
│   │   ├── SocialLinks.js
│   │   └── works.js
│   │
│   ├── Pages/
│   │   └── Home.jsx
│   │
│   ├── sections/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Hero/
│   │   ├── Qualification/
│   │   ├── Services/
│   │   ├── Skills/
│   │   └── Works/
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2. Navigate to the project directory

```bash
cd "My Portfolio"
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file using `.env.example` as a reference.

```bash
cp .env.example .env
```

For Windows, you can simply create a `.env` file manually and add the required environment variables.

> **Important:** Never commit your `.env` file or expose private API/service credentials publicly.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at the local URL displayed by Vite, usually:

```text
http://localhost:5173
```

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks the project for ESLint errors |

## 📧 Contact Form

The portfolio includes an email-based contact form using **EmailJS**.

To enable it:

1. Create an EmailJS account.
2. Create an email service.
3. Create an email template.
4. Obtain the required EmailJS credentials.
5. Add the credentials to your `.env` file.
6. Make sure the variable names match those used in the React contact component.

## 🖼️ Assets

The project contains:

- Profile images
- About section image
- Project/work images
- Custom SVG icons
- Resume PDF

Assets are organized inside:

```text
src/assets/
```

## 📱 Responsive Design

The portfolio is designed to work across:

- 💻 Desktop
- 💻 Laptop
- 📱 Tablet
- 📱 Mobile

CSS media queries are used to adapt the layout and components to different screen sizes.

## 🔧 Development

To modify the portfolio content, the main areas to edit are:

```text
src/data/
```

Project information can be updated in:

```text
src/data/project.js
src/data/works.js
```

Social links can be updated in:

```text
src/data/SocialLinks.js
```

Individual sections and their styling are located inside:

```text
src/sections/
```

Reusable components such as the navbar, footer, and social links are located inside:

```text
src/components/
```

## 🏗️ Production Build

To create an optimized production version:

```bash
npm run build
```

The generated files will be placed in:

```text
dist/
```

You can preview the production build locally with:

```bash
npm run preview
```

## 🌐 Deployment

This React + Vite project can be deployed using platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

For deployment, make sure the build command is:

```bash
npm run build
```

and the output directory is:

```text
dist
```

## 📄 License

This project is intended for personal portfolio and educational purposes. You may customize the design and code for your own portfolio.

## 👨‍💻 Author

**Shubham Rawat**

This portfolio was created to showcase projects, technical skills, education, services, and professional experience.

---

⭐ If you find this project useful or inspiring, consider giving the repository a star!