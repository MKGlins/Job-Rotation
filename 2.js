function fibonacci(numero) {
    let a = 0, b = 1, c;
    if (numero === a || numero === b) {
      return true;
    }
    while (b < numero) {
      c = a + b;
      a = b;
      b = c;
      if (b === numero) {
        return true;
      }
    }
    return false;
  }