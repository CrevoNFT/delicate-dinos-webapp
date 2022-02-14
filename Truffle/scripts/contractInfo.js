var fs = require("fs");

fs.copyFile(
  "build/contracts/DelicateDinos.json",
  "../src/contracts/contractInfoDelicateDinos.json",
  (err) => {
    if (err) throw err;
    console.log("✅ Your DelicateDinos contract's ABI was copied to the frontend");
  },
);

fs.copyFile(
  "build/contracts/DelicateDinosToken.json",
  "../src/contracts/contractInfoDelicateDinosToken.json",
  (err) => {
    if (err) throw err;
    console.log("✅ Your DelicateDinosToken contract's ABI was copied to the frontend");
  },
);
