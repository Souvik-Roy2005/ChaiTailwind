export function parseClass(className) {
  const parts = className.split("-");

  if (parts.length < 3) return null;

  const [, property, ...rest] = parts;
  const value = rest.join("-");

  return { property, value };
}