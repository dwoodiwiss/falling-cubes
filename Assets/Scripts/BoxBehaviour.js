#pragma strict

@script RequireComponent(AudioSource);

function Start () {

}

function Update () {

  if (gameObject.transform.position.y <= -500) {
    destroyer(gameObject, 1);
  }

}

function OnCollisionEnter(collision : Collision) {

  var obj = collision.gameObject;
  var objName = collision.gameObject.name;
  // var sec:int = 4;

  if (objName == "Floor") {
    destroyer(gameObject, 15);
  }

}

function destroyer(obj : GameObject, sec : int) {
  yield WaitForSeconds(sec);
  obj.animation.Play('fadeOut');
  // audio.Play();
  yield WaitForSeconds(2);

  Destroy(obj);
  // Debug.Log(obj.name + " has been destroyed!");
}