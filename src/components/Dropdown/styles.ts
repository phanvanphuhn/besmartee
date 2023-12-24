import { StyleSheet } from 'react-native';
import colors from 'res/colors';
import scale from 'utils/scale';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: scale(0.5),
    borderColor: '#EEEEEE',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    borderRadius: 5
  },
  dropdown: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scale(35),
  },
  title: {
    marginVertical: scale(5),
    fontSize: scale(16)
  },
  item: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.border,
    borderBottomWidth: 1
  },
  textItem: {
    flex: 1,
    fontSize: scale(16)
  },
  icon: {
    width: scale(20),
    height: scale(20),
  },
  textError: {
    color: 'red',
    fontSize: scale(14),
    marginTop: scale(10)
  },
  input: {
    borderWidth: scale(0.5),
    borderColor: '#DDDDDD',
    paddingHorizontal: scale(8),
    marginBottom: scale(8),
    margin: scale(6)
  },
});
