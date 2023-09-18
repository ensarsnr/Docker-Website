const { exec } = require("child_process");

exports.listContainers = async () => {
  return new Promise((resolve, reject) => {
    const command = `sudo docker ps`;
    exec(command, (error, stdout) => {
      if (error) {
        reject("Docker container Error: ", error);
      } else {
        console.log(stdout);
        resolve(stdout);
      }
    });
  });
};
