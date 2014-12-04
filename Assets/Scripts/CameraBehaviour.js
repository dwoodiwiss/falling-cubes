#pragma strict

var target : Transform;

function Update () {
  transform.LookAt(target);
  transform.Translate(Vector3.right * Time.deltaTime * 20);
}
