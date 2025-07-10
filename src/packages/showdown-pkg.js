export function markdownHTML(text) {
  const converter = new showdown.Converter()
  return converter.makeHtml(text)
}