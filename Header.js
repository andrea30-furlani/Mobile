import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function Header() {
  return (
      <View style={styles.container}>
       <Text style={styles.headerText}>Header Component</Text>
       <Text style={styles.headerText}>Header Component</Text>
       <Text style={styles.headerText}>Header Component</Text>
       <Text style={styles.headerText}>Header Component</Text>
       <Text style={styles.headerText}>Header Component</Text>
       <Text style={styles.headerText}>Header Component</Text>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      paddingBottom: 20,
      backgroundColor: 'green',
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white'
    }
  });

  export default Header;