
	var righty = true
	var lefty = true
	var livebull = false
	var money = 500
	var life= 100
	var ammo = 20
    var ammo2 = 20
	var ammoText
    var tef = 15
    var tef2 = 15
    var tsz = false
    var tsz2 = false
    var defch = false
    var defch2 = false
    var traplife = 58
    var traplive = false
    var biglife = 3
    var lastTest = 0
    var test = 1
    var io = 1
    var score = 0
    var SpeedEnable = false
    var blockcam = false
    var stoped = false
    var onyx = 0
    var traplife = 4
    var traplife2 = 4
    var traplife3 = 4
    var traplife4 = 4
    var traplife5 = 4
    var trap1a = false
    var trap2a = false
    var trap3a = false
    var trap4a = false
    var zombies
    var Game={

        pl:null,
        weapon:null,
        zombie:null,
        zombies:null,
        rightTrue:null,
        leftTrue:null,
        moneytext:null,
        lifetext:null,
        scoretext:null,
        ammotext:null,
        timer:null,
        timer2:null,
        trap:null,
        pep:null,
        pep2:null,
        trap1:null,
        trap2:null,
        trap3:null,
        trap4:null,
        sk:null,
        gr:null,
        gr2:null,
        gr3:null,
        tow:null,
        dollars:null,
        ammor:null,
        heart:null,
        menu1:null,
        def:null,
        def2:null,
        peps:null,
        peps2:null,
        pips:null,
        buyAmmo:null,
        buyDef:null,
        buyTrap:null,



		preload:function(){	
			game.load.image('sky', 'sky.jpg')
			game.load.image('ground', 'ground.png')
			game.load.image('tree', 'tree.png')
			game.load.image('tower', 'house.png')
			game.load.image('button', 'right.png')
			game.load.image('man', 'man.png')
			game.load.image('defka', 'ooo.png')
			game.load.image('manl', 'manleft.png')
			game.load.image('buttonleft', 'left.png')
			game.load.image('bullet', 'bullet.png')
			game.load.image('z', 'zombie.png')
            game.load.image('bigz', 'big-zombie.png')
			game.load.image('groundflip', 'groundflip.png')
			game.load.image('target', 'target.png')
            game.load.image('life', 'life.png')
            game.load.image('ammo', 'ammo.jpg')
            game.load.image('money', 'money.jpg')
            game.load.image('trap', 'trap.png')
            game.load.image('heatbox', 'heatbox.png')
            game.load.image('menu1', 'menu1.png')
            game.load.audio('firemp', 'fire.mp3')
            game.load.image('buttonTrap', 'trapButton.png')
            game.load.image('item1', 'heartItem.png')
            game.load.image('item2', 'ammoItem.png')
            game.load.image('item3', 'moneyItem.png')
		},
		create:function (){
			game.physics.startSystem(Phaser.Physics.ARCADE);
			game.world.setBounds(0, 0, 2000, 600);
            
            game.camera.x = game.world.centerX

			this.sk = game.add.sprite(0, 0, 'sky')
			this.sk.scale.setTo(4, 2)

			this.gr = game.add.sprite(700, 500, 'ground');
			this.gr.scale.setTo(0.8, 0.5)

			this.gr2 = game.add.sprite(0, 500, 'groundflip');
			this.gr2.scale.setTo(0.8, 0.5)

			this.gr3 = game.add.sprite(1400, 500, 'groundflip');
			this.gr3.scale.setTo(0.8, 0.5)

			this.tow = game.add.sprite(game.world.centerX - 200, 310, 'tower')
			this.tow.scale.setTo(0.5,0.5)

            this.def = game.add.sprite(700, -200, 'defka');
			this.def2 = game.add.sprite(700, -200, 'defka');

            this.peps = game.add.group()
            this.peps.enableBody = true

            this.peps2 = game.add.group()
            this.peps2.enableBody = true

            this.pips = game.add.group()
            this.pips.enablebody = true

			this.pl = game.add.sprite(game.world.centerX, 485, 'man')
			//pl.fixedToCamera = true
			this.pl.anchor.x = 0.5
			this.pl.scale.setTo(0.2,0.2)
            this.pl.anchor.y = 0.5
			game.physics.arcade.enable(this.pl)
            game.camera.follow(this.pl)

            this.dollars = game.add.sprite(9, 23, 'money')
            this.dollars.scale.setTo(0.23)
            this.dollars.fixedToCamera = true;

            this.ammor = game.add.sprite(15, 135, 'ammo')
            this.ammor.scale.setTo(0.3)
            this.ammor.fixedToCamera = true;

            this.heart = game.add.sprite(5,65, 'life')
            this.heart.scale.setTo(0.2)
            this.heart.fixedToCamera = true;

            this.menu1 = game.add.sprite(400, 0, 'menu1')
            this.menu1.fixedToCamera = true

            this.selitem = game.rnd.integerInRange(1, 3)
            

            this.buyAmmo = game.add.sprite(420, 20, 'heatbox')
            this.buyAmmo.fixedToCamera = true
            this.buyAmmo.scale.setTo(0.49, 0.7)
            this.buyAmmo.inputEnabled = true
            this.buyAmmo.events.onInputDown.add(this.addAmmo)

            this.buyDef = game.add.sprite(545, 20, 'heatbox')
            this.buyDef.fixedToCamera = true
            this.buyDef.scale.setTo(0.49, 0.7)
            this.buyDef.inputEnabled = true
            this.buyDef.events.onInputDown.add(this.addDef)

            this.buytrap = game.add.sprite(670, 20, 'heatbox')
            this.buytrap.fixedToCamera = true
            this.buytrap.scale.setTo(0.49, 0.7)
            this.buytrap.inputEnabled = true
            this.buytrap.events.onInputDown.add(this.addTrap)

            bigZombies = game.add.group()
            bigZombies.enableBody = true
            setInterval(createBigZombie, Math.round(Math.random()*4000)+20000)
            setInterval(createBigZombie2, Math.round(Math.random()*4000)+20000)

			zombies = game.add.group()
			zombies.enableBody = true
			setInterval(createZombie, Math.round(Math.random()*4000)+1000)
			setInterval(createZombie2, Math.round(Math.random()*4000)+1000)

			var buttonR = game.add.sprite(125, 505, 'button')
			buttonR.fixedToCamera = true;
			buttonR.scale.setTo(0.13,0.13)
			buttonR.inputEnabled = true
			buttonR.events.onInputDown.add(right)
			buttonR.events.onInputUp.add(rightStop)

			var buttonL = game.add.sprite(0, 505, 'buttonleft')
			buttonL.fixedToCamera = true;
			buttonL.scale.setTo(0.13,0.13)
			buttonL.inputEnabled = true
			buttonL.events.onInputDown.add(left)
			buttonL.events.onInputUp.add(leftStop)

			var fire = game.add.sprite(600, 505, 'target')
			fire.fixedToCamera = true;
			fire.scale.setTo(0.16,0.16)
			fire.inputEnabled = true
			fire.events.onInputDown.add(shoot)

   			 //  Sprite 1 will use the World (global) gravity
            
    		
            

    		game.physics.arcade.enable(def);

    		def.scale.setTo(0.2)
    		def.bulletAngleOffset = 90
            def.anchor.x = 0.5
            def.anchor.y = 0.5
    		

    		//  Also enable sprite for drag


            game.physics.arcade.enable(def2);

            def2.scale.setTo(0.2)
            def2.bulletAngleOffset = 90
            def2.anchor.x = 0.5
            def2.anchor.y = 0.5
            

            //  Also enable sprite for drag


    		weapon = game.add.weapon(20, 'bullet');
    		weapon.bulletAngleOffset = 90;
			weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
			weapon.bulletSpeed = 400;
			weapon.trackSprite(pl, 0, 0);
			weapon.enableBody = true
			weapon.bullets.setAll('scale.x', 0.5);
			weapon.bullets.setAll('scale.y', 0.5);

			moneyText = game.add.text(80, 20, '0', { fontSize: '32px', fill: '#FFFAF0' });
			lifeText = game.add.text(80, 80, '100', { fontSize: '32px', fill: '#FFFAF0' });
			lifeText.fixedToCamera = true;
			moneyText.fixedToCamera = true;
			ammoText = game.add.text(80, 140, '20', { fontSize: '32px', fill: '#FFFAF0' });
			ammoText.fixedToCamera = true;
			scoreText = game.add.text(15, 200, 'Score: 0', { fontSize: '32px', fill: '#FFFAF0' });
			scoreText.fixedToCamera = true;

			},

        	

			update:function(){
				game.physics.arcade.overlap(zombies,weapon.bullets,killZombie,null,this)
				game.physics.arcade.overlap(pl,zombies,killHero,null,this)
				game.physics.arcade.overlap(def,zombies,stopZombie,null,this)
                game.physics.arcade.overlap(pep,zombies,goZombie,null,this)
                game.physics.arcade.overlap(pep2,zombies,goZombie2,null,this)
				//game.physics.arcade.overlap(pips,trap,piptrap,null,this)
				game.physics.arcade.overlap(def2,zombies,stopZombie2,null,this)
				game.physics.arcade.overlap(bigZombies,weapon.bullets,killBigZombie,null,this)
				game.physics.arcade.overlap(pl,bigZombies,killHero,null,this)
				game.physics.arcade.overlap(def,bigZombies,stopBigZombie,null,this)
				game.physics.arcade.overlap(def2,bigZombies,stopBigZombie2,null,this)
                game.physics.arcade.overlap(trap1,zombies,trapZ,null,this)
                game.physics.arcade.overlap(trap2,zombies,trapZ2,null,this)
                game.physics.arcade.overlap(trap3,zombies,trapZ3,null,this)
                game.physics.arcade.overlap(trap4,zombies,trapZ4,null,this)
				if(life > 0){
					if(livebull == true){
						if(lefty == true){
							weapon.fire(pl, -5000, 425)
	                        firemp3.play()
							livebull = false
						}
						if(righty == true){
							weapon.fire(pl, 5000, 425)
	                        firemp3.play()
							livebull = false
						}
					}
	                if(tef <= 0){
                        pep = peps.create(def.position.x - 120, def.position.y - 50, 'heatbox')
                        pep.scale.setTo(0.4)
                        pep2 = peps2.create(def.position.x + 20, def.position.y - 50, 'heatbox')
                        pep2.scale.setTo(0.4)
	                    def.position.y = -200
	                    defch = false
	                    tef = 15
	                    timer.stop()
	                }
	                if(tef2 <= 0){
	                    def2.position.y = -200
	                    defch2 = false
	                    tef2 = 15
	                    timer2.stop()
	                    
	                }
	            }
			},
			shoot:function(){
                firemp3 = game.add.audio('firemp')

				if(ammo > 0){
                    livebull = true
                    ammo -= 1;
					ammo2 -= 1;
					ammoText.text = ammo2;
				}
			},
			fireStop:function(){
				livebull = false
			},
			right:function(){
				this.pl.scale.setTo(0.2,0.2)
				rightTrue = true
				this.pl.body.velocity.x = 100
				righty = true
				lefty = false
                stoped = false
			},
			left:function(){
				this.pl.scale.setTo(-0.2,0.2)
				leftTrue = true
				this.pl.body.velocity.x = -100
				righty = false
				lefty = true

                /*if(game.camera.x == 0){
                    pl.fixedToCamera = false
                    blockcam = true
                    stoped = true
                }*/
			},
			rightStop:function(){
				rightTrue = false
				this.pl.body.velocity.x = 0
			},
			leftStop:function(){
				leftTrue = false
				this.pl.body.velocity.x = 0
			},
			killZombie:function(arg1,arg2){
				arg1.kill()
                arg2.kill()
                money += 10;
                moneyText.text = money;
				score += 1;
	    		scoreText.text = 'Score: ' + score;
			},
            killBigZombie:function(arg1,arg2){
                arg1.kill()
                arg2.body.velocity.x -= 10
                if(arg2.body.velocity.x <= 0){
                    arg2.kill()
                    money += 15;
                    moneyText.text = money;
                    score += 1;
                    scoreText.text = 'Score: ' + score;
                }
                
            },
            trapZ:function(arg1, arg2){
                arg2.kill()
                traplife -= 1
                if(traplife <= 0){
                    console.log('hey')
                    arg1.kill()
                    traplife = 4
                    trap1a = false
                }
            },
            trapZ2:function(arg1, arg2){
                arg2.kill()
                traplife2 -= 1
                if(traplife2 <= 0){
                    arg1.kill()
                    traplife2 = 4
                    trap2a = false
                }
            },
            trapZ3:function(arg1, arg2){
                arg2.kill()
                traplife3 -= 1
                if(traplife3 <= 0){
                    arg1.kill()
                    traplife3 = 4
                    trap3a = false
                }
            },
            trapZ4:function(arg1, arg2){
                arg2.kill()
                traplife4 -= 1
                if(traplife4 <= 0){
                    arg1.kill()
                    traplife4 = 4
                    trap4a = false
                }
            },
            
			killHero:function(arg1, arg2){
				arg2.kill()
				life -= 30;
				lifeText.text = life
				if(life <= 0){
					arg1.kill()
                    life = 0
                    lifeText.text = life;
				}
				
			},
			createZombie:function(){
				zombie = zombies.create(0,485,'z');
				zombie.scale.setTo(0.22);
				zombie.body.velocity.x = 40;
                zombie.anchor.x = 0.5
                zombie.anchor.y = 0.5
			},
			createZombie2:function(){
				zombie = zombies.create(2000,485,'z');
				zombie.scale.setTo(-0.22, 0.22);
				zombie.body.velocity.x = -40;
				zombie.anchor.x = 0.5
                zombie.anchor.y = 0.5
			},
            createBigZombie:function(){
                zombie = bigZombies.create(0,495,'bigz');
                zombie.scale.setTo(0.4);
                zombie.body.velocity.x = 20;
                zombie.anchor.x = 0.5
                zombie.anchor.y = 0.8
            },
            createBigZombie2:function(){
                zombie = bigZombies.create(2000,495,'bigz');
                zombie.scale.setTo(-0.4, 0.4);
                zombie.body.velocity.x = -20;
                zombie.anchor.x = 0.5
                zombie.anchor.y = 0.8
                
            },
            stopZombie:function(arg1, arg2){
                    arg2.body.velocity.x = 0.1
                    if(tsz == false){
                        //  Create our Timer
                        timer = game.time.create(false);

                        //  Set a TimerEvent to occur after 1 second
                        timer.loop(1000, countdef, this);

                        //  Start the timer running - this is important!
                        //  It won't start automatically, allowing you to hook it to button events and the like.
                        timer.start();
                        tsz = true
                        
                    }
            },
            stopZombie2:function(arg1, arg2){
                arg2.body.velocity.x = 0.1
                if(tsz2 == false){
                    //  Create our Timer
                    timer2 = game.time.create(false);

                    //  Set a TimerEvent to occur after 1 second
                    timer2.loop(1000, countdef2, this);

                    //  Start the timer running - this is important!
                    //  It won't start automatically, allowing you to hook it to button events and the like.
                    timer2.start();
                    tsz2 = true
                    
                }
            },
            stopBigZombie:function(arg1, arg2){
                arg2.body.velocity.x = 0
                if(tsz == false){
                    //  Create our Timer
                    timer = game.time.create(false);

                    //  Set a TimerEvent to occur after 1 second
                    timer.loop(1000, countdef, this);

                    //  Start the timer running - this is important!
                    //  It won't start automatically, allowing you to hook it to button events and the like.
                    timer.start();
                    tsz = true
                    
                }
            },
            stopBigZombie2:function(arg1, arg2){
                arg2.body.velocity.x = 0
                if(tsz2 == false){
                    //  Create our Timer
                    timer2 = game.time.create(false);

                    //  Set a TimerEvent to occur after 1 second
                    timer2.loop(1000, countdef2, this);

                    //  Start the timer running - this is important!
                    //  It won't start automatically, allowing you to hook it to button events and the like.
                    timer2.start();
                    tsz2 = true
                    
                }
            },
            createLeftPep:function(){

            },
            goZombie:function(arg1, arg2){
                arg2.body.velocity.x = 40
                pep.kill()
                pep2.kill()
            },
            goZombie2:function(arg1, arg2){
                arg2.body.velocity.x = -40
                pep.kill()
                pep2.kill()
            },
            countdef:function(){
                tef -= 1
                
            },
            countdef2:function(){
                tef2 -= 1
            },
            trapBigZombie:function(arg1, arg2){
                if(traplive == true){
                    arg2.kill();
                    money += 5;
                    moneyText.text = money;
                    traplife -= 1;
                }
                if(traplife == 0){
                    arg1.kill()
                    traplife += 4
                }
            },
            addAmmo:function(){
                if(money >= 25){
                    money -= 25
                    moneyText.text = money;
                    ammo += 5
                    ammo2 += 5
                    ammoText.text = ammo2;
                }
            },
            addDef:function(){
                if(defch == false && money >= 150){
                    money -= 150
                    moneyText.text = money;
                    def.position.x = this.pl.position.x
                    def.position.y = this.pl.position.y
                    defch = true
                }
                else if(defch2 == false && money >= 150){
                    money -= 150
                    moneyText.text = money;
                    def2.position.x = this.pl.position.x
                    def2.position.y = this.pl.position.y
                    defch2 = true
                }
            },
            addTrap:function(){
                if(trap1a == false && money >= 50){
                    trap1 = game.add.sprite(this.pl.position.x, this.pl.position.y, 'trap')
                    game.physics.arcade.enable(trap1);
                    trap1.scale.setTo(0.4)
                    trap1.bulletAngleOffset = 90
                    trap1a = true
                    money -= 50
                    moneyText.text = money;
                }
                else if(trap2a == false && money >= 50){
                    trap2 = game.add.sprite(this.pl.position.x, this.pl.position.y, 'trap')
                    game.physics.arcade.enable(trap2);
                    trap2.scale.setTo(0.4)
                    trap2.bulletAngleOffset = 90
                    trap2a = true
                    money -= 50
                    moneyText.text = money;
                }
                else if(trap3a == false && money >= 50){
                    trap3 = game.add.sprite(this.pl.position.x, this.pl.position.y, 'trap')
                    game.physics.arcade.enable(trap3);
                    trap3.scale.setTo(0.4)
                    trap3.bulletAngleOffset = 90
                    trap3a = true
                    money -= 50
                    moneyText.text = money;
                }
                else if(trap4a == false && money >= 50){
                    trap4 = game.add.sprite(this.pl.position.x, this.pl.position.y, 'trap')
                    game.physics.arcade.enable(trap4);
                    trap4.scale.setTo(0.4)
                    trap4.bulletAngleOffset = 90
                    trap4a = true
                    money -= 50
                    moneyText.text = money;
                }
            },
            cheat:function(){
            	money = 99999999
            	life = 99999999
            	ammo = 99999999
            	ammo2 = 99999999
            	score = 99999999
            	moneyText.text = money;
            	lifeText.text = life
            	ammoText.text = ammo2;
            	scoreText.text = 'Score: ' + score;
            	var cheater = game.add.text(15, 260, 'CHEATER', { fontSize: '32px', fill: '#FF0000' });
            	cheater.fixedToCamera = true
            }
}