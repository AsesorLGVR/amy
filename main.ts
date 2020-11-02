controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f d d f 9 9 9 9 f d d f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . f f 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f d d f 9 9 9 9 f d d f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . f f 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f d d f 9 9 9 9 f d d f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . f f 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f d d f 9 9 9 9 f d d f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e e e e e e e f . . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . . f e e e e e e e e e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f d d f 9 9 9 9 f d d f . . 
        . . . f f 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . f f 9 . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile22, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Estoy forrada means to be rich", DialogLayout.Full)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(42, 12))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile23, function (sprite, location) {
    if (info.score() >= 10 && game.askForString("¿Ya tiene su pasaporte y ha comprado el billete?") == "si") {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("Pago en efectivo. Gracias por todo", DialogLayout.Full)
        tiles.setTileAt(location, sprites.dungeon.floorDark2)
        info.changeScoreBy(-1)
    } else {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("Nada es gratis en en esta vida.", DialogLayout.Full)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(48, 15))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile4, function (sprite, location) {
    if (info.score() >= 10 && game.askForString("¿Ya tiene su pasaporte y ha comprado el billete?") == "si") {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("Perfecto. Su contraseña es MALAGA", DialogLayout.Full)
        tiles.setTileAt(location, sprites.dungeon.floorDark2)
        info.changeScoreBy(-10)
    } else {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("Lo siento, necsita pasaporte, billete y aval(10 monedas de oro)", DialogLayout.Full)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(6, 19))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile16, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("He nacido con un pan debajo del brazo means to be born with spoon in one's mouth", DialogLayout.Full)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.vehicle.roadVertical)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(26, 3))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile15, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("\"He pasado de la riqueza a la pobreza\" means To go from rags to riches", DialogLayout.Full)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(25, 15))
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f d f d e e e e f . . . . 
        . . . f d f d e e e e f f . . . 
        . . . f d d d d e e e f e f . . 
        . . . . 3 d d d f f e f f . . . 
        . . . . . f f 9 9 f f e e f . . 
        . . . . f 9 9 9 d d f f f . . . 
        . . . . f 9 9 9 f d d f . . . . 
        . . . . . f 9 9 f f f . . . . . 
        . . . . f 9 9 9 9 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f d f d e e e e f . . . . 
        . . . f d f d e e e e f f . . . 
        . . . f d d d d e e e f e f . . 
        . . . . 3 d d d f f e f f . . . 
        . . . . . f f 9 9 f e e e f . . 
        . . . . f 9 9 9 f f f f f . . . 
        . . . . f 9 9 f d f . . . . . . 
        . . . . . f 9 f d f . . . . . . 
        . . . . f 9 9 9 f d f . . . . . 
        . . . . f f 9 9 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e e e e f . . . . . 
        . . f d f d e e e e f . . . . . 
        . . f d f d e e e e f f . . . . 
        . . f d d d d e e e f e f . . . 
        . . . 3 d d d f f e f f . . . . 
        . . . . f f 9 9 f f e e f . . . 
        . . . f d d d d f f f f . . . . 
        . . . f d d d f 9 f . . . . . . 
        . . . . f f f d 9 9 f . . . . . 
        . . . f f f 9 9 f f . . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f d f d e e e e f . . . . 
        . . . f d f d e e e e f f . . . 
        . . . f d d d d e e e f e f . . 
        . . . . 3 d d d f f e f f . . . 
        . . . . . f f 9 9 f e e e f . . 
        . . . . f 9 9 9 f f f f f . . . 
        . . . . f 9 9 f d f . . . . . . 
        . . . . . f 9 f d f . . . . . . 
        . . . . f 9 9 9 f d f . . . . . 
        . . . . f f 9 9 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.over(true)
    game.showLongText("Ganaste el juego y seguro aprendiste algo de español. ¡Eres la leche!", DialogLayout.Full)
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile19, function (sprite, location) {
    if (game.askForString("¿2 billetes Chatel-Málaga?") == "si") {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("Pase por ccaja y recoja sus billetes", DialogLayout.Full)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(47, 18))
        tiles.setWallAt(tiles.getTileLocation(48, 18), false)
        tiles.setWallAt(tiles.getTileLocation(48, 17), false)
    } else {
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("Fuera de aquí tiesa=poor! Trabaja!", DialogLayout.Full)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(45, 18))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile11, function (sprite, location) {
    if (info.score() >= 1 && game.askForString("¿Contraseña? means password") == "si") {
        game.setDialogFrame(sprites.builtin.computer1)
        game.showLongText("Tiene todos sus documentos en regla . Puede pasar. ¡Buen viaje!", DialogLayout.Full)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 6))
        info.changeScoreBy(-1)
    } else {
        game.setDialogFrame(sprites.builtin.computer1)
        game.showLongText("Lo siento. Necesita pagar la tasa, decir la contraseña y todos sus documentos en regla.", DialogLayout.Full)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 4))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile17, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Qué suerte", DialogLayout.Full)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(30, 9))
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e d f d f . . . . . 
        . f f e e e e d f d f . . . . . 
        f e f e e e d d d d f . . . . . 
        . f f e e d d d d 3 . . . . . . 
        f f e e 9 9 9 f f . . . . . . . 
        . f f f 9 9 9 9 9 f . . . . . . 
        . . . f d 9 f 9 9 f . . . . . . 
        . . . f d 9 f 9 9 . . . . . . . 
        . . f d f 9 9 f 9 f . . . . . . 
        . . f f f 9 9 f f f . . . . . . 
        . . . . . f f f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e d f d f . . . . 
        . . f f e e e e d f d f . . . . 
        . f e f e e e d d d d f . . . . 
        . . f f e e d d d d 3 . . . . . 
        . f f e e 9 9 9 f f . . . . . . 
        . . f f f 9 d d d d f . . . . . 
        . . . . f 9 f d d d f . . . . . 
        . . . . f 9 d 9 9 9 . . . . . . 
        . . . f f f 9 9 f f f . . . . . 
        . . . f f f 9 9 f f f . . . . . 
        . . . f f f f f f f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e e e e f . . . . . 
        . . f e e e e d f d f . . . . . 
        . f f e e e e d f d f . . . . . 
        f e f e e e d d d d f . . . . . 
        . f f e e d d d d 3 . . . . . . 
        f e e e 9 9 9 f f . . . . . . . 
        . f f f 9 9 9 9 9 f . . . . . . 
        f f f f d d 9 9 9 f . . . . . . 
        . . f d d f 9 9 9 . . . . . . . 
        . . . f f f 9 9 f . . . . . . . 
        . . . . f 9 9 9 9 f . . . . . . 
        . . . . f f f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f e e e e e f . . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e e e e f . . . . 
        . . . f e e e e d f d f . . . . 
        . . f f e e e e d f d f . . . . 
        . f e f e e e d d d d f . . . . 
        . . f f e e d d d d 3 . . . . . 
        . f f e e 9 9 9 f f . . . . . . 
        . . f f f 9 d d d d f . . . . . 
        . . . . f 9 f d d d f . . . . . 
        . . . . f 9 d 9 9 9 . . . . . . 
        . . . f f f 9 9 f f f . . . . . 
        . . . f f f 9 9 f f f . . . . . 
        . . . f f f f f f f f . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile21, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Acepto sobornos means to receive a kickback", DialogLayout.Full)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.dungeon.floorDark1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(46, 2))
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d e d d e d f e f . . 
        . . f e f d d d d d d f e f . . 
        . . f e e f d 3 3 d f e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f f d f 9 9 9 9 f f d f . . 
        . . . f d 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . f f 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d e d d e d f e f . . 
        . . f e f d d d d d d f e f . . 
        . . f e e f d 3 3 d f e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f f d f 9 9 9 9 f f d f . . 
        . . . f d 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . f f 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d e d d e d f e f . . 
        . . f e f d d d d d d f e f . . 
        . . f e e f d 3 3 d f e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f f d f 9 9 9 9 f f d f . . 
        . . . f d 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . f f 9 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d e d d e d f e f . . 
        . . f e f d d d d d d f e f . . 
        . . f e e f d 3 3 d f e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f f d f 9 9 9 9 f f d f . . 
        . . . f d 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f e e e e e e f . . . . 
        . . . f e e e e e e e e f . . . 
        . . . f e e f f f f e e f . . . 
        . . . f e f f d d f f e f . . . 
        . . f e f d e d d e d f e f . . 
        . . f e f d d d d d d f e f . . 
        . . f e e f d 3 3 d f e e f . . 
        . f e e f 9 f f f f 9 f e e f . 
        . . f f d 9 9 9 9 9 9 d f f . . 
        . . f f d f 9 9 9 9 f f d f . . 
        . . . f d 9 9 9 9 9 9 f f . . . 
        . . . f 9 9 9 9 9 9 9 9 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . 9 f f . . f f 9 . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile18, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Todo lo que toco se convierte en oro means to have the Midas touch", DialogLayout.Full)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(36, 18))
    }
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile20, function (sprite, location) {
    if (true) {
        game.setDialogFrame(img`
            333333333333333333333333
            3dddddddddddddddddddddd3
            b3dddddddddddddddddddd3b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            b3333333333333333333333b
            bb33333333333333333333bb
            bccccccccccccccccccccccb
            cccccccccccccccccccccccc
            `)
        game.showLongText("Estoy forrada means to be rich", DialogLayout.Bottom)
        info.changeScoreBy(3)
        music.baDing.play()
        tiles.setTileAt(location, sprites.castle.tileGrass1)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(46, 2))
    }
})
let movimiento = false
let mySprite: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`3200140001040b040406050113212626262626262c2e0101013232323232323232323232323232323232323232323232323232323232010504040413040419222727270e0e062d2f1d1d0104253537251a352504352525252525252525353535353f003f3f3f2732010504040b13170404220e0e0e0e0e0e0e2f1d1d0104253504253b352504353834343434343333333333333f3f3f3f413f3f0105040b0413041904232828282a282828301d1d0104253504250435250435382525253333333333333333163f3f3f3f3f32010604040b131818180d1d1d241d1d1d1d1d1d1d011a253504250435251a352525333325252525333333333f3f3f3f3f0032010504040413190417242424241d1d1d1d1d1d1d01042535042504352504353333333333333333333333333f3f3f3f3f3f320105040b11130404041d2424241d1d1d1d1d1d1d011c1e1e1e1e1e1e1e1e1e1e1e1e1e1e1f3333333333333f003f3f3f42320105040404131704192524242424241d1d1d1d25252534363836363333363636363d343404333333333334363636363636320105040404130417041d242424241d1d1d1d0125252501013838363333363c3936041e1e1e3333333333343535353535353301050b040b13190404252424241d1d1d1d1d01010101010138393633333638383804363636363333333333333333333333320105040404130419171d2424241d1d1d1d1d01010101010136363633333636363604363839363333333633252525252525320105040b04131a1a1a252424241d1d1d1d1d0101010101011e1e1e1e1e1e1e1e1e1e20383836333333363334343434343832010604040413041a041d242424241d1d1d1d01252525010133333333043636363633363636363333333633363636363636320107070707130404171d2424241d1d1d1d1d1d2525253336363636361a36393838333333333333333336333434343434433201080c0f0f141719041d2424241d1d1d1d1d1d1d01333336393939360438383836331b1e1e1e1e1f3336332525252525253201090d0d12150404042424241d2b1d1d1d311d1d013333363a3838360436363636331a36383633043333333333333333333201090e0e0e151b1e1f051e1e291e1e1e1e1f1d1d013434363636383604333333333304363e36330438043632323232333332020202100e151c1e201d1d1d1d1d1d1d1d041d1d01341b1e1e1e1e1e1e1e1e1e1e1e20363936331a39043632004033334432030a0a100e150707071d1d1d1d1d1d1d1d041d1d011b1a333333333333343434343433363838331c1e203632003333334432030a0a020e161d1d1d1d1d1d1d1d1d1d1d1c1e13012032323232323232323232323232323232323232323232323232323232`, img`
    2.2...2222222222.222222222222222222222222222222222
    2.....2222.....2.2..2.22.2222.22222222222222.....2
    2...2.2222.......2..2.22.2.22.2222222......2.....2
    2..2..2222222.2222..2.22.2.22.22222..............2
    2...2...............2222.2.222222..2222....2.....2
    2.....222...........2.22.2.22.2............2.....2
    2..2..222...........2......................2.....2
    2.....2222.........22222.22..2222.22......22222222
    2.....222..........222....2..2..2.........22222222
    2.2.2.2222................2..2....2222...........2
    2.....222...............222..2222.2..2...2.2222222
    2..2..2222...........................2...2.......2
    2.....222..........222.......2222.2222...2.2222222
    2.....222..........222.22222222..........2.......2
    222222222...........2..2...2....2........2.2222222
    2222.2222...........2..2...2.2222.22.2...........2
    22...2222222222222..222222.2.......2.2....22222..2
    2222.2222........2..22.............2.2.22.222...22
    2..2.2222........2..2.2......22222.2......22....22
    2..2.............222222222222222222222222222222222
    `, [myTiles.transparency16,sprites.dungeon.floorDarkDiamond,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedNorth,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection2,myTiles.tile1,sprites.vehicle.roadIntersection1,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterWest1,sprites.dungeon.darkGroundSouthWest1,myTiles.tile2,sprites.dungeon.greenOuterNorth2,myTiles.tile3,sprites.dungeon.darkGroundCenter,sprites.dungeon.greenOuterNorth1,sprites.dungeon.doorClosedSouth,sprites.dungeon.stairWest,myTiles.tile4,sprites.vehicle.roadIntersection4,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.stairLarge,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn3,sprites.dungeon.floorLight0,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn4,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.floorLight1,myTiles.tile9,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterSouth1,myTiles.tile10,sprites.dungeon.stairNorth,myTiles.tile11,sprites.dungeon.greenSwitchUp,myTiles.tile12,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorLight4,sprites.builtin.brick,sprites.dungeon.floorDark2,sprites.castle.saplingOak,sprites.builtin.forestTiles0,myTiles.tile13,myTiles.tile14,sprites.castle.tileGrass1,sprites.castle.saplingPine,myTiles.tile15,myTiles.tile16,myTiles.tile17,sprites.vehicle.roadIntersection3,myTiles.tile18,sprites.dungeon.floorDark1,myTiles.tile19,myTiles.tile20,myTiles.tile21,myTiles.tile22,myTiles.tile23], TileScale.Sixteen))
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . f e e e e e e e e f . . . 
    . . . f e e f f f f e e f . . . 
    . . . f e f f d d f f e f . . . 
    . . f e f d e d d e d f e f . . 
    . . f e f d d d d d d f e f . . 
    . . f e e f d 3 3 d f e e f . . 
    . f e e f 9 f f f f 9 f e e f . 
    . . f f d 9 9 9 9 9 9 d f f . . 
    . . f d d f 9 9 9 9 f d d f . . 
    . . . f f 9 9 9 9 9 9 f f . . . 
    . . . f 9 9 9 9 9 9 9 9 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . 9 f f . . f f 9 . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnTile(mySprite, tiles.getTileLocation(38, 18))
info.setLife(1)
info.setScore(0)
let mySprite2 = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    e b d d f f d d b e . . . . 
    c f e d d b d b f c . . . . 
    f f f d d d d f b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . e f e 
    f d d f d d f d d f . f d f 
    f e d d b b d d f f . f d f 
    . f f f f f f f b e f f d f 
    . f e d d d d d d b e d e f 
    . f d d d d d e d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Enemy)
mySprite2.follow(mySprite, 100)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 19))
game.onUpdate(function () {
    movimiento = controller.down.isPressed() || (controller.up.isPressed() || (controller.left.isPressed() || controller.right.isPressed()))
    if (!(movimiento)) {
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    }
})
