function palindromo(str) { 
    for(var i = 0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true;
}
console.log(palindromo("radar"));
console.log(palindromo("reviver"));
console.log(palindromo("palindromo"));
