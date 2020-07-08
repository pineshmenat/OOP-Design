export default class SchoolStaff {
    private makeAnnouncement() {
        console.log("make announcement");
    }

    private collectPaperwork() {
        console.log("Collect PaperWork");
    }

    private takeAttendance() {
        console.log("take attendance");
    }

    /**
     * performOtherResponsibilities
     */
    public performOtherResponsibilities() {
        this.makeAnnouncement();
        this.takeAttendance();
        this.collectPaperwork();
    }
}