const util = require("util");
const exec = util.promisify(require("child_process").exec);

const logOutput = ({ stdout, stderr }) => {
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
  return Promise.resolve({});
};

const stopPrivacyQuickstart = () => {
  return exec(
    "cd pantheon-quickstart/privacy && ./stop.sh && ./remove.sh"
  ).then(logOutput);
};

const removeDirectory = () => {
  return exec("rm -Rf pantheon-quickstart");
};

stopPrivacyQuickstart()
  .then(removeDirectory)
  .catch(console.error);
