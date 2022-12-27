# :computer: Trybe-02-Project-Playground-Functions :computer:

Nesse projeto utilizei lógica de programação para ajudar na análise de cada problema e implementar o código de funções que resolvem problemas com respostas pré-determinadas.

<br />

<details>
<summary>
  
## 1- Requisitos

</summary>
  
### 1 - Crie uma função usando o operador &&

<details>
  <summary>
    Implemente a função <code>compareTrue</code> utilizando somente o operador <code>&&</code>
  </summary> <br />

A função `compareTrue` ao receber dois parâmetros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.

  
Exemplo:

```javascript
const girafa = true;
const elefante = true;
const macaco = false;
```

Se a função for chamada com os valores `girafa` e `elefante` como parâmetro, retorna `true`, mas caso  seja chamada com os parâmetro `macaco` e `elefante` retorna `false`.

</details>

### 2 - Crie uma função que calcula a área de um triângulo

<details>
  <summary>
Implemente a função <code>calcArea</code> que retorna o cálculo da área total de um triângulo

  </summary> <br />

A função `calcArea` recebe o valor da base (`base`) e outro da altura (`height`) de um triângulo e retorna o cálculo da sua área.

- Realize o cálculo da área total do triângulo utilizando a fórmula `(base * altura) / 2`.

</details>


### 3 - Crie uma função que divida uma frase

<details>
  <summary>
Implemente a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.
  
  Exemplo: se a função receber a string `'go Trybe'`, o retorno deverá ser `['go', 'Trybe']`.

</details>


### 4 - Crie uma função que use concatenação de strings

<details>
  <summary>
Implemente a função <code>concatName</code> que recebe um array de strings e retorna uma string com o último e o primeiro item

  </summary> <br />
A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.
  
  Exemplo:

- Caso o parâmetro passado para a função `concatName` seja o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, a função deverá retornar `Paolillo, Lucas`.

</details>

### 5 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

<details>
  <summary>
Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates

  </summary> <br />

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

- `wins`: é o número de vitórias e vale 3 pontos;
- `ties`: é o número de empates e vale 1 ponto.

</details>


### 6 - Crie uma função que calcula o número de repetições do maior número

<details>
  <summary>
Implemente a função <code>highestCount</code> que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números. 

  </summary> <br />

A função `highestCount` deve retornar a quantidade de vezes que o **maior** número se repete dentro do array.
  
  Por exemplo:

- Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.

</details>


### 7 - Crie uma função de Caça ao Rato

<details>
  <summary>
Implemente a função <code>catAndMouse</code> que verifica qual gato está mais perto do rato

  </summary> <br />
Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:
    
    - `mouse`: representa a posição do rato.

    - `cat1`: representa a posição do gato 1;
    
    - `cat2`: representa a posição do gato 2;
 
 
- Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

   - Retorne a string `'cat2'` se o gato `cat2` estiver mais próximo do rato;
   - Retorne a string `'cat1'` se o gato `cat1` estiver mais próximo do rato;
   - Retorne a string `'os gatos trombam e o rato foge'` caso os gatos estejam na mesma distância do rato.
   
Exemplo:

- Caso o gato `cat2` esteja a 2 unidades de distância do rato e o `cat1` esteja a 3 unidades, sua função deverá retornar `'cat2'`;

- Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `'os gatos trombam e o rato foge'`. 

</details>


### 8 - Crie uma função FizzBuzz

<details>
  <summary>
Implemente a função <code>fizzBuzz</code> que recebe um array de números e retorna um array de string de acordo com o resultado

  </summary> <br />

A função `fizzBuzz` recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar um array de strings:

- Retorne a string `'fizz'` para cada número do array que seja divisível apenas por 3;
- Retorne a string `'buzz'` para cada número do array que seja divisível apenas por 5;
- Retorne a string `'fizzBuzz'` para cada número do array que seja divisível por 3 **e** 5;
- Retorne a string `'bug!'` para cada número do array que não seja dividido por 3 nem por 5.

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`.

</details>


### 9 - Crie uma função que Codifique e Decodifique

<details>
  <summary>
Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

  </summary> <br />

  Para codificar a frase utilize a função `encode` que recebe uma string como parâmetro e deverá trocar todas as **vogais minúsculas por números**, de acordo com o formato:
  
a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5
  
  Ou seja, caso o parâmetro de `encode` seja `'hi there!'`, o retorno deverá ser `'h3 th2r2!'`.


  Para decodificar a frase utilize a função `decode` que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os **números por vogais minúsculas**, de acordo com o formato: 
  
1 -> a \
2 -> e \
3 -> i \
4 -> o \
5 -> u
  
  Por exemplo, caso o parâmetro de `decode` seja `'h3 th2r2!'`, o retorno deverá ser `'hi there!'`.

</details>


### 10 - Crie uma função de Lista de Tecnologias

<details>
  <summary>
Implemente a função <code>techList</code> que recebe um array e uma string e retorna um array de objetos.

  </summary> <br />

  A função `techList` recebe dois parâmetros:

  - Um array com nomes de tecnologias ;
  - Um nome referente ao nome de uma pessoa.
  
  A função deverá retornar:
  - 'Vazio!' se não receber parâmetro algum ;
  - Um objeto para cada tecnologia do array, com a seguinte estrutura:

```javascript
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
```

Por exemplo, se a função recebe os parâmetros `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` e `'Lucas'`, o retorno deve ser:

```javascript
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

</details>

## Requisitos Bônus

### 11 - Crie uma função de número de telefone

<details>
  <summary>
Implemente a função  <code>generatePhoneNumber</code> que recebe um array com 11 números e retorna um número de telefone, respeitando parênteses, traços e espaços.

  </summary> <br />

Exemplo: caso o parâmetro da função seja `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, a função `generatePhoneNumber` deverá retornar `(12) 34567-8901`.

- Retorne a frase `'Array com tamanho incorreto.'` se a função receber um array com tamanho diferente de 11;

- Retorne a string `'não é possível gerar um número de telefone com esses valores'` caso algum dos números do array seja **menor** que 0, **maior** que 9 ou se repita 3 vezes ou mais.

</details>

### 12 - Crie uma função que teste a condição de existência de um triângulo

<details>
  <summary>
Implemente a função <code>triangleCheck</code> que verifica se é possível formar um triângulo analisando o comprimento de três linhas

  </summary> <br />

  A função `triangleCheck` deverá receber os parâmetros `lineA`, `lineB` e `lineC` com o valor do comprimento de três linhas distintas.

  - Para que seja possível formar um triângulo, é necessário que **a medida de *qualquer* um dos lados** atenda às seguintes condições: 
  
  1) seja **menor** que a soma das medidas dos outros dois lados; 
  
  ***E***
  
  2) seja **maior** que o valor absoluto (módulo) da diferença entre os outros dois lados.

**De olho na dica :eyes:** Para obter o valor absoluto de um número em JavaScript, pesquise pela função `Math.abs`.
  
  - O retorno da sua função deverá ser um booleano.

Exemplo: o retorno de `triangleCheck(10, 14, 8)` deverá ser `true`.

</details>

### 13 - Crie uma função de boas vindas ao Bar da Trybe!

<details>
  <summary>
Implemente a função `hydrate` que recebe uma string e retorna a sugestão de quantos copos de água você deve beber.

  </summary> <br />


```javascript
// String recebida:
  '1 cerveja'
// String retornada:
  '1 copo de água'
```

```
// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'
// String retornada:
  '7 copos de água'
```

```
// String recebida:
  '1 cachaça, 5 cervejas e 1 copo de vinho'
// String retornada:
  '7 copos de água'
```

- Para simplificar, considere que a string **sempre** terá o formato *quantidade (em número) + tipo da bebida*;

- O número na frente de cada bebida deve estar entre 1 e 9.

**De olho na dica 👀:** pesquise por algo similar a `get all integers inside a string js`.

</details>

</details>

## 2- Nota do Projeto

## 100% :heavy_check_mark:

![Project-Playground-Functions-Grade](https://github.com/FredericoTP/trybe-project-02-playground-functions/blob/main/image/2-playground-functions.png?raw=true)
