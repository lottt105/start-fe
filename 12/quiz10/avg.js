function avg(values) {
    let sum = 0;
    let cnt = 0;
    let avg = 0;
    let isArray = Array.isArray(values)

    if(isArray) {
        for (let i = 0; i < values.length; i++) {
            if(!isNaN(values[i])) {
                sum += values[i];
                cnt += 1;
            }
        }
    } else {
        for (let i = 0; i< arguments.length; i++) {
            if(!isNaN(arguments[i])) {
                sum += arguments[i];
                cnt += 1;
            }
        }
    }
    avg = sum/cnt;
    return avg;
}
export default avg;