#pragma strict

var PrefabBox : GameObject;
var Loc : Vector3;

function Update () {

	var xx:int = Random.Range(-43, 43);
	var yy:int = 66;
	var zz:int = Random.Range(43, -43);
	Loc = Vector3(xx, yy, zz);
	spawner(PrefabBox, Loc);

}

function spawner(obj : GameObject, Loc : Vector3){
  Instantiate (obj, Loc, Quaternion.identity);
}
