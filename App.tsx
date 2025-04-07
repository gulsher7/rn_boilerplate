/**
 * @file App.tsx
 * @description Root application component that initializes core app functionality
 * including fonts, internationalization, Redux store, and navigation.
 * 
 * This component handles:
 * - Custom font loading
 * - RTL configuration (explicitly disabled for controlled management)
 * - Theme initialization and provider setup
 * - Redux store integration
 * - Safe area handling for notched devices
 * - SplashScreen management
 */

import "@/lang";
import Routes from '@/navigation/Routes';
import store from "@/redux/store";
import React, { useEffect, useLayoutEffect } from 'react';
import { I18nManager } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from "react-redux";
import { ThemeProvider } from '@/context/ThemeContext';
import { getLocalItem } from "@/utils/checkStorage";
import BootSplash from "react-native-bootsplash";

/**
 * Main application component that serves as the entry point for the app.
 * 
 * @returns {JSX.Element | null} The rendered app or null during font loading
 */
const App = () => {

  /**
   * Setup effect hook that runs on component mount and when font loading status changes
   * 
   * @effects
   * - Configures RTL behavior (currently disabled for manual control)
   * - Initializes storage by retrieving persisted user settings
   * - Hides the splash screen once fonts are loaded or an error occurs
   */
  useLayoutEffect(() => {
    // Disable automatic RTL handling - we manage this explicitly through i18n
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);

    // Initialize app from stored user preferences (theme, language, auth state)

    const init = async () => {
      await getLocalItem();
    };

    init().finally(async () => {
      setTimeout(async () => {
        BootSplash.hide({ fade: true });
      }, 1500);
    });

  }, []);


  /**
   * Main app structure with providers in the following order:
   * 1. SafeAreaProvider - Handles safe areas for notched devices
   * 2. Redux Provider - Provides global state management
   * 3. ThemeProvider - Manages light/dark theme
   * 4. Routes - Navigation container and routing structure
   */
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <Routes />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;