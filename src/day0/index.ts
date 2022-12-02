import { Day } from "../day";

class Day0 extends Day {

    constructor(){
        super(0);
    }

    solveForPartOne(input: string): string {
        const caloriesPerElf = this.caloriesPerElf(input);

        const maxCalories = Math.max(...caloriesPerElf);
        return maxCalories.toString();
    }

    solveForPartTwo(input: string): string {
        const caloriesPerElf = this.caloriesPerElf(input);
        caloriesPerElf.sort((a, b) => (b - a));

        const topThreeElfCaloriesCombined = caloriesPerElf.slice(0, 3).reduce((pv, cv) => pv + cv, 0);
        return topThreeElfCaloriesCombined.toString();
    }

    private caloriesPerElf(input: string): number[] {
        return input.split("\n\n")
        .map(elf => elf.split("\n")
        .map(x => parseInt(x)).reduce((pv, cv) => pv + cv, 0));
    }
}

export default new Day0;