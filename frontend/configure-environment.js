const fs = require("fs");
const filePath = process.argv[2];

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

function dumpEnvironmentVariablesToJson(path) {
  const variables = {
    MARVEL_API_KEY: process.env.MARVEL_API_KEY,
    MARVEL_API_PATH: process.env.MARVEL_API_PATH
  };

  fs.writeFileSync(path, JSON.stringify(variables));
}

dumpEnvironmentVariablesToJson(filePath);
