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

  const [text, setText] = useState('');


  var feedDays = ((pastureSize * (pastureHeight * 200) * 0.5  )/(horseCount * averageHorseWeight * percentBodyWeight))

  return (
    <View style={{padding: 10}}>
    <TextInput
      style={{height: 40}}
      placeholder="Type here to translate!"
      onChangeText={newText => setText(newText)}
      defaultValue={text}
    />
    <Text style={{padding: 10, fontSize: 42}}>
      {text
        .split(' ')
        .map(word => word && '🍕')
        .join(' ')}
    </Text>
  </View>


    
    
    // <View style={styles.container}>
    //   <Text style={ {fontSize: 25}}>
    //     Welcome to the Pasture Manager!
    //   </Text>
      
    //   <TextInput
    //     style={{height: 50}}
        
    //     placeholder="Enter Field Name"
    //     onChangeText={newPastureName => setpastureName(newPastureName)}
    //     defaultValue={pastureName}
    //   />
    //    <Text style={{padding: 10, fontSize: 15}}>
       


    //     The new field is {pastureName}
    //     </Text> */


    //    /* <TextInput
    //     style={{height: 50}}
        
    //     placeholder="Enter Field lbs/in"
    //     onChangeText={newFieldDensity => setText(newFieldDensity)}
    //     defaultValue={fieldDensity}
    //   />
    //    <Text style={{padding: 10, fontSize: 15}}>
    //    </Text>



    //   <TextInput
    //     style={{height: 50}}
        
    //     placeholder="Enter Field height"
    //     onChangeText={newPastureHeight => setpastureHeight(newPastureHeight)}
    //     defaultValue={pastureHeight}
    //   />
    //    <Text style={{padding: 10, fontSize: 15}}>
    //     </Text>


    //   <TextInput
    //     style={{height: 50}}
        
    //     placeholder="Enter number of Horses"
    //     onChangeText={newHorseCount=> sethorseCount(newHorseCount)}
    //     defaultValue={horseCount}
    //   />
    //   </Text> */

      


      // <StatusBar style="auto" />
    



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


