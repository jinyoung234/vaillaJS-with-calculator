let currentObserver = null;

export const observe = (callbackFunction) => {
  currentObserver = callbackFunction;
  callbackFunction();
  currentObserver = null;
};

export const observable = (obj) => {
  Object.keys(obj).forEach((key) => {
    let _value = obj[key];
    const observers = new Set();
    Object.defineProperty(obj, key, {
      get: () => {
        if (currentObserver) observers.add(currentObserver);
        return _value;
      },
      set: (value) => {
        _value = value;
        observers.forEach((callbackFunction) => callbackFunction());
      },
    });
  });
  return obj;
};
