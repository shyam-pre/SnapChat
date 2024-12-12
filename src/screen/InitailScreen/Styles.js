import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import color from '../styles/color';

const styles = StyleSheet.create({
  logoStyle: {
    height: hp(18),
    aspectRatio: 1 / 1,
    borderRadius: wp(40),
    alignSelf: 'center',
  },
  logotest: {
    fontSize: hp(2),
    fontWeight: '500',
    color: color.black,
  },
  btnStyle: {
    // borderWidth: 1,
    paddingVertical: hp(1.5),
    marginHorizontal: wp(4),
    marginTop: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
});

export default styles;
