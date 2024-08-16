const sci = (name) => {
    console.log("sci function", name);
    return true;
};
const arts = (name) => {
    console.log("arts function", name);
    return false;
};
const comm = (name) => {
    console.log("comm function", name);
    return true;
};

const getAdmission = (name, callback) => {
    //var flag = callback(name);
    
    // if (flag) {
    //     console.log("admission granted");
    // } else {
    //     console.log("admission not granted");
    // }

    return callback(name)
};

var per = 81;

if (per > 80) {
  console.log(getAdmission("amit", sci))
} else if (per > 60) {
  getAdmission("amit", comm);
} else {
  getAdmission("amit", arts);
}