const input = `Step A must be finished before step L can begin.
Step B must be finished before step U can begin.
Step S must be finished before step K can begin.
Step L must be finished before step R can begin.
Step C must be finished before step I can begin.
Step F must be finished before step N can begin.
Step X must be finished before step H can begin.
Step Z must be finished before step U can begin.
Step P must be finished before step T can begin.
Step R must be finished before step U can begin.
Step H must be finished before step T can begin.
Step V must be finished before step G can begin.
Step E must be finished before step D can begin.
Step G must be finished before step W can begin.
Step N must be finished before step J can begin.
Step U must be finished before step D can begin.
Step Y must be finished before step K can begin.
Step K must be finished before step J can begin.
Step D must be finished before step M can begin.
Step I must be finished before step O can begin.
Step M must be finished before step Q can begin.
Step Q must be finished before step J can begin.
Step T must be finished before step J can begin.
Step W must be finished before step O can begin.
Step J must be finished before step O can begin.
Step C must be finished before step F can begin.
Step C must be finished before step J can begin.
Step Z must be finished before step I can begin.
Step K must be finished before step I can begin.
Step L must be finished before step W can begin.
Step I must be finished before step W can begin.
Step N must be finished before step O can begin.
Step B must be finished before step G can begin.
Step S must be finished before step O can begin.
Step P must be finished before step H can begin.
Step R must be finished before step J can begin.
Step N must be finished before step U can begin.
Step U must be finished before step J can begin.
Step E must be finished before step T can begin.
Step T must be finished before step O can begin.
Step L must be finished before step T can begin.
Step P must be finished before step Y can begin.
Step L must be finished before step C can begin.
Step D must be finished before step O can begin.
Step H must be finished before step Y can begin.
Step Q must be finished before step T can begin.
Step P must be finished before step G can begin.
Step G must be finished before step D can begin.
Step F must be finished before step H can begin.
Step G must be finished before step M can begin.
Step F must be finished before step V can begin.
Step X must be finished before step O can begin.
Step V must be finished before step Y can begin.
Step Y must be finished before step D can begin.
Step H must be finished before step G can begin.
Step A must be finished before step S can begin.
Step E must be finished before step U can begin.
Step Y must be finished before step O can begin.
Step C must be finished before step K can begin.
Step R must be finished before step W can begin.
Step G must be finished before step I can begin.
Step V must be finished before step E can begin.
Step V must be finished before step T can begin.
Step E must be finished before step K can begin.
Step X must be finished before step R can begin.
Step Q must be finished before step W can begin.
Step X must be finished before step P can begin.
Step K must be finished before step T can begin.
Step I must be finished before step T can begin.
Step P must be finished before step R can begin.
Step T must be finished before step W can begin.
Step X must be finished before step I can begin.
Step N must be finished before step Q can begin.
Step G must be finished before step Y can begin.
Step Y must be finished before step W can begin.
Step L must be finished before step D can begin.
Step F must be finished before step D can begin.
Step A must be finished before step T can begin.
Step R must be finished before step H can begin.
Step E must be finished before step I can begin.
Step W must be finished before step J can begin.
Step F must be finished before step M can begin.
Step V must be finished before step W can begin.
Step I must be finished before step J can begin.
Step Z must be finished before step P can begin.
Step H must be finished before step U can begin.
Step R must be finished before step V can begin.
Step V must be finished before step M can begin.
Step Y must be finished before step M can begin.
Step P must be finished before step M can begin.
Step K must be finished before step D can begin.
Step C must be finished before step T can begin.
Step Y must be finished before step T can begin.
Step U must be finished before step I can begin.
Step A must be finished before step O can begin.
Step E must be finished before step J can begin.
Step H must be finished before step V can begin.
Step F must be finished before step W can begin.
Step M must be finished before step T can begin.
Step S must be finished before step H can begin.
Step S must be finished before step G can begin.`;

const inputExample = `Step C must be finished before step A can begin.
Step C must be finished before step F can begin.
Step A must be finished before step B can begin.
Step A must be finished before step D can begin.
Step B must be finished before step E can begin.
Step D must be finished before step E can begin.
Step F must be finished before step E can begin.`;

const buildStepsRelations = input => {
  const instructions = input.split('\n');
  const stepsRelations = instructions.reduce((steps, instruction) => {
    const decomposedInstruction = instruction.split(' ');
    const parent = decomposedInstruction[1];
    const child = decomposedInstruction[7];

    steps[parent] = steps[parent] || { children: [], parents: [] };
    steps[child] = steps[child] || { children: [], parents: [] };

    steps[parent].children.push(child);
    steps[child].parents.push(parent);

    return steps;
  }, {});
  return stepsRelations;
}

module.exports = {
  input: buildStepsRelations(input),
  inputExample: buildStepsRelations(inputExample)
};
