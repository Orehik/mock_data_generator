export default async (arr: string[]): Promise<void> => {
  await window.navigator.clipboard.writeText(arr.join("\n"));
}