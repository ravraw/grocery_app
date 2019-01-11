# Grocery App: Cross Aisle

### Main Contributors: [Ying Dong](https://github.com/dongyingname) & [Ravindra Rawat](https://github.com/ravraw)

## Description

A website where customers may order grocery deliveries; it compares the prices of the selected groceries among stores and deliver from the closest location as possible.

!["Screenshot of Home Page"](https://github.com/ravraw/grocery_app/screenshots/home.png)
!["Screenshot of Home Page"](https://github.com/ravraw/grocery_app/screenshots/products.png)

## Prerequisites

NodeJS </br>
PostgresQL

## Installation

Run

```bash
$ git clone git@github.com:ravraw/grocery_app.git
```

to clone the project into your local machine.

In both ./client and ./server, run

```bash
$ npm install
```

to install dependencies.

## Database Set-up

Create username 'labber' and its password as 'labber' in PostgresQL. Create database 'grocery_app'

In /grocery_app/server, run

```bash
$knex migrate:latest
```

then

```bash
$knex seed:run
```

Additional seeding need to be done before starting the server.
Login to PostgresQL and connect to database 'grocery_app'.
Run

```
grocery_app=# .........................................
```

## Get Started

Run

```bash
$npm start
```

in <b>./server</b> then in <b>./client</b>.
The order is essential because the client server requests data on start.

## Dependencies

### Front-End (./client)

<img src='https://img.shields.io/badge/React-16.6.3-brightgreen.svg' />

<img src='https://img.shields.io/badge/React--Apollo-2.3.2-brightgreen.svg' />
<img src='https://img.shields.io/badge/React--Dom-16.6.3-brightgreen.svg' />
<img src='https://img.shields.io/badge/React--Responsive--modal-3.5.1-brightgreen.svg' />
<img src='https://img.shields.io/badge/React--Router--Dom-4.3.1-brightgreen.svg' />
<img src='https://img.shields.io/badge/React--Scripts-2.1.3-brightgreen.svg' />
<img src='https://img.shields.io/badge/React--Speech--Recognition-1.0.7-brightgreen.svg' />
<img src='https://img.shields.io/badge/React--Stripe--Elements-2.0.1-brightgreen.svg' />
<img src='https://img.shields.io/badge/Apollo--Boost-0.1.22-brightgreen.svg' />
<img src='https://img.shields.io/badge/Apollo--Cache--Inmemory-1.3.12-brightgreen.svg' />
<img src='https://img.shields.io/badge/Apollo--Client-2.4.8-brightgreen.svg' />
<img src='https://img.shields.io/badge/Apollo--Link-1.2.6-brightgreen.svg' />
<img src='https://img.shields.io/badge/Apollo--Utilities-1.0.27-brightgreen.svg' />
<img src='https://img.shields.io/badge/graphql-14.0.2-brightgreen.svg' />
<img src='https://img.shields.io/badge/Node--Sass-4.11.0-brightgreen.svg' />
<img src='https://img.shields.io/badge/Prop--Types-15.6.2-brightgreen.svg' />

### Back-End (./server)

<img src='https://img.shields.io/badge/Apollo--Server-2.2.6-orange.svg' />
<img src='https://img.shields.io/badge/Bcrypt-3.0.3-orange.svg' /><img src='https://img.shields.io/badge/Body--Parser-1.18.3-orange.svg' /><img src='https://img.shields.io/badge/Cors-2.8.5-orange.svg' /><img src='https://img.shields.io/badge/Dotenv-6.2.0-orange.svg' /><img src='https://img.shields.io/badge/Express-4.16.4-orange.svg' /><img src='https://img.shields.io/badge/Faker-4.1.0-orange.svg' />
<img src='https://img.shields.io/badge/Graphql-14.0.2-orange.svg' />
<img src='https://img.shields.io/badge/Graphql--Subscriptions-1.0.0-orange.svg' />
<img src='https://img.shields.io/badge/Jsonwebtoken-8.4.0-orange.svg' /><img src='https://img.shields.io/badge/Knex-0.16.2-orange.svg' /><img src='https://img.shields.io/badge/pg-7.7.1-orange.svg' />
<img src='https://img.shields.io/badge/Stripe-6.19.0-orange.svg' />
<img src='https://img.shields.io/badge/Subscriptions--Transport--WS-0.9.15-orange.svg' />
<img src='https://img.shields.io/badge/Twilio-3.26.0-orange.svg' />
