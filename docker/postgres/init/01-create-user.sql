CREATE USER ticketsuser WITH PASSWORD 'tickets@manager';

-- make prisma user a superuser
CREATE USER prisma WITH PASSWORD 'prismajs';

ALTER USER prisma WITH SUPERUSER;

