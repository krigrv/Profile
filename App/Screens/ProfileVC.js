//
//  ProfileVC
//  Profile
//
//  Created by Gunaseelan.
//  Copyright © 2017 Actual. All rights reserved.
//

import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Image, Text } from 'react-native';
import { strings } from './../Locales/i18n.js';

export default class ProfileVC extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;

    return {
      header: null,
      headerLeft: null,
      headerRight: null
    };
  };

  constructor(props) {
    super(props);
  }


  componentDidMount() {

  }

  render() {
    return (
      <View style={styles.profile}>
        <Image source={require('../../Assets/images/20988282-1906008582970429-3987821297083723674-o-copy-3.png')} style={styles.oCopy3IV} />
        <Text numberOfLines={1} style={styles.changeImageLabel}>{strings("ProfileVC.changeImageLabelText")}</Text>
        <View pointerEvents="box-none" style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}>
          <Text numberOfLines={1} style={styles.friendsLabel}>{strings("ProfileVC.friendsLabelText")}</Text>
          <View style={styles.group}>
            <Text numberOfLines={1} style={styles.emailAddressLabel}>{strings("ProfileVC.emailAddressLabelText")}</Text>
            <View pointerEvents="box-none" style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}>
              <Text numberOfLines={1} style={styles.ngunaseelanGmailCoLabel}>{strings("ProfileVC.ngunaseelanGmailCoLabelText")}</Text>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.friendsLabelTwo}>{strings("ProfileVC.friendsLabelTwoText")}</Text>
          <Text numberOfLines={1} style={styles.viewLabel}>{strings("ProfileVC.viewLabelText")}</Text>
          <View style={styles.password}>
            <Text numberOfLines={1} style={styles.passwordLabel}>{strings("ProfileVC.passwordLabelText")}</Text>
            <View pointerEvents="box-none" style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}>
              <Text numberOfLines={1} style={styles.label}>{strings("ProfileVC.labelText")}</Text>
            </View>
          </View>
          <View style={styles.position}>
            <Text numberOfLines={1} style={styles.usernameLabel}>{strings("ProfileVC.usernameLabelText")}</Text>
            <View pointerEvents="box-none" style={{
              position: "absolute",
              width: "100%",
              height: "100%"
            }}>
              <Text numberOfLines={1} style={styles.ngunaseelanLabel}>{strings("ProfileVC.ngunaseelanLabelText")}</Text>
            </View>
          </View>
          <View style={styles.rectangle15Copy} />
          <View style={styles.rectangle15Copy2} />
          <Text numberOfLines={1} style={styles.groupsLabel}>{strings("ProfileVC.groupsLabelText")}</Text>
          <Text numberOfLines={1} style={styles.groupsLabelTwo}>{strings("ProfileVC.groupsLabelTwoText")}</Text>
          <Text numberOfLines={1} style={styles.viewLabelTwo}>{strings("ProfileVC.viewLabelTwoText")}</Text>
          <View style={styles.rectangle15Copy4} />
          <Text numberOfLines={1} style={styles.logoutLabel}>{strings("ProfileVC.logoutLabelText")}</Text>
          <Image source={require('../../Assets/images/like.png')} style={styles.likeIV} />
          <Text numberOfLines={1} style={styles.usersLabel}>{strings("ProfileVC.usersLabelText")}</Text>
          <Text numberOfLines={1} style={styles.usersLabelTwo}>{strings("ProfileVC.usersLabelTwoText")}</Text>
          <Text numberOfLines={1} style={styles.viewMoreStatsLabel}>{strings("ProfileVC.viewMoreStatsLabelText")}</Text>
          <Image source={require('../../Assets/images/like-copy.png')} style={styles.likeCopyIV} />
        </View>
        <View pointerEvents="box-none" style={{
          position: "absolute",
          width: "100%",
          height: "100%"
        }}>
          <Image source={require('../../Assets/images/group.png')} style={styles.groupIV} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    flex: 1
  },
  oCopy3IV: {
    resizeMode: "stretch",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignSelf: "center",
    marginTop: 20.00
  },
  changeImageLabel: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 10.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    alignSelf: "center",
    marginTop: 6.00
  },
  friendsLabel: {
    color: 'rgba(120, 121, 147, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 51.00,
    height: 19.00,
    left: 32.00,
    top: 320.00,
    position: "absolute"
  },
  group: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 195.00,
    height: 38.00,
    left: 32.00,
    top: 455.00,
    position: "absolute"
  },
  emailAddressLabel: {
    color: 'rgba(120, 121, 147, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: 22.00
  },
  ngunaseelanGmailCoLabel: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    marginTop: 14.00
  },
  friendsLabelTwo: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 96.00,
    height: 25.00,
    left: 32.00,
    top: 334.00,
    position: "absolute"
  },
  viewLabel: {
    color: 'rgba(128, 129, 161, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 39.00,
    height: 19.00,
    left: 308.00,
    top: 333.00,
    position: "absolute"
  },
  password: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 148.00,
    height: 38.00,
    left: 32.00,
    top: 507.00,
    position: "absolute"
  },
  passwordLabel: {
    color: 'rgba(120, 121, 147, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: 22.00
  },
  label: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Bold",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    marginTop: 14.00
  },
  position: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 99.00,
    height: 38.00,
    left: 32.00,
    top: 559.00,
    position: "absolute"
  },
  usernameLabel: {
    color: 'rgba(120, 121, 147, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginBottom: 22.00
  },
  ngunaseelanLabel: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    marginTop: 14.00
  },
  rectangle15Copy: {
    backgroundColor: 'rgba(241, 241, 245, 1)',
    width: 311.00,
    height: 1.00,
    left: 32.00,
    top: 373.00,
    position: "absolute"
  },
  rectangle15Copy2: {
    backgroundColor: 'rgba(241, 241, 245, 1)',
    width: 311.00,
    height: 1.00,
    left: 32.00,
    top: 313.00,
    position: "absolute"
  },
  groupsLabel: {
    color: 'rgba(120, 121, 147, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 51.00,
    height: 19.00,
    left: 32.00,
    top: 384.00,
    position: "absolute"
  },
  groupsLabelTwo: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 78.00,
    height: 25.00,
    left: 32.00,
    top: 398.00,
    position: "absolute"
  },
  viewLabelTwo: {
    color: 'rgba(128, 129, 161, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 12.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 39.00,
    height: 19.00,
    left: 308.00,
    top: 395.00,
    position: "absolute"
  },
  rectangle15Copy4: {
    backgroundColor: 'rgba(241, 241, 245, 1)',
    width: 311.00,
    height: 1.00,
    left: 32.00,
    top: 437.00,
    position: "absolute"
  },
  logoutLabel: {
    color: 'rgba(117, 64, 238, 1)',
    fontFamily: "MaisonNeue-Demi",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "bold",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 62.00,
    height: 20.00,
    left: 32.00,
    top: 616.00,
    position: "absolute"
  },
  likeIV: {
    resizeMode: "center",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 32.00,
    height: 33.00,
    left: 111.00,
    top: 218.00,
    position: "absolute"
  },
  usersLabel: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: 0.35,
    width: 74.00,
    height: 25.00,
    left: 93.00,
    top: 258.00,
    position: "absolute"
  },
  usersLabelTwo: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 16.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    opacity: 0.35,
    width: 73.00,
    height: 25.00,
    left: 216.00,
    top: 258.00,
    position: "absolute"
  },
  viewMoreStatsLabel: {
    color: 'rgba(37, 38, 94, 1)',
    fontFamily: "CircularStd-Book",
    fontSize: 11.00,
    fontStyle: "normal",
    fontWeight: "normal",
    textAlign: "left",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 97.00,
    height: 18.00,
    left: 139.00,
    top: 286.00,
    position: "absolute"
  },
  likeCopyIV: {
    resizeMode: "center",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: 32.00,
    height: 33.00,
    left: 224.00,
    top: 218.00,
    position: "absolute"
  },
  groupIV: {
    resizeMode: "center",
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: 10.00,
    marginLeft: 40.00,
    marginTop: 41.00
  }
});