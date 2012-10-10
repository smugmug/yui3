#!/bin/bash
#
# Run this script to regenerate API docs. It assumes you have the SmugMug fork
# of YUI 3 checked out at ../yui3.
#

DOC_ROOT=$PWD

cd ../yui3
yuidoc -c "$DOC_ROOT"/yuidoc.json -o "$DOC_ROOT"/api src
