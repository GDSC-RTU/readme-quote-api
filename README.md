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

| EndPoint         | Returns                                            |
| ---------------- | -------------------------------------------------- |
| /                | Hello Page in API                                  |
| /quote           | A random quote in rendered SVG form                |
| /quote?type=json | Quote in json format                               |
| /all             | All quotes in JSON format within a single response |

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

- Git Commands Listed by Abhishek Nagar-

```
git log -> for show the commit history
```

- Branch and Merge-

```
git branch -> list your branches
```

- Share and update-

```
git remote add [alias] [url] -> add a git URL as an alias
```
- Temporary Commits-

| Commands         | function                                           |
| --------------   | --------                                           |
| `git stash`      | *save modified and staged changes*                 |
|`git stash list`  | list **stack-order** of stashed file changes       |

```
Source - Git cheat sheet
```
```
{
    "quote": Keep Learning! ,
    "author": Abhishek Nagar ,
}
```
<p float="left">
  <img src="https://user-images.githubusercontent.com/95569445/195333662-80db3e2f-1134-4577-bff0-9bd8abc5463f.jpg" width="300" />
  <img src="https://user-images.githubusercontent.com/95569445/195332647-9768014f-bb36-4bc3-bbe9-72ab470b4928.jpg" width="210" /> 
  <img src="https://user-images.githubusercontent.com/95569445/195333866-31ad596b-e594-4f65-a6e2-8ee2fff653e7.png" width="400" />
</p>
