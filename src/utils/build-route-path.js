export function buildRoutePath(path){
  const RouteParametersRegex= /:([a-zA-Z]+)/g

  console.log(Array.from(path.matchAll(RouteParametersRegex)))

  return path
}