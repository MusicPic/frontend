export default function autoBind(classComponent) {
  const classMethod = Object.getOwnPropertyNames(classComponent.prototype);
  classMethod.forEach((method) => {
    if (method.startsWith('handle')) {
      this[method] = this[method].bind(this);
    }
  });
}

