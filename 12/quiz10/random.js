function random(min, max) {
    let result = 0;
    if(!isNaN(min) && max === undefined) {
        max = min;
        min = 0;
        result = Math.floor(Math.random()) * max;
        return result;
    } else if (isNaN(min) || isNaN(max)) {
        return -1;
    }
    result = Math.floor(Math.random() * (max - min)) + min;
    return result;
}
export default random;