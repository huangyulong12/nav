jekyll build
cd _site
git init
git add .
git commit -m "Deploy to gh-pages"
git push origin gh-pages --force
