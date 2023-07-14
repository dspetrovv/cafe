export const getClassName = (initialClass = '', ...classes) => {
  let className = initialClass;
  if (classes.length === 1 && !Array.isArray(classes[0])) {
    className += ` ${classes}`;
  } else {
    className += classes
      .flat(2)
      .map((cssClass) => ` ${cssClass}`)
      .join(' ');
  }
  return className;
};
