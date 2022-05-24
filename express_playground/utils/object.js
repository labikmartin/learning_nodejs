import { logError } from './logging.js';

export function jsonParse(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    logError('JSON parsing error');

    return null;
  }
}

export function jsonStringify(data) {
  try {
    return JSON.stringify(data);
  } catch (error) {
    logError('JSON stringify error');

    return '';
  }
}
