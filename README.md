# dbillnatcast (Android)

## Installer les libs (voir info dans package.json)

    npm i

## Version Java

    java -version

La version de Java doit être 17+ et moins que 24

## Remplacer le APP ID dans le code par le votre.

Faites une recherche pour l'appID **859D2D06** et remplacez cette valeur par la votre.

## SDK local

Valider dans SDK Tools (si vous êtes sur un laptop ou votre ordinateur).

NDK doit être 26.0.10792818
CMAKE doit être 3.22.1

# Ajout ANDROID_HOME dans vos variables d'environnements

Voir tutoriel D pour cela.

# Ajout des commandes dans le PATH

Voir tutoriel D pour cela.

# Build avec connexion WIFI pour Android

Activez le WIFI Debug sur votre cellulaire et accepter le réseau MV_DC_TEST

## Démarrer le Wifi Pairing sur votre cellulaire.

Sur le serveur distant, connectez-vous sur celui-ci avec la commande

    adb pair ip:port

## Valider que votre device est disponible

    adb devices

# Ajout du keystore file debug.keystore

Aller dans ./android/app

    keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000

## Build et transfert de l'app en debug sur votre téléphone

    npx expo run:android

## Repartez le serveur au besoin :

    npx expo start

# Builder localement

    npx expo run:android

# Si application est déjà buildé et que npx expo est en erreur

Repartez l'application expo (start).

    npx expo start

Puis démarrer votre application sur votre téléphone.

Entrez manuellement l'ip écrit à l'écran (192.168.0.X)
