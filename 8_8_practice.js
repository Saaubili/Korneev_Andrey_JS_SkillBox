const countVowels = (word) => {
    const vowelsArray = ["a", "e", "i", "o", "u"] 
    return word.toLowerCase()
            .split("")
            .filter((letter) => vowelsArray.includes(letter))
            .length
}