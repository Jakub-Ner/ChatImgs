import React, { useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';

function useBackAction(action: () => boolean) {
  return useEffect(() => {
    const backAction = () => action();

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
}

function closeApp() {
  return backAlert("close the app", () => BackHandler.exitApp());
}


function backAlert(description: string, onPress: () => void) {
  Alert.alert('Hold on!', `Are you sure you want to ${description} ?`, [
    {
      text: 'Cancel',
      onPress: () => null,
      style: 'cancel',
    },
    {text: 'YES', onPress: () => onPress()},
  ]);
  return true;
}

export { useBackAction, closeApp, backAlert };

