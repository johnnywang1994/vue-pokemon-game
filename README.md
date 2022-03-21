# Vue Pokemon Game

This is a Pokemon like tiny game just to demo how to create a prototype.

[Life Demos Here](https://johnnywang1994.github.io/vue-pokemon-game)


## Inspired
- [Pokémon JavaScript Game Tutorial with HTML Canvas](https://www.youtube.com/watch?v=yP5DKzriqXA)

## Tools
- [Tiled Map Editor](https://www.mapeditor.org/)

## Assets
- [sprout-lands-asset-pack](https://cupnooble.itch.io/sprout-lands-asset-pack)
- [ninja-adventure-asset-pack](https://pixel-boy.itch.io/ninja-adventure-asset-pack)

## Process
- Download Assets
- Create Map with `Tiled Map Editor`
    - Create Map Layers
    - Create Collisions Layer
    - Create Foreground Layer
    - Export Map png with zoom size
    - Export Map Data with Json format
- Create App
- Import & Render Map
- Create Player
- Move Player through `keydown`(Map translate)
- Player collision detects with Map Data from Collisions Layer
- import & render Foreground object
- Player movement animation
- Battle Activation
- Transition from Map to Battle
- Add Battle Sprites
- Add Health Bar
- Attacks - Tackle
- End Game
- Back to Map