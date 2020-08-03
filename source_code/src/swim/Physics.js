import Matter from "matter-js";
import Constants from './Constants';
import Seaweed from './Seaweed';
import Urchin from './Urchin';

let items = 0;

export const randomBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateItems = () => {
    let topItemHeight = randomBetween(100, (Constants.MAX_HEIGHT / 2) - 100);
    let bottomItemHeight = Constants.MAX_HEIGHT - topItemHeight - Constants.GAP_SIZE - 50;

    let sizes = [topItemHeight, bottomItemHeight]

    if (Math.random() < 0.5) {
        sizes = sizes.reverse();
    }
    return sizes;
}

export const resetItemCount = () => {
    items = 0;
}

export const addItemsAtLocation = (x, world, entities) => {
    let [item1Height, item2Height] = generateItems();

    let itemTopWidth = Constants.ITEM_WIDTH + 20;
    let itemTopHeight = Constants.ITEM_WIDTH + 10;

    item1Height = item1Height - itemTopHeight;

    let item1Top = Matter.Bodies.rectangle(
        x + 42,
        item1Height + (itemTopHeight / 2),
        itemTopWidth,
        itemTopHeight,
        { isStatic: true,
        label: "seaweed"}
    );

    item2Height = item2Height - itemTopHeight;

    let item2Top = Matter.Bodies.rectangle(
        x,
        Constants.MAX_HEIGHT - item2Height - 50 - (itemTopHeight / 2),
        itemTopWidth,
        itemTopHeight, 
        { isStatic: true,
            label: "urchin"}
    );

    Matter.World.add(world, [item1Top, item2Top]);

    entities["item" + (items + 1) + "Top"] = {
        body: item1Top, scored: false,  renderer: Seaweed,
    }

    entities["item" + (items + 2) + "Top"] = {
        body: item2Top, scored: false,  renderer: Urchin,
    }
    items += 2;
}

const Physics = (entities, { touches, time, dispatch }) => {
    let engine = entities.physics.engine;
    let world = entities.physics.world;
    let turtle = entities.turtle.body;

    let hadTouches = false;
    touches.filter(t => t.type === "press").forEach(t => {
        if (!hadTouches){
            if (world.gravity.y === 0.0){
                // first press really
                world.gravity.y = 1.2;

                addItemsAtLocation((Constants.MAX_WIDTH * 2) - (Constants.ITEM_WIDTH / 2), world, entities)
                addItemsAtLocation((Constants.MAX_WIDTH * 3) - (Constants.ITEM_WIDTH / 2), world, entities)

            }
            hadTouches = true;
            Matter.Body.setVelocity(turtle, {
              x: turtle.velocity.x,
              y: -10
            });
        }
    });

    Object.keys(entities).forEach(key => {
        if (key.indexOf("item") === 0 && entities.hasOwnProperty(key)){
            Matter.Body.translate( entities[key].body, {x: -2, y: 0});

            if (key.indexOf("Top") === -1 && parseInt(key.replace("item", "")) % 2 === 0){
                let itemIndex = parseInt(key.replace("item", ""));
                
                if (entities[key].body.position.x <= -1 * (Constants.ITEM_WIDTH / 2)){
                    addItemsAtLocation((Constants.MAX_WIDTH * 2) - (Constants.ITEM_WIDTH / 2), world, entities)

                    delete(entities["item" + (itemIndex - 1) + "Top"]);
                    delete(entities["item" + itemIndex + "Top"]);
                }
            }


        } else if (key.indexOf("floor") === 0){
            if (entities[key].body.position.x <= -1 * (Constants.MAX_WIDTH / 2)){
                Matter.Body.setPosition( entities[key].body, {x: Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2), y: entities[key].body.position.y});
            } else {
                Matter.Body.translate( entities[key].body, {x: -2, y: 0});
            }
        }
    });

    Matter.Engine.update(engine, time.delta);
    return entities;
};

export default Physics;