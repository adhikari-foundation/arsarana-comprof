export function isValidUrlPath(url: string): boolean {
  // Regular expression for a valid URL path with query parameters
  const urlPathRegex =
    /^(\/[a-zA-Z0-9-._~%!$&'()*+,;=:@]+)*(\/?\?([a-zA-Z0-9-._~%!$&'()*+,;=:@/?]*)?)?$/;

  return urlPathRegex.test(url);
}

export function isValidApiMethod(method: string): boolean {
  // List of valid HTTP methods
  const validMethods = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
    'HEAD',
    'OPTIONS',
    'CONNECT',
    'TRACE',
  ];

  // Convert the input method to uppercase to make it case-insensitive
  const uppercaseMethod = method.toUpperCase();

  // Check if the uppercaseMethod exists in the list of valid methods
  return validMethods.includes(uppercaseMethod);
}

export function isValidLanguageCode(value: unknown): boolean {
  // Check if the value is a string and if it's either 'id' or 'en'
  return typeof value === 'string' && (value === 'id' || value === 'en');
}
