// ?search==bjj

export function extractQueryParams(query) {
  return query.substr(1).split('&').reduce((queryParams, param) => {
    const [key, value] = params.split('=')

    queryParam[key] = value

    return queryParams
  })
}