var _fooBrandCheck = new WeakSet();

class A {
  #foo = void _fooBrandCheck.add(this);
  static #_ = (() => {
    register(A, _fooBrandCheck.has(A));
  })();
}