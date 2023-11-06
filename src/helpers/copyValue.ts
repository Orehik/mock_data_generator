export default async (value: string | string[]): Promise<void> => {
  if (typeof value === "string") {
    await window.navigator.clipboard.writeText(value)
  } else {
    await window.navigator.clipboard.writeText(value.join("\n"));
  }
};