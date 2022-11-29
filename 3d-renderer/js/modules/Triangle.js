import { Vector3 } from './Vector.js';

export default class Triangle{
  constructor(v1,v2,v3, normal) {
    this.vertexes= [v1, v2, v3];
    if(normal){
      this.normal= normal;
    }else {
      const normal = Vector3.crossProduct(v1.position, v2.position)
      normal.normalize()
      this.normal = normal
    }
  }
}