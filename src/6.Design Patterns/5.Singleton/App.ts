import PerformanceStage from "./PerformanceStage";

let stage = PerformanceStage.getPerformanceStage();
stage.toString();
let stage2 = PerformanceStage.getPerformanceStage();
stage2.toString();
console.log(stage === stage2);