export default async (value: string): Promise<void> => {
  await window.navigator.clipboard.writeText(value)
};