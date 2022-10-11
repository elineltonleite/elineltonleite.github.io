window.onload = function(){
	document.getElementById('num-sorteado').innerHTML='*<br>00'
	qtdBolas  = parseInt(prompt('Informe o total de bolas'))
	
	var totSorteado= 0;
	var totFaltaSortear=qtdBolas;
	function contadorBolas(){
	// conta quantas vez o botão foi clicado
		if(totSorteado < qtdBolas){
			totSorteado ++;	
		}
		if(totFaltaSortear > 0){
			totFaltaSortear --;
			somBolaCaindo()
			if(totFaltaSortear==0){
				setTimeout(somFimJogo,700)
			}
		}
			
		document.getElementById('parciais').innerHTML= 'Sorteado: '+ totSorteado +' bola(s) &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp Resta: '+ totFaltaSortear +' bola(s)';
		resultado()
	}
	document.getElementById('btn-sortear').onclick = contadorBolas;

	var historico=[] 
	var letra ="";
	function resultado(){
		numSorteado = parseInt(Math.floor(Math.random() * qtdBolas)+1)
	
		if(historico.includes(numSorteado)){
			resultado()
			//letraBola(numSorteado)
		}else{
			historico.push(numSorteado)
			montarQuadro(historico)
			letraBola(numSorteado)
			document.getElementById('num-sorteado').innerHTML=letraBola(numSorteado) +'<br>'+ numSorteado
			
			if(historico.length >= qtdBolas){
				document.getElementById('inf').innerHTML= '<span id="spanDivInf">Fim do jogo</span> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp  &nbsp  <button id="btn-refresh" onclick="recarregar()">Novo jogo</button>'
			}
		}
		function letraBola(numSorteado){
		if(numSorteado<16){
			letra =	'B';
		}else if(numSorteado<31){
			letra =	'I';
		}else if(numSorteado<46){
			letra =	'N';
		}else if(numSorteado<61){
			letra =	'G';
		}else if(numSorteado<76){
			letra =	'O';
		}else{
			letra="*";
		}
		return letra;
	}

 	}//fecha função resultado


	

	var writeHtml ="", i;
	var letras =['B','I','N','G','O'];
	for(i = 0; i < 5; i++){
		writeHtml += '<div class="bola cor-'+i+'"><div class="letras">'+letras[i]+ '</div></div>';
	}
	document.getElementById("topo").innerHTML=writeHtml;

	function montarQuadro(result){
		var num = ""
		for(j = 1; j <= qtdBolas; j++){
		// cria variavél para receber cor e adiconar  na classe div bola-menor
			if(result.includes(j)){
				style = "background:radial-gradient(rgb(243, 91, 91), rgb(231, 40, 40));color:white;text-shadow:2px 2px  rgb(151, 33, 33);"
			}else{
				style ="background:#cecece;color:black;"
			}

		// adiciona 0 aos numeros menores que 10 
		if(j<10){
			num +='<div class="bola-menor" style="'+style+'"><div class="numero">0'+j+ '</div></div>';
		}else{
			num +='<div class="bola-menor" style="'+style+'"><div class="numero">'+j+ '</div></div>';
		}
	
	} // fechar o FOR
	document.getElementById("quadro").innerHTML=num;

	n1= result[result.length -1]
	n2= result[result.length -2]
	n3= result[result.length -3]
	n4= result[result.length -4]
	n5= result[result.length -5]
	n6= result[result.length -6]
	if(n2==undefined){
		n2="-"
	}
	if(n3==undefined){
		n3="-"
	}
	if(n4==undefined){
		n4="-"
	}
	if(n5==undefined){	
		n5="-"
	}
	if(n6==undefined){	
		n6="-"
	}
	document.getElementById('painel').innerHTML=
	'<div class="bola-menor bol-sup">'+n6+'</div><div class="bola-menor bol-sup">'+n5+'</div><div class="bola-menor bol-sup"> '+n4+'</div><div class="bola-menor bol-sup"> '+n3+'</div><div class="bola-menor bol-sup-chamada"> '+n2+'</div>'//bol-sup-chamada

	}
	montarQuadro()
}
function recarregar(){window.location.reload()}
function somBolaCaindo(){
	var music = new Audio('../sons/Plastic Roll 02.mp3')
	music.play();
	//music.loop =false;
	//music.playbackRate = 1; // velocidade do audio
	//music.pause();	 		
}
function somFimJogo(){
	var music = new Audio('../sons/Bell 01.mp3')
	music.play();
	//music.loop =false;
	//music.playbackRate = 1; // velocidade do audio
	//music.pause();	 		
}