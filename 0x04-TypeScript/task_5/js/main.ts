interface MajorCredits {
    credits: number;
    brand: "MajorCredits";
}

interface MinorCredits {
    credits: number;
    brand: "MinorCredits";
}
const sumMinorCredits = (subject1: MinorCredits, subject2: MinorCredits): MinorCredits => {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

const major1: MajorCredits = { credits: 10, brand: 'MajorCredits' };
const major2: MajorCredits = { credits: 15, brand: 'MajorCredits' };
const minor1: MinorCredits = { credits: 5, brand: 'MinorCredits' };
const minor2: MinorCredits = { credits: 8, brand: 'MinorCredits' };

const totalMajor = sumMajorCredits(major1, major2);
const totalMinor = sumMinorCredits(minor1, minor2);

console.log(totalMajor);
console.log(totalMinor);