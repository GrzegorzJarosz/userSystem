export interface User{
  id: number;
  name: string;
  password: string;
  firstName: string;
  lastName: number;
  birthDate : Date;
  groups: Array<GroupNm>;
}

 interface GroupNm{
  name:string;
}
