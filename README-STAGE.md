# Technical test - Internship

Hi developer ! Welcome for the technical test for the full-stack developer intern position.
It is divided in 2 parts:

- Part 1: Logical programming: Language free
- Part 2: Front-end or back-end mini-project:  JavaScript / TypeScript


## Part 1 - Logical Testing: Langague Free

You can use the language you are the most comfortable with.


### Problem

```
Le marathon est une épreuve sportive où les participants doivent parcourir 42 kilomètres. Lors d'une soirée pizza avec vos amis, vous discutez du prochain marathon qui se tiendra dans votre ville. Vos amis sont convaincus que vous n'êtes pas capable de terminer la course et vous, vous leur jurez que vous êtes sûr(e) de finir dans les 100 premiers.
Les paris sont lancés :
- si vous terminez dans le top 100, vous gagnez 1 000 euros ;
- si vous terminez le marathon, vous gagnez 100 euros ;
- si vous ne terminez pas le marathon, vous aurez juste perdu votre crédibilité.


Vous passez la ligne de départ à une certaine place, et tous les kilomètres, vous faites le point sur le nombre de personnes qui vous ont dépassées et celles que vous avez dépassées pour connaitre votre classement.

Dans ce challenge, on considère que le marathon fait exactement 42km et que si vous terminez après la 10 000ème place, cela veut dire que vous avez abandonné.

Objectif

Vous devez déterminer le montant gagné lors de votre pari.

Format des données

Entrée

Ligne 1 : un entier compris entre 1 et 20 000 correspondant à votre classement lorsque vous passez la ligne de départ.
Lignes 2 à 43 : deux entiers séparés par un espace représentant respectivement les personnes vous ayant dépassé(e) et celles que vous avez dépassées pour un kilomètre donné.

Sortie

Un entier correspondant au montant gagné lors de votre pari. Si vous ne gagnez rien, renvoyez la chaîne de caractères KO.
```

You can find some in this [folder](https://github.com/GlowmeFR/technical-test/tree/main/logical-problem) input & output examples to test your code.


##  Mini-Project

For this part you can choose to do either a web application using React or an API using Express. You are recommended to use TypeScript but JavaScript is okay.

### Choice 1: Web application

You have to create a counter app: 


- The counter should be initialized at 0
- You will be able to increase and decrease the counter using 2 buttons

You are free to use CSS, SCSS or CSS Frameworks to beautify your application.


### Choice 2: API

You have to create an API containing 3 endpoints:

- GET `/hello`: Return `Hello world` with status code `200`
- POST `/repeat-cat-name`:
    - Returns the message given in the body of the request
    - If the body is empty
        - Set Status `400`
        - Return Bad Request
- PUT `/repeat-header`:
    - Returns the value of the the header `X-Message`
    - If the header is empty
        - Set Status `400`
        - Return Bad Request

> To test your routes, you can use [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/)

Have fun ;-)

## Authors

- [Pr0m3th3usEx - Thomas Michel](https://github.com/pr0m3th3usEx)