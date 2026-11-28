#!/usr/bin/env bash
set -euo pipefail

origin=http://127.0.0.1:8787
temp_dir=$(mktemp -d)
WRANGLER_SEND_METRICS=false bun run wrangler dev \
    --local --ip 127.0.0.1 --port 8787 --config .output/server/wrangler.json \
    >"$temp_dir/worker.log" 2>&1 &
worker_pid=$!
cleanup() {
    if [ "$?" -ne 0 ]; then
        cat "$temp_dir/worker.log"
    fi
    kill "$worker_pid" 2>/dev/null || true
    wait "$worker_pid" 2>/dev/null || true
    rm -rf -- "$temp_dir"
}
trap cleanup EXIT

curl --fail --silent --show-error --retry 25 --retry-connrefused --retry-delay 1 \
    --max-time 5 "$origin/" -o "$temp_dir/home.html"
kill -0 "$worker_pid"
grep -Eq '<title>[^<]+</title>' "$temp_dir/home.html"

for route in \
    /apps /apps/pocket-key-manager /apps/pocket-key-manager/privacy \
    /apps/pocket-key-manager/terms /apps/pocket-key-manager/support \
    /privacy /terms /support; do
    curl --fail --silent --show-error --max-time 5 "$origin$route" -o "$temp_dir/page.html"
    grep -Eq '<title>[^<]+</title>' "$temp_dir/page.html"
done

mrl_route=/apps/mini-rent-ledger
mrl_assets=/assets/app/mini_rent_ledger/web
sharing_image=https://endit.com.au$mrl_assets/mrl-social-share-1200x630.jpg
grep -Fq "href=\"$mrl_route\"" "$temp_dir/home.html"
curl --fail --silent --show-error --max-time 5 "$origin/apps" -o "$temp_dir/apps.html"
grep -Fq "href=\"$mrl_route\"" "$temp_dir/apps.html"
curl --fail --silent --show-error --max-time 5 "$origin$mrl_route" -o "$temp_dir/mrl.html"
grep -Fq 'Coming soon for Android and iOS.' "$temp_dir/mrl.html"
grep -Fq "property=\"og:image\" content=\"$sharing_image\"" "$temp_dir/mrl.html"
grep -Fq "name=\"twitter:image\" content=\"$sharing_image\"" "$temp_dir/mrl.html"

for asset in mrl-icon-192.png mrl-wordmark-on-dark.svg mrl-social-share-1200x630.jpg; do
    curl --fail --silent --show-error --max-time 5 "$origin$mrl_assets/$asset" -o "$temp_dir/asset"
    test -s "$temp_dir/asset"
done

status=$(curl --silent --show-error --max-time 5 --output /dev/null --write-out '%{http_code}' \
    "$origin/missing-route-for-smoke-test")
test "$status" = 404

for extension in css js; do
    asset=$(grep -Eo -m 1 "/assets/[^\"<> ]+\.$extension" "$temp_dir/home.html" | sed -n '1p')
    curl --fail --silent --show-error --max-time 5 "$origin$asset" -o "$temp_dir/asset"
    test -s "$temp_dir/asset"
done

printf 'Worker served ten pages, a 404, built CSS and JavaScript, and MRL branding assets.\n'
