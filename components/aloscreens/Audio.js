

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import * as React from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,

   Text,
   TextInput,
   Picker,
   Alert,
   Modal,
   Image,
   TouchableOpacity
 } from 'react-native';
 import { Avatar, Button, Card, Title, Paragraph , Searchbar} from 'react-native-paper';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 function Audio({ route, navigation }){ 
      const [searchQuery, setSearchQuery] = React.useState('');
      const onChangeSearch = query => setSearchQuery(query);
        return (
            <View>

              <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.searchBar}
              />
            <Text style={{textAlign: 'center', marginTop: 300}}>Audio    Screen</Text>
          </View>
        );
    }

export default Audio;
const styles = StyleSheet.create({
  searchBar: {
    width:wp('70%'),
    alignSelf:'center',
    borderRadius:20,
    marginTop:hp('1%'),
    height:35
  }
})