from numpy import random

MAX_NUMBER = 500
guesses = []


def generate_number(max):
    return random.randint(max)


def guess(my_guess, answer, guesses_array):
    guesses_array.append(my_guess)
    if (my_guess == answer):
        print(f"Bravo vous avez trouve le nombre en {len(guesses_array)}")
        return
    elif (my_guess < answer):
        print(f"C'est plus. Vous en etes au {len(guesses_array)}eme coups.")
        return guess(int(input("Veuillez entrer votre reponse ?")), answer, guesses_array)
    elif (my_guess > answer):
        print(f"C'est moins. Vous en etes au {len(guesses_array)}eme coups.")
        return guess(int(input("Veuillez entrer votre reponse ?")), answer, guesses_array)
    else:
        return
    
def start_game():
    answer = generate_number(MAX_NUMBER)
    guesses = []
    guess(int(input("Veuillez entrer votre reponse ?")), answer, guesses)

start_game()