eb init pokemons_gallery --platform node.js --region us-east-1 &&
eb use pokemons-gallery-dev && eb setenv DB_HOST=$DB_HOST DB_USER=$DB_USER DB_PASSWORD=$DB_PASSWORD DB_NAME=$DB_NAME PEPPER=$PEPPER TOKEN_SECRET=$TOKEN_SECRET ENV=$ENV  &&
eb deploy pokemons-gallery-dev