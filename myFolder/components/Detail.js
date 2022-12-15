import {useState} from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

// style
import Style from '../boilerplate/globalStyle';
import {extraColor} from '../boilerplate/globalStyle';

function Detail() {
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
  let [flag, setFlag] = useState(false);

  const refreshFN = () => {
    setFlag(true);
    setTimeout(() => {
      setFlag(false);
      ToastAndroid.show('successfully Loaded', ToastAndroid.show);
    }, 2000);
  };

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
      <View
        style={[
          extraColor.extraColor1,
          Style.my2,
          Style.br3,
          Style.p4,
          Style.fdr,
          Style.jcb,
          Style.aic,
        ]}>
        {/* left side */}
        <View>
          <Text style={[Style.fs7, {color: Style.themeColor1}]}>
            Current Value
          </Text>
          <Text
            style={[
              Style.fs1,
              Style.fwb,
              {color: Style.themeColor1},
              Style.py1,
            ]}>
            $432190
          </Text>
          <Text
            style={[
              Style.fs3,
              Style.fwb,
              {color: Style.themeColor1},
              Style.py1,
            ]}>
            +$150,102
          </Text>
          <View style={[Style.fdr, Style.jcc, Style.aic]}>
            <Text
              style={[
                Style.fs7,
                Style.jcc,
                Style.aic,
                {color: Style.themeColor1},
              ]}>
              Sale in this week{' '}
            </Text>
            <View
              style={{
                width: 30,
                height: 30,
                backgroundColor: Style.themeColor1,
                borderRadius: 50,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 5,
              }}>
              <Text style={[Style.color]}>29</Text>
            </View>
          </View>
        </View>
        {/* right side */}
        <View
          style={[
            {
              height: 120,
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <View
            style={{
              borderBottomWidth: 4,
              borderLeftWidth: 4,
              borderRightWidth: 4,
              borderTopWidth: 4,
              borderStyle: 'solid',
              borderColor: Style.themeColor1,
              borderRadius: 50,
              borderTopColor: Style.themeColor2,
              padding: 5,
            }}>
            <Text style={[Style.fs5, Style.fwb, {color: Style.themeColor1}]}>
              +42%
            </Text>
          </View>
          <Icon name="north" size={25} color={Style.themeColor1} />
        </View>
      </View>
      {/* Sales Revenue */}
      <View style={{marginTop: 20, height: '100%'}}>
        {/* top heading */}
        <View>
          <Text style={[Style.fs6, Style.color, Style.pb4, Style.fwb]}>
            Sales Revenue
          </Text>
        </View>
        {/* list */}
        <ScrollView
          contentContainerStyle={{height: 700}}
          refreshControl={
            <RefreshControl refreshing={flag} onRefresh={refreshFN} />
          }>
          {data.map(value => {
            return (
              <View
                key={value.id}
                style={[
                  Style.w100,
                  Style.fdr,
                  Style.jcb,
                  Style.aic,
                  Style.my2,
                ]}>
                {/* left side */}
                <View style={[Style.fdr, Style.jcc, Style.aic]}>
                  {/* icon */}
                  <View
                    style={[
                      value.bgcolor,
                      Style.jcc,
                      Style.aic,
                      {width: 50, height: 50, borderRadius: 50},
                    ]}>
                    <Icon
                      name={value.icon}
                      size={22}
                      color={Style.themeColor1}
                    />
                  </View>
                  {/* detail */}
                  <View style={[Style.ml3]}>
                    <Text style={[Style.color, Style.fwb, Style.fs7]}>
                      {value.title}
                    </Text>
                    <Text style={[Style.fs8, {color: '#ccc'}]}>
                      Since last week.
                    </Text>
                  </View>
                </View>
                {/* right side */}
                <View>
                  <Text style={[Style.fs4, Style.color, Style.fwb]}>
                    {value.price}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
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
});

export default Detail;
