import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  body: {
    flex: 1,
    margin: 10,
  },
  drawerHeader: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerIcon: {
    width: 15,
    height: 15,
  },
  categoryIcon: {
    height: 40,
    width: 40,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
  },
  drawerText: {
    color: '#000000',
  },
  drawerContent: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'gray',
  },
  drawerBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  drawerInfoIcons: {
    width: 25,
    height: 25,
  },
  drawerInfoContainer: {
    flexDirection: 'row',
  },
  drawerHelpContainer: {
    flexDirection: 'row',
  },
  margin: {
    marginLeft: 10,
  },
});
