import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SubjectScreen from './screens/SubjectScreen';
import MathsTopicScreen from './screens/MathsTopicScreen';
import PhysicsTopicScreen from './screens/PhysicsTopicScreen';
import ChemistryTopicScreen from './screens/ChemistryTopicScreen';
import BiologyTopicScreen from './screens/BiologyTopicScreen';
import HistoryTopicScreen from './screens/HistoryTopicScreen';
import CivicsTopicScreen from './screens/CivicsTopicScreen';
import GeographyTopicScreen from './screens/GeographyTopicScreen';
import EconomicsTopicScreen from './screens/EconomicsTopicScreen';
import HindiTopicScreen from './screens/HindiTopicScreen';
import EnglishTopicScreen from './screens/EnglishTopicScreen';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';


export default function App() {
  return (

      <AppContainer /> 

  )
}

const appSwitchNavigator = createSwitchNavigator({

  Subjects: {
    screen: SubjectScreen
  },

  MathsTopics: {
    screen: MathsTopicScreen 
  },

  //Physics topics

  PhysicsTopics:{
    screen: PhysicsTopicScreen
  },

  //Chemistry topics

  ChemistryTopics:{
    screen: ChemistryTopicScreen
  },

  //Bio Topics

  BiologyTopics:{
    screen: BiologyTopicScreen
  },

  //Civics topics

  CivicsTopics:{
    screen:CivicsTopicScreen
  },

  //Geography topics
  GeographyTopics:{
    screen:GeographyTopicScreen
  },

  //History topics
  HistoryTopics:{
    screen:HistoryTopicScreen
  },

  //Economics topics
  EconomicsTopics:{
    screen:EconomicsTopicScreen
  },

  //Hindi topics
  HindiTopics:{
    screen:HindiTopicScreen
  },

  //English topics
  EnglishTopics:{
    screen:EnglishTopicScreen
  },
},  

  {

    initialRouteName: 'Subjects'

  }

)

  const AppContainer = createAppContainer(appSwitchNavigator)



 
