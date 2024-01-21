#!/bin/bash

pandoc slides.txt -o output.html --template=src/template.html --lua-filter=src/div_filter.lua