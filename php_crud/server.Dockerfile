FROM php:8.3-fpm-alpine

RUN apk update && apk add --no-cache \
    git \
    npm \
    bash \
    freetype-dev \
    libjpeg-turbo-dev \
    libpng-dev \
    libxml2-dev  \
    composer \
    php \
    zip\
    unzip \
    php83-session \
    php83-fileinfo \
    php83-tokenizer \
    php83-dom


COPY --from=composer:2.7.6 /usr/bin/composer /usr/local/bin/composer

WORKDIR /app

COPY . /app

RUN composer install --no-interaction --prefer-dist

EXPOSE 8000
