.PHONY: cs cs_fix watch serve

VENDOR=node_modules
BIN=$(VENDOR)/.bin
SITE_DIR=public

$(SITE_DIR): $(VENDOR)
	yarn run build

$(VENDOR): package.json yarn.lock
	yarn && touch $(VENDOR)

cs: $(VENDOR)
	yarn run lint

cs_fix: $(VENDOR)
	yarn run lint:fix

watch: $(VENDOR)
	yarn run develop

serve: $(VENDOR)
	yarn run serve
