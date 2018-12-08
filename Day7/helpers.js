// const orderSteps = steps => {
//   let orderedSteps = [];
//   let readySteps = Object.entries(steps).filter(([instruction, {children, parents}]) => {
//     return parents.length === 0;
//   });
//
//   let queueSteps = [];
//   while (orderedSteps.length < Object.keys(steps).length) {
//     if (readySteps.length === 1) {
//       if (orderedSteps.filter(step => step[0] === readySteps[0][0]).length === 0) {
//         orderedSteps.push([...readySteps[0]]);
//       } else {
//         readySteps = [...queueSteps];
//         queueSteps = []
//       }
//       if (queueSteps.length === 0) {
//         readySteps = [...orderedSteps[orderedSteps.length - 1][1].children.map(child => [child, steps[child]])];
//       } else {
//         readySteps = [...orderedSteps[orderedSteps.length - 1][1].children.map(child => [child, steps[child]]), ...queueSteps];
//         queueSteps = [];
//       }
//     }
//
//     if (readySteps.length === 0) {
//       break;
//     }
//
//     readySteps = sortAlphabeticaly(readySteps);
//     readySteps = readySteps.sort((a, b) => {
//       if (a[1].children.length === 0) {
//         return 1;
//       }
//       if (b[1].children.length === 0) {
//         return -1;
//       }
//       return 0;
//     })
//     queueSteps = [...queueSteps, ...readySteps.splice(1, readySteps.length - 1)];
//   }
//   return orderedSteps;
// }

const orderSteps = steps => {
  const completedSteps = [];

  let queueSteps = Object.entries(steps).filter(([instruction, {children, parents}]) => {
    return parents.length === 0;
  });

  return orderStepsRecursive(steps, completedSteps, queueSteps);
}

const orderStepsRecursive = (steps, completedSteps, queueSteps) => {
  if (completedSteps.length === Object.keys(steps).length) {
    return completedSteps;
  }

  const [[intructionToExecute, intructionToExecuteDetails], ...newQueue] = sortAlphabeticaly(queueSteps);

  completedSteps.push(intructionToExecute);

  for (let i = 0; i < intructionToExecuteDetails.children.length; i++) {
    const child = intructionToExecuteDetails.children[i];
    const childDetails = steps[child];

    let childAvailableForExecution = true;
    for (let parent of childDetails.parents) {
      childAvailableForExecution = childAvailableForExecution && completedSteps.includes(parent);
    }

    if (childAvailableForExecution) {
      newQueue.push([child, steps[child]]);
    }
  }

  return orderStepsRecursive(steps, completedSteps, newQueue);
}

const sortAlphabeticaly = steps => {
  return steps.sort((step1, step2) => {
    return step1[0] > step2[0] ? 1 : -1;
  });
}

  // const currentStepsOrdered =
  /*
    STEPS
    -----
    {
      C: { children: [ 'A', 'F' ], parents: [] },
      A: { children: [ 'B', 'D' ], parents: [ 'C' ] },
      F: { children: [ 'E' ], parents: [ 'C' ] },
      B: { children: [ 'E' ], parents: [ 'A' ] },
      D: { children: [ 'E' ], parents: [ 'A' ] },
      E: { children: [], parents: [ 'B', 'D', 'F' ] }
    }
  */

module.exports = {
  orderSteps
}
