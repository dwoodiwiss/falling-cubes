#pragma strict

var PrefabBox : GameObject;
var Loc : Vector3;

function Start () {

} // end Start

function Update () {

  // for(var i:int = 0; i < 9; i++){
    var xx:int = Random.Range(-43, 43);
    var yy:int = 66;
    var zz:int = Random.Range(43, -43);
    Loc = Vector3(xx, yy, zz);
    spawner(PrefabBox, Loc);
  // }

} // end Update

function spawner(obj : GameObject, Loc : Vector3){
  Instantiate (obj, Loc, Quaternion.identity);
}
