# Foot_Manager

# Objectif

- Un Jeu style football manager dans lequel tu créerai ton équipe.
- En fonction des matchs, qui se déroulerai de manière simulée, tu gagnerai ou pas des crédits, crédits te permettants d’acheter d’autres joueurs présents sur un marché des transferts
- Ces joueurs achetés sur le marché ont une note plus élevé que celle de tes joueurs, donc une valeur marchande plus importante
- Tu peux gérer ton effectif comme bon te semble
- Il y aurait la possibilité de parler à d’autres joueurs, sur un canal public
- L’objectif : avoir l’équipe la plus forte (et donc celle avec la plus grosse note générale.               Il n’y a pas de fin du jeu
- Tu peux progresser tous les jours sur ce jeu, le quitter et revenir avec la même progression

Moyen terme : 

- L’idéal serait de pouvoir faire varier ta probabilité de gagner et ton ratio de victoire en fonction du niveau de ton équipe, niveau qui se traduirait par la note général de ton équipe, une moyenne des notes de chaque joueurs de ton équipe
- Tu pourrai donc gagner des crédits en faisant des matchs, d’économiser ces crédits jusqu’à en avoir assez pour acheter des joueurs avec des notes générales élevés, afin d’élever la note générale de ton équipe, pour augmenter ta probabilité de Gagner tes matchs, pour gagner plus de crédits, et ainsi de suite afin d’atteindre le vrai objectif du jeu.                                         Un nouveau système de progression dans le jeu

A rajouter sur le long terme : 

- Pouvoir revendre ses joueurs
- Faire augmenter la note générale des joueurs qui ont plus de 10 victoire
- Faire augmenter la valeur marchande des joueurs ayant eu une augmentation de leur note générale
- Principes de Postes : Impossible de mettre a poste différents du joueur ou malus
- Principe de collectif : liens plus ou moins faibles en fonction de la nationalités, du club et de la ligue du club du joueurs
- Pouvoir ajouter des notes spécifiques aux compétences des joueurs                                  (Attaque - Def  Puis  Tirs - Passe - Tacle  Puis                                                                             Finition - Dribble - Passe - Vitesse - Tacle - Anticipation)
- Des Compétences spécifiques aux gardiens
- Pouvoir discuter en privé à des joueurs

Plus Loin ++ : 

Faire varier les Notes (et par conséquent valeur marchande) des joueurs en fonction de leur performance dans la vrai vie, et ceux pour les joueurs de ton équipe comme les joueurs sur le marché




Fonctionnalité

- *En fonction des matchs, qui se déroulerai de manière simulée, tu gagnerai ou pas des crédits ”*
    - Une page Match
    - Une Page Mes crédits
    - Variable Coin updaté à chaque match
    - Simulation match Ratio de Départ :
        
        Un match Gagné - Un Match Perdu - Un Match Egalité, avec variance dans l’ordre 
        
        Match gagné : 100 Coins 
        
        Match Perdu : 0 Coins
        
        Match Nul : 50
        
        Tous les 3 matchs 150 Coins
        
    - Principe de score et de but en fonction de la comparaison du nombre d’attauqant de ton equipe avec l’équipe adverse
    
     
    
- *“Crédits te permettants d’acheter d’autres joueurs présents sur un marché des transferts”*
    - Principe de carte lié à des joueurs
    - Page Marché des transferts
    - Liste de carte sur ce marché
    - Valeur marchande attribués sur chaque cartes
    - Principe d’achat de joueurs
    - 

- *“Pouvoir gérer son effectif comme bon nous semble”*
    - Une Page Mon Equipe
    - Système d’emplacement, avec possibilité de Déplacer et Remplacer
    - Système de banc
    - Pour Pouvoir libérer de l’espace das son effectif, Système de vente rapide de la carte d’un joueurs pour 50 Coins

- *“Il y aurait la possibilité de parler à d’autres utilisateurs, sur un canal public”*
    - Page chat
    - Fonction chat
    - Historique de conversation

- *“Ces joueurs achetés sur le marché ont une note plus élevé que celle de tes joueurs, donc une valeur marchande plus importante ”*
    - Correlation entre la valeur initiale de la carte et sa note
    - Valeur marchande evolutive en fonction de la note de la carte

- *“L’objectif : avoir l’équipe la plus forte (et donc celle avec la plus grosse note générale).               Il n’y a pas de fin du jeu”*
    - Système de note générale de l’équipe (moyenne de la note des joueurs)

- Tu peux progresser tous les jours sur ce jeu, le quitter et revenir avec la même progression
    - Système de sauvegarde automatique / formulaire d’authentification
