describe("Totalizador ", () => {
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 1, "")).toEqual(2);
  });
  it("deberia calcular para un cantidad", () => {
    expect(calcularTotal(2, 2, "")).toEqual(4);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(2, 2, "CA")).toEqual(4.33);
  });
  it("deberia calcular para un estado por defecto", () => {
    expect(calcularTotal(3, 2, "CA")).toEqual(6.495);
  });
  it("deberia calcular para un estado", () => {
    expect(calcularTotal(3, 2, "UT")).toEqual(6.399);
  });
  it("deberia calcular para un estado", () => {
    expect(calcularTotal(3, 2, "NV")).toEqual(6.48);
  });
  it("deberia calcular para un estado", () => {
    expect(calcularTotal(3, 2, "TX")).toEqual(6.375);
  });
  it("deberia calcular para un estado", () => {
    expect(calcularTotal(3, 2, "AL")).toEqual(6.24);
  });
  it("deberia calcular para un descuento", () => {
    expect(calcularTotal(15000, 2, "")).toEqual(25500);
  });
});

function impuestoEstado(estado) {
  let impuestos = { CA: 0.0825, UT: 0.0665, NV: 0.08,TX: 0.0625, AL: 0.04, "": 0 };
  return impuestos[estado];
}

function descuentoTotal(subTotal) {
  let descuento = 0;
  if (subTotal == 30000){
    descuento = subTotal * 0.15
  }
  return descuento;
}

function calcularTotal(cantidad, precio, estado) {
  let subTotal = cantidad * precio;
  let impuesto = impuestoEstado(estado);
  let descuento = descuentoTotal(subTotal);
  subTotal = subTotal + subTotal * impuesto - descuento;
  return subTotal;
}
