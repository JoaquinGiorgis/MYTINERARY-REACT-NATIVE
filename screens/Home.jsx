import React, {useRef, useState, useEffect} from 'react';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Button,View,Text,Image,ImageBackground,Dimensions,StyleSheet,TouchableOpacity,Platform} from 'react-native';

const mountainMan = {uri: "https://i.imgur.com/XPqVsKg.png"}
const night ={uri:"https://cdn.dribbble.com/users/1803663/screenshots/11277901/media/465c15bf2684cefcf841629260292daa.jpg?compress=1&resize=1000x750"}

const ENTRIES1 = [
  {
    title: 'Buenos Aires',
    illustration: 'https://images.adsttc.com/media/images/5de5/60a5/3312/fddd/3f00/0018/newsletter/foto_ba_global_.jpg?1575313568',
  },
  {
    title: 'Paris',
    illustration: 'https://www.parisando.com/wp-content/uploads/2012/11/arco-del-triunfo-par%C3%ADs.jpg',
  },
  {
    title: 'Beijing',
    illustration: 'https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/BWGL6RWMKJDXRJNEIKMNFZLIKE.jpg',
  },
  {
    title: 'Sidney',
    illustration: 'https://i2.wp.com/chocale.cl/wp-content/uploads/2019/05/sydney-australia.jpg?fit=1000%2C666&ssl=1',
  },
  {
    title: 'Moscow',
    illustration: 'https://lp-cms-production.imgix.net/features/2019/04/Moscow-Red-Square-9a8e66e06b49.jpg?auto=compress&fit=crop&fm=auto&sharp=10&vib=20&w=1200',
  },
];
const {width: screenWidth} = Dimensions.get('window');






const Home =({navigation}) => { 

  const [entries, setEntries] = useState([]);
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);


  const renderItem = ({item, index}, parallaxProps) => {
    return (
      <View style={styles.itemCarrousel}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainerCarrousel}
          style={styles.imageCarrousel}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };
  
    return(
      

        <View  style={styles.cajaGrande}>
            <ImageBackground source={night} style={styles.image}>
                
                <Image source={mountainMan} style={styles.stretch} />
                
                
                    
                <View style={styles.containerCarrousel}>
                  <TouchableOpacity onPress={goForward}>
                    
                  </TouchableOpacity>
                  <Carousel
                    ref={carouselRef}
                    sliderWidth={screenWidth}
                    sliderHeight={screenWidth}
                    itemWidth={screenWidth - 100}
                    data={entries}
                    renderItem={renderItem}
                    hasParallaxImages={true}
                  />
                  
                </View>
                
                <View style={styles.botonCities}>
                  <Text style={styles.xd}  onPress={()=> navigation.navigate('Cities')}>GO CITIES</Text>
                </View>
              

            </ImageBackground>
        </View>
    )
 }

 const styles = {
  

  containerCarrousel: {
    flex: 1,
  },
  itemCarrousel: {
    width: '100%',
    height: '70%',
  },
  imageContainerCarrousel: {
    flex: 1,
     // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 10,
  },
  imageCarrousel: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },


xd:{
    color: 'black'

},

    stretch: {
        
        width: '90%',
        height: '30%',
        resizeMode: 'contain',
        
      },

      botonCities:{
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        height:50,
        marginBottom:50,
        width:'40%',
        borderRadius:25,
        borderWidth: 1,
        borderColor:'violet'
      },

    image: {
        flex: 1,
        resizeMode: 'cover',
        alignItems:'center',
        width:'100%'
      },

      cajaGrande: {
        flex: 1,
        alignItems:'center'
        
      },
 }



 export default Home