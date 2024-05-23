
# React Native CRUD App com Firebase e NativeWind 

Este projeto é um aplicativo React Native que realiza operações básicas de CRUD (Create, Read, Update, Delete) utilizando o Firebase Cloud Firestore como banco de dados e o NativeWind para estilização dos componentes. 

## Funcionalidades  

-  Adicionar novos itens ao banco de dados. 
-  Listar itens armazenados no Firestore. 
-  Atualizar itens existentes. 
-  Excluir itens do banco de dados. 

## Tecnologias Utilizadas  

- [React Native](https://reactnative.dev/) 
- [Firebase](https://firebase.google.com/) 
	- Cloud Firestore
 - [NativeWind](https://nativewind.dev/) 
 - [Expo](https://expo.dev/) 
 
## Requisitos  
 - Node.js (versão 14 ou superior) 
 - Yarn ou npm 
 - Conta no Firebase com um projeto configurado

## Instalação  

1. Clone este repositório: 
	```bash 
	git clone https://github.com/seu-usuario/react-native-cloud-firestore.git 
	```
	```bash
	cd react-native-cloud-firestore
	```
2. Instale as dependências
	```bash 
	npm install
	```
	ou
	```bash
	yarn install
	```

3. Crie um projeto no [Firebase](https://firebase.google.com/) 
4. Adicione um novo app ao seu projeto Firebase e copie as configurações do Firebase.
5. Crie uma pasta chamada `firebase` na raiz do projeto e, dentro dela, um arquivo `firebase.config.ts`.
6.  Adicione as configurações do Firebase no arquivo `firebase/firebase.config.ts` conforme o exemplo abaixo:
	```typescript
	// firebase/firebase.config.ts
	import { initializeApp } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';

	const firebaseConfig = {
	  apiKey: "SUA_API_KEY",
	  authDomain: "SEU_AUTH_DOMAIN",
	  projectId: "SEU_PROJECT_ID",
	  storageBucket: "SEU_STORAGE_BUCKET",
	  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
	  appId: "SEU_APP_ID",
	};

	const app = initializeApp(firebaseConfig);
	const cloudFirestore = getFirestore(app);

	export { cloudFirestore };
	```
7. Execute o aplicativo:
	```shell
	npx expo start
	```