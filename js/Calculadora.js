function atribuirValor() {
  var input1 = document.getElementById("input1").value;
  var input2 = document.getElementById("input2").value;
  var select = document.getElementById("operacao")
  var operacao = select.value;
  var valor1 = parseFloat(input1);
  var valor2 = parseFloat(input2);
  var resultado;
  
  if(isNaN(valor1) || isNaN(valor2)){
    resultado = "Valor inválido!"
  }
  else{
    switch (operacao) {
        case "+":
            resultado = valor1 + valor2;
            break;
        case "-":
            resultado = valor1 - valor2;
            break;
        case "*":
            resultado = valor1 * valor2;
            break;
        case "/":
            if(valor2 !==0){
                resultado = valor1 / valor2;
            }
            else{
                resultado = "Opção inválida!"
            }
            break;
            
             
        default:
            resultado = "Opção inválida!"
            break;
      }
  }
  

  document.getElementById("resultado").textContent = resultado;
  console.log(resultado);
}

