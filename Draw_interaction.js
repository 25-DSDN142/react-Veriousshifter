// ----=  HANDS  =----
  let ComputingLabImage;
function prepareInteraction() {
  ComputingLabImage = loadImage('ComputingLabImage.jpg');
}

function drawInteraction(faces, hands) {
  image(ComputingLabImage, 0, 0, width, height);
  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  //this looks in the hands array, and sorts out the left and right hands into two variables
  let LH = hands.find(hand => hand.handedness === "Left");
  let RH = hands.find(hand => hand.handedness === "Right");

  //------------------------------------------------------------
  
  //facePart
  // for loop to capture if there is more than one face on the screen. This applies the same process to all faces. 
  for (let i = 0; i < faces.length; i++) {
    let face = faces[i]; // face holds all the keypoints of the face
    if (showKeypoints) {
      //drawPoints(face)
    }
    // console.log(face);

    // Left Eye
    let leftEyeCenterX = face.leftEye.centerX;
    let leftEyeCenterY = face.leftEye.centerY;
    let leftEyeWidth = face.leftEye.width;
    let leftEyeHeight = face.leftEye.height;

    // Right Eye
    let rightEyeCenterX = face.rightEye.centerX;
    let rightEyeCenterY = face.rightEye.centerY;
    let rightEyeWidth = face.rightEye.width;
    let rightEyeHeight = face.rightEye.height;

    // Brightnose
    let noseTipX = face.keypoints[1].x;
    let noseTipY = face.keypoints[1].y;
    let rightNoseX = face.keypoints[275].x;
    let rightNoseY = face.keypoints[275].y;
    let leftNoseX = face.keypoints[45].x
    let leftNoseY = face.keypoints[45].y;
    let nasalBridgeX = face.keypoints[195].x;
    let nasalBridgeY = face.keypoints[195].y;

    // Face
    let bottomChinX = face.keypoints[152].x;
    let bottomChinY = face.keypoints[152].y;
    let rightJawX = face.keypoints[397].x;
    let rightJawY = face.keypoints[397].y;
    let leftJawX = face.keypoints[172].x;
    let leftJawY = face.keypoints[172].y;
    let rightJawlineX = face.keypoints[379].x;
    let rightJawlineY = face.keypoints[379].y;
    let leftJawlineX = face.keypoints[150].x;
    let leftJawlineY = face.keypoints[150].y;
    let rightCheekX = face.keypoints[454].x;
    let rightCheekY = face.keypoints[454].y;
    let leftCheekX = face.keypoints[234].x;
    let leftCheekY = face.keypoints[234].y;
    let rightForeheadX = face.keypoints[251].x;
    let rightForeheadY = face.keypoints[251].y;
    let leftForeheadX = face.keypoints[21].x;
    let leftForeheadY = face.keypoints[21].y;
    let foreheadCenterX = face.keypoints[10].x;
    let foreheadCenterY = face.keypoints[10].y;
    let rightForeheadCenterX = face.keypoints[297].x;
    let rightForeheadCenterY = face.keypoints[297].y;
    let leftForeheadCenterX = face.keypoints[67].x;
    let leftForeheadCenterY = face.keypoints[67].y;

    // Leftside of the neck
    let leftNeckPoint1X = face.keypoints[149].x;
    let leftNeckPoint1Y = face.keypoints[149].y;
    let leftNeckPoint2X = face.keypoints[150].x;
    let leftNeckPoint2Y = face.keypoints[150].y;

    // Rightside of the neck
    let rightNeckPoint1X = face.keypoints[378].x;
    let rightNeckPoint1Y = face.keypoints[378].y;
    let rightNeckPoint2X = face.keypoints[379].x;
    let rightNeckPoint2Y = face.keypoints[379].y;

    // Lips
    let lipsCenterX = face.lips.centerX;
    let lipsCenterY = face.lips.centerY;
    let lipsWidth = face.lips.width;
    let lipsHeight = face.lips.height;
    let lipLeftX = face.keypoints[40].x;
    let lipLeftY = face.keypoints[40].y;
    let lipRightX = face.keypoints[270].x;
    let lipRightY = face.keypoints[270].y;

    // Upper lip
    let lipUpperCentreTopX = face.keypoints[0].x;
    let lipUpperCentreTopY = face.keypoints[0].y;
    let lipUpperLeftX = face.keypoints[37].x;
    let lipUpperLeftY = face.keypoints[37].y;
    let lipUpperRightX = face.keypoints[267].x;
    let lipUpperRightY = face.keypoints[267].y;
    let leftLipUpperMidddleX = face.keypoints[39].x;
    let leftLipUpperMidddleY = face.keypoints[39].y;
    let rightLipUpperMidddleX = face.keypoints[269].x;
    let rightLipUpperMidddleY = face.keypoints[269].y;
    let lipUpperCentreBottomX = face.keypoints[12].x;
    let lipUpperCentreBottomY = face.keypoints[12].y;

    // Lower lip
    let lipLowerCentreTopX = face.keypoints[14].x;
    let lipLowerCentreTopY = face.keypoints[14].y;
    let lipLowerCentreBottomX = face.keypoints[15].x;
    let lipLowerCentreBottomY = face.keypoints[15].y;
    let lipLowerLeftX = face.keypoints[179].x;
    let lipLowerLeftY = face.keypoints[179].y;
    let lipLowerRightX = face.keypoints[403].x;
    let lipLowerRightY = face.keypoints[403].y;

    // Hair
    let hairPoint1X = face.keypoints[338].x;
    let hairPoint1Y = face.keypoints[338].y;
    let hairPoint2X = face.keypoints[336].x;
    let hairPoint2Y = face.keypoints[336].y;
    let hairPoint3X = face.keypoints[168].x;
    let hairPoint3Y = face.keypoints[168].y;
    let hairPoint4X = face.keypoints[151].x;
    let hairPoint4Y = face.keypoints[151].y;
    let hairPoint5X = face.keypoints[10].x;
    let hairPoint5Y = face.keypoints[10].y;
    let hairPoint6X = face.keypoints[371].x;
    let hairPoint6Y = face.keypoints[371].y;
    let hairPoint7X = face.keypoints[108].x;
    let hairPoint7Y = face.keypoints[108].y;
    let hairPoint8X = face.keypoints[193].x;
    let hairPoint8Y = face.keypoints[193].y;
    let hairPoint9X = face.keypoints[56].x;
    let hairPoint9Y = face.keypoints[56].y;
    let hairPoint10X = face.keypoints[66].x;
    let hairPoint10Y = face.keypoints[66].y;
    let hairPoint11X = face.keypoints[158].x;
    let hairPoint11Y = face.keypoints[158].y;
    let hairPoint12X = face.keypoints[67].x;
    let hairPoint12Y = face.keypoints[67].y;
    let hairPoint13X = face.keypoints[162].x;
    let hairPoint13Y = face.keypoints[162].y;
    let hairPoint14X = face.keypoints[205].x;
    let hairPoint14Y = face.keypoints[205].y;
    let hairPoint15X = face.keypoints[70].x;
    let hairPoint15Y = face.keypoints[70].y;
    let hairPoint16X = face.keypoints[93].x;
    let hairPoint16Y = face.keypoints[93].y;
    let hairPoint17X = face.keypoints[58].x;
    let hairPoint17Y = face.keypoints[58].y;
    let hairPoint18X = face.keypoints[71].x;
    let hairPoint18Y = face.keypoints[71].y;
    let hairPoint19X = face.keypoints[227].x;
    let hairPoint19Y = face.keypoints[227].y;
    let hairPoint20X = face.keypoints[177].x;
    let hairPoint20Y = face.keypoints[177].y;
    let hairPoint21X = face.keypoints[137].x;
    let hairPoint21Y = face.keypoints[137].y;
    let hairPoint22X = face.keypoints[54].x;
    let hairPoint22Y = face.keypoints[54].y;
    let hairPoint23X = face.keypoints[127].x;
    let hairPoint23Y = face.keypoints[127].y;
    let hairPoint24X = face.keypoints[356].x;
    let hairPoint24Y = face.keypoints[356].y;
    let hairPoint25X = face.keypoints[361].x;
    let hairPoint25Y = face.keypoints[361].y;
    let hairPoint26X = face.keypoints[367].x;
    let hairPoint26Y = face.keypoints[367].y;
    let hairPoint27X = face.keypoints[297].x;
    let hairPoint27Y = face.keypoints[297].y;
    let hairPoint28X = face.keypoints[333].x;
    let hairPoint28Y = face.keypoints[333].y;
    let hairPoint29X = face.keypoints[366].x;
    let hairPoint29Y = face.keypoints[366].y;
    let hairPoint30X = face.keypoints[427].x;
    let hairPoint30Y = face.keypoints[427].y;
    let hairPoint31X = face.keypoints[401].x;
    let hairPoint31Y = face.keypoints[401].y;
    let hairPoint32X = face.keypoints[454].x;
    let hairPoint32Y = face.keypoints[454].y;
    let hairPoint33X = face.keypoints[389].x;
    let hairPoint33Y = face.keypoints[389].y;
    let hairPoint34X = face.keypoints[298].x;
    let hairPoint34Y = face.keypoints[298].y;
    let hairPoint35X = face.keypoints[345].x;
    let hairPoint35Y = face.keypoints[345].y;
    let hairPoint36X = face.keypoints[447].x;
    let hairPoint36Y = face.keypoints[447].y;
    let hairPoint37X = face.keypoints[284].x;
    let hairPoint37Y = face.keypoints[284].y;
    let hairPoint38X = face.keypoints[251].x;
    let hairPoint38Y = face.keypoints[251].y;
    let hairPoint39X = face.keypoints[300].x;
    let hairPoint39Y = face.keypoints[300].y;
    let hairPoint40X = face.keypoints[276].x;
    let hairPoint40Y = face.keypoints[276].y;
    let hairPoint41X = face.keypoints[353].x;
    let hairPoint41Y = face.keypoints[353].y;
    let hairPoint42X = face.keypoints[265].x;
    let hairPoint42Y = face.keypoints[265].y;

    
    /*
    Once this program has a face, it knows some things about it.
    This includes how to draw a box around the face, and an oval. 
    It also knows where the key points of the following parts are:
     face.leftEye
     face.leftEyebrow
     face.lips
     face.rightEye
     face.rightEyebrow
    */

    /*
    Start drawing on the face here
    */


    // Back of Lab coat
    fill(0,43,54)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(770,400)
    quadraticVertex(670,380,570,400)
    quadraticVertex(600,430,600,450)
    quadraticVertex(670,500,740,450)
    quadraticVertex(740,430,760,400)
    endShape();

    beginShape();
    vertex(570,420)
    quadraticVertex(540,450,670,480)
    quadraticVertex(800,450,769,420)
    endShape();

    // Neck
    fill(255,238,217)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(leftNeckPoint1X-20,leftNeckPoint1Y-60)
    quadraticVertex(610,440,600,480)
    vertex(740,480)
    quadraticVertex(730,440,rightNeckPoint1X+20,rightNeckPoint1Y-60)
    endShape();

    fill(255,236,200)
    noStroke()
    beginShape();
    vertex(leftNeckPoint1X-5,leftNeckPoint1Y-60);
    quadraticVertex(leftNeckPoint1X-4,leftNeckPoint1Y,bottomChinX,bottomChinY+10);
    quadraticVertex(rightNeckPoint1X+4,rightNeckPoint1Y,rightNeckPoint1X+5,rightNeckPoint1Y-60);
    endShape();


    // Lab coat
    fill(19,79,92)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(260,720)
    quadraticVertex(340,525,380,500)
    vertex(580,460)
    quadraticVertex(590,440,570,420)
    quadraticVertex(560,410,570,400)
    vertex(580,400)
    quadraticVertex(600,430,600,450)
    quadraticVertex(670,500,740,450)
    quadraticVertex(740,430,760,400)
    vertex(770,400)
    quadraticVertex(780,410,770,420)
    quadraticVertex(750,440,760,460)
    vertex(960,500)
    quadraticVertex(1000,525,1080,720)
    vertex(920,720)
    vertex(900,680)
    vertex(900,750)
    vertex(440,750)
    vertex(440,680)
    vertex(420,720)
    vertex(260,720)
    endShape();

    // Lab coat stripe part
    fill(255,212,71)
    stroke(255,212,71)
    strokeWeight(1)
    beginShape();
    vertex(800,468)
    vertex(800,720)
    vertex(820,720)
    vertex(820,472)
    endShape();

    // Lab coat stripe part 2
    fill(51,140,187)
    stroke(51,140,187)
    strokeWeight(1)
    beginShape();
    vertex(540,468)
    vertex(540,720)
    vertex(534,720)
    vertex(534,469.5)
    endShape();

    beginShape();
    vertex(526,471)
    vertex(526,720)
    vertex(520,720)
    vertex(520,472)
    endShape();

    // Lab coat hood part
    fill(19,79,92)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(769,420)
    quadraticVertex(840,430,830,460)
    quadraticVertex(860,480,730,500)
    quadraticVertex(680,490,670,480)
    quadraticVertex(660,490,610,500)
    quadraticVertex(480,480,510,460)
    quadraticVertex(500,430,570,420)
    quadraticVertex(540,450,670,480)
    quadraticVertex(800,450,769,420)
    endShape();

    beginShape();
    vertex(830,460)
    quadraticVertex(820,468,800,470)
    endShape();
    beginShape();
    vertex(510,460)
    quadraticVertex(520,468,540,470)
    endShape();

    // Badge
    fill(255,212,71)
    stroke(0)
    strokeWeight(1)
    ellipse(810,580,80,80)
    fill(215,38,56)
    ellipse(810,580,70,70)
    fill(255,212,71)
    beginShape();
    vertex(808,545)
    vertex(808,578)
    vertex(775,578)
    vertex(775,582)
    vertex(808,582)
    vertex(808,615)
    vertex(812,615)
    vertex(812,582)
    vertex(845,582)
    vertex(845,578)
    vertex(812,578)
    vertex(812,545)
    endShape();

    
    // Face
    fill(255,238,217)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(rightForeheadX,rightForeheadY);
    quadraticVertex(rightCheekX,rightCheekY,rightJawX,rightJawY);
    vertex(rightJawX,rightJawY);
    quadraticVertex(rightJawlineX,rightJawlineY,bottomChinX,bottomChinY);
    quadraticVertex(leftJawlineX,leftJawlineY,leftJawX,leftJawY);
    quadraticVertex(leftCheekX,leftCheekY,leftForeheadX,leftForeheadY);
    quadraticVertex(leftForeheadCenterX,leftForeheadCenterY,foreheadCenterX,foreheadCenterY);
    quadraticVertex(rightForeheadCenterX,rightForeheadCenterY,rightForeheadX,rightForeheadY);
    endShape();


    // Glasses
    fill(255,255,255,150)
    stroke(0)
    strokeWeight(2)
    rect(leftEyeCenterX-40,leftEyeCenterY-30,80,60,30)
    rect(rightEyeCenterX-40,rightEyeCenterY-30,80,60,30)
    line(leftEyeCenterX-80,leftEyeCenterY-10,rightEyeCenterX+80,rightEyeCenterY-10)
    


    // Lips
    fill(193,55,69)
    noStroke()
    beginShape();
    vertex(lipLeftX,lipLeftY);
    quadraticVertex(leftLipUpperMidddleX,leftLipUpperMidddleY,lipUpperLeftX,lipUpperLeftY);
    quadraticVertex(lipUpperCentreTopX,lipUpperCentreTopY,lipUpperRightX,lipUpperRightY);
    quadraticVertex(rightLipUpperMidddleX,rightLipUpperMidddleY,lipRightX,lipRightY);
    quadraticVertex(lipUpperCentreBottomX,lipUpperCentreBottomY,lipLeftX,lipLeftY);
    quadraticVertex(lipLowerCentreTopX,lipLowerCentreTopY,lipRightX,lipRightY);
    quadraticVertex(lipLowerRightX,lipLowerRightY,lipLowerCentreBottomX,lipLowerCentreBottomY);
    quadraticVertex(lipLowerLeftX,lipLowerLeftY,lipLeftX,lipLeftY);
    endShape();


    // Nose
    fill(255,246,236)
    noStroke()
    beginShape();
    vertex(nasalBridgeX,nasalBridgeY);
    vertex(rightNoseX,rightNoseY);
    vertex(noseTipX,noseTipY);
    vertex(leftNoseX,leftNoseY);
    endShape();


    // Eyes
    fill(255, 255, 255);
    stroke(0)
    strokeWeight(2)
    ellipse(leftEyeCenterX,leftEyeCenterY,leftEyeWidth*1.2,leftEyeHeight*1.5);
    ellipse(rightEyeCenterX,rightEyeCenterY,rightEyeWidth*1.2,rightEyeHeight*1.5);
    fill(0)
    ellipse(leftEyeCenterX,leftEyeCenterY,30,leftEyeHeight*1.5);
    ellipse(rightEyeCenterX,rightEyeCenterY,30,leftEyeHeight*1.5);

    drawX(rightEyeCenterX,rightEyeCenterY);
    drawX(leftEyeCenterX,leftEyeCenterY);


    // Backside of the Hair
    fill(219,228,238)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(hairPoint15X,hairPoint15Y);
    quadraticVertex(hairPoint16X,hairPoint16Y,hairPoint17X,hairPoint17Y+80);
    quadraticVertex(hairPoint16X-30,hairPoint16Y+40,hairPoint18X,hairPoint18Y);
    quadraticVertex(hairPoint19X-20,hairPoint19Y+15,hairPoint20X-10,hairPoint20Y+60);
    quadraticVertex(hairPoint21X-30,hairPoint21Y+50,hairPoint19X-25,hairPoint19Y);
    quadraticVertex(hairPoint19X-28,hairPoint19Y+20,hairPoint20X-36,hairPoint20Y);
    quadraticVertex(hairPoint23X-70,hairPoint23Y-160,hairPoint22X+100,hairPoint22Y-120);
    quadraticVertex(hairPoint22X+120,hairPoint22Y-120,hairPoint5X+20,hairPoint5Y-85)
    quadraticVertex(hairPoint24X+40,hairPoint24Y-160,hairPoint25X+20,hairPoint25Y-40);
    quadraticVertex(hairPoint26X+10,hairPoint26Y-20,rightJawX,rightJawY);
    quadraticVertex(rightCheekX,rightCheekY,rightForeheadX,rightForeheadY);
    quadraticVertex(rightForeheadCenterX,rightForeheadCenterY,foreheadCenterX,foreheadCenterY);
    quadraticVertex(leftForeheadCenterX,leftForeheadCenterY,hairPoint15X,hairPoint15Y);
    endShape();


    // Frontside of the Hair
    beginShape();
    vertex(hairPoint5X+21,hairPoint5Y-85);
    quadraticVertex(hairPoint5X+50,hairPoint5Y-60,hairPoint1X,hairPoint1Y);
    endShape();
    beginShape();
    vertex(hairPoint22X+100,hairPoint22Y-120);
    quadraticVertex(hairPoint23X+40,hairPoint23Y-180,hairPoint19X,hairPoint19Y-160);
    quadraticVertex(hairPoint13X-30,hairPoint13Y-70,hairPoint13X-40,hairPoint13Y-80);
    quadraticVertex(hairPoint13X-30,hairPoint13Y-50,hairPoint19X,hairPoint19Y-140);
    endShape();
    beginShape();
    vertex(hairPoint5X+40,hairPoint5Y-40);
    quadraticVertex(hairPoint23X+90,hairPoint23Y-240,hairPoint19X-5,hairPoint19Y-90);
    vertex(hairPoint23X+50,hairPoint23Y-120);
    //quadraticVertex(hairPoint23X+100,hairPoint23Y-160,hairPoint5X+20,hairPoint5Y-85);
    endShape();


    // Rightside of the Hair
    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    vertex(hairPoint27X,hairPoint27Y-60);
    quadraticVertex(hairPoint28X+20,hairPoint28Y-100,hairPoint37X+20,hairPoint37Y);
    quadraticVertex(hairPoint38X+20,hairPoint38Y,hairPoint39X+50,hairPoint39Y);
    quadraticVertex(hairPoint40X+50,hairPoint40Y,hairPoint33X+16,hairPoint33Y);
    vertex(hairPoint41X+50,hairPoint41Y);
    quadraticVertex(hairPoint42X+20,hairPoint42Y,hairPoint24X,hairPoint24Y);
    quadraticVertex(hairPoint27X+20,hairPoint27Y-60,hairPoint1X,hairPoint1Y);
    endShape();

    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    vertex(hairPoint27X,hairPoint27Y-50);
    quadraticVertex(hairPoint28X+20,hairPoint28Y-80,hairPoint34X+20,hairPoint34Y);
    quadraticVertex(hairPoint33X,hairPoint33Y,hairPoint35X+40,hairPoint35Y);
    quadraticVertex(hairPoint36X+20,hairPoint36Y,hairPoint32X,hairPoint32Y);
    quadraticVertex(hairPoint29X,hairPoint29Y,hairPoint28X,hairPoint28Y-20);
    vertex(hairPoint27X,hairPoint27Y-40);
    vertex(hairPoint1X,hairPoint1Y);
    endShape();
    
    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    vertex(hairPoint27X,hairPoint27Y-20);
    vertex(hairPoint28X,hairPoint28Y);
    quadraticVertex(hairPoint29X,hairPoint29Y,hairPoint30X,hairPoint30Y);
    quadraticVertex(hairPoint31X,hairPoint31Y,hairPoint32X,hairPoint32Y);
    quadraticVertex(hairPoint33X,hairPoint33Y,hairPoint34X,hairPoint34Y-40);
    quadraticVertex(hairPoint28X,hairPoint28Y-60,hairPoint27X,hairPoint27Y-40);
    vertex(hairPoint1X,hairPoint1Y);
    endShape();


    // Leftside of the Hair
    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    vertex(hairPoint9X+28,hairPoint9Y-130);
    quadraticVertex(hairPoint13X-30,hairPoint13Y,hairPoint14X,hairPoint14Y-20);
    quadraticVertex(hairPoint13X-60,hairPoint13Y,hairPoint9X+20,hairPoint9Y-160);
    quadraticVertex(hairPoint5X+10,hairPoint5Y-80,hairPoint1X,hairPoint1Y);
    endShape();

    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    vertex(hairPoint8X+10,hairPoint8Y-138);
    vertex(hairPoint9X+16,hairPoint9Y-60);
    quadraticVertex(hairPoint10X,hairPoint10Y+20,hairPoint11X,hairPoint11Y);
    quadraticVertex(hairPoint12X-10,hairPoint12Y,hairPoint8X,hairPoint8Y-160);
    quadraticVertex(hairPoint5X+10,hairPoint5Y-60,hairPoint1X,hairPoint1Y);
    endShape();

    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    quadraticVertex(hairPoint2X,hairPoint2Y,hairPoint3X,hairPoint3Y);
    quadraticVertex(hairPoint4X-20,hairPoint4Y,hairPoint5X,hairPoint5Y-30);
    vertex(hairPoint1X,hairPoint1Y);
    endShape();

    beginShape();
    vertex(hairPoint1X,hairPoint1Y);
    vertex(hairPoint5X,hairPoint5Y-30);
    quadraticVertex(hairPoint4X-20,hairPoint4Y,hairPoint6X,hairPoint6Y);
    quadraticVertex(hairPoint7X-45,hairPoint7Y,hairPoint8X+10,hairPoint8Y-145);
    quadraticVertex(hairPoint5X+5,hairPoint5Y-45,hairPoint1X,hairPoint1Y);
    endShape();

    

     // fill(225, 225, 0);
    // ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth, leftEyeHeight);
    //drawPoints(face.leftEye);
    //drawPoints(face.leftEyebrow);
    //drawPoints(face.lips);
    //drawPoints(face.rightEye);
    //drawPoints(face.rightEyebrow);
    
    /*
    Stop drawing on the face here
    */

  }


  //------------------------------------------------------------

  //Hands part
  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);

    // Tip of each finger
    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    let middleFingerTipX = hand.middle_finger_tip.x;
    let middleFingerTipY = hand.middle_finger_tip.y;
    let ringFingerTipX = hand.ring_finger_tip.x;
    let ringFingerTipY = hand.ring_finger_tip.y;
    let pinkyFingerTipX = hand.pinky_finger_tip.x;
    let pinkyFingerTipY = hand.pinky_finger_tip.y;

    // Dip of each finger
    let thumbDipX = hand.keypoints[3].x;
    let thumbDipY = hand.keypoints[3].y;
    let indexFingerDipX = hand.keypoints[7].x;
    let indexFingerDipY = hand.keypoints[7].y;
    let middleFingerDipX = hand.keypoints[11].x;
    let middleFingerDipY = hand.keypoints[11].y;
    let ringFingerDipX = hand.keypoints[15].x;
    let ringFingerDipY = hand.keypoints[15].y;
    let pinkyFingerDipX = hand.keypoints[19].x;
    let pinkyFingerDipY = hand.keypoints[19].y;

    // Base of each finger
    let thumbBaseX = hand.keypoints[2].x;
    let thumbBaseY = hand.keypoints[2].y;
    let indexFingerBaseX = hand.keypoints[6].x;
    let indexFingerBaseY = hand.keypoints[6].y;
    let middleFingerBaseX = hand.keypoints[10].x;
    let middleFingerBaseY = hand.keypoints[10].y;
    let ringFingerBaseX = hand.keypoints[14].x;
    let ringFingerBaseY = hand.keypoints[14].y;
    let pinkyFingerBaseX = hand.keypoints[18].x;
    let pinkyFingerBaseY = hand.keypoints[18].y;

    // Knuckles
    let thumbKnuckleX = hand.keypoints[1].x;
    let thumbKnuckleY = hand.keypoints[1].y;
    let indexFingerKnuckleX = hand.keypoints[5].x;
    let indexFingerKnuckleY = hand.keypoints[5].y;
    let middleFingerKnuckleX = hand.keypoints[9].x;
    let middleFingerKnuckleY = hand.keypoints[9].y;
    let ringFingerKnuckleX = hand.keypoints[13].x;
    let ringFingerKnuckleY = hand.keypoints[13].y;
    let pinkyFingerKnuckleX = hand.keypoints[17].x;
    let pinkyFingerKnuckleY = hand.keypoints[17].y;

    // Wrist
    let wristX = hand.wrist.x;
    let wristY = hand.wrist.y;
    
    /*

    if (hand.handedness === "Left") {
    // I've tried to implement the left and right hand separately, but it doesn't work properly yet.
    // So currently only the left hand is drawn properly.
    Start drawing on the hands here
    */

    // Glove

    // Wrist
    fill(143,179,187);
    stroke(69,129,142)
    strokeWeight(1)
    beginShape();
    vertex(wristX-40,wristY-10);
    vertex(pinkyFingerKnuckleX-20,pinkyFingerKnuckleY);
    quadraticVertex(middleFingerKnuckleX,middleFingerKnuckleY-20,indexFingerKnuckleX+20,indexFingerKnuckleY);
    vertex(thumbBaseX-20,thumbBaseY);
    vertex(thumbKnuckleX+20,thumbKnuckleY);
    vertex(thumbKnuckleX+60,thumbKnuckleY+40);
    quadraticVertex(thumbKnuckleX-10,thumbKnuckleY+60,wristX-80,wristY+40);
    vertex(wristX-40,wristY-10);
    endShape();

    // Fingers
    beginShape();
    vertex(pinkyFingerKnuckleX-20,pinkyFingerKnuckleY);
    vertex(pinkyFingerBaseX-20,pinkyFingerBaseY);
    vertex(pinkyFingerDipX-20,pinkyFingerDipY);
    vertex(pinkyFingerTipX,pinkyFingerTipY);
    vertex(pinkyFingerDipX+20,pinkyFingerDipY);
    vertex(pinkyFingerBaseX+20,pinkyFingerBaseY);
    vertex(pinkyFingerKnuckleX+20,pinkyFingerKnuckleY);
    endShape();

    beginShape();
    vertex(ringFingerKnuckleX-20,ringFingerKnuckleY+10);
    vertex(ringFingerBaseX-20,ringFingerBaseY);
    vertex(ringFingerDipX-20,ringFingerDipY);
    vertex(ringFingerTipX,ringFingerTipY);
    vertex(ringFingerDipX+20,ringFingerDipY);
    vertex(ringFingerBaseX+20,ringFingerBaseY);
    vertex(ringFingerKnuckleX+20,ringFingerKnuckleY);
    endShape();

    beginShape();
    vertex(middleFingerKnuckleX-20,middleFingerKnuckleY+5);
    vertex(middleFingerBaseX-20,middleFingerBaseY);
    vertex(middleFingerDipX-20,middleFingerDipY);
    vertex(middleFingerTipX,middleFingerTipY);
    vertex(middleFingerDipX+20,middleFingerDipY);
    vertex(middleFingerBaseX+20,middleFingerBaseY);
    vertex(middleFingerKnuckleX+20,middleFingerKnuckleY);
    endShape();

    beginShape();
    vertex(indexFingerKnuckleX-20,indexFingerKnuckleY);
    vertex(indexFingerBaseX-20,indexFingerBaseY);
    vertex(indexFingerDipX-20,indexFingerDipY);
    vertex(indexFingerTipX,indexFingerTipY);
    vertex(indexFingerDipX+20,indexFingerDipY);
    vertex(indexFingerBaseX+20,indexFingerBaseY);
    vertex(indexFingerKnuckleX+20,indexFingerKnuckleY);
    endShape();

    beginShape();
    vertex(thumbBaseX-20,thumbBaseY);
    vertex(thumbDipX-20,thumbDipY);
    vertex(thumbTipX,thumbTipY);
    vertex(thumbDipX+20,thumbDipY);
    vertex(thumbBaseX+20,thumbBaseY);
    vertex(thumbKnuckleX+20,thumbKnuckleY);
    endShape();

    
    // Flask
    pinchCircle(hand);

    
    }
    if (hands.handedness === "Right") {
    // Wrist
    fill(143,179,187);
    stroke(69,129,142)
    strokeWeight(1)
    beginShape();
    vertex(wristX+40,wristY-10);
    vertex(pinkyFingerKnuckleX+20,pinkyFingerKnuckleY);
    quadraticVertex(middleFingerKnuckleX,middleFingerKnuckleY-20,indexFingerKnuckleX-20,indexFingerKnuckleY);
    vertex(thumbBaseX+20,thumbBaseY);
    vertex(thumbKnuckleX-20,thumbKnuckleY);
    vertex(thumbKnuckleX-60,thumbKnuckleY+40);
    quadraticVertex(thumbKnuckleX+10,thumbKnuckleY+60,wristX+80,wristY+40);
    vertex(wristX+40,wristY-10);
    endShape();
    }
    /*
    Stop drawing on the hands here
    */
  }




  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 

function drawX(X, Y) {
  push()

  fill(178,34,34)
  stroke(178,34,34)
  strokeWeight(4)
  line(X - 6, Y - 6, X + 6, Y + 6)
  line(X - 6, Y + 6, X + 6, Y - 6)

  pop()
}

function drawConnections(hand) {
  // Draw the skeletal connections
  push()
  for (let j = 0; j < connections.length; j++) {
    let pointAIndex = connections[j][0];
    let pointBIndex = connections[j][1];
    let pointA = hand.keypoints[pointAIndex];
    let pointB = hand.keypoints[pointBIndex];
    stroke(255, 0, 0);
    strokeWeight(2);
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
  pop()
}

function pinchCircle(hand) { // adapted from https://editor.p5js.org/ml5/sketches/DNbSiIYKB
  // Find the index finger tip and thumb tip
  let finger = hand.index_finger_tip;
  //let finger = hand.pinky_finger_tip;
  let thumb = hand.thumb_tip;

  // Draw circles at finger positions
  let centerX = (finger.x + thumb.x) / 2;
  let centerY = (finger.y + thumb.y) / 2;
  // Calculate the pinch "distance" between finger and thumb
  let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);

  // This circle's size is controlled by a "pinch" gesture
  fill(0, 255, 0, 200);
  stroke(255);
  strokeWeight(2);
  circle(centerX, centerY, pinch);

}


// This function draw's a dot on all the keypoints. It can be passed a whole face, or part of one. 
function drawPoints(feature) {

  push()
  for (let i = 0; i < feature.keypoints.length; i++) {
    let element = feature.keypoints[i];
    noStroke();
    fill(0, 255, 0);
    circle(element.x, element.y, 5);
  }
  pop()

}