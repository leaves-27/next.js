import mongodb from "mongodb";
import fs from 'fs';
import settingsProd from "../settings_prod";
import settingsDev from "../settings_dev";

let settings = "";
let env = process.env.NODE_ENV;
if(env=="production") {
  settings = settingsProd
}else{
  settings = settingsDev
}

const config = JSON.parse(fs.readFileSync(settings.config_path));

const Db = mongodb.Db;
const	Server = mongodb.Server;

module.exports = new Db(
	config.db,
	new Server(
		config.host,
		config.port
	),
	{
		safe:true
	}
); 