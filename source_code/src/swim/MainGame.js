import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import Matter from "matter-js";
import { GameEngine } from "react-native-game-engine";
import Turtle from './Turtle';
import Images from "./Images";
import Floor from "./Floor";
import Physics from './Physics';
import Constants from './Constants';

export default class MainGame extends Component {
    constructor(props){
        super(props);
        this.state = {
            running: true
        };
        this.gameEngine = null;
        this.entities = this.setupWorld();
    }

    // create world, add objects to world
    setupWorld = () => {
        let engine = Matter.Engine.create({ enableSleeping: false });
        let world = engine.world;
        world.gravity.y = 0.0;

        let turtle = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT / 2, Constants.TURTLE_WIDTH, Constants.TURTLE_HEIGHT);

        let floor = Matter.Bodies.rectangle(
            Constants.MAX_WIDTH / 2,
            Constants.MAX_HEIGHT - 25,
            Constants.MAX_WIDTH + 4,
            50, { isStatic: true }
        );
        Matter.World.add(world, [turtle, floor]);
        
        // handle collisions
        Matter.Events.on(engine, 'collisionStart', ({ pairs }) => {
            pairs.forEach(({ bodyA, bodyB }) => {
              if (bodyA.label == "seaweed") {
                bodyA.render.visible = false;
                this.setState({
                    score: this.state.score + 1});
                    bodyA.render.visible = false;
                  
              }
              else if (bodyB.label == "seaweed") {
                bodyB.render.visible = false;
                this.setState({
                    score: this.state.score + 1});
                  
                } else {
                    this.gameEngine.dispatch({ type: "game-over"});
                }
           });
         });

        return {
            physics: { engine: engine, world: world },
            floor: { body: floor, renderer: Floor },
            turtle: { body: turtle, pose: 1, renderer: Turtle},
        }
    }

    // update score or game over
    onEvent = (e) => {
        if (e.type === "game-over"){
            this.setState({
                running: false
            });
        } else if (e.type === "score"){
            this.setState({
                score: this.state.score + 1
            })
        }
    }

    reset = () => {
        this.gameEngine.swap(this.setupWorld());
        this.setState({
            running: true,
            score: 0
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.backgroundImage} resizeMode="cover" source={Images.background} />
                <GameEngine
                    ref={(ref) => { this.gameEngine = ref; }}
                    style={styles.gameContainer}
                    systems={[Physics]}
                    running={this.state.running}
                    onEvent={this.onEvent}
                    entities={this.entities}>
                    <StatusBar hidden={true} />
                </GameEngine>
                <Text style={styles.score}>{this.state.score}</Text>

                {/* display when  game over*/}
                {!this.state.running && 
                <TouchableOpacity style={styles.fullScreenButton} onPress={this.reset}>
                    <View style={styles.fullScreen}>
                        <Text style={styles.gameOverText}>Play Again?</Text>
                    </View>
                </TouchableOpacity>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    gameContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    gameOverText: {
        color: 'white',
        fontSize: 48, 
        paddingHorizontal: 15,
        opacity: 1,
    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: Constants.MAX_HEIGHT,
        width: Constants.MAX_WIDTH,
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fullScreenButton: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        bottom: 0, 
        width: Constants.MAX_WIDTH,
        height: Constants.MAX_HEIGHT
    },
    score: {
        color: 'white',
        fontSize: 72,
        position: 'absolute',
        top: 50,
        left: 180,
        textShadowColor:'#222222',
        textShadowOffset:{width: 2, height: 2},
        textShadowRadius:2,
        zIndex: 200,
    },
});