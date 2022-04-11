export class ParseTool {
  public static parse(from: any, to: any) {
    for (const key in from) {
      if (Object.prototype.hasOwnProperty.call(to, key)) {
        to[key] = from[key];
      }
    }
  }
}
