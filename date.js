//jshint esversion:6
 
exports.getDate = function() {
 
    let today = new Date();
     
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
     
    return today.toLocaleDateString("en-GB", options);
     
    };
     
    exports.getDay = function() {
     
        const today = new Date();
     
        const options = {
            weekday: "long"
        }
    };