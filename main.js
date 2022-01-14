class Pokemon {
    constructor(name, hp, level, firstMove, secondMove, thirdMove) {
    this.name = name,
    this.hp = hp,
    this.level = level;
    this.stats = {
        defense: 0,
        damagereduction: 0
    }
    this.firstMove = {
        name:firstMove,
        damage: '',
        PP: 0,
        status: ''
    }
    this.secondMove = {
        name:secondMove,
        damage: 0,
        PP: 0,
        status: ''
    }
    this.thirdMove = {
        name:thirdMove,
        damage: 0,
        PP: 0,
        status: ''
    }
    this.moveList = [this.firstMove, this.secondMove, this.thirdMove]
    }
    useMove(move, enemy) {
        console.log(`${this.name} used ${move.name}`);
        if (move.damage) {
           enemy.hp = enemy.hp - (Math.max(0,(this.firstMove.damage() - this.stats.damagereduction - enemy.stats.defense)));
        } else {
            move.status(enemy);
        };
        if (enemy.hp <= 0) {
            console.log(`${enemy.name} has fainted!`)
        }
    }
    /*useFirstMove(enemy) {
        console.log(`${this.name} used ${this.firstMove.name}`);
        if (this.firstMove.damage) {
           enemy.hp = enemy.hp - (Math.max(0,(this.firstMove.damage() - this.stats.damagereduction - enemy.stats.defense)));
        } else {
            this.firstMove.status();
        };
        if (enemy.hp === 0) {
            console.log(`${enemy.name} has fainted!`)
        }
    }
    useSecondMove(enemy) {
        console.log(`${this.name} used ${this.secondMove.name}`);
        if (this.secondMove.damage) {
           enemy.hp = enemy.hp + this.stats.damagereduction + enemy.stats.defense - this.secondMove.damage(); 
        } else {
            this.secondMove.status();
        }
        if (enemy.hp === 0) {
            console.log(`${enemy.name} has fainted!`)
        }
    }
    useThirdMove() {
        console.log(`${this.name} used ${this.thirdMove.name}`)
        console.log(`${this.name} used ${this.secondMove.name}`);
        if (this.secondMove.damage) {
           enemy.hp = enemy.hp + this.stats.damagereduction + enemy.stats.defense - this.secondMove.damage(); 
        } else {
            this.secondMove.status();
        }
        if (enemy.hp === 0) {
            console.log(`${enemy.name} has fainted!`)
        }
    }*/
}

const charmander = new Pokemon ('Charmander', 48, 14, 'Scratch', 'Growl', 'Ember' )
charmander.firstMove.damage = () => Math.floor(Math.random() * (8 - 5 + 1) + 3); //doesnt generate a rnandom number each time - need to find out how to modify method in an object
charmander.secondMove.status = (enemy) => enemy.stats.damagereduction += 0.5;
charmander.thirdMove.damage = () => Math.floor(Math.random() * (15 - 10 + 1) + 10)

const geodude = new Pokemon ('Geodude', 30, 12, 'Tackle', 'DefenseCurl', 'Tackle')
geodude.firstMove.damage = () => Math.floor(Math.random() * (7 - 3 + 1) + 3);
geodude.secondMove.status = () => geodude.stats.defense += 0.5;
geodude.thirdMove.damage = () => Math.floor(Math.random() * (7 - 3 + 1) + 3);

const onyx = new Pokemon ('Onyx', 60, 14, 'Tackle', 'Screech', 'Bide')
onyx.firstMove.damage = () => Math.floor(Math.random() * (9 - 5 + 1) + 5);
onyx.secondMove.status = (enemy) => enemy.stats.defense += -3
onyx.thirdMove.damage = () => Math.floor(Math.random() * (7 - 3 + 1) + 3);

function commenceGame () {
    for (let i = 0; i <30; i++) {
        charmander.useMove(charmander.moveList[Math.floor(Math.random() * (2 - 0 + 1) + 0)], geodude); 
        if (geodude.hp <= 0 || charmander.hp <=0) {
            break;
        };
        geodude.useMove(geodude.moveList[Math.floor(Math.random() * (2 - 0 + 1) + 0)], charmander);
        if (geodude.hp <= 0 || charmander.hp <=0) {
            break;
        }
    }
}
