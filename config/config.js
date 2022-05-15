var fs = require("fs");

function getUserHome() {
  return process.env[process.platform === "win32" ? "USERPROFILE" : "HOME"];
}

// var localConfigPath = getUserHome() + '/busfareportal-config.json';
// var projectConfigPath = __dirname + '/busfareportal-config.json';
var projectConfigPath = __dirname + "/config.json";

// if(process.env.NODE_ENV === "test") {
//     projectConfigPath = __dirname + '/test_config.json';
// }

// var selectedConfigPath;

// if(fs.existsSync(localConfigPath)) {
//     selectedConfigPath = localConfigPath;
//     console.log("config is taken from " + selectedConfigPath);
// } else if (fs.existsSync(projectConfigPath)) {
//     console.log("config is taken from " + selectedConfigPath);
//     selectedConfigPath = projectConfigPath;
// } else {
//     console.log('CONFIG FILE DOESNT EXIST @ ' + selectedConfigPath);
//     process.exit();
// }

var finalJSONConfig = JSON.parse(fs.readFileSync(projectConfigPath));

// if(!finalJSONConfig.googleSecretKeyLimit) {
//     console.log('googleSecretKeyLimit DOESNT EXIST');
//     process.exit();
// }

// module.exports = finalJSONConfig;
console.log("config is taken from " + projectConfigPath);
module.exports = finalJSONConfig;
