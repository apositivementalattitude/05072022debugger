function hello(name) {
    if (name) {
    return `Hello, ${name[0].toUpperCase() + name.toLowerCase().slice(1) + '!'}`
    }else {
      return `Hello, World!`
    }
  }
