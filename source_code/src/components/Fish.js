import React from 'react';
import { StyleSheet, View, Animated} from 'react-native';
import Svg, { Ellipse, Polygon, Defs, RadialGradient, Stop} from 'react-native-svg';

// created animated polygon
const AnimatedPoly = Animated.createAnimatedComponent(Polygon);

export default function Fish({top="0%"}) {
    const iconAnimation = new Animated.Value(0);
    const finAnimation = new Animated.Value(1);
    const tailAnimation = new Animated.Value(0);
    const lipAnimation = new Animated.Value(0);

    // Loop the animation
    Animated.loop(
        Animated.sequence([
            Animated.delay(100),
            Animated.timing(
                finAnimation,
                {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                finAnimation,
                {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                finAnimation,
                {
                    toValue: 1,
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
                Animated.delay(50),
                Animated.timing(
                    tailAnimation,
                    {
                        toValue: 1,
                        duration: 900,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    tailAnimation,
                    {
                        toValue: 0,
                        duration: 1020,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    tailAnimation,
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
                Animated.delay(100),
                Animated.timing(
                    lipAnimation,
                    {
                        toValue: 1,
                        duration: 400,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    lipAnimation,
                    {
                        toValue: 0,
                        duration: 800,
                        useNativeDriver: true
                    }
                ),
                Animated.timing(
                    lipAnimation,
                    {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    }
                ),
    
            ]),
            {}
        ).start();


    
    const moveAnimation = iconAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0', '10']
      })

      const flapSideAnimation = finAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-10deg']
      })

       const tailUp = tailAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['-0.3', '-0.9']
      })

      const tailDown = tailAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0.3', '0.9']
      })

      const moveLipsUp = lipAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '5deg']
      })

      const moveLipsDown = lipAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['7deg', '0deg']
      })
      

    return (
        <View style={[styles.container, {top: top}]}>
            
            {/* animated fish */}
            <Animated.View style={[styles.animated, {
            transform: [{ translateX: moveAnimation}]}]}>

                <Svg height="47%" width="100%" viewBox="0 0 98 100">
                    <AnimatedPoly
                        points="7.013,37.714 12.812,34.286 28.012,40 32.012,42"
                        fill="#000"
                        style={{
                            transform: [{ translateY: tailUp}]}
                        }
                    />
                    <AnimatedPoly
                        points="9.112,62.286 32.813,50.714 30.413,54.714 16.31,63.286 "
                        fill="#000"
                        style={{
                            transform: [{ translateY: tailDown}]}
                        }
                    />
                    <Polygon
                        points="14.313,38.5 22.9,48.429 14.25,60.6"
                        fill="#fff752"
                    />
                    <Polygon
                        points="14.213,38.429 25.912,39.857 22.813,48.429"
                        fill="#fff000"
                    />
                    <Polygon
                        points="14.313,60.571 22.813,48.429 28.813,54.857"
                        fill="#ffdf23"
                    />
                    <Polygon
                        points="22.712,48.5 25.912,39.714 28.7,54.77"
                        fill="#efd304"
                    />
                    <Polygon
                        points="25.912,39.85 47.713,44.286 28.9,54.77"
                        fill="#000000"
                    />
                    <Polygon
                        points="25.912,39.85 39.713,45.4 28.75,54.9"
                        fill="#e2c207"
                    />
                    <Polygon
                        points="31.712,41.2 31.813,30.714 52.25,22.8"
                        fill="#0f38d4"
                    />
                    <Polygon
                        points="29.213,59 31.212,53.4 47.713,62.3"
                        fill="#0f38d4"
                    />
                    <Polygon
                        points="31.712,41.2 47.813,26.286 47.713,44.3"
                        fill="#000000"
                    />
                    <Polygon
                        points="31.112,53.429 42.813,47.063 47.713,62.286"
                        fill="#143ffd"
                    />
                    <Polygon
                        points="47.713,26.429 56.112,35.286 47.713,44.286"
                        fill="#000000"
                    />
                    <Polygon
                        points="47.813,44.286 56.3,53.143 40.713,46.35"
                        fill="#000000"
                    />
                    <Polygon
                        points="42.813,47.286 56.3,53.143 47.713,62.35"
                        fill="#2b4dff"
                    />
                    <Polygon
                        points="47.713,44.286 56.112,35.429 56.112,53.286"
                        fill="#4268f5"
                    />
                    <Polygon
                        points="47.713,26.35 52.22,22.6 66.112,25.7"
                        fill="#2b4dff"
                    />
                    <Polygon
                        points="47.6,26.4 66.112,25.714 56.012,35.4"
                        fill="#000000"
                    />
                    <Polygon
                        points="56.012,35.286 66.1,25.714 68.212,48"
                        fill="#2f5fd8"
                    />
                    <Polygon
                        points="47.7,62.286 56.15,53.2 65.813,64.571"
                        fill="#283eef"
                    />  
                    <Polygon
                        points="56.012,53.143 68.212,48 65.712,64.571"
                        fill="#4b3eff"
                    />
                    <Polygon
                        points="66.112,25.857 86.513,43.571 68.112,48.143"
                        fill="#4571e1"
                    /> 
                    <AnimatedPoly
                        points="82,47.9 86.45,43.5 88.413,47.571"
                        fill="#9ca1f0"
                        style={{
                            transform: [{ rotateX: moveLipsDown}]}
                        }
                    /> 
                    <AnimatedPoly
                        points="82,48 87.112,50.571 85.413,53.286"
                        fill="#8b91ff"
                        style={{
                            transform: [{ rotateX: moveLipsUp}]}
                        }
                    /> 
                    <Polygon
                        points="68.112,47.857 86.513,43.429 65.6,64.62"
                        fill="#2d5dd6"
                    />
                    <Polygon
                        points="65.712,64.286 82.013,48 85.513,53.286"
                        fill="#5164da"
                    />
                    <Polygon
                        points="75.113,43.714 76.712,40.857 79.813,42.571"
                        fill="#000000"
                    />
                    
                    <Polygon
                        points="56.012,35.286 68.4,48 56.112,53.429"
                        fill="#2f5fd8"
                    /> 
                    <Polygon
                        points="55,36.286 68.4,48 56.112,50.429"
                        fill="#efd304"
                    /> 
                    <AnimatedPoly
                        points="53.15,38.35 56.012,35.286 68.5,48.3"
                        fill="#efd304"
                        style={{
                            transform: [{ rotateY: flapSideAnimation}]}
                        }
                    /> 
                    <AnimatedPoly
                        points="52.812,44.6 53.212,38.286 68.5,48.2"
                        fill="#ffdf23"
                        style={{
                            transform: [ { rotateY: flapSideAnimation}]}
                        }
                    />
                    <AnimatedPoly
                        points="52.812,44.54 68.4,48 56.112,53.429"
                        fill="#fff000"
                        style={{
                            transform: [
                                { rotateY: flapSideAnimation}
                            ]}
                        }
                    />
                </Svg>
            </Animated.View>

            {/* animated shadow */}
            <Animated.View style={[styles.shadowAnimation, {
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
    margin: "auto",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
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
  fin: {
    backgroundColor: "transparent",
    width: "50%",
    height: "10%",
  }
})