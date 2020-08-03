import React from 'react';
import { StyleSheet, Animated, View} from 'react-native';
import Svg, { Ellipse, Polygon, Defs, RadialGradient, Stop} from 'react-native-svg';

// created animated polygon
const AnimatedPoly = Animated.createAnimatedComponent(Polygon);

export default function Seahorse({space="10%", top="0%"}){
    const iconAnimation = new Animated.Value(0);
    const tailAnimation = new Animated.Value(0);
    const tailAnimationUp = new Animated.Value(0);
    const headAnimation = new Animated.Value(0);

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.delay(100),
            Animated.timing(
                iconAnimation,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                iconAnimation,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                iconAnimation,
                {
                    toValue: 0,
                    duration: 0,
                    useNativeDriver: true
                }
            ),

        ]),
        {}
    ).start();

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.timing(
                tailAnimation,{ toValue: 1, duration: 600, useNativeDriver: true
                }
            ),
            Animated.timing(
                tailAnimation,{ toValue: 0, duration: 600, useNativeDriver: true
                }
            ),
            Animated.timing(
                tailAnimation,{ toValue: 0, duration: 0, useNativeDriver: true
                }
            ),
        ]),
        {}
    ).start();

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.delay(100),
            Animated.timing(
                tailAnimationUp,{ toValue: 1, duration: 1000, useNativeDriver: true
                }
            ),
            Animated.timing(
                tailAnimationUp,{ toValue: 0, duration: 1000, useNativeDriver: true
                }
            ),
            Animated.timing(
                tailAnimationUp,{ toValue: 0, duration: 0, useNativeDriver: true
                }
            ),
        ]),
        {}
    ).start();

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.delay(100),
            Animated.timing(
                headAnimation,{ toValue: 1, duration: 900, useNativeDriver: true
                }
            ),
            Animated.timing(
                headAnimation,{ toValue: 0, duration: 900, useNativeDriver: true
                }
            ),
            Animated.timing(
                headAnimation,{ toValue: 0, duration: 0, useNativeDriver: true
                }
            ),
        ]),
        {}
    ).start();

    const moveAnimation = iconAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0', '10']
      })


    return (
        <View style={[styles.container, {top: top}]}>
            
            {/* animated seahorse */}
            <Animated.View style={[styles.animated, {
                transform: [{ translateX: moveAnimation}]}]}>
                
                <View style={[styles.animal, {transform: [{ rotateY: '180deg'}, {skewY:'10deg'}, {skewX:'10deg'}, {translateX: -25}]}]}>
                    <Svg height="47%" width="100%" viewBox="0 0 100 80">

                        <AnimatedPoly
                            points="23.96,44.643 21.9,50.643 25.5,49.357"
                            fill="#483448"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-8']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-2']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '2deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="23.86,44.643 28.6,36.7 25.7,50.5"
                            fill="#39273D"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-8']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-2']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '2deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="23.3,39.643 28.5,36.929 23.9,44.643"
                            fill="#4F4053"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-8']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-2']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '2deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="21.3,35.4 28.6,36.86 23.4,40.214"
                            fill="#3A2D3E"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-8']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-2']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '2deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="18.9,24.786 28.67,36.99 21.3,35.5"
                            fill="#483448"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-7']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1.2']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '2.3deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="18.9,24.929 26.15,17.643 23,30.071"
                            fill="#574663"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-5']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.1']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '2deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="23,29.929 33.7,27.643 28.56,36.95"
                            fill="#332437"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-5']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1.7']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '1deg']
                                    })},
                                    { rotateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '9deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="22.9,30 26.1,17.643 35.95,27.786"
                            fill="#48364A"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-5']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.6']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '1deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="26.1,17.7 34.3,14.214 34.87,29.8"
                            fill="#554054"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-3.7']
                                    })},
                                    { translateX: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.4']
                                    })},
                                    { rotateZ: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '0.4deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="33.8,12.786 40.6,19.929 33.9,27.643"
                            fill="#5D4D63"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-2.4']
                                    })}
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="34,29.643 33.8,26.643 40.9,18.5 45.7,24.214"
                            fill="#554054"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1.8']
                                    })},
                                    
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="33.9,27.643 35.9,27.643 46.9,54.8 36.3,41.357"
                            fill="#554054"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.1']
                                    })},
                                    
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="33.8,27.643 45.2,22.929 48.4,33.357"
                            fill="#4C384D"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.6']
                                    })},
                                    
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="33.9,27.643 48.6,32.214 40.1,41.357"
                            fill="#443344"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.47']
                                    })},
                                    
                                ]}
                            }
                        />
                        <AnimatedPoly 
                            points="40.2,41.171 48.7,31.357 51.4,43.214"
                            fill="#3F2D42"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.29']
                                    })},
                                    
                                ]}
                            }
                        />
                        <AnimatedPoly 
                            points="40.2,41.071 51.8,42.357 44.4,49.786"
                            fill="#39263A"
                            style={{
                                transform: [
                                    { translateY: headAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-0.1']
                                    })},
                                    
                                ]}
                            }
                        />
                        <Polygon 
                            points="44.4,49.786 51.8,41.214 56.2,54.071"
                            fill="#302035"
                        />
                        <Polygon 
                            points="36.2,41.071 46.7,54.4 39.9,55.2"
                            fill="#604D64"
                        />
                        <Polygon 
                            points="44.4,49.643 56.3,53.214 49.5,60.929"
                            fill="#39273D"
                        />
                        <Polygon 
                            points="50.7,59.5 56.6,51.929 59.7,59.643"
                            fill="#302035"
                        />
                        <Polygon 
                            points="50.6,59.357 60,58.929 56,65.9"
                            fill="#2A192C"
                        />
                        <Polygon 
                            points="39.9,55.071 46.6,54.357 61.1,72.071"
                            fill="#4F4053"
                        />
                        <AnimatedPoly 
                            points="56,65.786 59.8,57.929 63.7,61.357"
                            fill="#241723"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-10deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="55.8,65.8 63.7,61.2 61.1,72"
                            fill="#1F1619"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-10deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="61.05,71.99 63.8,60.214 67.5,64.643"
                            fill="#13101F"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-10deg']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="61.1,71.929 75.7,53.214 67.3,71.214"
                            fill="#41313B"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-13deg']
                                    })},
                                    { translateY: tailAnimationUp.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="75.6,53.357 81,63.357 73.9,56.929"
                            fill="#41313B"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-13deg']
                                    })},
                                    { translateY: tailAnimationUp.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="78.5,61.071 81,63.357 77.6,70.5"
                            fill="#342A38"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-13deg']
                                    })},
                                    { translateY: tailAnimationUp.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly 
                            points="73.5,67.357 78,65.929 77.6,70.5"
                            fill="#493B44"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-13deg']
                                    })},
                                    { translateY: tailAnimationUp.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1']
                                    })},
                                ]}
                            }
                        />
                        <AnimatedPoly
                            points="75,62.214 75.5,66.8 73.5,67.45"
                            fill="#0D0A15"
                            style={{
                                transform: [
                                    { rotateY: tailAnimation.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0deg', '-13deg']
                                    })},
                                    { translateY: tailAnimationUp.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: ['0', '-1']
                                    })},
                                ]}
                            }
                        />
                    </Svg>
                </View>
            </Animated.View>
            

            {/* animated shadow */}
            <Animated.View style={[styles.shadowAnimation, {top: space}, {
                transform: [{ translateX: moveAnimation}]}]}>

                <Svg height="8%" width="100%" viewBox="0 0 215 60" style={styles.shadow}>
                    <Defs>
                        <RadialGradient
                            id="grad"
                            cx="110"
                            cy="6"
                            rx="110"
                            ry="4"
                            fx="110"
                            fy="5"
                            gradientUnits="userSpaceOnUse"
                        >
                            <Stop offset="0" stopColor="rgba(0, 0, 0, 0.35)" stopOpacity="0.3" />
                            <Stop offset="1" stopColor="rgba(0, 0, 0, 0.14)" stopOpacity="0.02" />
                        </RadialGradient>
                    </Defs>
                    <Ellipse cx="110" cy="6" rx="140" ry="6" fill="url(#grad)" />
                </Svg>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  animated: {
    backgroundColor: "transparent",
    width: "100%",
  },
  animal: {
    height: "95%",
    backgroundColor: "transparent",
    width: "100%",
    top: "58%",
  },
  shadowAnimation: {
    width: "100%",
    height: "95%",
    left: "5%",
    backgroundColor: "transparent",
  },
})