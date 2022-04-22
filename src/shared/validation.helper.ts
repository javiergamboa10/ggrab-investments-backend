export class ValidationHelper {
  public static isObject<T>(value: T): boolean {
    return value !== undefined && value !== null;
  }

  public static isValidEntity<T>(entity: T): boolean {
    return entity !== null && entity['id'] !== null && entity['id'].length > 2;
  }
}
