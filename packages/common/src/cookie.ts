/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Helper method used to extract name and value from cookie string.
 *
 * @stable
 */
function cookieProperties(cookie: string) {
  const eqIndex = cookie.indexOf('=');
  if(eqIndex > -1) {
    return [cookie.slice(0, eqIndex), cookie.slice(eqIndex + 1)]
  }
  return [cookie, ''];
}

export function parseCookieValue(cookieStr: string, name: string): string|null {
  name = encodeURIComponent(name);
  for (const cookie of cookieStr.split(';')) {
    const [cookieName, cookieValue]: string[] = cookieProperties(cookie);
    if (cookieName.trim() === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
