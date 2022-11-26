# Legatree app


## Installation

Clone the project

```bash
  git clone https://github.com/orijinnCHD/legatree-dapp.git
```

Installer les dépendances

```bash
  npm install
```

## installer un noeud moonbeam dev avec Docker

 installer Docker desktop sur votre machine, 
 ```bash
  https://www.docker.com/
```
 
 Dans le dossier de travail, telecharger l'image docker correspondant: 

```bash
  truffle run moonbeam install
```


## lancer le noeud 
```bash
  truffle run moonbeam start
```


## stopper le noeud 
```bash
  truffle run moonbeam stop
```


## mettre le noeud en pause
```bash
  truffle run moonbeam pause
```


## compiler votre contract

build du smartcontract(artifact) sera enregistré dans le dossier client/src/contracts
```bash
  truffle compile
```

## deployer le contract compilé sur le noeud Dev

```bash
  truffle migrate --network dev
```


## deployer le contract compilé sur moonbeam

```bash
  truffle migrate --network moonbeam
```

