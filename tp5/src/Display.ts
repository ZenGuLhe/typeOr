import { Util } from './UtilModule';
import * as _ from 'lodash';

export default function <T>(items: T[]): void {

  _.each(items, item => {
    Util.log(item.toString());
  });
}
