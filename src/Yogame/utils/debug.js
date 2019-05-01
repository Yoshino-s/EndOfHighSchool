import eruda from "eruda";
import * as log from "loglevel";

eruda.init({tool: ['console']});

log.setLevel(process.env.NODE_ENV === "development"?0:3);

window.log = log;

export default {
  eruda,
  log
};