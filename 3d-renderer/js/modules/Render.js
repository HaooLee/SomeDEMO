export default class Render{

  createRender(width, height){
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas)
    return this;
  }

  draw(world){
    this.ctx.translate(300,300);
    // console.time('draw')
    world.actors.forEach((model)=>{
      console.log(model)
      model.triangles.forEach((triangle)=>{
        this.ctx.beginPath();
        this.ctx.moveTo(triangle.vertexes[0].position.x * 15,-triangle.vertexes[0].position.y * 15);
        this.ctx.lineTo(triangle.vertexes[1].position.x * 15,-triangle.vertexes[1].position.y * 15) ;
        this.ctx.lineTo(triangle.vertexes[2].position.x * 15,-triangle.vertexes[2].position.y * 15);
        this.ctx.stroke()
      })
    })
    // console.timeEnd('draw')
  }

  drawLine(p1, p2, color){

  }
}