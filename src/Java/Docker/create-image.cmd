docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proba11-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t proba11-java/app ../../..
