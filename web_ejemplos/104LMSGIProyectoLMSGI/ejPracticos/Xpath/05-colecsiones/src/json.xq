concat(
  "{ lanzamientos: [",
  string-join(
    for $x in //lanzamiento[@distribucion='redhat' or @distribucion='ubuntu']
    return concat(
      '{"distribucion":"', data($x/@distribucion),
      '", "version":"', data($x/@version),
      '"}'
    ),
    ", "
  ),
  "]}"
)