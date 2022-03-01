export function encodeSlug(name: string) {
  return name.toLocaleLowerCase().replaceAll(" ", "-");
}

export function decodeSlug(slug: string) {
  return slug.replaceAll("-", " ").toLocaleUpperCase();
}

export function matchSlug(name: string, slug: string) {
  const decodedSlug = decodeSlug(slug);
  
  if(decodedSlug === name) return true;

  return false;
}