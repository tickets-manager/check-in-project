CREATE DATABASE ticketsmanager;
ALTER DATABASE ticketsmanager OWNER TO ticketsuser;
GRANT ALL PRIVILEGES ON DATABASE ticketsmanager TO ticketsuser;
GRANT ALL PRIVILEGES ON DATABASE ticketsmanager TO prisma;

CREATE DATABASE ticketsmanagertests;
ALTER DATABASE ticketsmanagerhomologation OWNER TO ticketsuser;
GRANT ALL PRIVILEGES ON DATABASE ticketstests TO ticketsuser;
GRANT ALL PRIVILEGES ON DATABASE ticketstests TO prisma;