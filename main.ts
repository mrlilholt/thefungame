controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`left`,
    100,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    assets.animation`rightRun`,
    100,
    false
    )
})
let mySprite: Sprite = null
console.log("")
mySprite = sprites.create(assets.image`computator`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
mySprite.setVelocity(0, 50)
if (mySprite.vx == 0) {
    animation.runImageAnimation(
    mySprite,
    [img`
        ...bbbbbbbbbb...
        ..b1111111111b..
        .b111111111111b.
        .b111111111111b.
        .bddccccccccddb.
        .bdc66666666cdb.
        .bdc61d66666cdb.
        .bdc6d666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bddccccccccddb.
        .cbbbbbbbbbbbbc.
        .cccccccccccccc.
        ....bbbbbbbb....
        .b..dddddddd..b.
        ..b.bbbbbbbb.b..
        ...bbbbbbbbbb...
        ....cccccccc....
        ....bbbbbbbb....
        ....b......b....
        ....b......b....
        `,img`
        ...bbbbbbbbbb...
        ..b1111111111b..
        .b111111111111b.
        .b111111111111b.
        .bddccccccccddb.
        .bdc66666666cdb.
        .bdc61d66666cdb.
        .bdc6d666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bdc66666666cdb.
        .bddccccccccddb.
        .cbbbbbbbbbbbbc.
        .cccccccccccccc.
        ....bbbbbbbb....
        ....dddddddd....
        ....bbbbbbbb....
        ...bbbbbbbbbb...
        ..b.cccccccc.b..
        .b..bbbbbbbb..b.
        ....b......b....
        ....b......b....
        `],
    500,
    true
    )
}
let mySprite2 = sprites.create(img`
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff
    cffffffffffffffffffffffffffffffffc
    ccfffffffffff8888c8ccffffffffffffc
    ccffffffcccf88888b6bcc8ffffffffff8
    cfffffffff888886ab67ec888ffffff888
    ffffffffff88886ba686bbc88888888888
    88fffff888888cbcc88886cc8888888888
    888fffff8888fc88888888888888888888
    8f888fc8888ff888888888888888888888
    888888c88888cc668888888c8888888888
    8888cc88ff8886bbb88888888888888888
    888fff888888868ccc8888888888888888
    888f888888f8c88f8888888868888888a8
    8888688888f88888f88888888888888888
    8888688888888888ff8888888888888888
    8c888888f8888888888888888888888888
    8888888888888888888888888888888888
    8888888888886998999666688888888888
    88888888669d1199d111111d9b66688888
    888888861111d1ddd1111111111dd99966
    888886911dddddddddddddddddddd1111d
    8866991ddddddddddddddddddddddddddd
    6669dd11dddddddddddddddddddddddddd
    669ddddddddddddddddddddddddddddddd
    66dddddddddddddddddddddddddddddddd
    69dddddddddddddddbb99ddddddddddddd
    9ddddddddddddddd7bb66ddddddddddddd
    dddddddddddddddb7bb66ddddddddddddd
    dddddddddddddddb7bb66bdddddddddddd
    dddddddddddddddb7bb66bdddddddddddd
    `, SpriteKind.Player)