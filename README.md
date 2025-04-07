# React Native Boilerplate

![React Native](https://img.shields.io/badge/React_Native-0.73.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.4-blue)
![Redux](https://img.shields.io/badge/Redux-4.2.1-purple)

## Project Overview

A modern, feature-rich React Native boilerplate with TypeScript support, focusing on best practices, scalability, and developer experience. This boilerplate includes authentication flows, theming support, RTL handling, and a robust project structure.

## Features

- 🔐 **Authentication Flow**: Complete login and OTP verification
- 🌓 **Theme Support**: Dynamic light/dark theme switching
- 🌐 **Multi-language Support**: RTL/LTR with language switching
- 📱 **Responsive Design**: Adapts to different screen sizes
- 🧩 **Modular Architecture**: Clean and maintainable code structure
- 🔄 **State Management**: Redux with proper action handling
- 🎨 **SVG Support**: Vector graphics with react-native-svg
- 📦 **Type Safety**: Full TypeScript integration

## Project Architecture

```
src/
├── assets/        # Images, icons, fonts
├── components/    # Reusable UI components
├── config/        # App configuration
├── context/       # React Context providers
├── hooks/         # Custom React hooks
├── navigation/    # Navigation setup
├── redux/         # State management
├── screens/       # Screen components
├── styles/        # Global styles
└── utils/         # Utility functions
```

## Technology Stack

- **React Native**: Core framework
- **TypeScript**: For type safety
- **Redux**: State management
- **React Navigation**: Navigation handling
- **react-native-svg**: SVG support
- **@twotalltotems/react-native-otp-input**: OTP handling

## Setup and Installation

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

### RTL Support

Built-in RTL support with custom hook:

```typescript
const isRTL = useIsRTL();

const styles = StyleSheet.create({
  container: {
    flexDirection: isRTL ? 'row-reverse' : 'row'
  }
});
```

### Reusable Components

Standard components for consistency:

```typescript
// Text Component
<TextComp text="WELCOME" />

// Button Component
<ButtonComp 
  title="CONTINUE"
  onPress={handleContinue}
/>

// Wrapper Container
<WrapperContainer>
  {/* Screen content */}
</WrapperContainer>
```

### SVG Support

Integrated SVG transformer for vector graphics:

```typescript
// Usage
import Icon from './path/to/icon.svg';

<Icon width={24} height={24} />
```

## Best Practices

- Use TypeScript for type safety
- Follow component-based architecture
- Implement proper error handling
- Use consistent naming conventions
- Keep components small and focused
- Implement proper keyboard handling
- Use proper scaling for responsive design

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
