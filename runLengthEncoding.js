const runLengthEncoding = (text) => {
    let tempChar = text[0];
    let tempCount = 0;
    let result = "";
    for (let i = 0; i < text.length; i++) {
        const element = text[i];

        if (tempChar === element) {
            tempCount += 1;
            if (tempCount >= 9) {
                result += `${tempCount}${tempChar}`;
                tempCount = 0;
            }
        } else {
            result += `${tempCount}${tempChar}`;
            tempChar = element;
            tempCount = 1;
        }
    }
    result += `${tempCount}${tempChar}`;

    return result;
}

const sampleA = "AABBAA";
const sampleB = "AAAAAAAAAAAAABBCCCCDD";

const finalResultA = runLengthEncoding(sampleA)
const finalResultB = runLengthEncoding(sampleB)

console.log(finalResultA);
console.log(finalResultB);
