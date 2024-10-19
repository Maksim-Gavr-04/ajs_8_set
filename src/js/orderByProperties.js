/**
 * `orderByProperties` - функция, которая для переданного объекта
 * возвращает массив его свойств со значениями, отсортированный
 * по свойствам (порядок сортировки свойств - второй аргумент).
 */

export function orderByProperties(object, order) {
  const orderedObjects = [];
  const sortedOtherObjects = [];

  for (let property in object) {
    if (order.includes(property)) {
      orderedObjects.push({ key: property, value: object[property] });
    } else {
      sortedOtherObjects.push({ key: property, value: object[property] });
    }
  }

  orderedObjects.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  sortedOtherObjects.sort((a, b) => a.key.localeCompare(b.key));

  return [ ...orderedObjects, ...sortedOtherObjects ];
}
