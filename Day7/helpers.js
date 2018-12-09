/******************* PART 1 *******************/
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
/*********************************************/

/******************* PART 2 *******************/
let stepsValues = [];
const executeSteps = (workersCount, stepsBaseTime, steps) => {
  stepsValues = getStepsInSequenceValue();
  const workersAssignation = Array(workersCount).fill({ currentStep: '.', workedTime: 0});

  let queueSteps = Object.entries(steps).filter(([instruction, {children, parents}]) => {
    return parents.length === 0;
  });

  return executeStepsRecursive(workersAssignation, stepsBaseTime, steps, queueSteps, 0, []);
}

const executeStepsRecursive = (workersAssignation, stepsBaseTime, steps, queueSteps, ellapsedTime, completedSteps) => {
  console.log('workersAssignation', JSON.stringify(workersAssignation));
  console.log('stepsBaseTime', stepsBaseTime);
  console.log('queueSteps', queueSteps);
  console.log('completedSteps', completedSteps);
  console.log('ellapsedTime', ellapsedTime);
  if (completedSteps.length === Object.keys(steps).length) {
    return ellapsedTime;
  }

  queueSteps = sortAlphabeticaly(queueSteps, true);
  for (let i in workersAssignation) {
    if (workersAssignation[i].currentStep === '.' && queueSteps.length > 0) {
      const [instruction, _] = queueSteps.pop();
      workersAssignation[i] = {currentStep: instruction, workedTime: 0};
    }
  }

  workersAssignation = workersAssignation.sort((firstWorker, secondWorker) => {
    if (firstWorker.currentStep === '.') {
      return 1;
    }

    if (secondWorker.currentStep === '.') {
      return -1;
    }

    return (calculateStepFinishingTime(stepsBaseTime, firstWorker.currentStep) - firstWorker.workedTime) - (calculateStepFinishingTime(stepsBaseTime, secondWorker.currentStep) - secondWorker.workedTime);
  });

  let remainingTimeMostFinishedStep = 0;
  if (workersAssignation[0].currentStep !== '.') {
    remainingTimeMostFinishedStep = (calculateStepFinishingTime(stepsBaseTime, workersAssignation[0].currentStep)) - workersAssignation[0].workedTime;
  }

  const finishedTasksInThisRun = []
  workersAssignation = workersAssignation.map(worker => {
    if (worker.currentStep !== '.') {
      worker.workedTime = worker.workedTime + remainingTimeMostFinishedStep;
      if (worker.workedTime === calculateStepFinishingTime(stepsBaseTime, worker.currentStep)) {
        finishedTasksInThisRun.push(worker.currentStep);
        return { currentStep: '.', workedTime: 0};
      }
    }

    return worker;
  });

  completedSteps = [...completedSteps, ...finishedTasksInThisRun];
  finishedTasksInThisRun.forEach(finishedTask => {
    const step = steps[finishedTask];
    for (let child of step.children) {
      let childAvailableForExecution = true;
      const childDetails = steps[child];
      for (let parent of childDetails.parents) {
        childAvailableForExecution = childAvailableForExecution && completedSteps.includes(parent);
      }
      if (childAvailableForExecution) {
        queueSteps.push([child, steps[child]]);
      }
    }
  });

  return executeStepsRecursive(workersAssignation, stepsBaseTime, steps, queueSteps, ellapsedTime + remainingTimeMostFinishedStep, completedSteps);
}
/*********************************************/
const calculateStepFinishingTime = (stepsBaseTime, step) => {
  return stepsBaseTime + stepsValues.indexOf(step) + 1;
}

const sortAlphabeticaly = (steps, reverse) => {
  return steps.sort((step1, step2) => {
    return step1[0] > step2[0] ? (reverse ? -1 : 1) : (reverse ? 1 : -1);
  });
}

const getStepsInSequenceValue = () => {
  const stepsArray = [];
  for (let i = 65; i <= 90; i++) {
    stepsArray.push(String.fromCharCode(i));
  }

  return stepsArray;
}

module.exports = {
  orderSteps,
  getStepsInSequenceValue,
  executeSteps
}
