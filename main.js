random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1);
console.log(quick_draw_data_set[random_number]);
sketch = quick_draw_data_set[random_number];
document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;

timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

<center>
  <div id="myModal" class="modal fade">
    <div class="modal-content">
      <div class="modal-header">
      <button type="button" class="close" data-dismiss="modal">&times; </button>
      <h4 class="modal-title">Esboços</h4>
  
    </div>
    <div class="modal-body">
         <img src="sketch1.png">
         <img src="sketch2.png">
    </div>
    </div>
    </div>
      <h1>Desenho Rápido
        <button id="showSketch" class="btn btn-info" data-toggle="modal" data-target="myModal">Exibir Esboços</button>
      </h1>
      <p id="seuEsboço">Seu Esboço: </p>
      <p id="precisão">Precisão: </p>
      <p id="desenhoEsboço">Esboço a ser desenhado:</p>
</center>
  <span id="pontuação">Pontuação:</span>
  <span id="tempo">Tempo:</span>
