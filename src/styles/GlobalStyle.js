import { StyleSheet } from 'react-native';

const colors = {
  sage: '#C7D2C3',
  cream: '#FAF3E0',
  white: '#FFFFFF',
  dark: '#333333',
  lightGray: '#DADADA',
};

export default StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.cream,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.dark,
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.dark,
  },
  cardText: {
    color: colors.dark,
  },
  button: {
    backgroundColor: colors.sage,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: colors.dark,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: colors.white,
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
  fontSize: 16,
  color: '#40513B',
  backgroundColor: '#FFF',
  padding: 10,
  borderRadius: 10,
  elevation: 2,
  },

});
