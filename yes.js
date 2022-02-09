const Discord = require('discord.js') ;
const bot = new Discord.Client();

const ytdl = require('ytdl-core');

let TOKEN = "";

const Persoane = ['Miha','Flavi','Nicu','Hanga','But','Mihaitza','Tudor',
'Ioana',      'Gabi',     'Adi',   'Teodorescu' , 'Sorana',   'Irina', 
'Emil','Casiana'    ,'Juan'     ,   'Romania',    'Depresie'  ,'LuigiJudah'];
const Imagini = ['Miha.jpg','Flavi.mp4','Nicu.jpg','Hanga.jpg','But.jpg','Mihaitza.jpg','Tudor.jpg',
'Ioana.jpg','Gabi.jpg','Adi.jpg','Teodorescu.jpg','Sorana.jpg','Irina.jpg',
'Emil.png','Casian.jpg','Juan.jpg','Romania.mp4','Depresie.jpg','LuigiJudah.jpg'];
const DeLaCinePrimeste = ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0',
'0','0','0','0','0','0','0','0','0','0','0','0'];

var ComandUsers = [];

var nr1 = 0,nr2 = 0,cnt = 0,s1 = 0,s2 = 0,str1,str2;
/// emilia , andrada , alexandra , radeanu , casiana
var varNicu = false;
var servers = {};

////
var Concurenti = ['Mihai' , 'Flavi'  , 'Hanga' ,'Adi'];
var fr = [0,0,0,0,0,0,0];
var Poze = ['Mihaitza.jpg','Flavi.mp4','Hanga.jpg','Adi.jpg'];
var ainceput = false;
var emojis = [ '🦧','🍌' ,'👺' ,'♿'];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Exista(nume)
{
  var n = ComandUsers.length;
  for(var i=0;i<n;i++)
    if(ComandUsers[i] == nume)
      return true;
  return false;
}

function GasesteAutor(autor)
{
  var n = Persoane.length;
  for(var i = 0;i<n;i++)
    {
      if(DeLaCinePrimeste[i] == autor)
        return true;
    }
  return false;
}

function GasestePoza(persoana)
{
  var idPersoana = getRandomInt(Persoane.length);

  if(DeLaCinePrimeste[idPersoana] == '0' && persoana != Persoane[idPersoana])
    {
      DeLaCinePrimeste[idPersoana] = persoana;
      return idPersoana;
    }
  else
    return GasestePoza(persoana);
}

bot.on('ready', () => {
  console.log('Bot is online !');
});

bot.on('message', msg =>
 {
   let args = msg.content.split(" ");

    if(msg.content == "hi")
      msg.author.send("Meow frate");
    else if(args[0] == "dm")
      {
        let mention = msg.mentions.users.first();
        //let len = mention.len();
        if(mention == null)
          return 0;
        //mentionMessage = args[1];
        mentionMessage = msg.content.slice(2);
        mention.send(mentionMessage);
        /// mention.send(@cineva)  - trimite mesajul acelei persoane
      }
    else if(args[0] == "dm1")
    {
      let mention = msg.mentions.users.first();
      if(mention == null)
          return 0;
      //mentionMessage = "";
      //for(let i=2;i<args.length;i++)
      //    mentionMessage += args[i] + " ";
      mentionMessage = msg.content.slice(4 + args[1].length);
      mention.send(mentionMessage);
    }

    if(varNicu)
      msg.react("🦆");
    if(ainceput) // Glume
    {
      switch(args[0])
      {
        case '🦧': // Mihai
          fr[0]++;
          break;
          case '🍌': // Flavi
            fr[1]++;
            break;
          case '👺': // Hanga
            fr[2]++;
            break;
          case '♿': // Adi
            fr[3]++;
            break;
      }
    }
    if(args[0] != prefix)
      return 0;
    else {
      switch(args[1])
      {
        // Glume
        case 'winLower':
          msg.channel.send(' pog ',{files: ["Flavi.mp4"]});
          break;
        case 'winner' :
          msg.channel.send(' pog ',{files: ["Hanga.jpg"]});
          break;
        case 'start' :
          ainceput = true;
          break;
        case 'stop' :
          var n = 4;
          let ok = true;
          while(ok)
          {
            ok = false;
            for(let i = 0;i<n-1;i++)
              if(fr[i] < fr[i+1])
              {
                let aux = fr[i];
                fr[i] = fr[i+1];
                fr[i+1] = aux;
                ok = true;
                aux = Concurenti[i];
                Concurenti[i] = Concurenti[i+1];
                Concurenti[i+1] = aux;
              }
          }


          for(let i = 0;i<n;i++)
            if(fr[i] == 1)
              msg.channel.send(i+1 + " : " + Concurenti[i] + " cu " + fr[i] + " vot");
            else
              msg.channel.send(i+1 + " : " + Concurenti[i] + " cu " + fr[i] + " voturi");

          break;


        case 'initiazaProceduraRATA':
            varNicu = true;
            break;
        case 'breakProceduraRATA':
          varNicu = false;
            break;
        //case 'role':
          //msg.member.roles.add('775419074397995071');
          //break;
        //case 'roleRemove':
          //msg.member.roles.remove('775419074397995071');
          //break;
        case 'banana':
          msg.channel.send('Taci in plm Platon',{files: ["TeoTrist.jpg"]});
          break;
        case 'give':
          if(args[2] == 'banana')
            msg.channel.send('Ma simt ca dupa coks',{files: ["TeoFericit.jpg"]});
          break;
        case 'Barbut':
          if(cnt == 0)
          {
            str1 = msg.author.username;
            cnt = 1;
            nr1 = getRandomInt(5);
            nr1++;
            nr2 = getRandomInt(5);
            nr2++;

            switch (nr1)
            {
              case 1:
                   msg.channel.send('',{files: ["Dice1.png"]});
                   break;
              case 2:
                  msg.channel.send('',{files: ["Dice2.png"]});
                   break;
              case 3:
                  msg.channel.send('',{files: ["Dice3.png"]});
                  break;
              case 4:
                  msg.channel.send('',{files: ["Dice4.png"]});
                  break;
              case 5:
                  msg.channel.send('',{files: ["Dice5.png"]});
                  break;
              case 6:
                  msg.channel.send('',{files: ["Dice6.png"]});
                  break;
            }

            switch (nr2)
            {
              case 1:
                   msg.channel.send('',{files: ["Dice1.png"]});
                   break;
              case 2:
                  msg.channel.send('',{files: ["Dice2.png"]});
                   break;
              case 3:
                  msg.channel.send('',{files: ["Dice3.png"]});
                  break;
              case 4:
                  msg.channel.send('',{files: ["Dice4.png"]});
                  break;
              case 5:
                  msg.channel.send('',{files: ["Dice5.png"]});
                  break;
              case 6:
                  msg.channel.send('',{files: ["Dice6.png"]});
                  break;
            }

            if(nr1 == nr2 && nr1 == 1)
              s1 = 100;
            else
            {
              s1 = nr1 + nr2;
            }
          }
          else
          {
            str2 = msg.author.username;
            cnt = 0;
            nr1 = getRandomInt(5);
            nr1++;
            nr2 = getRandomInt(5);
            nr2++;

            switch (nr1)
            {
              case 1:
                   msg.channel.send('',{files: ["Dice1.png"]});
                   break;
              case 2:
                  msg.channel.send('',{files: ["Dice2.png"]});
                   break;
              case 3:
                  msg.channel.send('',{files: ["Dice3.png"]});
                  break;
              case 4:
                  msg.channel.send('',{files: ["Dice4.png"]});
                  break;
              case 5:
                  msg.channel.send('',{files: ["Dice5.png"]});
                  break;
              case 6:
                  msg.channel.send('',{files: ["Dice6.png"]});
                  break;
            }

            switch (nr2)
            {
              case 1:
                   msg.channel.send('',{files: ["Dice1.png"]});
                   break;
              case 2:
                  msg.channel.send('',{files: ["Dice2.png"]});
                   break;
              case 3:
                  msg.channel.send('',{files: ["Dice3.png"]});
                  break;
              case 4:
                  msg.channel.send('',{files: ["Dice4.png"]});
                  break;
              case 5:
                  msg.channel.send('',{files: ["Dice5.png"]});
                  break;
              case 6:
                  msg.channel.send('',{files: ["Dice6.png"]});
                  break;
            }

            if(nr1 == nr2 && nr1 == 1)
              s2 = 100;
            else
            {
              s2 = nr1 + nr2;
            }

            if(s2 > s1)
              msg.channel.send(str2 + " a castigat :white_check_mark:");
            else if(s1 > s2)
              msg.channel.send(str1 + " a castigat :white_check_mark:");
            else 
             msg.channel.send(" Egal :hamburger: ");

          }
          break;
        ////////////////////////////////////////////////////////////////////// poza
        case 'Mamaie':
          msg.channel.send('-p o fut pe mamaie 10 min');
          break;
        case 'deLaCinePrimeste':
          if(args[2] != msg.author.username)
            {
              var n = Persoane.length;
              var id = 0;
              for(var i = 0;i < n;i++)
                  {
                      if(Persoane[i] == args[2])
                          {
                            msg.channel.send(DeLaCinePrimeste[i]);
                            //msg.author.send(DeLaCinePrimeste[i]);
                            break;
                          }
                  }
             }
          else 
            {
              msg.channel.send('Nu poti afla de la cine primesti cadou');
             // msg.author.send('Nu poti afla de la cine primesti cadou');
           }
          break;
            //msg.channel.send();
        case 'enumeraPersoane':
          var n = ComandUsers.length;
          for(var i = 0;i<n;i++)
           if(ComandUsers[i] == 'هانجا')
              {
                msg.channel.send(':white_check_mark:' + ComandUsers[i]);
                //msg.channel.send(':white_check_mark:');
              }
           else
              msg.channel.send(ComandUsers[i] + ' :white_check_mark: \n');
          break;
        case 'poza':
            //  if(!GasesteAutor(msg.author.username))
            //  {
              var persoana = msg.author.username;
              var idPersoana = getRandomInt(Persoane.length);//GasestePoza(persoana);
              msg.reply(Persoane[idPersoana] , {files: [Imagini[idPersoana]]});
              //msg.author.send(Persoane[idPersoana] , {files: [Imagini[idPersoana]]});
              if(!Exista(msg.author.username))
                ComandUsers.push(msg.author.username);
            // }
             // else
             // {
               // msg.reply("Ai pe cineva cui trebuie sa ii dai cadou.");
               // msg.author.send("Ai pe cineva cui trebuie sa ii dai cadou.");
             // }

              break;
        case 'play':
            msg.channel.send('-p ' + args[2]);
            break;
        case 'pacanele':
            //:tada
            //:tangerine
            //:watermelon
            //:lemon
            //:cherries
            for(var i=0;i<3;i++)
            {
              var l1 = getRandomInt(5);
              var l2 = getRandomInt(5);
              var l3 = getRandomInt(5);
              var l4 = getRandomInt(5);
              var l5 = getRandomInt(5);
              var a,b,c,d,e;
              ///pentru a
              if(l1==0)
                a = ':tada:';
              else if(l1==1)
                a = ':tangerine:';
              else if(l1==2)
                a = ':watermelon:';
              else if(l1==3)
                a = ':lemon:';
              else if(l1==4)
                a = ':cherries:';
              /// pentru b
              if(l2==0)
                b = ':tada:';
              else if(l2==1)
                b = ':tangerine:';
              else if(l2==2)  
                b = ':watermelon:';
              else if(l2==3)
                b = ':lemon:';
              else if(l2==4)
                b = ':cherries:';
              /// pentru c
              if(l3==0)
                c = ':tada:';
              else if(l3==1)
                c = ':tangerine:';
              else if(l3==2)
                c = ':watermelon:';
              else if(l3==3)
                c = ':lemon:';
              else if(l3==4)
                c = ':cherries:';
              /// pentru d
              if(l4==0)
                d = ':tada:';
              else if(l4==1)
                d = ':tangerine:';
              else if(l4==2)
                d = ':watermelon:';
              else if(l4==3)
                d = ':lemon:';
              else if(l4==4)
                d = ':cherries:';
              /// pentru e
              if(l5==0)
                e = ':tada:';
              else if(l5==1)
                e = ':tangerine:';
              else if(l5==2)
                e = ':watermelon:';
              else if(l5==3)
                e = ':lemon:';
              else if(l5==4)
                e = ':cherries:';
        
              msg.channel.send(a+' '+b+' '+c+' '+d+' '+e);
            }
            break;

          case 'ping':
            msg.react('😢');
            break;

          case 'fa.mi':
            if(args[2]==='sandwich')
              {
              msg.reply('🍔');
              msg.react('🍔');
             }
            else if(args[2]==='lapte')
              {
              msg.reply('🥣')
              msg.react('🥣');
              }
            break;

          case 'care':
            if (msg.content === 'Pls care sunt tarifele ?')
            {
              msg.reply('Cine a intrebat ?');
              //msg.channel.send('mea');
              msg.channel.send(':smiley:');
            }
            break;

          case 'embed':
            const embed = new Discord.MessageEmbed()
            .setColor('#66ffff')
            //.setTitle('nice?')
            .addField('Player Name', msg.author.username)
            .setAuthor('Marcel cel mai cel');
            msg.channel.send(embed);

            break;

          case 'ce':
            if (msg.content === 'Pls ce mai stii sa faci ?')
             msg.channel.send('pe mama ta');
             break;

          case 'baga':
            ///
            function play(connection ,msg)
            {
              var server = servers[msg.guild.id];
              server.dispatcher = connection.playStram(ytdl(server.queue[0],{filter: 'audio'}));
              server.queue.shift();
              server.dispatcher.on("end", function(){
                if(server.queue[0])
                  play(connection,msg);
                else
                  connection.disconnect();
              });
            }

            ///
            if(!args[2])
             {
               msg.reply('Ce melodie vrei sa iti cant ?');
               return;
             }
             if(msg.member.voice.channel == undefined)
             {
               msg.reply('You must be in a chanel :/');
               return;
             }
             if(!servers[msg.guild.id])
              server[msg.guild.id] = {
                queue:[]
              }
              var server = servers[msg.guild.id];

              server.queue.push(args[2]);

            if(!msg.guild.voiCeonnection)
              msg.member.voice.channel.join().then(function(contention){
                play(contention,msg);
              })

            break;
            
            case 'hai':
              if(msg.member.voice.channel == undefined)
                msg.reply('Unde vrei sa intru ?');
              else 
                msg.member.voice.channel.join();
              break;

            case 'Mute':
              msg.
              break;
            case 'afara': 
                msg.member.voice.channel.leave();    
                //msg.guild.voiCeonnection.disconnect(); 
                //bot.channel.disconnect();
                break;

            case 'embed1':
              const embed1 = new Discord.MessageEmbed()
              .setColor('#66ffff')
              .setTitle('yes')
              .setThumbnail(msg.author.avatarURL)
              msg.channel.send(embed1);
              break;
            case 'embed2':
              const embed2 = new Discord.MessageEmbed()
              .setColor('#66afff')
              .setTitle('yes')
              msg.channel.send(embed2);
              break;
      }
    }
});

bot.login(TOKEN);