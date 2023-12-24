import {StyleSheet} from 'react-native';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import colors from 'res/colors';
import scale from 'utils/scale';

export default StyleSheet.create({
  flexRowSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexRowSpaceEvenly: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flexRowSpaceAround: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flex9: {
    flex: 9,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  flexDirectionBottom: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    // backgroundColor: colors.Snow,
    paddingHorizontal: 24,
    paddingBottom: getBottomSpace(),
    paddingTop: getStatusBarHeight(),
  },
  icons: {
    width: 24,
    height: 24,
  },
  icons32: {
    width: 32,
    height: 32,
  },
  icons16: {
    width: 16,
    height: 16,
  },
  alignSelfCenter: {
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.7,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonSlider: {
    width: 48,
    height: 6,
    backgroundColor: colors.placeholder,
    marginTop: 12,
    borderRadius: 3,
    alignSelf: 'center',
  },
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  headerBackGround: {
    flex: 1,
  },
  headerNavigationStyle: {
    shadowColor: 'transparent',
    height: scale(108),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 108 - getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
  },
  searchBox: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: colors.TiffanyBlue,
  },

  /**
   * margin top
   */
  mt01: {
    marginTop: 1,
  },
  mt02: {
    marginTop: 2,
  },
  mt03: {
    marginTop: 3,
  },
  mt04: {
    marginTop: 4,
  },
  mt05: {
    marginTop: 5,
  },
  mt06: {
    marginTop: 6,
  },
  mt07: {
    marginTop: 7,
  },
  mt08: {
    marginTop: 8,
  },
  mt09: {
    marginTop: 9,
  },
  mt10: {
    marginTop: 10,
  },
  mt11: {
    marginTop: 11,
  },
  mt12: {
    marginTop: 12,
  },
  mt13: {
    marginTop: 13,
  },
  mt14: {
    marginTop: 14,
  },
  mt15: {
    marginTop: 15,
  },
  mt16: {
    marginTop: 16,
  },
  mt17: {
    marginTop: 17,
  },
  mt18: {
    marginTop: 18,
  },
  mt19: {
    marginTop: 19,
  },
  mt20: {
    marginTop: 20,
  },
  mt21: {
    marginTop: 21,
  },
  mt22: {
    marginTop: 22,
  },
  mt23: {
    marginTop: 23,
  },
  mt24: {
    marginTop: 24,
  },
  mt25: {
    marginTop: 25,
  },
  mt26: {
    marginTop: 26,
  },
  mt27: {
    marginTop: 27,
  },
  mt28: {
    marginTop: 28,
  },
  mt29: {
    marginTop: 29,
  },
  mt30: {
    marginTop: 30,
  },
  mt31: {
    marginTop: 31,
  },
  mt32: {
    marginTop: 32,
  },
  mt33: {
    marginTop: 33,
  },
  mt34: {
    marginTop: 34,
  },
  mt35: {
    marginTop: 35,
  },
  mt36: {
    marginTop: 36,
  },
  mt37: {
    marginTop: 37,
  },
  mt38: {
    marginTop: 38,
  },
  mt39: {
    marginTop: 39,
  },
  mt40: {
    marginTop: 40,
  },
  mt41: {
    marginTop: 41,
  },
  mt42: {
    marginTop: 42,
  },
  mt43: {
    marginTop: 43,
  },
  mt44: {
    marginTop: 44,
  },
  mt45: {
    marginTop: 45,
  },
  mt46: {
    marginTop: 46,
  },
  mt47: {
    marginTop: 47,
  },
  mt48: {
    marginTop: 48,
  },
  mt49: {
    marginTop: 49,
  },
  mt50: {
    marginTop: 50,
  },
  mt51: {
    marginTop: 51,
  },
  mt52: {
    marginTop: 52,
  },
  mt53: {
    marginTop: 53,
  },
  mt54: {
    marginTop: 54,
  },
  mt55: {
    marginTop: 55,
  },
  mt56: {
    marginTop: 56,
  },
  mt57: {
    marginTop: 57,
  },
  mt58: {
    marginTop: 58,
  },
  mt59: {
    marginTop: 59,
  },
  mt60: {
    marginTop: 60,
  },
  mt61: {
    marginTop: 61,
  },
  mt62: {
    marginTop: 62,
  },
  mt63: {
    marginTop: 63,
  },
  mt64: {
    marginTop: 64,
  },
  mt65: {
    marginTop: 65,
  },
  mt66: {
    marginTop: 66,
  },
  mt67: {
    marginTop: 67,
  },
  mt68: {
    marginTop: 68,
  },
  mt69: {
    marginTop: 69,
  },
  /**
   * margin bottom
   */
  mb01: {
    marginBottom: 1,
  },
  mb02: {
    marginBottom: 2,
  },
  mb03: {
    marginBottom: 3,
  },
  mb04: {
    marginBottom: 4,
  },
  mb05: {
    marginBottom: 5,
  },
  mb06: {
    marginBottom: 6,
  },
  mb07: {
    marginBottom: 7,
  },
  mb08: {
    marginBottom: 8,
  },
  mb09: {
    marginBottom: 9,
  },
  mb10: {
    marginBottom: 10,
  },
  mb11: {
    marginBottom: 11,
  },
  mb12: {
    marginBottom: 12,
  },
  mb13: {
    marginBottom: 13,
  },
  mb14: {
    marginBottom: 14,
  },
  mb15: {
    marginBottom: 15,
  },
  mb16: {
    marginBottom: 16,
  },
  mb17: {
    marginBottom: 17,
  },
  mb18: {
    marginBottom: 18,
  },
  mb19: {
    marginBottom: 19,
  },
  mb20: {
    marginBottom: 20,
  },
  mb21: {
    marginBottom: 21,
  },
  mb22: {
    marginBottom: 22,
  },
  mb23: {
    marginBottom: 23,
  },
  mb24: {
    marginBottom: 24,
  },
  mb25: {
    marginBottom: 25,
  },
  mb26: {
    marginBottom: 26,
  },
  mb27: {
    marginBottom: 27,
  },
  mb28: {
    marginBottom: 28,
  },
  mb29: {
    marginBottom: 29,
  },
  mb30: {
    marginBottom: 30,
  },
  mb31: {
    marginBottom: 31,
  },
  mb32: {
    marginBottom: 32,
  },
  mb33: {
    marginBottom: 33,
  },
  mb34: {
    marginBottom: 34,
  },
  mb35: {
    marginBottom: 35,
  },
  mb36: {
    marginBottom: 36,
  },
  mb37: {
    marginBottom: 37,
  },
  mb38: {
    marginBottom: 38,
  },
  mb39: {
    marginBottom: 39,
  },
  mb40: {
    marginBottom: 40,
  },
  mb41: {
    marginBottom: 41,
  },
  mb42: {
    marginBottom: 42,
  },
  mb43: {
    marginBottom: 43,
  },
  mb44: {
    marginBottom: 44,
  },
  mb45: {
    marginBottom: 45,
  },
  mb46: {
    marginBottom: 46,
  },
  mb47: {
    marginBottom: 47,
  },
  mb48: {
    marginBottom: 48,
  },
  mb49: {
    marginBottom: 49,
  },
  mb50: {
    marginBottom: 50,
  },
  mb51: {
    marginBottom: 51,
  },
  mb52: {
    marginBottom: 52,
  },
  mb53: {
    marginBottom: 53,
  },
  mb54: {
    marginBottom: 54,
  },
  mb55: {
    marginBottom: 55,
  },
  mb56: {
    marginBottom: 56,
  },
  mb57: {
    marginBottom: 57,
  },
  mb58: {
    marginBottom: 58,
  },
  mb59: {
    marginBottom: 59,
  },
  mb60: {
    marginBottom: 60,
  },
  mb61: {
    marginBottom: 61,
  },
  mb62: {
    marginBottom: 62,
  },
  mb63: {
    marginBottom: 63,
  },
  mb64: {
    marginBottom: 64,
  },
  mb65: {
    marginBottom: 65,
  },
  mb66: {
    marginBottom: 66,
  },
  mb67: {
    marginBottom: 67,
  },
  mb68: {
    marginBottom: 68,
  },
  mb69: {
    marginBottom: 69,
  },
  /**
   * margin left
   */
  ml01: {
    marginLeft: 1,
  },
  ml02: {
    marginLeft: 2,
  },
  ml03: {
    marginLeft: 3,
  },
  ml04: {
    marginLeft: 4,
  },
  ml05: {
    marginLeft: 5,
  },
  ml06: {
    marginLeft: 6,
  },
  ml07: {
    marginLeft: 7,
  },
  ml08: {
    marginLeft: 8,
  },
  ml09: {
    marginLeft: 9,
  },
  ml10: {
    marginLeft: 10,
  },
  ml11: {
    marginLeft: 11,
  },
  ml12: {
    marginLeft: 12,
  },
  ml13: {
    marginLeft: 13,
  },
  ml14: {
    marginLeft: 14,
  },
  ml15: {
    marginLeft: 15,
  },
  ml16: {
    marginLeft: 16,
  },
  ml17: {
    marginLeft: 17,
  },
  ml18: {
    marginLeft: 18,
  },
  ml19: {
    marginLeft: 19,
  },
  ml20: {
    marginLeft: 20,
  },
  ml21: {
    marginLeft: 21,
  },
  ml22: {
    marginLeft: 22,
  },
  ml23: {
    marginLeft: 23,
  },
  ml24: {
    marginLeft: 24,
  },
  ml25: {
    marginLeft: 25,
  },
  ml26: {
    marginLeft: 26,
  },
  ml27: {
    marginLeft: 27,
  },
  ml28: {
    marginLeft: 28,
  },
  ml29: {
    marginLeft: 29,
  },
  ml30: {
    marginLeft: 30,
  },
  ml31: {
    marginLeft: 31,
  },
  ml32: {
    marginLeft: 32,
  },
  ml33: {
    marginLeft: 33,
  },
  ml34: {
    marginLeft: 34,
  },
  ml35: {
    marginLeft: 35,
  },
  ml36: {
    marginLeft: 36,
  },
  ml37: {
    marginLeft: 37,
  },
  ml38: {
    marginLeft: 38,
  },
  ml39: {
    marginLeft: 39,
  },
  ml40: {
    marginLeft: 40,
  },
  ml41: {
    marginLeft: 41,
  },
  ml42: {
    marginLeft: 42,
  },
  ml43: {
    marginLeft: 43,
  },
  ml44: {
    marginLeft: 44,
  },
  ml45: {
    marginLeft: 45,
  },
  ml46: {
    marginLeft: 46,
  },
  ml47: {
    marginLeft: 47,
  },
  ml48: {
    marginLeft: 48,
  },
  ml49: {
    marginLeft: 49,
  },
  ml50: {
    marginLeft: 50,
  },
  ml51: {
    marginLeft: 51,
  },
  ml52: {
    marginLeft: 52,
  },
  ml53: {
    marginLeft: 53,
  },
  ml54: {
    marginLeft: 54,
  },
  ml55: {
    marginLeft: 55,
  },
  ml56: {
    marginLeft: 56,
  },
  ml57: {
    marginLeft: 57,
  },
  ml58: {
    marginLeft: 58,
  },
  ml59: {
    marginLeft: 59,
  },
  ml60: {
    marginLeft: 60,
  },
  ml61: {
    marginLeft: 61,
  },
  ml62: {
    marginLeft: 62,
  },
  ml63: {
    marginLeft: 63,
  },
  ml64: {
    marginLeft: 64,
  },
  ml65: {
    marginLeft: 65,
  },
  ml66: {
    marginLeft: 66,
  },
  ml67: {
    marginLeft: 67,
  },
  ml68: {
    marginLeft: 68,
  },
  ml69: {
    marginLeft: 69,
  },
  /**
   * margin right
   */
  mr01: {
    marginRight: 1,
  },
  mr02: {
    marginRight: 2,
  },
  mr03: {
    marginRight: 3,
  },
  mr04: {
    marginRight: 4,
  },
  mr05: {
    marginRight: 5,
  },
  mr06: {
    marginRight: 6,
  },
  mr07: {
    marginRight: 7,
  },
  mr08: {
    marginRight: 8,
  },
  mr09: {
    marginRight: 9,
  },
  mr10: {
    marginRight: 10,
  },
  mr11: {
    marginRight: 11,
  },
  mr12: {
    marginRight: 12,
  },
  mr13: {
    marginRight: 13,
  },
  mr14: {
    marginRight: 14,
  },
  mr15: {
    marginRight: 15,
  },
  mr16: {
    marginRight: 16,
  },
  mr17: {
    marginRight: 17,
  },
  mr18: {
    marginRight: 18,
  },
  mr19: {
    marginRight: 19,
  },
  mr20: {
    marginRight: 20,
  },
  mr21: {
    marginRight: 21,
  },
  mr22: {
    marginRight: 22,
  },
  mr23: {
    marginRight: 23,
  },
  mr24: {
    marginRight: 24,
  },
  mr25: {
    marginRight: 25,
  },
  mr26: {
    marginRight: 26,
  },
  mr27: {
    marginRight: 27,
  },
  mr28: {
    marginRight: 28,
  },
  mr29: {
    marginRight: 29,
  },
  mr30: {
    marginRight: 30,
  },
  mr31: {
    marginRight: 31,
  },
  mr32: {
    marginRight: 32,
  },
  mr33: {
    marginRight: 33,
  },
  mr34: {
    marginRight: 34,
  },
  mr35: {
    marginRight: 35,
  },
  mr36: {
    marginRight: 36,
  },
  mr37: {
    marginRight: 37,
  },
  mr38: {
    marginRight: 38,
  },
  mr39: {
    marginRight: 39,
  },
  mr40: {
    marginRight: 40,
  },
  mr41: {
    marginRight: 41,
  },
  mr42: {
    marginRight: 42,
  },
  mr43: {
    marginRight: 43,
  },
  mr44: {
    marginRight: 44,
  },
  mr45: {
    marginRight: 45,
  },
  mr46: {
    marginRight: 46,
  },
  mr47: {
    marginRight: 47,
  },
  mr48: {
    marginRight: 48,
  },
  mr49: {
    marginRight: 49,
  },
  mr50: {
    marginRight: 50,
  },
  mr51: {
    marginRight: 51,
  },
  mr52: {
    marginRight: 52,
  },
  mr53: {
    marginRight: 53,
  },
  mr54: {
    marginRight: 54,
  },
  mr55: {
    marginRight: 55,
  },
  mr56: {
    marginRight: 56,
  },
  mr57: {
    marginRight: 57,
  },
  mr58: {
    marginRight: 58,
  },
  mr59: {
    marginRight: 59,
  },
  mr60: {
    marginRight: 60,
  },
  mr61: {
    marginRight: 61,
  },
  mr62: {
    marginRight: 62,
  },
  mr63: {
    marginRight: 63,
  },
  mr64: {
    marginRight: 64,
  },
  mr65: {
    marginRight: 65,
  },
  mr66: {
    marginRight: 66,
  },
  mr67: {
    marginRight: 67,
  },
  mr68: {
    marginRight: 68,
  },
  mr69: {
    marginRight: 69,
  },

  /**
   * padding top
   */
  pt01: {
    paddingTop: 1,
  },
  pt02: {
    paddingTop: 2,
  },
  pt03: {
    paddingTop: 3,
  },
  pt04: {
    paddingTop: 4,
  },
  pt05: {
    paddingTop: 5,
  },
  pt06: {
    paddingTop: 6,
  },
  pt07: {
    paddingTop: 7,
  },
  pt08: {
    paddingTop: 8,
  },
  pt09: {
    paddingTop: 9,
  },
  pt10: {
    paddingTop: 10,
  },
  pt11: {
    paddingTop: 11,
  },
  pt12: {
    paddingTop: 12,
  },
  pt13: {
    paddingTop: 13,
  },
  pt14: {
    paddingTop: 14,
  },
  pt15: {
    paddingTop: 15,
  },
  pt16: {
    paddingTop: 16,
  },
  pt17: {
    paddingTop: 17,
  },
  pt18: {
    paddingTop: 18,
  },
  pt19: {
    paddingTop: 19,
  },
  pt20: {
    paddingTop: 20,
  },
  pt21: {
    paddingTop: 21,
  },
  pt22: {
    paddingTop: 22,
  },
  pt23: {
    paddingTop: 23,
  },
  pt24: {
    paddingTop: 24,
  },
  pt25: {
    paddingTop: 25,
  },
  pt26: {
    paddingTop: 26,
  },
  pt27: {
    paddingTop: 27,
  },
  pt28: {
    paddingTop: 28,
  },
  pt29: {
    paddingTop: 29,
  },
  pt30: {
    paddingTop: 30,
  },
  pt31: {
    paddingTop: 31,
  },
  pt32: {
    paddingTop: 32,
  },
  pt33: {
    paddingTop: 33,
  },
  pt34: {
    paddingTop: 34,
  },
  pt35: {
    paddingTop: 35,
  },
  pt36: {
    paddingTop: 36,
  },
  pt37: {
    paddingTop: 37,
  },
  pt38: {
    paddingTop: 38,
  },
  pt39: {
    paddingTop: 39,
  },
  pt40: {
    paddingTop: 40,
  },
  pt41: {
    paddingTop: 41,
  },
  pt42: {
    paddingTop: 42,
  },
  pt43: {
    paddingTop: 43,
  },
  pt44: {
    paddingTop: 44,
  },
  pt45: {
    paddingTop: 45,
  },
  pt46: {
    paddingTop: 46,
  },
  pt47: {
    paddingTop: 47,
  },
  pt48: {
    paddingTop: 48,
  },
  pt49: {
    paddingTop: 49,
  },
  pt50: {
    paddingTop: 50,
  },
  pt51: {
    paddingTop: 51,
  },
  pt52: {
    paddingTop: 52,
  },
  pt53: {
    paddingTop: 53,
  },
  pt54: {
    paddingTop: 54,
  },
  pt55: {
    paddingTop: 55,
  },
  pt56: {
    paddingTop: 56,
  },
  pt57: {
    paddingTop: 57,
  },
  pt58: {
    paddingTop: 58,
  },
  pt59: {
    paddingTop: 59,
  },
  pt60: {
    paddingTop: 60,
  },
  pt61: {
    paddingTop: 61,
  },
  pt62: {
    paddingTop: 62,
  },
  pt63: {
    paddingTop: 63,
  },
  pt64: {
    paddingTop: 64,
  },
  pt65: {
    paddingTop: 65,
  },
  pt66: {
    paddingTop: 66,
  },
  pt67: {
    paddingTop: 67,
  },
  pt68: {
    paddingTop: 68,
  },
  pt69: {
    paddingTop: 69,
  },
  /**
   * padding bottom
   */
  pb01: {
    paddingBottom: 1,
  },
  pb02: {
    paddingBottom: 2,
  },
  pb03: {
    paddingBottom: 3,
  },
  pb04: {
    paddingBottom: 4,
  },
  pb05: {
    paddingBottom: 5,
  },
  pb06: {
    paddingBottom: 6,
  },
  pb07: {
    paddingBottom: 7,
  },
  pb08: {
    paddingBottom: 8,
  },
  pb09: {
    paddingBottom: 9,
  },
  pb10: {
    paddingBottom: 10,
  },
  pb11: {
    paddingBottom: 11,
  },
  pb12: {
    paddingBottom: 12,
  },
  pb13: {
    paddingBottom: 13,
  },
  pb14: {
    paddingBottom: 14,
  },
  pb15: {
    paddingBottom: 15,
  },
  pb16: {
    paddingBottom: 16,
  },
  pb17: {
    paddingBottom: 17,
  },
  pb18: {
    paddingBottom: 18,
  },
  pb19: {
    paddingBottom: 19,
  },
  pb20: {
    paddingBottom: 20,
  },
  pb21: {
    paddingBottom: 21,
  },
  pb22: {
    paddingBottom: 22,
  },
  pb23: {
    paddingBottom: 23,
  },
  pb24: {
    paddingBottom: 24,
  },
  pb25: {
    paddingBottom: 25,
  },
  pb26: {
    paddingBottom: 26,
  },
  pb27: {
    paddingBottom: 27,
  },
  pb28: {
    paddingBottom: 28,
  },
  pb29: {
    paddingBottom: 29,
  },
  pb30: {
    paddingBottom: 30,
  },
  pb31: {
    paddingBottom: 31,
  },
  pb32: {
    paddingBottom: 32,
  },
  pb33: {
    paddingBottom: 33,
  },
  pb34: {
    paddingBottom: 34,
  },
  pb35: {
    paddingBottom: 35,
  },
  pb36: {
    paddingBottom: 36,
  },
  pb37: {
    paddingBottom: 37,
  },
  pb38: {
    paddingBottom: 38,
  },
  pb39: {
    paddingBottom: 39,
  },
  pb40: {
    paddingBottom: 40,
  },
  pb41: {
    paddingBottom: 41,
  },
  pb42: {
    paddingBottom: 42,
  },
  pb43: {
    paddingBottom: 43,
  },
  pb44: {
    paddingBottom: 44,
  },
  pb45: {
    paddingBottom: 45,
  },
  pb46: {
    paddingBottom: 46,
  },
  pb47: {
    paddingBottom: 47,
  },
  pb48: {
    paddingBottom: 48,
  },
  pb49: {
    paddingBottom: 49,
  },
  pb50: {
    paddingBottom: 50,
  },
  pb51: {
    paddingBottom: 51,
  },
  pb52: {
    paddingBottom: 52,
  },
  pb53: {
    paddingBottom: 53,
  },
  pb54: {
    paddingBottom: 54,
  },
  pb55: {
    paddingBottom: 55,
  },
  pb56: {
    paddingBottom: 56,
  },
  pb57: {
    paddingBottom: 57,
  },
  pb58: {
    paddingBottom: 58,
  },
  pb59: {
    paddingBottom: 59,
  },
  pb60: {
    paddingBottom: 60,
  },
  pb61: {
    paddingBottom: 61,
  },
  pb62: {
    paddingBottom: 62,
  },
  pb63: {
    paddingBottom: 63,
  },
  pb64: {
    paddingBottom: 64,
  },
  pb65: {
    paddingBottom: 65,
  },
  pb66: {
    paddingBottom: 66,
  },
  pb67: {
    paddingBottom: 67,
  },
  pb68: {
    paddingBottom: 68,
  },
  pb69: {
    paddingBottom: 69,
  },
  /**
   * padding left
   */
  pl01: {
    paddingLeft: 1,
  },
  pl02: {
    paddingLeft: 2,
  },
  pl03: {
    paddingLeft: 3,
  },
  pl04: {
    paddingLeft: 4,
  },
  pl05: {
    paddingLeft: 5,
  },
  pl06: {
    paddingLeft: 6,
  },
  pl07: {
    paddingLeft: 7,
  },
  pl08: {
    paddingLeft: 8,
  },
  pl09: {
    paddingLeft: 9,
  },
  pl10: {
    paddingLeft: 10,
  },
  pl11: {
    paddingLeft: 11,
  },
  pl12: {
    paddingLeft: 12,
  },
  pl13: {
    paddingLeft: 13,
  },
  pl14: {
    paddingLeft: 14,
  },
  pl15: {
    paddingLeft: 15,
  },
  pl16: {
    paddingLeft: 16,
  },
  pl17: {
    paddingLeft: 17,
  },
  pl18: {
    paddingLeft: 18,
  },
  pl19: {
    paddingLeft: 19,
  },
  pl20: {
    paddingLeft: 20,
  },
  pl21: {
    paddingLeft: 21,
  },
  pl22: {
    paddingLeft: 22,
  },
  pl23: {
    paddingLeft: 23,
  },
  pl24: {
    paddingLeft: 24,
  },
  pl25: {
    paddingLeft: 25,
  },
  pl26: {
    paddingLeft: 26,
  },
  pl27: {
    paddingLeft: 27,
  },
  pl28: {
    paddingLeft: 28,
  },
  pl29: {
    paddingLeft: 29,
  },
  pl30: {
    paddingLeft: 30,
  },
  pl31: {
    paddingLeft: 31,
  },
  pl32: {
    paddingLeft: 32,
  },
  pl33: {
    paddingLeft: 33,
  },
  pl34: {
    paddingLeft: 34,
  },
  pl35: {
    paddingLeft: 35,
  },
  pl36: {
    paddingLeft: 36,
  },
  pl37: {
    paddingLeft: 37,
  },
  pl38: {
    paddingLeft: 38,
  },
  pl39: {
    paddingLeft: 39,
  },
  pl40: {
    paddingLeft: 40,
  },
  pl41: {
    paddingLeft: 41,
  },
  pl42: {
    paddingLeft: 42,
  },
  pl43: {
    paddingLeft: 43,
  },
  pl44: {
    paddingLeft: 44,
  },
  pl45: {
    paddingLeft: 45,
  },
  pl46: {
    paddingLeft: 46,
  },
  pl47: {
    paddingLeft: 47,
  },
  pl48: {
    paddingLeft: 48,
  },
  pl49: {
    paddingLeft: 49,
  },
  pl50: {
    paddingLeft: 50,
  },
  pl51: {
    paddingLeft: 51,
  },
  pl52: {
    paddingLeft: 52,
  },
  pl53: {
    paddingLeft: 53,
  },
  pl54: {
    paddingLeft: 54,
  },
  pl55: {
    paddingLeft: 55,
  },
  pl56: {
    paddingLeft: 56,
  },
  pl57: {
    paddingLeft: 57,
  },
  pl58: {
    paddingLeft: 58,
  },
  pl59: {
    paddingLeft: 59,
  },
  pl60: {
    paddingLeft: 60,
  },
  pl61: {
    paddingLeft: 61,
  },
  pl62: {
    paddingLeft: 62,
  },
  pl63: {
    paddingLeft: 63,
  },
  pl64: {
    paddingLeft: 64,
  },
  pl65: {
    paddingLeft: 65,
  },
  pl66: {
    paddingLeft: 66,
  },
  pl67: {
    paddingLeft: 67,
  },
  pl68: {
    paddingLeft: 68,
  },
  pl69: {
    paddingLeft: 69,
  },
  /**
   * padding right
   */
  pr01: {
    paddingRight: 1,
  },
  pr02: {
    paddingRight: 2,
  },
  pr03: {
    paddingRight: 3,
  },
  pr04: {
    paddingRight: 4,
  },
  pr05: {
    paddingRight: 5,
  },
  pr06: {
    paddingRight: 6,
  },
  pr07: {
    paddingRight: 7,
  },
  pr08: {
    paddingRight: 8,
  },
  pr09: {
    paddingRight: 9,
  },
  pr10: {
    paddingRight: 10,
  },
  pr11: {
    paddingRight: 11,
  },
  pr12: {
    paddingRight: 12,
  },
  pr13: {
    paddingRight: 13,
  },
  pr14: {
    paddingRight: 14,
  },
  pr15: {
    paddingRight: 15,
  },
  pr16: {
    paddingRight: 16,
  },
  pr17: {
    paddingRight: 17,
  },
  pr18: {
    paddingRight: 18,
  },
  pr19: {
    paddingRight: 19,
  },
  pr20: {
    paddingRight: 20,
  },
  pr21: {
    paddingRight: 21,
  },
  pr22: {
    paddingRight: 22,
  },
  pr23: {
    paddingRight: 23,
  },
  pr24: {
    paddingRight: 24,
  },
  pr25: {
    paddingRight: 25,
  },
  pr26: {
    paddingRight: 26,
  },
  pr27: {
    paddingRight: 27,
  },
  pr28: {
    paddingRight: 28,
  },
  pr29: {
    paddingRight: 29,
  },
  pr30: {
    paddingRight: 30,
  },
  pr31: {
    paddingRight: 31,
  },
  pr32: {
    paddingRight: 32,
  },
  pr33: {
    paddingRight: 33,
  },
  pr34: {
    paddingRight: 34,
  },
  pr35: {
    paddingRight: 35,
  },
  pr36: {
    paddingRight: 36,
  },
  pr37: {
    paddingRight: 37,
  },
  pr38: {
    paddingRight: 38,
  },
  pr39: {
    paddingRight: 39,
  },
  pr40: {
    paddingRight: 40,
  },
  pr41: {
    paddingRight: 41,
  },
  pr42: {
    paddingRight: 42,
  },
  pr43: {
    paddingRight: 43,
  },
  pr44: {
    paddingRight: 44,
  },
  pr45: {
    paddingRight: 45,
  },
  pr46: {
    paddingRight: 46,
  },
  pr47: {
    paddingRight: 47,
  },
  pr48: {
    paddingRight: 48,
  },
  pr49: {
    paddingRight: 49,
  },
  pr50: {
    paddingRight: 50,
  },
  pr51: {
    paddingRight: 51,
  },
  pr52: {
    paddingRight: 52,
  },
  pr53: {
    paddingRight: 53,
  },
  pr54: {
    paddingRight: 54,
  },
  pr55: {
    paddingRight: 55,
  },
  pr56: {
    paddingRight: 56,
  },
  pr57: {
    paddingRight: 57,
  },
  pr58: {
    paddingRight: 58,
  },
  pr59: {
    paddingRight: 59,
  },
  pr60: {
    paddingRight: 60,
  },
  pr61: {
    paddingRight: 61,
  },
  pr62: {
    paddingRight: 62,
  },
  pr63: {
    paddingRight: 63,
  },
  pr64: {
    paddingRight: 64,
  },
  pr65: {
    paddingRight: 65,
  },
  pr66: {
    paddingRight: 66,
  },
  pr67: {
    paddingRight: 67,
  },
  pr68: {
    paddingRight: 68,
  },
  pr69: {
    paddingRight: 69,
  },
});
