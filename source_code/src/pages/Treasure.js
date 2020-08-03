import React from 'react';
import { StyleSheet, View, Image, Animated} from 'react-native';

// create animated chest
const Chest = Animated.createAnimatedComponent(Image);

export default function Treasure (){
  const shakeAnimation = new Animated.Value(0);
  
  // Loop the animation
  Animated.loop(
    Animated.sequence([
        Animated.delay(500),
        Animated.timing(
            shakeAnimation,{ toValue: 1, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 0, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 1, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 0, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 1, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 0, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 1, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 0, duration: 200, useNativeDriver: true
            }
        ),
        Animated.timing(
            shakeAnimation,{ toValue: 2, duration: 400, useNativeDriver: true
            }
        ),  
    ]),
    {}
  ).start();

    return (
        <View style={styles.container}>
            <Chest
                source={require("../assets/chest.png")}
                style={[styles.chest, {
                transform: [
                    {rotateZ: shakeAnimation.interpolate({
                        inputRange: [0, 1, 2],
                        outputRange: ['-5deg', '5deg', '0deg']
                    })},
                ]}
            ]}/>
        </View>
    );
}
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    }, 
    chest: {
        width: 72,
        height: 72,
    }
});