export function encodeSlug(name: string) {
  return name.toLocaleLowerCase().replaceAll(" ", "-");
}