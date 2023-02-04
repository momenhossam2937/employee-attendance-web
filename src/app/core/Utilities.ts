
export class Utilities {
 

  static getPropName(obj: any, expression: Function) {
    var res:any = {};
    Object.keys(obj).map(k => {
      res[k] = () => k;
    });
    return expression(res)();
  }

}
