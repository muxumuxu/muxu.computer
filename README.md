# muxu.computer website

## Setup

```
docker-compose build
docker-compose run web rails db:create
docker-compose run web rails db:migrate
docker-compose run web rails db:seed
docker-compose up
```

## Deployment on Heroku Staging

```
heroku container:login
heroku container:push web --app muxu-computer
```
