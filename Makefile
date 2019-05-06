default: _site _site/404.html

_site:
	bundle exec jekyll build

_site/404.html: _site/404/index.html
	cp _site/404/index.html _site/404.html

draft:
	bundle exec jekyll serve --drafts
