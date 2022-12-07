import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { Card, Title, Paragraph,Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const HeaderHome = () => (
  <View style={styles.cardHeaderStyle}>
      <View style={styles.header}>
          <TouchableOpacity  style={styles.btneye}
              onPress={()=>alert("drawer navigation")}>
              <Ionicons name={'menu-outline'} size={28} color={'#051063'}/>
          </TouchableOpacity>
          <Text style={styles.headerText}> ALO Evaluation</Text>
          <TouchableOpacity
              onPress={()=>alert('test')}>
              <Avatar.Icon size={24} icon="account" />
          </TouchableOpacity>
      </View>
  </View>
);

export default HeaderHome;
const styles=StyleSheet.create({
  container:{
      padding:0
  },
  cardHeaderStyle:{
      borderTopEndRadius:0,
      borderTopStartRadius:0,
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      width:wp('90%')
  },
  header:{
          alignItems:'stretch',
          justifyContent:'space-between',
          flexDirection:'row'
  },
  headerText:{
      fontSize:24,
      color:'#051063'
  }
})