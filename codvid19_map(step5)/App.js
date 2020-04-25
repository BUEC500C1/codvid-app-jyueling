import React from 'react';
import { Platform, StyleSheet, Text, View, Button, buttonClick } from 'react-native';
import MapView, { PROVIDER_GOOGLE,Marker,Callout } from 'react-native-maps';

import Map from "./map"


export default
class App extends React.Component {
constructor(props){
    super(props);
    this.state = {
      US_Confirmed: '',
      US_Deaths: '',
      US_Recovered: '',
      US_Date:'',
      CA_Confirmed: '',
      CA_Deaths: '',
      CA_Recovered: '',
      CA_Date:'',
      CU_Confirmed: '',
      CU_Deaths: '',
      CU_Recovered: '',
      CU_Date:'',
      MX_Confirmed: '',
      MX_Deaths: '',
      MX_Recovered: '',
      MX_Date:'',
      GT_Confirmed: '',
      GT_Deaths: '',
      GT_Recovered: '',
      GT_Date:'',
      CO_Confirmed: '',
      CO_Deaths: '',
      CO_Recovered: '',
      CO_Date:'',
      NI_Confirmed: '',
      NI_Deaths: '',
      NI_Recovered: '',
      NI_Date:'',
    };
  } 

componentDidMount(){
  fetch('https://api.covid19api.com/summary', {
                method: 'GET'})
        .then((response) => response.json())
        .then(json => {
        this.setState({
            CA_Confirmed: json['Countries'][39]['TotalConfirmed'],
            CA_Deaths: json['Countries'][39]['TotalDeaths'],
            CA_Recovered: json['Countries'][39]['TotalRecovered'],
            CA_Date: json['Countries'][39]['Date'],

            CO_Confirmed: json['Countries'][48]['TotalConfirmed'],
            CO_Deaths: json['Countries'][48]['TotalDeaths'],
            CO_Recovered: json['Countries'][48]['TotalRecovered'],
            CO_Date: json['Countries'][48]['Date'],

            CU_Confirmed: json['Countries'][55]['TotalConfirmed'],
            CU_Deaths: json['Countries'][55]['TotalDeaths'],
            CU_Recovered: json['Countries'][55]['TotalRecovered'],
            CU_Date: json['Countries'][55]['Date'],

            GT_Confirmed: json['Countries'][89]['TotalConfirmed'],
            GT_Deaths: json['Countries'][89]['TotalDeaths'],
            GT_Recovered: json['Countries'][89]['TotalRecovered'],
            GT_Date: json['Countries'][89]['Date'],

            MX_Confirmed: json['Countries'][142]['TotalConfirmed'],
            MX_Deaths: json['Countries'][142]['TotalDeaths'],
            MX_Recovered: json['Countries'][142]['TotalRecovered'],
            MX_Date: json['Countries'][142]['Date'],

            NI_Confirmed: json['Countries'][159]['TotalConfirmed'],
            NI_Deaths: json['Countries'][159]['TotalDeaths'],
            NI_Recovered: json['Countries'][159]['TotalRecovered'],
            NI_Date: json['Countries'][159]['Date'],

            US_Confirmed: json['Countries'][236]['TotalConfirmed'],
            US_Deaths: json['Countries'][236]['TotalDeaths'],
            US_Recovered: json['Countries'][236]['TotalRecovered'],
            US_Date: json['Countries'][236]['Date']
        })
        .catch(error => {
        console.error(error);
      });
  });
}

render() {
    return (
      <MapView
         style={{ flex: 1 }}
         provider={PROVIDER_GOOGLE}
         initialRegion={{
         latitude: 42,
         longitude: -90,
         latitudeDelta: 50,
         longitudeDelta: 50}}
         showsUserLocation
      > 
      <Marker
          coordinate = {{latitude: 56, longitude: -106}}>
            <Callout>
              <Text style = {styles.mapstyle}>Canada</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.CA_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.CA_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.CA_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.CA_Date}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 4, longitude: -74}}>
            <Callout>
              <Text style = {styles.mapstyle}>Colombia</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.CO_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.CO_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.CO_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.CO_Date}</Text>
            </Callout>
          </Marker>
      <Marker
          coordinate = {{latitude: 21, longitude: -77}}>
            <Callout>
              <Text style = {styles.mapstyle}>Cuba</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.CU_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.CU_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.CU_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.CU_Date}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 15, longitude: -90}}>
            <Callout>
              <Text style = {styles.mapstyle}>Guatemala</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.GT_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.GT_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.GT_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.GT_Date}</Text>
            </Callout>
          </Marker>
       <Marker
          coordinate = {{latitude: 19, longitude: -99}}>
            <Callout>
              <Text style = {styles.mapstyle}>Mexico</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.MX_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.MX_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.MX_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.MX_Date}</Text>
            </Callout>
          </Marker>
          <Marker
          coordinate = {{latitude: 12, longitude: -85}}>
            <Callout>
              <Text style = {styles.mapstyle}>Nicaragua</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.NI_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.NI_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.NI_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.NI_Date}</Text>
            </Callout>
          </Marker>
      <Marker
          coordinate = {{latitude: 40, longitude: -100}}>
            <Callout>
              <Text style = {styles.mapstyle}>United States</Text>
              <Text style = {styles.mapstyle}>Confirmed:{this.state.US_Confirmed}</Text>
              <Text style = {styles.mapstyle}>Recovered:{this.state.US_Recovered}</Text>
              <Text style = {styles.mapstyle}>Deaths:{this.state.US_Deaths}</Text>
              <Text style = {styles.mapstyle}>Date:{this.state.US_Date}</Text>
            </Callout>
          </Marker>
      </MapView>
    );
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
  },clickButtonStyle: {
       margin: 10,
       height: 40,
       backgroundColor: '#E6E6FA',
       borderRadius: 10,
       borderWidth: 1,
       borderColor: '#7FFF00',
   },
   mapstyle: {
    color: '#121212',
    padding: 2,
    fontSize:15,
    textAlign: 'center'
  },
});

