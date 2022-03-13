import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderColor: '#FF5B02',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#FF5B02',
    elevation: 24,
    paddingLeft: 20,
    marginHorizontal: 24,
    color: '#000000',
  },
  buttonContainer: {
    marginBottom: 24,
    backgroundColor: '#FF5B02',
    marginHorizontal: 24,
    borderRadius: 8,
  },
  button: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});
