export default class PerformanceStage {
    private static performanceStage: PerformanceStage;
    
    private constructor() {
        
    }

    /**
     * getPerformanceStage
     */
    public static getPerformanceStage() {
        if(!this.performanceStage) {
            this.performanceStage = new PerformanceStage();
        }
        return this.performanceStage;
    }

    /**
     * toString
     */
    public toString() {
        console.log("Singleton")
    }
}