import { Injectable } from '@angular/core';
import { ListActivity } from 'src/app/@theme/interfaces/list-activity';
import { Member } from 'src/app/@theme/interfaces/member';
import { EnumStatusList } from 'src/app/@theme/utils/enum/enumStatusList';

@Injectable({
  providedIn: 'root'
})
export class ListsService {
  public listOfMembers: Member[] = [
    {
      memberId: 1,
      name: "Lívia",
      birthDate: '02/08/2002',
      allowanceValue: 0,
    },
    {
      memberId: 2,
      name: "Julinha",
      birthDate: '02/08/2008',
      allowanceValue: 110,
    },
    {
      memberId: 3,
      name: "Carlos",
      birthDate: '31/10/2009',
      allowanceValue: 1000,
    },
  ]

  public Lists: ListActivity[] = [
    {
      listId: 1,
      memberId: 1,
      listName: "Lista1",
      isListActive: EnumStatusList.PROGRESS,
      allowanceValue: 1000,
      discountValue: 800,
      valueTotal: 1800,
    },
    {
      listId: 2,
      memberId: 2,
      listName: "Lista2",
      isListActive: EnumStatusList.PROGRESS,
      allowanceValue: 50,
      discountValue: 25,
      valueTotal: 50,
    },
    {
      listId: 3,
      memberId: 3,
      listName: "Lista3",
      isListActive: EnumStatusList.FINISHED,
      allowanceValue: 50,
      discountValue: 25,
      valueTotal: 50,
    },
  ]

  public handleMembers(): Member[] {
    return this.listOfMembers;
  }

  public handleActiveLists(): ListActivity[] {
    return this.Lists.filter((list: ListActivity) => list.isListActive === EnumStatusList.PROGRESS);
  }

  public handleAllActivesMembersList(): Member[] {
    const Members: Member[] = [];

    const ListActivity: ListActivity[] = this.handleActiveLists();

    for (const list of ListActivity) {
      const member: Member = Members.find((Member: Member) => Member.memberId === list.memberId);
      Members.push(member);
    }
    return Members;
  }

  public handleSearchListActiveById(id: number): ListActivity {
    return this.Lists.find((list: ListActivity) => (list.memberId === id && list.isListActive === EnumStatusList.PROGRESS));
  }

  public handleUpdateItens(): void {
    //N sei como fazer ainda
  }

  public finishList(): void {
    //askjdhaksjh
  }

}
