import * as React from 'react';
import { StyleSheet, View , Button, Keyboard, TouchableOpacity, Alert} from 'react-native';
import { Text, TextInput, RadioButton } from 'react-native-paper';

import DateTimePickerModal from "react-native-modal-datetime-picker";

const App = () => {
  const [name, setName] = React.useState("");
  const [destination, setDestination] = React.useState("");
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [dateSelect, setDate] = React.useState("");
  const [value, setValue] = React.useState('Yes');
  const [description, setDescription] = React.useState("")


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    hideDatePicker();
  };
  


  return (
    <View style={styles.components}>
      <View style ={header.header}>
            <View>
                <Text style ={header.headerText}>EXPENSE APP</Text>
            </View>
      </View>

      <TextInput
        label="Name"
        style={styles.inputStyle}
        value={name}
        theme={theme}
        mode="outlined"
        onChangeText={text => setName(text)}
      
      />

      <TextInput
        label="Destination"
        style={styles.inputStyle}
        value={destination}
        theme={theme}
        mode="outlined"
        onChangeText={text => setDestination(text)}
      />

      <TextInput
        style={styles.inputStyle}
        value={dateSelect ? dateSelect.toLocaleDateString(): "Date"}
        theme={theme}
        mode="outlined"
        onChangeText={text => setDestination(text)}

      />

     <View>


 
      <Button  title="Click to choose date" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
      

      <Text>  Require Risks assessment</Text>
    <RadioButton.Group style={styles.radioButton} onValueChange={newValue => setValue(newValue)} value={value}>
      <View style={styles.radioButton} >
        <Text>Yes</Text>
        <RadioButton value="Yes" />
      </View>
      <View>
        <Text>No</Text>
        <RadioButton value="No" />
      </View>
    </RadioButton.Group>


      <TextInput
        label="Description"
        style={styles.inputStyle}
        value={description}
        theme={theme}
        mode="outlined"
        onChangeText={text => setDescription(text)}
      />

        <Button  title="Add Trip" onPress={() => console.log('pressed')} />
    
      </View>
  )

}





 


const header = StyleSheet.create({
    header:{
        width:'100%',
        height:'10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        letterSpacing: 1,

    },
    radioButton:{
      padding: 20
    },
    inputDate:{
      margin:5,
      paddingRight: 10,
    }
});

const theme ={
  colors:{
    primary:"blue"
    
  }
}

const styles = StyleSheet.create({
  components:{
    flex:1,
    
  },
  inputStyle:{
    margin:5,
    paddingRight: 10,
    
  },
})
export default App;


