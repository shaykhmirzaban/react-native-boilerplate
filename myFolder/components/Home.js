import {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

// style
import Style from '../boilerplate/globalStyle';
import {extraColor} from '../boilerplate/globalStyle';

function Home({navigation}) {
  let [data, setData] = useState([
    {
      icon: 'point-of-sale',
      price: '230K',
      title: 'Sales',
      bgcolor: extraColor.extraColor1,
      id: 1,
    },
    {
      icon: 'person',
      price: '8.549K',
      title: 'Customers',
      bgcolor: extraColor.extraColor2,
      id: 2,
    },
    {
      icon: 'category',
      price: '1.423K',
      title: 'Products',
      bgcolor: extraColor.extraColor3,
      id: 3,
    },
    {
      icon: 'trip-origin',
      price: '$9745',
      title: 'Revenue',
      bgcolor: extraColor.extraColor4,
      id: 4,
    },
  ]);

  return (
    <SafeAreaView
      style={[Style.bgColor, {paddingHorizontal: 20, height: '100%'}]}>
      {/* top part */}
      <View style={[Style.fdr, Style.jcb, Style.aic, Style.mt4]}>
        {/* hamburger */}
        <View style={[Style.fdr, Style.jcc, Style.aic]}>
          <View style={Styles.hambuger}></View>
          <View style={[Styles.hambuger, {height: 25}]}></View>
          <View style={[Styles.hambuger, {height: 15}]}></View>
        </View>
        {/* user profile */}
        <View style={Styles.border}>
          <Image
            style={Styles.userProfile}
            source={require('../../images/user.jpg')}
          />
        </View>
      </View>
      {/* middle part */}
      <View style={{marginTop: 50, height: 500}}>
        {/* top area */}
        <View style={[Style.fdr, Style.jcb, Style.aic, {marginVertical: 20}]}>
          {/* text */}
          <View>
            <Text style={[Style.fs2, Style.color, Style.py1]}>
              Hello Mirzaban
            </Text>
            <Text style={[Style.fs6, Style.color, {fontWeight: 'normal'}]}>
              Welcome Back!
            </Text>
          </View>
          {/* icon */}
          <Icon name="tune" size={20} color={'#fff'} />
        </View>
        {/* bottom area */}
        <ScrollView
          contentContainerStyle={[
            Style.w100,
            Style.jcc,
            Style.aic,
            Style.fdr,
            Style.fwrap,
            Style.my3,
          ]}>
          {data &&
            data.length > 0 &&
            data.map(value => {
              return (
                <View key={value.id} style={[Styles.card, value.bgcolor]}>
                  <Icon name={value.icon} size={25} color={Style.themeColor1} />
                  <Text
                    style={[
                      Style.fs3,
                      Style.fwb,
                      {color: Style.themeColor1},
                      Style.py1,
                    ]}>
                    {value.price}
                  </Text>
                  <Text style={[{color: Style.themeColor1}]}>
                    {value.title}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
      </View>
      {/* bottom part */}
      <View
        style={[
          Style.w100,
          Style.fdr,
          {position: 'absolute', bottom: 0, left: 20},
          Style.jcb,
          Style.aic,
          Style.bgColor,
          Style.py2,
        ]}>
        <View
          style={[
            extraColor.extraColor1,
            {width: 45, height: 45, borderRadius: 40},
            Style.jcc,
            Style.aic,
          ]}>
          <Icon name="house" size={25} color={Style.themeColor1} />
        </View>

        <Icon
          name="inbox"
          size={25}
          color={'#9c9c9c'}
          onPress={() => navigation.navigate('Detail')}
        />

        <Icon name="leaderboard" size={25} color={'#9c9c9c'} />

        <Icon name="person" size={25} color={'#9c9c9c'} />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  hambuger: {
    width: 2,
    height: 35,
    backgroundColor: '#fff',
    marginHorizontal: 2,
  },
  userProfile: {
    width: 35,
    height: 35,
    borderRadius: 5,
  },
  border: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#9c9c9c',
    borderStyle: 'solid',
    padding: 3,
  },
  card: {
    width: 140, //140
    height: 160, //160
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    margin: 10,
  },
});

export default Home;
