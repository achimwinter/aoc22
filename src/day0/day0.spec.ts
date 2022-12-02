import day0 from './index';

describe('On Day 0', () =>{
    it(`part1 is identity function`, ()=>{
        expect(day0.solveForPartOne('1000\n1000\n1000\n\n1000\n1000')).toBe('3000');
    })

    it(`part2 is identity function`, ()=>{
        expect(day0.solveForPartTwo('1000\n2000\n3000\n\n4000\n\n5000\n6000\n\n7000\n8000\n9000\n\n10000')).toBe('45000');
    })
});