#!/usr/bin/env bash
# Run ONCE with internet access, before Figma temporary image links expire.
set -euo pipefail
mkdir -p "$(dirname "$0")/assets"
cd "$(dirname "$0")/assets"
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/01dd0fd9-02c5-409d-8f83-d3b0d33950de.png' -o hero.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/1e138dc0-4c38-4adf-98c2-d5e6641e1aca.png' -o texture.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/3192cea7-a0b5-4064-8b83-4680c4c0fb23.png' -o portrait.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/29edbcec-d4fb-4230-b633-4e825dc57bd8.png' -o approach.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/15fac1fd-0dbb-44c1-8620-e80fd43df05e.png' -o dashboard.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/277d17c9-869a-44f5-b40b-766f04936762.png' -o certificate.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/25941969-0529-44b5-8209-3b6a23b95bf3.png' -o internship.png
curl -fL --retry 3 'https://www.figma.com/api/mcp/asset/405bf0ed-72bc-47b9-9196-7f7f0a775cea.png' -o university.png
printf '\nImages saved locally. The website now works offline.\n'
