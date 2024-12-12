import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  btnCustomStyle: {
    marginHorizontal: wp(20),
    borderRadius: wp(10),
    backgroundColor: '#00000090',
    marginBottom: hp(4),
  },
});
export default styles;
