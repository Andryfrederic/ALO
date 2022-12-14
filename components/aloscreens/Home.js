

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { useState, useEffect } from 'react';
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
   TouchableOpacity,
   AsyncStorage, 
   FlatList
 } from 'react-native';
 import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Ionicons from 'react-native-vector-icons/Ionicons';
 import SelectDropdown from 'react-native-select-dropdown'
//  import RiTa from 'rita';
//  let RiTa = require('rita');
 const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

 function Home({ route, navigation }) {
    const {user} = route.params;
    const [cat, setCat] = useState(dataTheme)
    const [desc, setDesc] = useState("")
    const [duration, setDuration] = useState('')
    const [refreshing,setRefreshing] = useState(false)
    const [isLoading,setIsLoading] = useState(false)
    const [paused , setPaused] = useState(true)
    const [data, setData] = useState([])
    const [data2 , setData2] = useState([])
    const [data3 , setData3] = useState([])
    const [idcat , setIdcat] = useState([])
    const [pic , setPic] = useState([])
    const arrayholder = []
    const nativeLang = ["Français", "Anglais"]
    const targetLang = ["Français", "Anglais"]
    const dataTheme = [
                            {"id":"5752","user_create":"","id_groupe":"15921","intitule":"presente your workspace","description":"Present your work space during 5 minutes max","duration":"05:00","date_creation":""},
                            {"id":"6535","user_create":"","id_groupe":"15921","intitule":"Talk about you ","description":"Talk about you, your Jobs, family, hobies","duration":"03:00","date_creation":""}
                      ]
    testRita = () =>{
    alert("bnb,nb,")
    }
    useEffect(() => {
        this.getPicker();
        // this.getData();
    })
    getPicker = () => {
        fetch('https://preprod.forma2plus.com/portail-stagiaire/picke_category.php',
                {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    id_groupe: user.id_groupe,
                })
                }
                ).then((response) => response.json())
                 .then((responseJson) => {
                  setCat(dataTheme);
                //   console.log(JSON.stringify(dataTheme));
                    })
                 .catch((error) => {
                  console.error(error);
                 }); 
    } 
    getData = () => {
        // this.setState({isLoading:true});
              fetch('https://preprod.forma2plus.com/portail-stagiaire/expression.php', 
              {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-type': 'application/json'
              },
              body: JSON.stringify({id: user.id})
               }
             ).then((response) => response.json())
              .then((rep) => {
                let data21=rep.slice(0,4);
                setData(rep);
                setData2(data21);
                setData3(rep);
                setRefreshing(false);
                setIsLoading(false);
                setPaused(true);
                this.arrayholder = rep;
              })
            .catch((error) => {
              console.error(error);
            });
      } 
    handleRefresh = () => {
        setRefreshing(true);
        this.getData();
        setRefreshing(false);
      };
      subjectRenderer=(id,intitule,index,description,dur)=>{
        let colors = ['#FFE9F9', '#EAF9FE', '#FFF5E5', '#FBF5FF','#FFF1EF','#A2A2A2'];
        if (id!== ''){
            if (idcat==id){
            return(
                <TouchableOpacity
                    onPress={()=>{setPic(''),setIdcat(''),setDesc(''),setDuration('')}}>
                        <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#DBDDDC',borderWidth:0.5,borderColor:'#5C4DB1',borderRadius:20,justifyContent:'center'}}>
                            <Text style={{
                                    marginHorizontal:wp('3%'),
                                    marginVertical:hp('0.5%'),
                                    fontWeight:'100',
                                    textAlign:'center',
                                    opacity:0.5
                                   }}>
                                {intitule}
                            </Text>
                            <View
                                style={{
                                    width:wp('4.5%'),
                                    height:hp('2.5%'),
                                    borderRadius:30,
                                    position:'absolute',
                                    right:0,
                                    top:hp('-1%')
                                }}
                            >
                            <Image 
                                style={{
                                    width:wp('4.5%'),
                                    height:hp('2.5%'),
                                }}
                                source={require('../../image/Check-category.png')}>
                            </Image>

                            </View>
                        </View>
            </TouchableOpacity>                                                  
            );
            }
            else{
            return(
                <TouchableOpacity
                    onPress={()=>{setIdcat(id),setPic(id),setDesc(description),setDuration(dur)}}>
                        <View style={{alignItems:'center',borderWidth:0.5,borderColor:'#5C4DB1',borderRadius:20,justifyContent:'flex-start'}}>
                            <View
                                style={{
                                    backgroundColor:colors[index % colors.length],
                                    borderRadius:20 
                                }}>
                                <Text style={{
                                    marginHorizontal:wp('3%'),
                                    marginVertical:hp('0.5%'),
                                    fontWeight:'100',
                                    textAlign:'center',
                                    opacity:0.5
                                }}>
                                    {intitule}
                                </Text>
                            </View>
                        </View>
            </TouchableOpacity>                                                    
            );
            }
        }
}
        return (
            <View>
                 <View>
                 </View>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.title1}>
                            Theme
                        </Text>
                    </View>
                    <View>
                    <Card style={styles.themeContainer}>
                        <Card.Content>
                            <View
                                style={{
                                    marginLeft:wp('5%'),
                                   }}>
                                <FlatList
                                    data={cat}
                                    extraData={this.state}
                                    keyExtractor={(item)=>item.id}
                                    refreshing={refreshing}
                                    horizontal={true}
                                    onRefresh={this.handleRefresh}
                                    enableEmptySections={true}
                                    renderSeparator= {this.ListViewItemSeparator}
                                    // numColumns={3}
                                    renderItem={({item,index})=>
                                            <View style={{flexDirection:'column',justifyContent:'center',marginRight:wp('2%'),height:hp('7%'),
                                            }}>
                                                    {this.subjectRenderer(item.id,item.intitule,index,item.description,item.duration)}
                                            </View>
                                } />
                                {desc?(<Text style={styles.title1}>Instruction:</Text>):null}
                                <ScrollView style={styles.descriptionConainer} >
                                    <Text>
                                        {desc}
                                    </Text>
                                        {duration?(<Text style={styles.title1}>Max duration:</Text>):null}
                                    <Text>
                                        {duration}
                                    </Text>
                                </ScrollView>
                            </View>
                        </Card.Content>
                    </Card>
                    </View>
                    <View>
                        <View style={styles.inrow}>
                            <Text style={styles.title1}>Native Language</Text>
                            <SelectDropdown
                                data={nativeLang}
                                defaultButtonText="Français"
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View>
                        <View style={styles.inrow}>
                            <Text style={styles.title1}>Target Language</Text>
                            <SelectDropdown
                                data={targetLang}
                                defaultButtonText="Anglais"
                                onSelect={(selectedItem, index) => {
                                    console.log(selectedItem, index)
                                }}
                                buttonTextAfterSelection={(selectedItem, index) => {
                                    return selectedItem
                                }}
                                rowTextForSelection={(item, index) => {
                                    return item
                                }}
                            />
                        </View>
                    </View>
                
                </View>
                <View
                    style={[styles.buttonSize, {marginLeft:wp('15%')}]}>
                    <Button 
                            mode="contained" 
                            buttonColor='#051063'
                            onPress={() => navigation.navigate('AudioRecorder')}>
                        Validate
                    </Button>
                </View>
            </View>
        );
    }

export default Home;
const styles=StyleSheet.create({
    container:{
        padding:25
    },
    cardHeaderStyle:{
        borderTopEndRadius:0,
        borderTopStartRadius:0,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24
    },
    header:{
            alignItems:'stretch',
            justifyContent:'space-between',
            flexDirection:'row'
    },
    headerText:{
        fontSize:24,
        color:'#051063'
    },
    themeContainer:{
        height:hp('40%')
    },
    title1: {
        fontSize:16,
        color:'#F72D96',
        fontWeight:'bold',
        marginTop:hp('2%'),
        marginBottom:hp('2%')
        },
    buttonSize:{
        width:wp('35%')
    },
    inrow:{
        flexDirection:'row'
    },
    descriptionConainer:{
        height:hp('20%'),
        backgroundColor:'#F6F6F9'
    }
})