class rope{
	constructor(body1,body2,pointA,pointB)
	{
    this.pointA = pointA
	this.pointB = pointB
	//create rope constraint here
    var options = {
		bodyA: body1,
		bodyB: body2,
		pointB: {x:this.pointA,y:this.pointB},
	}
    var con = Matter.Constraint.create({
      bodyA:roof,
	  pointA:{x:0,y:0},
	  bodyB:ball,
	  pointB:{x:0,y:0},
	  length:300,
	  stiffness:0.1
	})
	World.add(world,con) 

	var con2 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	})
     World.add(world,con2)

	 var con3 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:ball2,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	})
     World.add(world,con3)

	 var con4 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:ball3,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	})
     World.add(world,con4)

	 var con5 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:ball4,
		pointB:{x:0,y:0},
		length:300,
		stiffness:0.1
	})
     World.add(world,con5)
	
	}
 display() {
	 //let pos = this.body.position
	 
	 push()
	 rectMode(CENTER)
	 strokeWeight(255)
	 fill(127)
	 line()
	 pop()
 }

}
