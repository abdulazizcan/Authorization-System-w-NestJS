<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# Nest.JS Authorization System

Authorization System built with NestJS. 

## Features

- Authentication using [Passport](https://www.passportjs.org/)
- [Local](https://www.passportjs.org/packages/passport-local/) and [JWT](https://www.passportjs.org/packages/passport-local/) strategies are implemented
- [TypeORM](https://typeorm.io/) to connect with SQLite

## Installation

```bash
npm install
```

## How to Run the App

1. Clone the repo locally or download it.

`git clone <https://github.com/abdulazizcan/Authorization-System-w-NestJS.git>`



### Development

`npm run start`

### Watch mode

`npm run start:dev`


## API Endpoints

```
/profile             => user's profile

/auth/login          => login and get token

/user                => require authorization
                        you can also use GET/POST/PATCH/DELETE Methods.
```


## Notes

- I plan to develop this app further. 
- If you encounter any deficiencies or errors, don't hesitate to report it. I'm always open to your suggestions and advice on areas where I can improve myself.

## Author

- Abdülaziz CAN | [Twitter](https://twitter.com/acanisioo)

## Useful Links

[NestJS Docs](https://docs.nestjs.com/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)