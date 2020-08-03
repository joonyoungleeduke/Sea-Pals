import React from 'react';
import { StyleSheet, View, Animated} from 'react-native';
import Svg, { Ellipse, Polygon, Defs, RadialGradient, Stop} from 'react-native-svg';

// create animated polygon
const AnimatedPoly = Animated.createAnimatedComponent(Polygon);

export default function Turtle({top="0%", left="0%"}) {
    const swimAnimation = new Animated.Value(0);
    const feetAnimation = new Animated.Value(0);
    const armAnimation = new Animated.Value(0);
    
    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.delay(100),
            Animated.timing(
                swimAnimation,{ toValue: 1, duration: 1000, useNativeDriver: true
                }
            ),
            Animated.timing(
                swimAnimation,{ toValue: 0, duration: 1000, useNativeDriver: true
                }
            ),
            Animated.timing(
                swimAnimation,{ toValue: 0, duration: 0, useNativeDriver: true
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
                feetAnimation,{ toValue: 1, duration: 800, useNativeDriver: true
                }
            ),
            Animated.timing(
                feetAnimation,{ toValue: 0, duration: 800, useNativeDriver: true
                }
            ),
            Animated.timing(
                feetAnimation,{ toValue: 0, duration: 0, useNativeDriver: true
                }
            ),
        ]),
        {}
    ).start();

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.timing(
                armAnimation,{ toValue: 1, duration: 1500, useNativeDriver: true
                }
            ),
            Animated.delay(300),
            Animated.timing(
                armAnimation,{ toValue: 0, duration: 1500, useNativeDriver: true
                }
            ),
            Animated.timing(
                armAnimation,{ toValue: 0, duration: 0, useNativeDriver: true
                }
            ),
        ]),
        {}
    ).start();

    const swim = swimAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0', '8']
    });

    const footUp = feetAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '28deg']
    });

    const footDown = feetAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg']
    });
    
    return (
        <View style={[styles.container, {top: top, left: left}]}>

            {/* animated turtle */}
            <Animated.View style={[styles.animated, {
                transform: [{ translateX: swim}]}]}>

                <Svg height="50%" width="100%" viewBox="0 0 98 100">
                    <AnimatedPoly
                        points="28.35,52.857 32.45,58.714 22.95,70.571"
                        fill="#3C6268"
                        style={{
                            transform: [
                                {rotateZ: footUp},
                                {translateY: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-20.3"]
                                })},
                                {translateX: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "13"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="22.65,61 28.45,52.886 22.95,70.429"
                        fill="#1B4859"
                        style={{
                            transform: [
                                {rotateZ: footUp},
                                {translateY: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-20.3"]
                                })},
                                {translateX: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "13"]
                                })},
                            ]}
                        }
                    />
                    <Polygon
                        points="20.25, 49.857 30.75,51.286 32.55,58.714"
                        fill="#BDC2A3"
                    />
                    <AnimatedPoly
                        points="10.65, 58.714 20.05, 52.143 30.85, 51.857"
                        fill="#62726F"
                        style={{
                            transform: [
                                {rotateZ: footDown},
                                {translateY: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "10.3"]
                                })},
                                {translateX: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-10"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="10.55,58.571 30.85,51.857 25.45,59.143"
                        fill="#B7C8C0"
                        style={{
                            transform: [
                                {rotateZ: footDown},
                                {translateY: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "10.3"]
                                })},
                                {translateX: feetAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-10"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="30.55,70 40.55,67.5 36.2,66"
                        fill="#093232"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "1"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "47deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "24"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="47.25,54.571 40.55,67.5 36.2,66"
                        fill="#387070"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "0.8"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "47deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "24"]
                                })},
                            ]}
                        }

                    />
                    <AnimatedPoly
                        points="47.25,54.571 40.55,67.5 53.2,56"
                        fill="#ADC4BA"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "0.8"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "47deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "24"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="55.55,47.5 47.25,54.571 53.2,56"
                        fill="#C2D5D9"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "1"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "47deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "24"]
                                })},
                            ]}
                        }
                    /> 
                    <Polygon
                        points="17.95,50.143 23.5,45.1 31.05,52"
                        fill="#487378"
                    />
                    <Polygon
                        points="23.45,45.143 44.45,35.571 30.85,52"
                        fill="#4F7F86"
                    />
                    <Polygon
                        points="30.75,51.857 40.9,60.95 32.35,58.571"
                        fill="#AEAF95"
                    />
                    <Polygon
                        points="30.75,51.857 42.15,53.571 40.55,60.714"
                        fill="#A2A390"
                    />
                    <Polygon
                        points="40.55,60.857 42.15,51.286 58.4,58.429"
                        fill="#AEB49D"
                    />
                    <Polygon
                        points="40.25,50.286 55.75,46.571 57.85,58.571"
                        fill="#9FAB9E"
                    />
                    <Polygon
                        points="30.85,51.857 44.45,35.571 43.55,54.429"
                        fill="#407177"
                    />
                    <Polygon
                        points="43.45,54.571 44.35,35.5 55.3,47.714"
                        fill="#4C838B"
                    />
                    <Polygon
                        points="44.3,35.571 62.45,36.714 55.15,47.857"
                        fill="#598B91"
                    />
                    <Polygon
                        points="55.15,47.714 62.5,36.714 66.05,50.714"
                        fill="#39676f"
                    />
                    <Polygon
                        points="55.65,47.857 65.95,50.571 57.75,58.571"
                        fill="#BEBEAA"
                    />
                    <Polygon
                        points="57.65,58.571 65.95,50.571 66.85,55.714"
                        fill="#A9AB96"
                    />
                    <Polygon
                        points="66,50.6 64.45,45 75.75,46.429"
                        fill="#377C81"
                    />
                    <Polygon
                        points="64.45,45.1 75.65,43.714 75.65,46.571"
                        fill="#48949F"
                    /> 
                    <Polygon
                        points="65.85,50.571 75.8,46.429 75.6,53.99"
                        fill="#2B484A"
                    />
                    <Polygon
                        points="65.85,50.571 80.05,55.286 66.75,55.714"
                        fill="#CFCAB7"
                    />
                    <AnimatedPoly
                        points="58.05,49.571 52.25,57.429 57.05,58.714"
                        fill="#C2D5D9"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "0.1"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "40deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "16"]
                                })},
                            ]}
                        }
                    />  
                    <AnimatedPoly
                        points="52.25,57.429 47.85,70.714 57.05,58.714"
                        fill="#ADC4BA"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-0.2"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "39.9deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "15.9"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="52.25,57.429 47.85,70.714 42.35,68.857"
                        fill="#507B7D"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-0.4"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "39.8deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "15.8"]
                                })},
                            ]}
                        }
                    />
                    <AnimatedPoly
                        points="37,72.714 47.85,70.714 42.35,68.857"
                        fill="#13302F"
                        style={{
                            transform: [
                                {translateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "-0.5"]
                                })},
                                {rotateX: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0deg", "39.6deg"]
                                })},
                                {translateY: armAnimation.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["0", "15.3"]
                                })},
                            ]}
                        }
                    /> 
                    <Polygon
                        points="75.55,43.714 82.55,49.857 75.65,46.714"
                        fill="#80A59F"
                    />
                    <Polygon
                        points="75.65,46.429 82.45,49.857 75.45,54"
                        fill="#4F5B5B"
                    />
                    <Polygon
                        points="75.35,53.857 82.35,49.857 80.75,54.429"
                        fill="#5A696A"
                    /> 

                    <Polygon
                        points="78.15,47.714 79.55,48.429 79.55,51.429"
                        fill="#1D353A"
                    /> 
                </Svg>
            </Animated.View>

            {/* animated shadow */}
            <Animated.View style={[styles.shadowAnimation, {
            transform: [{ translateX: swim}]}]}>
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
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  animated: {
    width: "100%",
    height: "100%",
    top: "60%",
    backgroundColor: "transparent",
  },
  shadowAnimation: {
    width: "100%",
    height: "95%",
    backgroundColor: "transparent",
  },
})