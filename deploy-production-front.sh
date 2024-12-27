#!/bin/bash

PROJECT_DIR="/home/viacc/jtelavaisdit/production/jtelavaisdit-front"
BRANCH="main"
MAKE_CMD="/usr/bin/make"

# Vérifications de base
if [ ! -d "$PROJECT_DIR" ]; then
  echo "Erreur : Le dossier du projet '$PROJECT_DIR' est introuvable."
  exit 1
fi

if [ ! -x "$MAKE_CMD" ]; then
  echo "Erreur : La commande make est introuvable ou non exécutable."
  exit 1
fi

# Passage au répertoire du projet
cd "$PROJECT_DIR" || {
  echo "Erreur : Impossible de naviguer dans le dossier '$PROJECT_DIR'."
  exit 1
}

# Pull des dernières modifications
echo "Mise à jour du dépôt Git pour la branche '$BRANCH'..."
git fetch --all
git checkout --force "origin/$BRANCH"

if [ $? -ne 0 ]; then
  echo "Erreur : Échec lors de la mise à jour de la branche '$BRANCH'."
  exit 1
fi

# Lancer la commande Make
echo "Déploiement avec Make pour la branche '$BRANCH'..."
$MAKE_CMD up-prod

if [ $? -ne 0 ]; then
  echo "Erreur : Échec du déploiement via Make."
  exit 1
fi

echo "Déploiement production terminé avec succès !"
