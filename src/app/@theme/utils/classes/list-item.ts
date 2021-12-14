export class ListItem {
    public listId: number;
    public activityId: number;
    public discountValue: number;
    public absenceStatus: boolean;

    constructor() {
        this.absenceStatus = null;
        this.activityId = null;
        this.listId = null;
        this.discountValue = null;
    }
}