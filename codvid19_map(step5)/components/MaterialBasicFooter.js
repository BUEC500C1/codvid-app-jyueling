import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";



function MaterialBasicFooter(props) {
  
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <Text style={styles.btn1Text}>Data</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activebtnWrapper} onPress={() => this.map()}>
        <Text style={styles.activeText}>Map</Text>
      </TouchableOpacity>
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    alignItems: "center",
    elevation: 3,
    shadowOffset: {
      height: -2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 6,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  btn1Text: {
    width: 45,
    height: 14,
    color: "#FFFFFF",
    opacity: 0.8,
  },
  activebtnWrapper: {
    flex: 1,
    alignItems: "center",
    paddingTop: 6,
    paddingBottom: 10,
    minWidth: 80,
    maxWidth: 168,
    paddingHorizontal: 12
  },
  activeText: {
    width: 38,
    height: 18,
    color: "#FFFFFF",
    opacity: 1,
    paddingTop: 4,
    fontSize: 14,
  }
});

export default MaterialBasicFooter;
