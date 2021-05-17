import {StyleSheet, StatusBar} from 'react-native';

export const styleButtons = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    paddingVertical: 10,
    alignSelf: 'stretch',
  },

  items: {
    backgroundColor: '#f9c2ff',
    height: 50,
    marginVertical: 8,
  },
  appButtonUndefined: {
    elevation: 8,
    backgroundColor: '#00BFFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer6: {
    elevation: 8,
    backgroundColor: '#A9A9A9',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
    // height: 100,
  },
  appButtonContainer5: {
    elevation: 8,
    backgroundColor: '#DEB887',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer4: {
    elevation: 8,
    backgroundColor: '#DAA520',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer3: {
    elevation: 8,
    backgroundColor: '#FF00FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer2: {
    elevation: 8,
    backgroundColor: '#FF0000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainer1: {
    elevation: 8,
    backgroundColor: '#800000',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonContainerClose: {
    elevation: 8,
    backgroundColor: '#00FF00',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  appButtonText: {
    fontSize: 18,
    color: '#424141',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export const stylesDetail = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: 'powderblue',
  },
  scrollView: {
    flex: 0.9,
    backgroundColor: 'powderblue',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});
