import { StyleSheet } from 'react-native';
import React from "react";


export const styles = StyleSheet.create({
  theme: {
    backgroundColor: '#F9F9F9',  // off-white background color
    primaryColor: '#11c2e3',     // orange primary color
    accentColor: '#7B68EE',      // slate blue accent color
    borderRadius: 10,            // rounded corners for all elements
    shadowOpacity: 0.2,          // slightly transparent shadow
    shadowRadius: 4,             // blur radius of shadow
    elevation: 0,                // elevation for Android shadow
    fontSize: 16,                // default font size
    fontWeight: 'bold',          // default font weight
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export const headerStyles = StyleSheet.create({
  container: {
    backgroundColor: styles.theme.primaryColor,
    paddingTop: 15,
    paddingBottom: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 36,
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
  },
});


export const buttonStyles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: styles.theme.primaryColor,
    borderRadius: styles.theme.borderRadius,
    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: styles.theme.accentColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: styles.theme.shadowOpacity,
    shadowRadius: styles.theme.shadowRadius,
    elevation: styles.theme.elevation,
  },
  highlight: {
    backgroundColor: styles.theme.primaryColor,
    activeOpacity: 0.8,
    underlayColor: styles.theme.accentColor,
  },
  text: {
    color: styles.theme.backgroundColor,
    fontSize: styles.theme.fontSize,
    fontWeight: styles.theme.fontWeight,
    textAlign: 'center',
    // height: '100%',
    textAlignVertical: 'center',
  },
});

export const textInputStyles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 50,
    height: 40,
    width: '80%',
    marginHorizontal: '10%',
    borderColor: styles.theme.primaryColor,
    borderWidth: 2,
    borderRadius: 5,
    paddingLeft: 5,
    flexDirection: 'row',
    backgroundColor: styles.theme.backgroundColor,
    shadowColor: styles.theme.accentColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: styles.theme.shadowOpacity,
    shadowRadius: styles.theme.shadowRadius,
    elevation: styles.theme.elevation,
  },
  textInput: {
    height: "90%",
    backgroundColor: styles.theme.backgroundColor,
    color: styles.theme.primaryColor,
    width: '80%',
  },
  button: {
    color: styles.theme.primaryColor,
    right: '0%',
    width: '20%',
    height: '100%',
    borderColor: styles.theme.primaryColor,
    backgroundColor: styles.theme.primaryColor, // <- is it necessary?
  },
  buttonText: {...buttonStyles.text, height: '100%'},
})

export const chatBubbleStyles = StyleSheet.create({
  chatContainer: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: styles.theme.accentColor,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
    padding: 10,
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: styles.theme.accentColor,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '70%',
    padding: 10,
  },
  messageText: {
    color: styles.theme.primaryColor,
    fontSize: 16,
  },
});
