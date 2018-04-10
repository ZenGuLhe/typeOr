declare module "lodash" {
  export function each<T>(items : T[], callback : (current : T) => void) : void;
}