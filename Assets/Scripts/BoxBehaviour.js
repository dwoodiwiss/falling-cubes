#pragma strict

var life:int = 1;

function Start () {

}

function Update () {
  life++;
}

function OnCollisionEnter(collision:Collision) {

  var obj = collision.gameObject;
  var objName = collision.gameObject.name;
  // var sec:int = 4;

  if (objName == "Floor") {
    destroyer(gameObject, 17);
  }

}

function destroyer(obj:GameObject, sec:int){
  var time:int = sec;



  Destroy(obj, sec);
}