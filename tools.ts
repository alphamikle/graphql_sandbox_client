export function prettyJson(value: any): string {
  return JSON.stringify(value, null,  ' ');
}