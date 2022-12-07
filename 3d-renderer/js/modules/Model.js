import {Matrix} from "./Matrix.js";

export default class Model {
  triangles=[];
  matrix = new Matrix(3,3);
  scale(sx, sy, sz){
      this.matrix.setValue(0,0, sx)
      this.matrix.setValue(1,1, sy)
      this.matrix.setValue(2,2, sz)
      this.matrix.print()
      this.triangles.forEach((triangle)=>{
          triangle.vertexes[0].position.applyMatrix(this.matrix)
          triangle.vertexes[1].position.applyMatrix(this.matrix)
          triangle.vertexes[2].position.applyMatrix(this.matrix)
      })
  }
  addFace(face){
    this.triangles.push(face)
  }
}
