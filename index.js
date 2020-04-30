'use strict'
const Discord = require('discord.js')
const fs = require('fs')
const token = 'NzA0NzAyMTE4MTkxMTY5NTg4.Xqg_aQ.YRhZBIt7HOsL32RY9y964FMN4xQ';

const client = new Discord.Client();



client.on('message', (msg) => {
	
	var stringone,stringone2;
	
	stringone = msg.content;
	stringone2 = stringone.split(" ");
	
	
	if(msg.content === 'ping'){msg.reply("pong")}
	if(msg.content === 'pong'){msg.reply("ping")}
	if(msg.content === 'crespi' || msg.content === 'CRESPI' || msg.content === 'Crespi' || msg.content === 'cre' || msg.content === 'Cre' || msg.content === 'CRE'){msg.reply("GAY")}
	if(msg.content === 'gay' || msg.content === 'Gay' || msg.content === 'GAY'){msg.reply("CRESPI")}
	
	if(msg.content === '.catch crespi' ){
		var i;
		i = Math.floor(Math.random()*50) ;
		if(i==23)
			msg.channel.send("Congratulations " + msg.author.toString() +" You caught a shiny level "+ Math.floor(Math.random()*100) +" Crespi GAY!");
		else
			msg.channel.send("Congratulations " + msg.author.toString() +" You caught a level "+ Math.floor(Math.random()*100 + 1) +" Crespi GAY!");
	}
	
	if(stringone2[0] === ("$say")){
		
		var string="",i;
		
		for(i=1;i<stringone2.length;i++){
			string = string.concat(stringone2[i]+" ");
		}	
		
		msg.channel.send(string);
		
	}
	
	if(msg.content === '$chevipsono'){
		var astring, string; 
		
		string = fs.readFileSync('./vip.txt', 'utf8', console.log);
		astring = string.split("\n");
		
		msg.reply("credo tu possa essere "+astring[Math.floor(Math.random()*astring.length)]);
	}
	
	
	if(msg.content === '$chepokemonsono'){
		var astring, string; 
		
		string = fs.readFileSync('./nomipokemon.txt', 'utf8', console.log);
		astring = string.split(",");
		
		msg.reply("sei"+astring[Math.floor(Math.random()*astring.length)]);
	}
	
	if(msg.content === '$zerovogliadivivere' || msg.content === 'voglio morire'){
		var astring, string, astring2, string2; 
		
		string = fs.readFileSync('./nomiStupidi.txt', 'utf8', console.log);
		astring = string.split("\n");
		
		string2 = fs.readFileSync('./strumentiMortali.txt', 'utf8', console.log);
		astring2 = string2.split("\n");
		
		msg.reply("AHAHAAHAHAH, peggio di "+astring[Math.floor(Math.random()*astring.length)]+"\n\nBeh.. se posso esserti di aiuto ti consiglierei di usare "+astring2[Math.floor(Math.random()*astring2.length)]);
		
		
	}
	
	
	if(msg.content === '$voglioessereunpokemon'){
		
		var astring, string; 
		
		string = fs.readFileSync('./nomipokemon.txt', 'utf8', console.log);
		astring = string.split(",");
		
		msg.author.setNickname({nick: msg.content.replace(astring[Math.floor(Math.random()*astring.length)])});
		
	}
	
	
	if(msg!=0){
		var stringa = [], stri, str = "=",i,string;
		stringa = msg.content.split(" ");
		
		if(stringa[0] === '$duel'){
			
			var cazzo1="8", cazzo2="8";
			var dim1=0,dim2=0;

			
			for(i=0;i<Math.floor(Math.random()*30+1);i++){
				cazzo1 = cazzo1.concat(str);
				dim1++;
			}
			cazzo1 = cazzo1.concat('D');
			
			for(i=0;i<Math.floor(Math.random()*30+1);i++){
				cazzo2 = cazzo2.concat(str);
				dim2++;
			}
			cazzo2 = cazzo2.concat('D');
			
			
			if(dim1>dim2)
				msg.channel.send("Sfida fra "+stringa[1]+" e "+stringa[2]+"\n\n"+stringa[1]+":\n"+cazzo1+"\n\n"+stringa[2]+":\n"+cazzo2+"\n\nVINCE "+stringa[1]+" di "+(dim1-dim2)+" cm");
			else{
				if(dim1<dim2){
					msg.channel.send("Sfida fra "+stringa[1]+" e "+stringa[2]+"\n\n"+stringa[1]+":\n"+cazzo1+"\n\n"+stringa[2]+":\n"+cazzo2+"\n\nVINCE "+stringa[2]+" di "+(dim2-dim1)+" cm");
				}
				else{
					msg.channel.send("Sfida fra "+stringa[1]+" e "+stringa[2]+"\n\n"+stringa[1]+":\n"+cazzo1+"\n\n"+stringa[2]+":\n"+cazzo2+"\n\nPARITA'");
			
			
				}
			}
		}
	}
	
	if(msg.content === "$quantomipiacetrony"){
		msg.reply("Ti piace Trony al "+ Math.floor(Math.random()*10) +"%");
	}
	
	if(msg.content === "$aquantoammontailpizzo"){
		var num = Math.floor(Math.random()*15234);
		
		if(num<5000){
			msg.reply("Il pizzo ammonta a "+ num +"€");
		}
		else{
			if(num<10000){
				msg.reply("Il pizzo ammonta a "+ num +"€, ci mancherai...");
			}
			else
				msg.reply("Il pizzo ammonta a "+ num +"€, credo tu sia fottuto\nCredo ehh....")
		}
		
		
	}
	
	
	if(msg.content === "@BOT LONGOBARDO"){
		
		msg.reply("CAZZO VUOI, PORCODDIO");
		
	}
	
	if(msg.content === 'nord contro sud' || msg.content === 'nord vs sud' || msg.content === 'Nord contro sud' || msg.content === 'Nord vs sud'){
		
		msg.reply("che cazzo di domanda è, stai per essere bannato");
	}
	
	if(msg.content === 'conte merda'){
		msg.reply("MO TI BANNO");
	}
	
	if(msg.content === '$info'){
		msg.channel.send("BOT CREATO DA SPRE, bot per soli longobardi, have fun xdxd11!");
	}
	
	if(msg.content === '$quantosonogay'){
		msg.reply("Sei gay al "+ Math.floor(Math.random()*100) +"%");
	}


	if(msg.content === '$quantomipiacelapizza'){
		msg.reply("ti piace la pizza al "+ Math.floor(Math.random()*100) +"%");
	}

	if(msg.content === '$quantomipiacelafiga'){
		msg.reply("ti piace la figa al "+ Math.floor(Math.random()*100) +"%");
	}


	if(msg.content === '$help'){
		msg.channel.send("| $info | informazioni sul bot\n| $chevipsono | scopri che vip sei\n| $zerovogliadivivere | solo se hai zero voglia di vivere\n| $chepokemonsono | scopri che pokémon sei\n| $aquantoammontailpizzo | scopri quanto devi alla mafia\n| $quantomipiacetrony | scopri quanto ti piace quel niBBa di Trony\n| $quantomipiacelapizza | scopri quanto ti piace la pizza\n| $quantomipiacelafiga | scopri quanto ti piace la figa\n| $duel @... @... | sfida tra cazzi\n| $quantosonogay | scopri quanto sei g4y\n| $help | lista comandi implementati");
	}
	
	
	
	if(msg.content === '$quantomipiaccionoibambini'){
		msg.reply("ti piacciono i bambini al "+ Math.floor(Math.random()*50 + 50) +"%");
	}

	
})


client.on('ready', () => {

	console.log('Inizia la festa :D')

})

client.login(token);
