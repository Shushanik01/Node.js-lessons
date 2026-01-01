function gumarum(a, b) {
    return a + b
};

function hanum(a,b){
    return a - b
};

function bajanum(a,b){
    if(a === 0)throw new Error('Division by zero is not allowed')
        return a/b
};

module.exports = {gumarum, hanum, bajanum};

