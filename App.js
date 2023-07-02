
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState, useEffect} from 'react';
import {db} from "../pastureManager/pasturemanager-bf874-fe1e90e9a32d.json";

// async function getAnimals(){
//  let animals = [];
//   const snapshot = await db.collection('animals').get();
// snapshot.forEach((doc) => {
//   animal = doc.data('breed');
// });index.js
// return snapshot
async function getAnimals() {
  let animals = [];
  const snapshot = await db.collection('animals').get();
  snapshot.forEach((doc) => {
    animals.push(doc.data().breed);
  });
  return animals;
};

const newanimal = db.collection('animals').doc('cow');

await newanimal.set({
  "name": "cow",
  "breed": "angus",
  "bred": "true",
  "averageweight": 1410,
  "hayPerDaylbs": 20,
  "animalUnit": 1,
  "percentBodyWeightConsumed": 0.02
});index.js



export default function App() {
// These 4 are used by the user directly for the first function
  const [pastureName, setpastureName] = useState('');
  const [pastureHeight, setpastureHeight] = useState('');
  const [horseCount, sethorseCount] = useState('');
  const [pastureSize, setpastureSize] = useState('');

// this next line is for the next version where i help suggest densities  
  const [grassMix, setgrassMix] = useState('');

// These are constants that for now they cant access and will be changed in the software. 
  const [percentBodyWeight, setpercentBodyWeight] = useState('');
  const [averageHorseWeight, setaverageHorseWeight] = useState('');
// primarily for the second funtion. 
  const [fieldDensity, setfieldDensity] = useState('');
  const [feedTonnage, setfeedTonnage] = useState('');


// this function is the main point. It should return an integer but i need to put it in a better location to function properly. 
  const feedDays = ((pastureSize * (pastureHeight * 200) * 0.5  )/(horseCount * averageHorseWeight * percentBodyWeight))

// I want this to only run if all its values are inputed. and i want it to run on a seperate page. 
  const tonsDryFeed = pastureSize*pastureHeight*grassMix
  // var animal1 = [];
  // animal1 = getAnimals();
  const [animal1, setAnimal1] = useState([]);

useEffect(() => {
  const fetchAnimals = async () => {
    const animals = await getAnimals();
    setAnimal1(animals);
  };
  fetchAnimals();
}, []);

  return (
   
<>    
    <View style={styles.container}>
      <Text style={ {fontSize: 25}}>
        Welcome to the Pasture Manager!
      </Text>
      
      {/* These inputs are for the user to add info then they will be submitted and added to the screen. */}
      <TextInput
        style={{height: 50}}
        
        placeholder="Enter Field Name"
        onChangeText={newPastureName => setpastureName(newPastureName)}
        defaultValue={pastureName}
      />


        <TextInput
        style={{height: 50}}
        
        placeholder="Enter Field lbs/in"
        onChangeText={newFieldDensity => setfieldDensity(newFieldDensity)}
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

        <Text style={{padding: 10, fontSize: 15}}>
        The animal is {}. 
        </Text> 
        <Text style={{ padding: 10, fontSize: 15 }}>

         The animals are:
         {animal1.map((animal, index) => (
           <Text key={index}>{animal} </Text>
         ))}
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