import * as PIXI from "pixi.js"
import PluginManager from "./manager/PluginManager"
import eruda from "eruda"

eruda.init({
  tool: ['console',],
});

window.PluginManager= PluginManager;
console.log(PluginManager.load([
  {plugin:{id:2,PIXI_PLUGIN:true}},
  {plugin:{id:28,PIXI_PLUGIN:true}},
  {plugin:{PIXI_PLUGIN:true}},
],[
  {plugin:{id:52,PIXI_PLUGIN:true}}, [
    {plugin:{PIXI_PLUGIN:true}},
  ]
]));
