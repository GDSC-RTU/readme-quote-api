<div align="center"> 
 <h1> QUOTIER </h1>
 <img src="https://quotier.vercel.app/quote" alt="quotes"/>
 <br/>
 <img src="https://img.shields.io/github/package-json/v/GDSC-RTU/quotier-readme-quotes?color=g&label=QUOTIER">
 <img src="https://img.shields.io/npm/v/npm">
 <img src="https://img.shields.io/github/languages/code-size/GDSC-RTU/quotier-readme-quotes?logo=github">
</div>

## API for Quotes📑 in JSON and rendered SVG form - Use it anywhere on GitHub, Your Website or wherever you like✨

## How to use

In your GitHub readme

```markdown
![QUOTES](https://readme-quote-api.vercel.app/quote)
```

In html

```html
<img src="https://readme-quote-api.vercel.app/quote" alt="Quotes" />
```

## Endpoints

**Base URL** - https://readme-quote-api.vercel.app/

| EndPoint                | Returns                                                       |
| ----------------------- | ------------------------------------------------------------- |
| /                       | Hello Page in API                                             |
| /quote                  | A random quote in rendered SVG form                           |
| /quote?textColor=242b2e | Hex color for the card text                                   |
| /quote?bgColor=fff      | Hex color for the card background                             |
| /quote?borderColor=f00d | Hex color for the card border                                 |
| /quote?hideBorder=false | Boolean indicating whether the border should be hidden or not |
| /quote?type=json        | Quote in json format                                          |
| /all                    | All quotes in JSON format within a single response            |

## Contribution Guidelines

Append your quote to quote.json inside the quote/ folder and raise the PR.

```
{
    "quote":"Your new Quote",
    "author":"Author of your quote",
}
```

## Run the application locally

- Make sure you have NodeJS installed. Check it by typing this command in your terminal -

```
node --version
```

- Fork this repository.
- Clone this repository by running the following command in your terminal -

```
git clone https://github.com/GDSC-RTU/readme-quote-api
```

- cd into the folder by using the following command -

```
cd readme-quote-api
```

- Install the dependencies by running the following command -

```
npm install
```

- **Setting Up development Enviornment create a `.env` file in root folver and add the following line**

```
NODE_ENV = development
```

- To run the application, type the following command in your terminal -

```
npm run dev
```

- Access the results produced by accessing the following URL in your browser -

```
localhost:3000
```
