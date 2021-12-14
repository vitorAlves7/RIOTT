import { EnumStatusList } from "../utils/enum/enumStatusList";

export interface ListActivity {
    listId: number;
    memberId: number;
    listName: string;
    isListActive: EnumStatusList;
    allowanceValue: number;
    discountValue: number;
    valueTotal: number;
}
