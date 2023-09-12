FROM postgres:latest

ENV POSTGRES_MAX_CONNECTIONS=200
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres.
ENV POSTGRES_DB=postgres

COPY ./init/* /docker-entrypoint-initdb.d/

EXPOSE 5432

ENTRYPOINT ["docker-entrypoint.sh", "postgres"]