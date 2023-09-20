app.use(express.static(__dirname + '/public'));

function calcularTotal() {
    const modulos = document.querySelectorAll('input[name="modulos"]:checked');
    const pago = document.querySelector('input[name="pago"]:checked');
    let total = 0;
  
    if (modulos.length > 0) {
      // Calcular el total según el curso y los módulos seleccionados
      const curso = '<%= curso %>';
      if (curso === 'Java') {
        total = 1200 * modulos.length;
      } else if (curso === 'PHP') {
        total = 800 * modulos.length;
      } else if (curso === '.NET') {
        total = 1500 * modulos.length;
      }
  
      // Aplicar descuento del 10% si se paga en efectivo
      if (pago && pago.value === 'efectivo') {
        total -= total * 0.1;
      }
    }
  
    // Actualizar el total en el DOM
    const totalAmount = document.getElementById('total-amount');
    totalAmount.textContent = 'S/ ' + total.toFixed(2);
    
    // Mostrar el contenedor del total
    const totalContainer = document.getElementById('total-container');
    totalContainer.style.display = 'block';
  }
  