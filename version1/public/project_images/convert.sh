#!/bin/bash

# Makes sure the script is executed from its own current directory
cd "$(dirname "$0")"

# This script iterates through all files in the current directory with the .png extension
for i in *.png; do 
  # Check if the file "thumb-$i" does not exist and the current file being processed is not already a "thumb" file
  if [[ ! -e "thumb-$i" && $i != thumb-* ]]; then
    echo "Converting..."
    # If the above condition is true, use the convert command to create a thumbnail of the file with a 50px width
    convert -thumbnail 50 "$i" "thumb-$i"
  else
    echo "Already converted"
  fi
done