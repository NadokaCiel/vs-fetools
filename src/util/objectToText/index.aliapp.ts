export function objectToText(data: any): string {
  try {
    return data?.toString?.() ?? JSON.stringify(JSON.parse(data));
  } catch (e) {
    return "testestestest";
  }
}
