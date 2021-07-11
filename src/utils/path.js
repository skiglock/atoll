export function getPath(path) {
  return path.replace('/content', '').slice(0, -1)
}
