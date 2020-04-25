import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default
class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
      Confirmed: '',
      Death: '',
      Recovered: '',
      Active:'',
    };
  } 

componentDidMount(){
  fetch('https://api.covid19api.com/live/country/united-states/status/confirmed', {
                method: 'GET'})
        .then((response) => response.json())
        .then(json => {
        this.setState({
            Confirmed: json[json.length-1]['Confirmed'],
            Death: json[json.length-1]['Deaths'],
            Recovered: json[json.length-1]['Recovered'],
            Active:json[json.length-1]['Active'],
        })
        .catch(error => {
        console.error(error);
      });
  });
}

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.covid}>
        Codvid-19 Data {"\n"}for{"\n"} United States
      </Text>
      <Text style={styles.loremIpsum}></Text>
      <Text style={styles.confirmed}>Confirmed: {this.state.Confirmed}</Text>
      <Text style={styles.death}>Deaths: {this.state.Death}</Text>
      <View style={styles.loremIpsum3Row}>
        <Text style={styles.loremIpsum3}></Text>
        <Text style={styles.recovered}>Recovered: {this.state.Recovered}</Text>
      </View>
      <Text style={styles.active}>Active: {this.state.Active}</Text>
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  covid: {
    color: "#121212",
    fontSize: 24,
    textAlign: "center",
    marginTop: 111,
    marginLeft: 0
  },
  loremIpsum: {
    color: "#121212",
    marginTop: 47,
    marginLeft: 39
  },
  confirmed: {
    color: "#121212",
    marginTop: 7,
    marginLeft: 53
  },
  death: {
    color: "#121212",
    marginTop: 41,
    marginLeft: 64
  },
  loremIpsum3: {
    color: "#121212",
  },
  recovered: {
    color: "#121212",
    marginLeft: 4
  },
  loremIpsum3Row: {
    height: 14,
    flexDirection: "row",
    marginTop: 40,
    marginLeft: 45,
    marginRight: 261
  },
  active: {
    color: "#121212",
    marginTop: 32,
    marginLeft: 66
  }
});

