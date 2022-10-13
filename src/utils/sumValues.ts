export const sum = (values: number[] | null[]) => {
    const numbers = values.map((value) => value ? value : 0);
    return calcTotalPoints(numbers);
};

const calcTotalPoints = (values: number[]): number => {
    let numbers = values.slice().filter((value) => value !== 0).sort();
    if (!numbers.find((value) => value !== 0))
        return 0;

    let duplicates: number[] = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        if (numbers[i + 1] === numbers[i]) {
            duplicates.push(numbers[i]);
        }
    }
    if (duplicates.length !== 0) {
        const differentValue = values.find((value) => value !== duplicates[0]) || 0;
        return ((duplicates[0] * (duplicates.length + 1)) * (duplicates.length + 1)) + differentValue;
    } else {
        return values.reduce((previous, value) => previous + value, 0);
    }
};

export default sum;