/** Validate an object
 * @returns {string|true}
 */
export function object(obj, props, path = '') {
  let message;
  return (
    Object.entries(props).every(([key, valProps]) => {
      path = `${path}.${key}`;
      const value = obj[key];

      // Enforce `required` on the property
      if (valProps.required && value === undefined) {
        return !(message = `property is required`);
      }

      // The valProps or it's type may be a validation function itself
      if (typeof valProps.type === 'function')
        return !(message = valProps.type(value, valProps, path));

      switch (valProps.type) {
        case String:
          return !(message = string(value, valProps));
        case Number:
          return !(message = number(value, valProps));
        case Array:
          return !(message = array(value, valProps, path));
        case Object:
          return !(message = object(value, valProps, path));
        default:
          return true;
      }
    }) || `[${path}] ${message}`
  );
}

/** Validate a string
 * @returns {string|true}
 */
export function string(value, { min, max, regex }) {
  return _checkAll(
    [true, typeof value === 'string', `must be of type 'string'`],
    [min, value.length >= min, `length must be >= ${min}`],
    [max, value.length <= max, `length must be <= ${max}`],
    [regex, regex.test(value), `must match regex: ${regex.toString()}`],
  );
}

/** Validate a number
 * @returns {string|true}
 */
export function number(value, { min, max }) {
  return _checkAll(
    [true, typeof value === 'number', `must be of type 'number'`],
    [min, value >= min, `must be >= ${min}`],
    [max, value <= max, `must be >= ${min}`],
  );
}

/** Validate an array
 * @returns {string|true}
 */
export function array(value, { min, max, isEmpty, items }, path = '.') {
  return (
    _checkAll(
      [true, Array.isArray(value), `must be an Array`],
      [min, value >= min, `must be >= ${min}`],
      [max, value <= max, `must be >= ${min}`],
      [isEmpty, isEmpty ? !value.length : value.length, `must be >= ${min}`],
    ) && (items ? _validateArrayItems(value, items, path) : true)
  );
}

function _validateArrayItems(array, itemValidation, path) {
  let message = '';
  array.every(
    (e, i) =>
      !(message = object({ e }, { e: itemValidation }, i, `${path}[${i}]`)),
  );
  return message;
}

function _checkAll(...checks) {
  return _emptyOrMessage(checks.map(_check));
}
function _check(prop, condition, falseMessage) {
  return prop === undefined || condition || falseMessage;
}
function _emptyOrMessage(...values) {
  return values.find((p) => typeof p === 'string') || '';
}
