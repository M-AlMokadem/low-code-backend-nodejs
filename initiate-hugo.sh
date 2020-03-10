# echo "start"

# sleep 5

# echo "after 5 secs"

cd temp-web-site

hugo new site web-site

cd web-site/themes

git init

git submodule add https://github.com/rhazdon/hugo-theme-hello-friend-ng.git hello-friend-ng

cd ../../..

\cp temp-web-site/config.toml temp-web-site/web-site/config.toml

cd temp-web-site/web-site

hugo -D

