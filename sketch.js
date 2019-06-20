// sin waves with perline noise in them

var inc = 0.01  // define incremental variable
var start = 0   // define starting variable

function setup() {
  createCanvas(400,400)
}

function draw() {
  background(012)
  stroke(255)
  noFill()
  beginShape()
  var xoff = start  // xoff gets starting variable
  for(var x=0; x<width; x++) {  // parse through x-axis
    stroke(255) // create stroke
    var n = map(noise(xoff), 0, 1, 0, -50, 50)  // map noise xoff to + or - 50
    var s = map(sin(xoff), -1, 1, 50, height)   // map sin xoff from 50 to height
    var y = n + s   // y-axis gets the combonitation of both

    vertex(x,y) // plot the graph

    xoff += inc // increment off
  }
  endShape()
  start += inc  // increment starting place
}
