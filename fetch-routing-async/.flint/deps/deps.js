
  try {
    window.__flintPackages["bluebird"] = require("bluebird")
  }
  catch(e) {
    console.log('Error running package!')
    console.error(e)
  };
