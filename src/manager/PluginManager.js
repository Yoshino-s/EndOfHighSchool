import Manager from "./Manager";

let uidCount = 0;
const PluginManager = new Manager();
PluginManager.on("load", function(){
  console.log('test');
});
PluginManager.plugins = Object.create(null);
PluginManager.load = function(...args) {
  return args.map(arg => {
    if(Array.isArray(arg)) {
      return PluginManager.load(...arg);
    }
    else {
      //main part
      let {plugin, options} = arg;
      if(!plugin || !PluginManager.verify(plugin)) return null;
      const id = plugin.id || "anonymous_"+(uidCount++);
      PluginManager.plugins[id] = plugin;
      PluginManager.emit("loadPlugin", id);
      if(plugin.run) plugin.run();
      return id;
    }
  });
};

PluginManager.verify = function(plugin) {
  if(!plugin.PIXI_PLUGIN) return false;
  return true;
};

export default PluginManager;