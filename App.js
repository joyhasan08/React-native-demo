import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Img from './component/Img';
import InpurFiled from './component/InpurFiled';
import VirtualizedLis from './component/VirtualizedLis';

export default function App() {
  const error = "Error msg"
  console.log(error);
  return (
    <SafeAreaView style={styles.container}>

      <Text >My first project</Text>
      <StatusBar style="auto" />
      <View>
        <Img />
        <InpurFiled />
        <Button
          title="Submit"
          // style={styles.btn}
          color={'#00008B'}
          accessibilityLabel="Learn more about this purple button"
        />
        {/* <VirtualizedLis /> */}

      </View>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#00008B.'
  }
  // font: {
  //   fontSize: "40px",

  // }
});
