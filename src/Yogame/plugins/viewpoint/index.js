import * as PIXI from "pixi.js";
import layer from "../layer";

const viewpoint = {
  PIXI_PLUGIN: true,
  id: 'layer'
};

viewpoint.Viewpoint = class Viewpoint extends layer.Layer {
  constructor() {
    this.effect = [];
  }
  
};

export default viewpoint;
