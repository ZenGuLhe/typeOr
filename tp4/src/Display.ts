import { Util } from './UtilModule';

export default function <T>(items: T[]): void {
  items.forEach((item) => {
    Util.log(item.toString());
  });
}
