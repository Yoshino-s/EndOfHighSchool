import * as PIXI from "pixi.js";

const layer = {
  PIXI_PLUGIN: true,
  id: 'layer'
};

layer.LAYER = {
  RESERVED_0: 0,
  RRSERVED_1: 1,
  RESERVED_2: 2,
  BACKGROUND: 3,
  TILEMAP_0:4,
  TILEMAP_1:5,
  TILEMAP_2:6,
  OBJECT_0:7,
  OBJECT_2:8,
  OBJECT_3:9,
  UI_0:10,
  UI_1:11,
  UI_2:12,
  RESERVED_3: 13,
  RRSERVED_4: 14,
  RESERVED_5: 15,
};

layer.Layer = class Layer extends PIXI.Container {
  constructor() {
    super();
    let self = this;
    this._children = [];
    this.dirty = false;
    this.children = new Proxy(this._children, {
      set: function(target, property, value, receiver) {
        self.dirty = true;
        return Reflect.set(target, property, value, receiver);
      }
    });
  }
  _renderCanvas() {
    if(this.dirty) {
      this.children.sort((a,b)=>(a.zindex||0)<(b.zindex||0));
      this.dirty = false;
    }
  }
  _renderWebGL() {
    if(this.dirty) {
      this.children.sort((a,b)=>(a.zindex||0)<(b.zindex||0));
      this.dirty = false;
    }
  }
};

layer.DisplayObject = class EDisplayObject extends PIXI.DisplayObject {
  constructor() {
    super();
    this._zindex = 0;
  }
  get zindex() {return this._zindex;}
  set zindex(v) {
    if(v === this._zindex || !Number.isFinite(v)) return;
    if(this.parent && (this.parent instanceof layer.Layer)) {
      this.parent.dirty = true;
    }
    this._zindex = v;
  }
};

export default layer;
