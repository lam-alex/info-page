export const notNullDefined = <T>(x: T): x is Exclude<T, null | undefined> => typeof x !== 'undefined' && x !== null;

export const isTypeOf = <T>(x: unknown, fields?: string[]): x is T =>
  typeof x === 'object' && x !== null && (fields ? fields.every((f) => Object.keys(x).includes(f)) : true);

export const isArrayOfType = <T>(x: unknown, predicate: (item: unknown) => item is T): x is T[] => Array.isArray(x) && x.every(predicate);

export const isString = (x: unknown): x is string => typeof x === 'string';

export const isNumber = (x: unknown): x is number => typeof x === 'number';

/**
 * Преобразует неизвестные данные в массив объектов социальных сетей
 *
 * @description
 * Метод принимает данные неизвестного типа, проверяет их валидность и преобразует
 * в массив объектов, соответствующих интерфейсу Social.
 *
 * @param data - Данные неизвестного типа для преобразования
 * @returns Массив объектов Social. Если данные невалидны, возвращает пустой массив
 *
 * @example
 * // Валидные данные
 * const validData = [
 *   { name: 'Telegram', link: 'https://t.me/username' },
 *   { name: 'GitHub', link: 'https://github.com/username' }
 * ];
 * const result = mapToTypedArray(validData); // => [{ name: 'Telegram', link: '...' }, ...]
 *
 */
export const mapToTypedArray = <T>(data: unknown, keyList: string[]): T[] =>
  data && Array.isArray(data) ? data.map((s) => (isTypeOf<T>(s, keyList) ? { ...s } : null)).filter(notNullDefined) : [];
