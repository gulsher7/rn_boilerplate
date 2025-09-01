# React Native Boilerplate

![React Native](https://img.shields.io/badge/React_Native-0.81.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Redux](https://img.shields.io/badge/Redux-5.0.1-purple)
![React Navigation](https://img.shields.io/badge/React_Navigation-7.1-orange)

## Project Overview

A modern, production-ready React Native boilerplate with TypeScript support, focusing on best practices, scalability, and developer experience. This boilerplate includes authentication flows, theming support, RTL handling, and a robust project structure.

[Check out the app demo video](https://github.com/user-attachments/assets/cb478a0a-a574-4f5e-987a-74bcb6f0e18a)

## Features

- 🔐 **Authentication Flow**: Complete login and OTP verification using react-native-otp-entry
- 🌓 **Theme Support**: Dynamic light/dark theme switching with context
- 🌐 **Multi-language Support**: RTL/LTR with i18next integration
- 📱 **Responsive Design**: Adapts to different screen sizes with proper scaling
- 🧩 **Modular Architecture**: Clean and maintainable code structure
- 🔄 **State Management**: Redux Toolkit with proper action handling
- 🎨 **SVG Support**: Vector graphics with react-native-svg and transformer
- 🔒 **Secure Storage**: Encrypted storage with rn-secure-storage
- 💫 **Animations**: Smooth animations with react-native-reanimated
- 🚀 **Fast Development**: Hot reloading and developer tools
- 🛡️ **Type Safety**: Full TypeScript integration
- 🎯 **Navigation**: React Navigation 7 with bottom tabs and native stack

## Project Architecture

```
.
├── android/                  # Android native code
├── ios/                     # iOS native code
├── src/
│   ├── assets/             # Images, fonts, etc.
│   ├── components/         # Reusable UI components
│   ├── config/             # App configuration
│   ├── context/            # React Context providers
│   ├── hooks/              # Custom React hooks
│   ├── lang/               # i18n translations
│   ├── models/             # TypeScript interfaces
│   ├── navigation/         # Navigation setup
│   ├── redux/              # State management
│   ├── screens/            # Screen components
│   ├── styles/             # Global styles
│   ├── typings/           # Global TypeScript types
│   └── utils/             # Utility functions
├── patches/                # Patch files for dependencies
├── vendor/                # Vendor files
├── .eslintrc.js           # ESLint configuration
├── .prettierrc.js         # Prettier configuration
├── babel.config.js        # Babel configuration
├── metro.config.js        # Metro bundler configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies
```

## Technology Stack

### Core
- **React Native**: v0.81.1
- **TypeScript**: v5.8.3
- **React**: v19.1.0

### State Management & Data Flow
- **Redux**: v5.0.1
- **React Redux**: v9.2.0
- **Redux Toolkit**: v2.8.2

### Navigation
- **@react-navigation/native**: v7.1.17
- **@react-navigation/native-stack**: v7.3.26
- **@react-navigation/bottom-tabs**: v7.4.7

### UI & Animations
- **react-native-reanimated**: v4.1.0
- **react-native-svg**: v15.12.1
- **react-native-modal**: v14.0.0-rc.1
- **react-native-bootsplash**: v6.3.10

### Internationalization
- **i18next**: v25.4.2
- **react-i18next**: v15.7.3
- **intl-pluralrules**: v2.0.1

### Security & Storage
- **rn-secure-storage**: v3.0.1

### Development & Testing
- **jest**: v29.6.3
- **eslint**: v8.19.0
- **prettier**: v2.8.8
- **babel-plugin-module-resolver**: v5.0.2

## Setup and Installation

### Prerequisites
- Node.js >= 20
- Ruby (for iOS development)
- CocoaPods (for iOS development)
- Android Studio (for Android development)
- Xcode (for iOS development)

### Installation Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rn_boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. iOS specific setup:
   ```bash
   cd ios
   pod install
   cd ..
   ```

4. Start the application:
   ```bash
   # Start Metro bundler
   npm start
   # or
   yarn start

   # iOS
   npm run ios
   # or
   yarn ios

   # Android
   npm run android
   # or
   yarn android
   ```

## Core Features Implementation

### Theme System

The app uses a context-based theme system:

```typescript
// Usage in components
const { theme } = useTheme();
const colors = Colors[theme];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background
  }
});
```

### Internationalization

Built-in i18next integration:

```typescript
// Using translations
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<TextComp text={t('WELCOME')} />
```

### Navigation Setup

```typescript
// Navigation configuration
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
```

### Redux Integration

```typescript
// Store setup with Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
```

### Secure Storage

```typescript
// Using secure storage
import SecureStorage from 'rn-secure-storage';

await SecureStorage.setItem('key', 'value');
const value = await SecureStorage.getItem('key');
```

## Development Guidelines

### Code Style
- Use functional components with hooks
- Follow TypeScript best practices
- Use proper component file structure
- Implement proper error handling
- Follow ESLint and Prettier configurations

### Performance Optimization
- Implement proper React.memo usage
- Use proper list rendering techniques
- Optimize image assets
- Implement proper navigation preloading

### Security Best Practices
- Use secure storage for sensitive data
- Implement proper API error handling
- Follow platform-specific security guidelines
- Implement proper authentication flow

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run ios` - Run the iOS app
- `npm run android` - Run the Android app
- `npm run lint` - Run ESLint
- `npm run test` - Run Jest tests

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.

---

© 2024 React Native Boilerplate. All rights reserved.
