#!/bin/bash
#
# Run this script to regenerate API docs. It assumes you have the SmugMug fork
# of YUI 3 checked out at ../yui3/src.
#

yuidoc -c yuidoc.json ../yui3/src
