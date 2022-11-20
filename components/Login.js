/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, { Component } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   ScrollView,
   View,

   Text,
   TextInput,
   Picker,
   Alert,
   Button,
   Modal,
   Image,
   TouchableOpacity,
   AsyncStorage, 
 } from 'react-native';
 import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 import Icon from 'react-native-vector-icons/Ionicons';

 import { createAppContainer } from 'react-navigation';
 import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
//  import I18n from 'react-native-i18n';
//  import RNRestart from 'react-native-restart'; 
//  import en from '../i18/en';
//  import fr from '../i18/fr';
//  import es from '../i18/es';
//  import SwitchButton from 'switch-button-react-native';
//  import moment from 'moment';
//  import SelectDropdown from 'react-native-select-dropdown'
//  import { Touchable } from 'react-native';
 export default class Apps  extends React.Component{
 
   static navigationOptions =
    {
     headerShown: false
    };
         constructor(props){
         super(props)
             this.state={
                 login:'',
             password:'',
             itemValue:'en',
           showPass:true,
           press:false,
           remebrer:false,
           activeSwitch:1,
           lang:false
           
           }
        //    I18n.locale = 'en';
        //    I18n.fallbacks = true;
        //    I18n.translations = {
        //    en,
        //    fr,
        //    es
        //  }; 
 }
 componentDidMount() {
   this.getUser(); 
//    let thisMoment = moment();
//    let endOfMonth = moment(thisMoment).endOf('year');
//    let startOfMonth = moment(thisMoment).startOf('year');
//    // var begin = moment().format("YYYY-MM-01");
//    // var end = moment().format("YYYY-MM-") + moment().daysInMonth();
//    console.log(endOfMonth.format("YYYY-MM-DD")+' et '+startOfMonth.format("YYYY-MM-DD"));    
 
 }
 
 
 connecter =() =>{   
 const {login}=this.state;
 const {password}=this.state;
 const {remebrer}=this.state;
 if(login != '' && password != ''){fetch('https://preprod.forma2plus.com/portail-stagiaire/index.php', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
       
           login:login,
       
         password:password,
       
       
         })
  
 }).then((response) => response.json())
 .then((responseJson) => {
           if(responseJson =='null')
                     {
                       alert('Login ou mot de passe invalide');
                         
                     }
           else{
                       if(remebrer == true){
                               console.log(JSON.stringify(responseJson));
                               this.storeUser(
                               responseJson.login,
                               responseJson.nom,
                               responseJson.prenom,
                               responseJson.email,
                               responseJson.tel,
                               responseJson.adresse,
                               responseJson.cp,
                               responseJson.ville,
                               responseJson.password,
                               responseJson.id,
                               responseJson.id_groupe
                           
                               );
                             this.props.navigation.navigate('HomeEvaluation',{user:responseJson,
                               login1:responseJson.login,
                               nom1:responseJson.nom,
                               prenom1:responseJson.prenom,
                               email1:responseJson.email,
                               tel1:responseJson.tel,
                               adresse1:responseJson.adresse,
                               cp1:responseJson.cp,
                               ville1:responseJson.ville,
                               password1:responseJson.password,
                               id1:responseJson.id,
                               id_groupe:responseJson.id_groupe,
                               trand:this.state.itemValue
 
                             })                            ; 
 
                       }
                       else{
                               console.log(JSON.stringify(responseJson));
                               this.props.navigation.navigate('HomeEvaluation',{user:responseJson,
                               login1:responseJson.login,
                               nom1:responseJson.nom,
                               prenom1:responseJson.prenom,
                               email1:responseJson.email,
                               tel1:responseJson.tel,
                               adresse1:responseJson.adresse,
                               cp1:responseJson.cp,
                               ville1:responseJson.ville,
                               password1:responseJson.password,
                               id1:responseJson.id,
                               id_groupe:responseJson.id_groupe,
                               trand:this.state.itemValue
                             });
 
                       }
   }
 
        
 
       }).catch((error) => {
         console.error(error);
       });}
   }
   storeUser = async (a,b,c,d,e,f,g,h,i,j,k) =>{
     try {
       await AsyncStorage.multiSet([
             ["login",a],
             ["nom",b],
             ["prenom",c],
             ["email",d],
             ["tel",e],
             ["adresse",f],
             ["cp",g],
             ["ville",h],
             ["password",i],
             ["id",j],
             ["id_groupe",k]
         ]);
         // alert(a+' et '+b+' stored');
     } catch (error) {
       // Error saving data
     }
   }
   getUser = async () =>{
     try {
       await AsyncStorage.multiGet(['login','nom','prenom','email','tel','adresse','cp','ville','password','id']).then((data) => {
         let a = data[0][1];
         let b = data[1][1];
         let c = data[2][1];
         let d = data[3][1];
         let e = data[4][1];
         let f = data[5][1];
         let g = data[6][1];
         let h = data[7][1];
         let i = data[8][1];
         let j = data[9][1];
     if(a !== null){
       this.props.navigation.navigate('Accueil',{
         login1:a,
         nom1:b,
         prenom1:c,
         email1:d,
         tel1:e,
         adresse1:f,
         cp1:g,
         ville1:h,
         password1:i,
         id1:j
 
       });
       console.log(a+', '+b+', '+c+','+d+','+e+','+f+','+g+','+h+','+i+','+j);
       
 
     }else{
       console.log('rien');
     }
     // alert(log);
             //Your logic
     });
         // alert(a+' et '+b+' stored');
     } catch (error) {
       // Error saving data
     }
   }
   removeUser = async (i) =>{
     try {
       await AsyncStorage.multiGet(['login', 'password']).then((data) => {
         let log = data[0][1];
         let pas = data[1][1];
     if(log !== ''){
       this.props.navigation.navigate('Accueil',{user:i});
 
     }
     // alert(log);
             //Your logic
     });
         alert(a+' et '+b+' stored');
     } catch (error) {
       // Error saving data
     }
   }
   // rememberUser = async () => {
   //   try {
   //     await AsyncStorage.setItem('KEY', this.state.username);
   //   } catch (error) {
   //     alert("can't remebrer your login");
   //   }
   //   };
   change(p){
 this.setState({password:p});
 
   }
   changefr = () =>{
     // alert("ok");
       this.setState({itemValue:'fr',lang:false});
    //    I18n.locale = 'fr';
   }
   changeen = () =>{
     // alert("ok");
       this.setState({itemValue:'en',lang:false});
    //    I18n.locale = 'en';
   }
   changees = () =>{
     // alert("ok");
       this.setState({itemValue:'es',lang:false});
    //    I18n.locale = 'es';
   }
 render(){
//  const {navigate} =this.props.navigation;
 const {itemValue}=this.state;
 const countries = ["Egypt", "Canada", "Australia", "Ireland"];
 
 return(
 <View style={styles.container}>
     <View style={{backgroundColor:'#5C4DB1', padding:20,borderRadius:100}}>
        <Text style={{color:'white',fontSize:54,textAlign:'center',fontStyle:'normal',fontWeight:'Bold',opacity:1}}>
            ALO
        </Text>
     </View>
    
    <View style={{backgroundColor:'#5C4DB1',marginTop:hp('3%'), height:hp('55%'),borderRadius:10,
 width: wp('90%'),}}>
    <View style={styles.headcontainer}>
             {/* <Image style={styles.ima}
               source={require('../image/logofotsy.png')}>
             </Image>
             <Image style={styles.myoedb}
               source={require('../image/Logo-MYOEDB.png')}>
             </Image> */}
            
             <Text style={{color:'white',fontSize:18,textAlign:'center',marginTop:hp('1%'),fontStyle:'normal',fontWeight:'100',opacity:0.5}}>
             Analyse Linguistique de l'Oral
             </Text>
           
       </View>
       <Text style={styles.titre}>
       {/* use e-learning */}
             </Text>
             {/* <Text style={styles.tex}>
                 Nom d'utilisateur
             </Text> */}
   <View style={{
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     borderWidth:0.5,
     borderRadius:25,
     borderColor:'white',
     width:wp('80%'),
     height:hp('6.5%'),
     alignSelf:'center',
     paddingLeft:30,
   }}>
             <Icon name={'ios-person'} size={15} color={'white'}
                      style={styles.inputIcon} 
                     />
             <TextInput style={styles.place}
            ref={input1 => { this.textInput1 = input1 }}
             placeholderTextColor = "white"
             placeholder="username"
             
             underlineColorAndroid='transparent'
             onChangeText= {login => this.setState({login})}
 
             />
   </View>
                      
             {/* <Text style={styles.tex}>
                 Mots de passe
             </Text> */}
   <View style={{
     flexDirection:'row',
     justifyContent:'center',
     alignItems:'center',
     borderWidth:0.5,
     borderRadius:25,
     borderColor:'white',
     width:wp('80%'),
     height:hp('6.5'),
     alignSelf:'center',
     paddingLeft:30,
     marginTop:hp('3%')
   }}>
             <Icon name={'lock-closed-sharp'} size={15} color={'white'}
                      style={styles.inputIcon}
                     />
 
             <TextInput style={styles.placeP}
             ref={input => { this.textInput = input }}
             maxLength={12}
             secureTextEntry={true}
             placeholderTextColor = "white"
             placeholder='password'
             // underlineColorAndroid='transparent'
             onChangeText= {password => this.setState({password})}
             
             />
  
            {/* <TouchableOpacity  style={styles.btneye}>
             <Icon name={'ios-eye'} size={28} color={'#C9A022'}
                      
                     />
             </TouchableOpacity> */}
     </View>
 
     <View    style={styles.butV}>
 
               <TouchableOpacity 
               style={styles.but}
               onPress={()=>{this.connecter(),this.textInput.clear(),this.textInput1.clear()}}>
                 {/* this.props.navigation.navigate('Accueil') 
                
                this.connecter()*/}
                 <Text style={styles.buttext}>
                  Login
                 </Text>
                 
             </TouchableOpacity>  
            
     </View>
     <View style={{flexDirection:'row',top:hp('2%'),marginLeft:wp('20%'),alignItems:'center'}}>
     {/* <CheckBox
     // style={{borderColor:'red',borderWidth:3}}
     // color={'red'}
     //  onPress={()=>{this.setState({remebrer:true})}
 value={this.state.remebrer}
 onValueChange={() => this.setState({remebrer:!this.state.remebrer})}
 checked={true}
 /> */}
       {!this.state.remebrer?(<TouchableOpacity
       onPress={() => this.setState({remebrer:!this.state.remebrer})}
       style={{
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
       }}>
           <View
           style={{
             width:wp('4%'),
             height:hp('2%'),
             backgroundColor:'white'
           }}
           >
              
 
           </View>
           <Text style={{color:'white',fontWeight:'100',marginLeft:wp('2%')}}>Remember me
           </Text>
 
       </TouchableOpacity>):(<TouchableOpacity
       onPress={() => this.setState({remebrer:!this.state.remebrer})}
       style={{
         flexDirection:'row',
         justifyContent:'center',
         alignItems:'center'
       }}
       >
           <View
           style={{
             width:wp('4%'),
             height:hp('2%'),
             backgroundColor:'white'
           }}>
                           {/* <Image style={{
                             width:wp('3.8%'),
                             height:hp('2%'),
                           }}
                                       source={require('../image/check.png')}>
                           </Image> */}
 
           </View>
           <Text style={{color:'white',fontWeight:'100',marginLeft:wp('2%')}}>Remember me
           </Text>
       </TouchableOpacity>)}
 
 
           
 
 </View>
   <View
   style={{
     width:110,
     height:60,
     alignItems:'center',
     marginTop:hp('3%'),
     alignSelf:'flex-end',
     marginRight:wp('2.5%')
   }}>
           <Text
           style={{
             color:'white',
             fontWeight:'700',
             fontSize:14,
             marginBottom:5
           }}>
           </Text>
           {/* {(this.state.itemValue == 'fr')?
           (
           <TouchableOpacity
            onPress={()=>this.setState({lang:true})}
           style={{
             flexDirection:'row',
             backgroundColor:'white'
           }}>
                 <View
                 style={{
                   height:27,
                   width:95,
                   marginBottom:2,
                   flexDirection:'row'
                 }}>
                 <Image style={styles.flag}
                   source={require('../image/drapeau-france.jpg')}>
                 </Image>
                   <Text>{I18n.t('Francais')}
                   </Text>
               </View>
               <Icon name="ios-chevron-down" size={18}
               style={{marginTop:4}}/>
         </TouchableOpacity>):
         (<View>
            
          {(this.state.itemValue == 'en')?
          ( 
          <TouchableOpacity
            onPress={()=>this.setState({lang:true})}
           style={{
             flexDirection:'row',
             backgroundColor:'white'
           }}>
                 <View
                 style={{
                   height:27,
                   width:95,
                   marginBottom:2,
                   flexDirection:'row'
                 }}>
                 <Image style={styles.flag}
                   source={require('../image/GB.jpg')}>
                 </Image>
                   <Text>{I18n.t('Anglais')}
                   </Text>
               </View>
               <Icon name="ios-chevron-down" size={18}
               style={{marginTop:4}}/>
         </TouchableOpacity>):
         (
           <TouchableOpacity
            onPress={()=>this.setState({lang:true})}
           style={{
             flexDirection:'row',
             backgroundColor:'white'
           }}>
                 <View
                 style={{
                   height:27,
                   width:95,
                   marginBottom:2,
                   flexDirection:'row'
                 }}>
                 <Image style={styles.flag}
                   source={require('../image/espagne.png')}>
                 </Image>
                   <Text>{I18n.t('Espagnol')}
                   </Text>
               </View>
               <Icon name="ios-chevron-down" size={18}
               style={{marginTop:4}}/>
         </TouchableOpacity>
         )}
         </View>)} */}
   </View>
 <View
 style={{
   marginTop:hp('7%'),
   alignSelf:'flex-end'
 }}>
   
       </View>
      
     <View style={{marginTop:hp('2%')}}>
 
                 <Text style={{
                   color:'white',opacity:0.3,textAlign:'center',
                   
                 }}>
                   ALO App V0.1
                 </Text>
               
                
     </View>
    </View>
       
{/*  
     <Modal 
 transparent={true}
 animationType="slide"
 visible={this.state.lang}
 >
 <TouchableOpacity
 onPress={()=>this.setState({lang:false})}
 style={{
   width:wp('100%'),
   height:hp('100%'),
 }}>
   <View style={{backgroundColor:'#F4F6FC',width:113,height:94,alignSelf:'flex-end',alignItems:'center',marginTop:hp('75%'),marginRight:wp('1.75%')}}>
   <TouchableOpacity
       onPress={()=>this.changeen()}
        style={{
         height:27,
         width:110,
         marginBottom:2,
         flexDirection:'row'
       }}>
           <Image style={styles.flag}
           source={require('../image/GB.jpg')}>
           </Image>
           <Text>{I18n.t('Anglais')}
           </Text>
       </TouchableOpacity>
       <View
       style={{
         borderWidth:1,
         width:90,
         alignSelf:'center',
         borderColor:'grey',
         marginBottom:2
       }}
       />
       <TouchableOpacity
       onPress={()=>this.changefr()}
       style={{
         height:27,
         width:110,
         marginBottom:2,
         flexDirection:'row'
       }}>
          <Image style={styles.flag}
           source={require('../image/drapeau-france.jpg')}>
         </Image>
           <Text>{I18n.t('Francais')}
           </Text>
       </TouchableOpacity>
       <View
       style={{
         borderWidth:1,
         width:90,
         alignSelf:'center',
         borderColor:'grey',
         marginBottom:2
       }}
       />
       <TouchableOpacity
       onPress={()=>this.changees()}
        style={{
         height:27,
         width:110,
         marginBottom:2,
         flexDirection:'row'
       }}>
           <Image style={styles.flag}
           source={require('../image/espagne.png')}>
           </Image>
           <Text>{I18n.t('Espagnol')}
           </Text>
       </TouchableOpacity>
   </View>
 </TouchableOpacity>
 </Modal> */}
 
 </View>  
 );
 }
 }
 
 
 
 
 
 
 
 
 
 
   
   
 const styles=StyleSheet.create({
 container:{
    // #5C4DB1
    justifyContent:'center',
    alignItems:'center',
 backgroundColor:'white',
 flex:1,
 },
 headcontainer:{
   marginTop:hp('2%')
 },
 titre:{
 textAlign:'center',
 fontSize:14,
//  marginTop:hp('2%'),
 color:'white',
 marginBottom:hp('1%'),
//  marginHorizontal:wp('8%')
 // fontFamily:'Lobster-Regular'
 },
 place:{
     color:'white', 
     fontSize:14,
     width: wp('70%'),
     // height:hp('10%'),
     marginLeft:wp('2%'),
     // borderBottomColor:'#C9A022',
     // borderBottomWidth:2,
 },
 placeP:{
   color:'white', 
     fontSize:14,
     width: wp('70%'),
     // height:hp('10%'),
     marginLeft:wp('2%'),
 }
 ,
 but:{
 borderRadius:27,
 backgroundColor:'#DC4F89',
 color:'white',
 justifyContent:'center',
 height:hp('6%'),
 width: wp('80%'),
 },
 buttext:{
 textAlign:'center',
   color:'white',
   fontWeight:'bold',
   fontSize:hp('2.5%') 
 },
 oublie:{
 textAlign:'center',
 color:'#2f3c7e'
 },
 ima:{
   width:80,
   height:20,
   alignSelf:'center'
   },
 myoedb:{
   width:120,
   height:25,
   alignSelf:'center',
   marginTop:hp('5%')
 },
 flag:{
   width:30,
   height:25,
   alignSelf:'flex-start',
   marginRight:4
 },
 tex:{
   marginLeft:hp('3%'),
   fontSize:14,
   color:'grey'},
 
 inputIcon:{
 // position:'absolute',
 // // top:10,
 // left:15
 },
 
 btneye:{
  position:'absolute',
  top:10,
  right:15},
 
 butV:{
 alignItems: 'center',
 justifyContent:'center',
 marginTop:hp('5%')
   },
 
 texinput:{
     marginTop:10
   }
 
 })
 