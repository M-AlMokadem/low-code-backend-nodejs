cd temp-web-site

hugo new site web-site

cd web-site

git init

git submodule add https://github.com/rhazdon/hugo-theme-hello-friend-ng.git themes/hello-friend-ng

cd ../..

\cp ./temp-web-site/config.toml ./temp-web-site/web-site/config.toml

node ./temp-web-site/update-title.js

cd temp-web-site/web-site

hugo -D