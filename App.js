import React from 'react';
import { StackNavigator } from 'react-navigation';
import ProfileVC from './App/Screens/ProfileVC';
import { Font } from 'expo';
import I18n from 'react-native-i18n';

MultiNavigator = (routeConfigs, navigatorConfig) => {
  const CardStackNavigator = StackNavigator(routeConfigs, navigatorConfig);

  const modalRouteConfig = {};

  const routeNames = Object.keys(routeConfigs);

  

  for (let i = 0; i < routeNames.length; i++) {

     modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];

  }

  

  const MultiNavigator = StackNavigator({

     CardStackNavigator: { screen: CardStackNavigator },

     ...modalRouteConfig

  }, {

     mode: 'modal'

  });

  

  return MultiNavigator;
};
const RootStack = MultiNavigator({
  ProfileVC: {
    screen: ProfileVC
  }
}, {
  initialRouteName: "ProfileVC"
});

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fontsReady: false,
      localeReady: false
    };
  }


  async initProjectFonts() {
    await Font.loadAsync({ 'CircularStd-Book': require('./Assets/fonts/CircularStd-Book.otf'), 'CircularStd-Bold': require('./Assets/fonts/CircularStd-Bold.otf'), 'MaisonNeue-Demi': require('./Assets/fonts/MaisonNeue-Demi.ttf') });

    this.setState({
      fontsReady: true
    });
  }

  async initLocale() {
    I18n.locale = await Expo.Util.getCurrentLocaleAsync();

    this.setState({
      localeReady: true
    });
  }

  componentDidMount() {
    this.initProjectFonts();

    this.initLocale();
  }

  render() {
    if (!this.state.fontsReady || !this.state.localeReady) { return (<Expo.AppLoading/>); }

    return (
      <RootStack />
    );
  }
}