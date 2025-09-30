// ----=  HANDS  =----
function prepareInteraction() {
  //bgImage = loadImage('/images/background.png');
}

function drawInteraction(faces, hands) {

  // hands part
  // USING THE GESTURE DETECTORS (check their values in the debug menu)
  // detectHandGesture(hand) returns "Pinch", "Peace", "Thumbs Up", "Pointing", "Open Palm", or "Fist"

  // for loop to capture if there is more than one hand on the screen. This applies the same process to all hands.
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    if (showKeypoints) {
      drawPoints(hand)
      drawConnections(hand)
    }
    // console.log(hand);
    let indexFingerTipX = hand.index_finger_tip.x;
    let indexFingerTipY = hand.index_finger_tip.y;
    let middleFingerTipX = hand.middle_finger_tip.x;
    let middleFingerTipY = hand.middle_finger_tip.y;
    let ringFingerTipX = hand.ring_finger_tip.x;
    let ringFingerTipY = hand.ring_finger_tip.y;
    let pinkyFingerTipX = hand.pinky_finger_tip.x;
    let pinkyFingerTipY = hand.pinky_finger_tip.y;
    let thumbTipX = hand.thumb_tip.x;
    let thumbTipY = hand.thumb_tip.y;
    /*
    Start drawing on the hands here
    */

    // pinchCircle(hand)
    fill(225, 225, 0);
    ellipse(thumbTipX, thumbTipY, 40, 40);
    ellipse(indexFingerTipX, indexFingerTipY, 40, 40);
    ellipse(middleFingerTipX, middleFingerTipY, 40, 40);
    ellipse(ringFingerTipX, ringFingerTipY, 40, 40);
    ellipse(pinkyFingerTipX, pinkyFingerTipY, 40, 40);

    /*
    Stop drawing on the hands here
    */
  }



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

    // Left eyebrow
    let leftEyebrowCenterX = face.leftEyebrow.centerX;
    let leftEyebrowCenterY = face.leftEyebrow.centerY;
    let leftEyebrowWidth = face.leftEyebrow.width;
    let leftEyebrowHeight = face.leftEyebrow.height;
    // Right eyebrow
    let rightEyebrowCenterX = face.rightEyebrow.centerX;
    let rightEyebrowCenterY = face.rightEyebrow.centerY;
    let rightEyebrowWidth = face.rightEyebrow.width;
    let rightEyebrowHeight = face.rightEyebrow.height;

    // Brightnose
    let noseTipX = face.keypoints[4].x;
    let noseTipY = face.keypoints[4].y;
    let rightNoseX = face.keypoints[248].x;
    let rightNoseY = face.keypoints[248].y;
    let leftNoseX = face.keypoints[3].x
    let leftNoseY = face.keypoints[3].y;
    let nasalBridgeX = face.keypoints[6].x;
    let nasalBridgeY = face.keypoints[6].y;

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

    // Face
    fill(255,238,217)
    stroke(0)
    strokeWeight(1)
    beginShape();
    vertex(rightForeheadX, rightForeheadY);
    quadraticVertex(rightCheekX, rightCheekY, rightJawX, rightJawY);
    vertex(rightJawX, rightJawY);
    quadraticVertex(rightJawlineX, rightJawlineY, bottomChinX, bottomChinY);
    quadraticVertex(leftJawlineX, leftJawlineY, leftJawX, leftJawY);
    quadraticVertex(leftCheekX, leftCheekY, leftForeheadX, leftForeheadY);
    vertex(leftForeheadX, leftForeheadY);
    endShape();

    // Nose
    fill(255,246,236)
    noStroke()
    beginShape();
    vertex(nasalBridgeX, nasalBridgeY);
    vertex(rightNoseX, rightNoseY);
    vertex(noseTipX, noseTipY);
    vertex(leftNoseX, leftNoseY);
    endShape();

    // Eyes
    fill(255, 255, 255);
    stroke(0)
    strokeWeight(2)
    ellipse(leftEyeCenterX, leftEyeCenterY, leftEyeWidth*1.2, leftEyeHeight*1.5);
    ellipse(rightEyeCenterX, rightEyeCenterY, rightEyeWidth*1.2, rightEyeHeight*1.5);
    fill(0)
    ellipse(leftEyeCenterX, leftEyeCenterY, 30, leftEyeHeight*1.5);
    ellipse(rightEyeCenterX, rightEyeCenterY, 30, leftEyeHeight*1.5);

    drawX(rightEyeCenterX,rightEyeCenterY);
    drawX(leftEyeCenterX,leftEyeCenterY);
    

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
  //------------------------------------------------------
  // You can make addtional elements here, but keep the face drawing inside the for loop. 
}
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
  stroke(0);
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