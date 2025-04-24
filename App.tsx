import { Text, View } from "react-native";
import { CastButton } from "react-native-google-cast";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Manette } from "./components/Manette";
import { initCast } from "./util/initCast.jsx";

export default function App() {
  const { isStarted, handleLeft, handleRight, handleUp, handleDown, status } =
    initCast();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={s.container}>
        <View style={s.workspace}>
          <Text>Jeu v1.0.0</Text>
          <Text>Status : {status}</Text>
          <CastButton style={s.castButton} />
          <Manette
            isStarted={isStarted}
            handleLeft={handleLeft}
            handleRight={handleRight}
            handleDown={handleDown}
            handleUp={handleUp}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
