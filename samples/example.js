const gpmfExtract = require("../");
gpmfExtract("./samples/karma.mp4")
  .then((result) => {
    console.log("Length of data received:", result.rawData.length);
    console.log("Framerate of data received:", result.timing.frameDuration);
  })
  .catch((error) => console.log(error));
