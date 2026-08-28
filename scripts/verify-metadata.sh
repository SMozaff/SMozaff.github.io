#!/usr/bin/env bash
set -euo pipefail
for f in index.html fa/index.html; do
  echo "[$f]"
  grep -oE '<title>[^<]+' "$f" | sed 's/<title>//' | awk '{print "title_chars=" length($0) " | " $0}'
  sed -n '/<meta$/,/\/>/p' "$f" | grep 'content=' | sed -E 's/.*content="([^"]*)".*/\1/' | awk '{print "description_chars=" length($0) " | " $0}'
  grep -q 'rel="canonical"' "$f"
  test "$(grep -o 'rel="alternate" hreflang=' "$f" | wc -l)" -eq 3
  grep -q 'application/ld+json' "$f"
  grep -q 'ifem-doctrine.github.io' "$f"
  grep -q 'smozaff.github.io/' "$f"
done
