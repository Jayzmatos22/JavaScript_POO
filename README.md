# 🕹️ Escrevendo as Classes de um Jogo

Projeto desenvolvido como parte de um desafio prático da **Digital Innovation One (DIO)**, com o objetivo de praticar conceitos fundamentais de **JavaScript orientado a objetos**.

---

## 📌 Descrição do Desafio

Criar uma classe genérica que represente um herói de uma aventura, contendo propriedades básicas e um método de ataque que se comporte de forma diferente conforme o tipo do herói.

---

## 🎯 Objetivo

Implementar uma classe `Heroi` que possua:

### 🔹 Propriedades:
- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja)

### 🔹 Método:
- `atacar()`

O método deve exibir a seguinte mensagem no console:

o {tipo} atacou usando {ataque}

yaml
Copiar código

Onde o tipo de ataque varia conforme a classe do herói:

| Tipo       | Ataque usado            |
|------------|-------------------------|
| mago       | magia                   |
| guerreiro  | espada                  |
| monge      | artes marciais          |
| ninja      | shuriken                |

---

## 🧠 Conceitos Utilizados

- Variáveis
- Operadores
- Estruturas de decisão (`switch`)
- Funções / Métodos
- Classes e Objetos
- Instanciação com `new`
- Template strings

---

## 🛠️ Tecnologias

- JavaScript (ES6+)

---

## ▶️ Como Executar

1. Clone este repositório:
   ```bash
   git clone [https://github.com/Jayzmatos22/JavaScript_POO](https://github.com/Jayzmatos22/JavaScript_POO)
Acesse a pasta do projeto:

bash
Copiar código
cd seu-repositorio
Execute o arquivo com Node.js:

bash
Copiar código
node hero.js
🖥️ Exemplo de Saída
text
Copiar código
o mago atacou usando magia
o guerreiro atacou usando espada
o monge atacou usando artes marciais
o ninja atacou usando shuriken
