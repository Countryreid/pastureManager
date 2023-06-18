import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [pastureName, setpastureName] = useState('');
  const [pastureHeight, setpastureHeight] = useState('');
  const [feedTonnage, setfeedTonnage] = useState('');
  const [horseCount, sethorseCount] = useState('');
  const [pastureSize, setpastureSize] = useState('');
  const [grassMix, setgrassMix] = useState('');
  const [percentBodyWeight, setpercentBodyWeight] = useState(0.02);
  const [averageHorseWeight, setaverageHorseWeight] = useState('');
  const [fieldDensity, setfieldDensity] = useState('');


  const feedDays = ((pastureSize * (pastureHeight * 200) * 0.5  )/(horseCount * averageHorseWeight * percentBodyWeight))

  const tonsDryFeed = pastureSize*pastureHeight*grassMix


  return (
   
<>    
    <View style={styles.container}>
      <Text style={ {fontSize: 25}}>
        Welcome to the Pasture Manager!
      </Text>
      
      <TextInput
        style={{height: 50}}
        
        placeholder="Enter Field Name"
        onChangeText={newPastureName => setpastureName(newPastureName)}
        defaultValue={pastureName}
      />


        <TextInput
        style={{height: 50}}
        
        placeholder="Enter Field lbs/in"
        onChangeText={newFieldDensity => setText(newFieldDensity)}
        defaultValue={fieldDensity}
      />

      
      <TextInput
        style={{height: 50}}
        
        placeholder="Enter Field height"
        onChangeText={newPastureHeight => setpastureHeight(newPastureHeight)}
        defaultValue={pastureHeight}
      />
       

      <TextInput
        style={{height: 50}}
        
        placeholder="Enter number of Horses"
        onChangeText={newHorseCount=> sethorseCount(newHorseCount)}
        defaultValue={horseCount}
      />


      <Text style={{padding: 10, fontSize: 15}}>
        The new field is {pastureName}.
        The number of days you can graze this pasture is {feedDays}.
        </Text> 

        <Text style={{padding: 10, fontSize: 15}}>
        The {grassMix} pasture is providing {tonsDryFeed} pounds of hay. 
        </Text> 
       
    

      <StatusBar style="auto" />

      </View>
</>

      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


