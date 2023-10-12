exports.getDate = function (){  //module.exports short cut is exports

    const today = new Date();
    const currentDay = today.getDay();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    return today.toLocaleDateString("en-IN", options);
}

exports.getDay = function (){

    const today = new Date();
    const currentDay = today.getDay();
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-IN", options);
}