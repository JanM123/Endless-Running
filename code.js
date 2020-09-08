var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4d32b057-4174-42e9-87a3-291ae957b809","710046d9-7a2e-4ffa-b299-a82f1a056687","ab3ee811-9d89-4982-ba2a-60e2993eae44","0cf6548a-7d6d-4d83-b19d-947c961ba592","8a657b4a-659e-41af-8dae-fe988ab2e0cb","6fcc2669-e615-45ce-a809-8be052c079f6","b1d5620d-0d7b-4770-a97a-cb50a310ea9f","e17c4eb7-6983-4012-9875-67b0466c4afe","06428b4e-bd1e-4c5c-a6c8-c2bfd226f695","8e05a56c-9d8b-4caa-b9aa-acf98d053189","a2f33ad3-5de6-437e-b5e3-8fd288b12ee9","f982be0a-1f61-4e2a-a930-e1e097ca421b","1b890469-9927-4fd1-b16b-03bb1c9e7b6b","7c029752-1110-4264-9315-69a456c11d9e","39ddd14f-1091-4018-98c3-fb1fdc55a27c","9f140e09-02ac-47eb-b7af-d8764ba97620","39c649b5-59bc-492a-8e61-2097c00c88f6"],"propsByKey":{"4d32b057-4174-42e9-87a3-291ae957b809":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GeDUtGGrRf0BnCzfSwNnqTCYyJzrECcN/category_backgrounds/background_santa.png"},"710046d9-7a2e-4ffa-b299-a82f1a056687":{"name":"ground_snow_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wAz9fQ3UVdLojkSsI8ePjwyooSCnPzVW/category_environment/ground_snow_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"wAz9fQ3UVdLojkSsI8ePjwyooSCnPzVW","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wAz9fQ3UVdLojkSsI8ePjwyooSCnPzVW/category_environment/ground_snow_broken.png"},"ab3ee811-9d89-4982-ba2a-60e2993eae44":{"name":"rockIce_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gIGJ.1uWK69Stk7gn_BcFEkB6mS_I_.A/category_obstacles/rockIce.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"gIGJ.1uWK69Stk7gn_BcFEkB6mS_I_.A","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gIGJ.1uWK69Stk7gn_BcFEkB6mS_I_.A/category_obstacles/rockIce.png"},"0cf6548a-7d6d-4d83-b19d-947c961ba592":{"name":"rockIceDown_1","sourceUrl":"assets/api/v1/animation-library/gamelab/kqHNMGetDaE3rd1MoI.CWXd362yPbVB7/category_obstacles/rockIceDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"kqHNMGetDaE3rd1MoI.CWXd362yPbVB7","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/kqHNMGetDaE3rd1MoI.CWXd362yPbVB7/category_obstacles/rockIceDown.png"},"8a657b4a-659e-41af-8dae-fe988ab2e0cb":{"name":"ore_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/mVlscciFx3AdNCGPLJDPMiYWc9.yhvJ_/category_obstacles/ore_gold.png"},"6fcc2669-e615-45ce-a809-8be052c079f6":{"name":"carrot_gold_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7/category_food/carrot_gold.png","frameSize":{"x":78,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7","loadedFromSource":true,"saved":true,"sourceSize":{"x":78,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LAW.Xj.ys6BFIpkx7tRDDUCTXl9sLAn7/category_food/carrot_gold.png"},"b1d5620d-0d7b-4770-a97a-cb50a310ea9f":{"name":"powerup_bubble_1","sourceUrl":"assets/api/v1/animation-library/gamelab/3TQz3iv0KPr7A1C770TPJppbxpilEpsF/category_gameplay/powerup_bubble.png","frameSize":{"x":71,"y":70},"frameCount":1,"looping":true,"frameDelay":2,"version":"3TQz3iv0KPr7A1C770TPJppbxpilEpsF","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":70},"rootRelativePath":"assets/api/v1/animation-library/gamelab/3TQz3iv0KPr7A1C770TPJppbxpilEpsF/category_gameplay/powerup_bubble.png"},"e17c4eb7-6983-4012-9875-67b0466c4afe":{"name":"alienBlue_walk_2","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":2,"looping":true,"frameDelay":3,"version":"tQ0QCcvL37Vllt4faO0vfaaeBs0aidhr","loadedFromSource":true,"saved":true,"sourceSize":{"x":138,"y":98},"rootRelativePath":"assets/e17c4eb7-6983-4012-9875-67b0466c4afe.png"},"06428b4e-bd1e-4c5c-a6c8-c2bfd226f695":{"name":"alienBlue_jump_1","sourceUrl":"assets/api/v1/animation-library/gamelab/KSRRyEm0YzV1bak7vv5cFaqcKGavf0I2/category_characters/alienBlue_jump.png","frameSize":{"x":66,"y":93},"frameCount":1,"looping":true,"frameDelay":2,"version":"KSRRyEm0YzV1bak7vv5cFaqcKGavf0I2","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":93},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KSRRyEm0YzV1bak7vv5cFaqcKGavf0I2/category_characters/alienBlue_jump.png"},"8e05a56c-9d8b-4caa-b9aa-acf98d053189":{"name":"alienBlue_walk_1","sourceUrl":null,"frameSize":{"x":69,"y":98},"frameCount":1,"looping":true,"frameDelay":12,"version":"23mlmvPWLTvnMtq4XmJBI6DWL1MNio43","loadedFromSource":true,"saved":true,"sourceSize":{"x":69,"y":98},"rootRelativePath":"assets/8e05a56c-9d8b-4caa-b9aa-acf98d053189.png"},"a2f33ad3-5de6-437e-b5e3-8fd288b12ee9":{"name":"desert_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"J3Q3h37QnHKcTZyynufyS_4jVMCw6xrT","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/a2f33ad3-5de6-437e-b5e3-8fd288b12ee9.png"},"f982be0a-1f61-4e2a-a930-e1e097ca421b":{"name":"pine_trees_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"CrGrqJrMtPWw5gTDUa4ynCiyQzgHa3va","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/f982be0a-1f61-4e2a-a930-e1e097ca421b.png"},"1b890469-9927-4fd1-b16b-03bb1c9e7b6b":{"name":"ground_wood_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gnP5Xcl3WVkHBkCDru8FygDTjkfv.nTG/category_environment/ground_wood_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"gnP5Xcl3WVkHBkCDru8FygDTjkfv.nTG","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gnP5Xcl3WVkHBkCDru8FygDTjkfv.nTG/category_environment/ground_wood_broken.png"},"7c029752-1110-4264-9315-69a456c11d9e":{"name":"ground_grass_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ob_82sFDBfxzTsmevhTazDGxLmup3Kp/category_environment/ground_grass_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ob_82sFDBfxzTsmevhTazDGxLmup3Kp","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ob_82sFDBfxzTsmevhTazDGxLmup3Kp/category_environment/ground_grass_broken.png"},"39ddd14f-1091-4018-98c3-fb1fdc55a27c":{"name":"cactus_1","sourceUrl":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png","frameSize":{"x":117,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r","loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/VYzliHlUTL2SWqwxkbMhDVVLcygS3g5r/category_obstacles/cactus.png"},"9f140e09-02ac-47eb-b7af-d8764ba97620":{"name":"rockGrass_1","sourceUrl":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/c7njzBqNr5dJqCb8jXbsXQfJEdmMskSf/category_obstacles/rockGrass.png"},"39c649b5-59bc-492a-8e61-2097c00c88f6":{"name":"rockGrassDown_1","sourceUrl":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png","frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":2,"version":"rd9oh060owV1Tug6HNh3TsO_MuJFZCK9","loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/api/v1/animation-library/gamelab/rd9oh060owV1Tug6HNh3TsO_MuJFZCK9/category_obstacles/rockGrassDown.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Create a background
var backGround = createSprite(400, 200, 800, 400);
backGround.setAnimation("santa_1");
backGround.scale = 2;

//Create a ground sprite
var ground = createSprite(200, 405, 400, 20);
ground.setAnimation("ground_snow_broken_1");
ground.width = ground.width*8;
ground.height = ground.height/2;

//Create a player sprite
var player = createSprite(80, 355, 20, 50);
player.setAnimation("alienBlue_walk_2");
player.scale = 0.7;
player.setCollider("rectangle", 0, 0, 35, 95);           
player.debug = false;
 
//Create an invisible ground
var invisibleGround = createSprite(200,390,400,5);
invisibleGround.visible = false;

//Create Obstacles group
var ObstaclesGroup = createGroup();
var PointsGroup = createGroup();
var PointsGroup2 = createGroup();
var PowerupGroup = createGroup();

var PLAY = 1;
var END = 0;
var gameState = PLAY;

//score
var score = 0;

//distance
var distance = 0;

function draw() {
 
 //set background  
 background("backGround");
 
 if (gameState === PLAY) {
  
  if (score>49 && score<99) {
   backGround.setAnimation("desert_1"); 
   
   ground.setAnimation("ground_wood_broken_1");
   
   if (ground.x <0) {
    ground.x = ground.width/17;
   }
   
   if (World.frameCount%70===0) {
   var cactus = createSprite(400, 350);
   cactus.setAnimation("cactus_1");
   cactus.scale = 0.5;
   cactus.velocityX = -(4+6*score/50);
   cactus.lifetime = 100;
   ObstaclesGroup.add(cactus);
   }
   
  }
  
  if (score>99) {
   backGround.setAnimation("pine_trees_1");
   backGround.scale = 2;
   
   ground.setAnimation("ground_grass_broken_1");
   
   if (ground.x <0) {
    ground.x = ground.width/17;
   }
   
   if (World.frameCount%90===0) {
    var rock = createSprite(400, 50, 40, 20);
    rock.setAnimation("rockGrassDown_1");
    rock.scale = 0.5;
    rock.velocityX = -(4+6*score/50);
    rock.lifetime = 100;
    ObstaclesGroup.add(rock);
   }
   
   if (World.frameCount%130===0) {
    var rock2 = createSprite(400, 355, 40, 20);
    rock2.setAnimation("rockGrass_1");
    rock2.scale = 0.5;
    rock2.velocityX = -(4+6*score/50);
    rock2.lifetime = 100;
    ObstaclesGroup.add(rock2);
   }
  }
  
  //Move the background
  backGround.velocityX = -(4+6*score/50);
  
  if (backGround.x <0){
   backGround.x = backGround.width/2;
  }
  
  //Move the ground
  ground.velocityX = -(4+6*score/50);
   
  if (ground.x <0) {
   ground.x = ground.width/2;
  }
  
  //Spawn the obstacles
  if (score >0 && score <49) {
   spawnObstacles1();
   spawnObstacles2();
  }
  
  //Display distance covered
  distance = Math.round(World.frameCount/3);

  //Make the player jump when space key is pressed
  if (keyDown("space")){
   player.velocityY = -10;
  }
  
  if (player.y <354) {
   player.setAnimation("alienBlue_jump_1");
   player.scale = 0.7;
  }
  
  if (player.y >354) {
   player.setAnimation("alienBlue_walk_2");
   player.scale = 0.7;
  }
   
  //Add gravity
  player.velocityY = player.velocityY + 0.8;  
   
  
  
  //Spawn the points
  points1();
  points2();
  powerUp();

  if (PointsGroup.isTouching(player)) {
   PointsGroup.destroyEach();
   score = score+1;
   playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
  }
  
  if (PointsGroup2.isTouching(player)) {
   PointsGroup2.destroyEach();
   score = score+3;
   playSound("assets/category_achievements/lighthearted_bonus_objective_4.mp3", false);
  }
  
  if (PowerupGroup.isTouching(player)) {
   PowerupGroup.destroyEach();
   score = score+10;
   playSound("assets/category_points/vibrant_affirm_or_open.mp3", false);
  }
  
  if (distance <0 && distance%100 === 0) {
   playSound("assets/category_achievements/vibrant_game_postive_achievement_2.mp3", false);
  }
  
  if (ObstaclesGroup.isTouching(player)) {
   playSound("assets/default.mp3", false);
   gameState = END;
   ObstaclesGroup.setVelocityXEach(0);
   PointsGroup.setVelocityXEach(0);
   PointsGroup2.setVelocityXEach(0);
   PowerupGroup.setVelocityXEach(0);
  } 
   
  } else if (gameState === END) {
    ground.velocityX = 0;
    backGround.velocityX = 0;
    
    player.velocityY = 0;
    player.setAnimation("alienBlue_walk_1");
    
    ObstaclesGroup.setLifetimeEach(-1);
    PointsGroup.setLifetimeEach(-1);
    PointsGroup2.setLifetimeEach(-1);
    PowerupGroup.setLifetimeEach(-1);
  }
  
  player.collide(invisibleGround);
  
  drawSprites();
  
  textSize(18);
  fill("lightBlue");
  textFont("georgia");
  text("Distance: " +distance ,25, 25); 
  
  textSize(18);
  fill("lightBlue");
  textFont("georgia");
  text("Score: " +score ,25, 50); 
 
  if (gameState === END) {
   textSize(18);
   fill("lightBlue");
   textFont("arial");
   text("Game Over", 145, 200); 
  }
}

var rand = randomNumber(200, 320);

function spawnObstacles1() {
 if (World.frameCount%90 === 0) {
  var ice = createSprite(400, 355, 40, 20);
  ice.setAnimation("rockIce_1");
  ice.scale = 0.5;
  ice.velocityX = -(4+6*score/50);
  ice.lifetime = 100;
  ObstaclesGroup.add(ice);
 }
}

function spawnObstacles2() {
 if (World.frameCount%140 === 0) {
  var ice2 = createSprite(400, 50, 40, 20);
  ice2.setAnimation("rockIceDown_1");
  ice2.scale = 0.5;
  ice2.height = rand;
  ice2.velocityX = -(4+6*score/50);
  ice2.lifetime = 100;
  ObstaclesGroup.add(ice2);
 }
}

function points1() {
 if (World.frameCount%110 === 0) {
  var ore = createSprite(400, 200, 10, 10);
  ore.setAnimation("ore_gold_1");
  ore.scale = 0.5;
  ore.y = randomNumber(20, 250);
  ore.velocityX = -(4+6*score/50);
  ore.lifetime = 100;
  PointsGroup.add(ore);
 }
}

function points2() {
 if (World.frameCount%200 === 0) {
  var coin = createSprite(400, 350, 10, 10);
  coin.setAnimation("carrot_gold_1");
  coin.scale = 0.5;
  coin.velocityX = -(4+6*score/50);
  coin.lifetime = 100;
  PointsGroup2.add(coin);
 }
}

function powerUp() {
 if (World.frameCount%350 === 0) {
  var powerup = createSprite(400, 200, 30, 50);
  powerup.setAnimation("powerup_bubble_1");
  powerup.scale = 0.5;
  powerup.velocityX = -(4+6*score/50);
  powerup.lifetime = 100;
  PowerupGroup.add(powerup);
 }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
