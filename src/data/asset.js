export default function asset(path) {
  if (!path) return path;
  return import.meta.env.BASE_URL + path.replace(/^\//, "");
}
