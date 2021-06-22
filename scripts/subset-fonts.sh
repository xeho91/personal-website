#!/usr/bin/env bash

LOCALHOST_URL="http://localhost:3000"
# UNICODE_RANGE="$(glyphhanger $LOCALHOST_URL)"
#
# echo "Unicode range is: $UNICODE_RANGE"
# echo "And in string format: $(glyphhanger $LOCALHOST_URL --string)"

for TTFfile in ./static/fonts/**/*.ttf; do
	glyphhanger "$LOCALHOST_URL" --subset="$TTFfile" --formats=woff2 --LATIN --whitelist=ł
done
