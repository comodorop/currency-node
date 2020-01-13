
# Iniciar el proyecto

Para iniciarl el proyecto, solo basta ejecutar el contenedor correspondiente.
Anexo los siguientes comandos

```
docker build -t "wscurrency:1.0" .

docker run -dti --name "wscurrencycontainer" -p 3000:3000 wscurrency:1.0

```

# ms-import
import Microservice

Examples of routing for services and database connections

### Installation

Install the dependencies

```sh
$ cd ms-company
$ npm install
$ cp .sqlmigrate.example .sqlmigrate
```
Create env file outside the service folder
add your information to environment vars

```sh
$ npm run elastic-migrate
$ node_modules/.bin/sqlmigrate
$ node index.js
```

### Migration instructions



Create migration

```sh
$ node_modules/.bin/sqlmigrate create --name='migration name'
```
Execute migrations

```sh
$ node_modules/.bin/sqlmigrate
```

Execute an exact number of migrations

```sh
$ node_modules/.bin/sqlmigrate --max=2
```
