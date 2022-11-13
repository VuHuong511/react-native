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

      <View style ={styles.header}>
            <View>
                <Text style ={styles.headerText}>EXPENSE APP</Text>
            </View>
      </View>
     
      <TextInput
        label="Name"
        style={styles.inputStyle}
        value={name}
        theme={theme}
        mode="outlined"
        onChangeText={text => setName(text)}/>

      <TextInput
        label="Destination"
        style={styles.inputStyle}
        value={destination}
        theme={theme}
        mode="outlined"
        onChangeText={text => setDestination(text)}
      />
      <View style = {styles.Date}>
        <TextInput
          style={styles.inputDate}
          value={dateSelect ? dateSelect.toLocaleDateString(): "Date"}
          theme={theme}
          mode="outlined"
          onChangeText={text => setDestination(text)}/>

        <View style = {styles.buttonDate}>
          <Button
          title="Click to choose date" onPress={showDatePicker} />
          <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}/>
        </View>
      </View>


      <Text style = {styles.text}>  Require Risks assessment</Text>
       <View>
          <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
          <View style = {styles.radioButton}>
            <Text>Yes</Text>
            <RadioButton value="Yes" />
          </View>
          <View style = {styles.radioButton}>
            <Text>No</Text>
            <RadioButton value="No" />
          </View>
        </RadioButton.Group>
      </View>


      <TextInput
        label="Description"
        style={styles.inputStyle}
        value={description}
        theme={theme}
        mode="outlined"
        onChangeText={text => setDescription(text)}/>
        <Button  title="Add Trip" onPress={() => console.log('pressed')} />
      </View>
  );
}

const styles = StyleSheet.create({
    components:{
      flex:1,
    },
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
    inputStyle:{
      margin:15,
      paddingRight: 10,
    },
    radioButton:{
      flexDirection: "row",
      padding: 10,
      height: 50,
      marginTop: 5,
      marginBottom: 5,
      marginLeft: 15,
      marginRight: 200,
      paddingLeft: 10,
      paddingRight: 10,
      alignItems: "center",
    },
    radioGroup:{
      flexDirection: "row",
      alignItems:'center',   
    },

    Date:{
      flexDirection: "row",
      alignItems:'center',   
    },
    inputDate:{
      margin:15,
      marginRight:0,
      paddingRight: 150,

    },
    buttonDate:{
      marginLeft:3,
      marginRight: 15,
      flex:1,
      paddingTop: 6,
    },
    text:{
      margin:10,
    }

});

const theme ={
  colors:{
    primary:"blue",
  }
};
export default App;


