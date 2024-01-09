input.onButtonPressed(Button.A, function () {
    if (canShoot) {
        bullet = game.createSprite(spaceship.get(LedSpriteProperty.X), spaceship.get(LedSpriteProperty.X))
        bullet.turn(Direction.Left, 90)
        canShoot = false
    }
})
function crash () {
    if (bullet.isTouching(enemy)) {
        game.addScore(1)
        bullet.delete()
        enemy.delete()
        enemy = game.createSprite(randint(0, 4), 0)
        canShoot = true
    } else if (bullet.get(LedSpriteProperty.Y) == 0) {
        bullet.delete()
        canShoot = true
    }
}
let bullet: game.LedSprite = null
let canShoot = false
let enemy: game.LedSprite = null
let spaceship: game.LedSprite = null
spaceship = game.createSprite(2, 4)
enemy = game.createSprite(randint(0, 4), 0)
canShoot = true
game.startCountdown(30000)
basic.forever(function () {
    spaceship.move(1)
    spaceship.ifOnEdgeBounce()
    if (bullet) {
        bullet.move(1)
        crash()
    }
    basic.pause(200)
})
