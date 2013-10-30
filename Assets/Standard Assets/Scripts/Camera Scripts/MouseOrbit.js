var target : Transform;
var distance = 125.0;

var xSpeed = 250.0;
var ySpeed = 120.0;

private var x = 0.0;
private var y = 0.0;

@script AddComponentMenu("Camera-Control/Mouse Orbit")

function Start () {
  var angles = transform.eulerAngles;
  x = angles.y;
  y = angles.x;

  // Make the rigid body not change rotation
  if (rigidbody)
    rigidbody.freezeRotation = true;
}

function LateUpdate () {
  if (target) {
    x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
    y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02;

    y = 30;

    var rotation = Quaternion.Euler(y, x, 0);
    var position = rotation * Vector3(0.0, 0.0, -distance) + target.position;

    transform.rotation = rotation;
    transform.position = position;
  }
}
