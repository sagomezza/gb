// @ts-nocheck
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "store";
import RNBootSplash from "react-native-bootsplash";

// UI
import { theme as themePaper } from "./src/config/theme";
import AppNavigator from "./src/navigation/AppNavigator";

// Uncomment line 16 when doing tests
// LogBox.ignoreAllLogs(true);

// RNBootSplash.hide({ fade: true });

const App = () => {
  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
      console.log("Bootsplash has been hidden successfully");
    });
  }, []);
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={themePaper}>
        <AppNavigator />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
