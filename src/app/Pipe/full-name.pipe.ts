import {Pipe, PipeTransform} from '@angular/core';
import {User} from "../Model/User";

@Pipe({
  name: 'fullName',
  pure: false
})
export class FullNamePipe implements PipeTransform {

  transform(user: User, ...args: unknown[]): unknown {
    return user.FirstName + ' ' + user.LastName;
  }

}
