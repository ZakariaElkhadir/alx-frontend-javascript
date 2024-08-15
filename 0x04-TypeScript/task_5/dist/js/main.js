var sumMinorCredits = function (subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
};
function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}
var major1 = { credits: 10, brand: 'MajorCredits' };
var major2 = { credits: 15, brand: 'MajorCredits' };
var minor1 = { credits: 5, brand: 'MinorCredits' };
var minor2 = { credits: 8, brand: 'MinorCredits' };
var totalMajor = sumMajorCredits(major1, major2);
var totalMinor = sumMinorCredits(minor1, minor2);
console.log(totalMajor);
console.log(totalMinor);
//# sourceMappingURL=main.js.map