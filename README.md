# Assessment - Smart Hiring Platform

A modern, AI-powered hiring platform built with React, TypeScript, and Tailwind CSS. Features intelligent candidate filtering, diversity analytics, and streamlined team selection workflows.

## Features

- 🎯 **Smart Candidate Discovery** - Advanced filtering and search capabilities
- 📊 **Diversity Analytics** - Real-time team composition insights
- 🌙 **Dark Mode Support** - Beautiful light and dark themes
- 📱 **Responsive Design** - Optimized for all devices
- ⚡ **Modern UI/UX** - Smooth animations and micro-interactions
- 📈 **Data-Driven Insights** - Comprehensive candidate scoring
- 🚀 **Team Builder** - Collaborative selection workflow

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Custom CSS animations

## Getting Started

1. Clone the repository
```bash
git clone <your-repo-url>
cd assessment-hiring-platform
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── CandidateCard.tsx
│   ├── FilterPanel.tsx
│   ├── DiversityDashboard.tsx
│   └── SelectedTeam.tsx
├── context/            # React context providers
│   └── ThemeContext.tsx
├── data/               # Mock data and types
│   └── mockCandidates.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and animations
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Features Overview

### Candidate Management
- Browse and filter candidates by skills, experience, and location
- View detailed candidate profiles with ratings and social links
- Smart search functionality across names and skills

### Team Building
- Select up to 5 candidates for your team
- Real-time diversity tracking and analytics
- Export team data for further analysis

### Dark Mode
- System preference detection
- Manual toggle with smooth transitions
- Persistent theme selection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.