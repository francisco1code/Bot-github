#!/bin/bash

curl \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/users/francisco1code >> data_user.json
