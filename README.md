# Simple React Native App

A clean and simple React Native app built with Expo.

## Getting Started

### Prerequisites
- Node.js 20+
- npm
- Android Studio (for Android development)
- Android emulator or device

### Installation

```bash
npm install
```

### Running the App

```bash
# Start on Android
npm run android

# Start dev server
npm start

# Run on web
npm run web

# Run on iOS (macOS only)
npm run ios
```

## Project Structure

```
app/
├── _layout.tsx          # Root layout
└── (tabs)/
    ├── _layout.tsx      # Tab navigation
    ├── index.tsx        # Home screen
    └── explore.tsx      # Info screen

components/             # Reusable components
constants/              # App constants
hooks/                  # Custom React hooks
assets/                 # Images and resources
```

## Features

- Counter demo
- Dark/Light theme
- Tab navigation
- Responsive design

## Testing

```bash
npm test
```

## Available Scripts

- `npm run android` - Build and run on Android
- `npm run ios` - Build and run on iOS
- `npm run web` - Run on web
- `npm start` - Start Metro bundler
- `npm run lint` - Run ESLint
- `npm test` - Run tests

Enjoy your React Native app!

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
