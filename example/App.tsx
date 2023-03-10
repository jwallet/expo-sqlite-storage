import { StyleSheet, Text, View } from 'react-native';

import * as ExpoSqliteStorage from 'expo-sqlite-storage';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoSqliteStorage.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
