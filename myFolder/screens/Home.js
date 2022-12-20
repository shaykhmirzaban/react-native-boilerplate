const {View, Text, Button} = require('react-native');

function Home({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button onPress={() => navigation.navigate('Login')} title="Login" />
    </View>
  );
}

export default Home;
