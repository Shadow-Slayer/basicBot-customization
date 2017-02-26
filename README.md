**Regras:**

- [Limite máximo por música - 7 minutos](https://github.com/Shadow-Slayer/moveit/blob/master/README.md#--limite-de-tempo-das-músicas-7-min);
- [Proibido vídeos com conteúdos impróprio NSFW](https://github.com/Shadow-Slayer/moveit/blob/master/README.md#--vídeo-com-conteúdo-impróprio-fora-do-tema-e-indisponível);
- [Evite dar muitos "chatos" seguidos nas músicas, utilize também o botão de silenciar](https://github.com/Shadow-Slayer/moveit/blob/master/README.md#--chatos-nas-músicas);
- [Proibido Flood, divulgar outras comunidades e evite Caps Lock em excesso](https://github.com/Shadow-Slayer/moveit/blob/master/README.md#--chat);
- [Respeitar os membros da sala e staffs, brincadeiras são permitidas desde que não ofenda a outra pessoa](https://github.com/Shadow-Slayer/moveit/blob/master/README.md#--respeito-entre-os-membros-instruções-para-a-staff);


**Instruções:**

<h3>- Limite de tempo das músicas: (7 min)</h3>

Bot estando ligado é pulado automaticamente e movido para 1º lugar. Se ocorrer na segunda vez seguida o bot fará o mesmo, porém algum staff deverá mover o usuário para último lugar.

<h3>- Vídeo com conteúdo impróprio, fora do tema e indisponível:</h3>

Vídeos com conteúdo explícito, não necessariamente nudez, mas sensual, erótico, calunioso, ofensivo e outros são proibidos.
Staffs devem utilizar o comando (!blinfo) copiar as informações que o bot enviar e passar para os hosts colocarem na blacklist, em seguida pular o vídeo com o comando (!skip nudes) que pula o usuário e o move para primeiro novamente. Se persistir deve pular somente e deixar o usuário em último.

Músicas que não estão de acordo com as permitidas no tema, utilize o (!skip tema), para que o bot pule a música e mova o usuário para 1, caso toque em seguida outra música fora do tema, apenas pule sem o comando e sem mover pra 1.

Música indisponível o bot pula sozinho, caso não o faça dentro de alguns segundos, utilize o (!skip ind) ou pule pelo próprio plug e mova o usuário para 1 na fila.

<h3>- Chatos nas músicas:</h3>

A comunidade permite tocar todos os gêneros (vide !tema), como consequência muitas músicas não agradarão a todos, por isso dar chato nas músicas é permitido e o bot pulará músicas com muitos chatos. Porém o uso excessivo e consecutivo de chatos nós não permitimos, e se feito várias vezes na mesma música será considerado flood.

No caso que usuário tenha dado 3 vezes chato consecutivo ou muitas vezes em um curto período de tempo, a staff deve alertar com o comando (!meh @nick), caso volte a dar 3 chatos consecutivos dar ban de 1 hora e registrar o ban no formulário de bans https://goo.gl/forms/KKWotaCfmzv8i3q83.

Para facilitar, no RCS tem a opção de ativar um aviso quando o usuário da 3 chatos seguidos <img src="http://image.prntscr.com/image/42569b806bd7463bad69eefbbed6f5c7.png" /> <img src="http://image.prntscr.com/image/fe01e1d7af854bcdbb79806e67d919ff.png" />

<h3>- Chat:</h3>

Fazer flood, utilizar Caps Lock em excesso, divulgação de outras comunidades o usuário deve ser alertado. Persistindo leva mute de 15 min. Caso de recorrência o tempo do mute aumenta para 30, 45 minutos, podendo levar ao banimento.

Mensagens e fotos impróprias no chat, conteúdo adulto NSFW, floods, mensagens em caps lock devem ser deletadas e o usuário advertido.

<h3>- Respeito entre os membros; Instruções para a staff:</h3>

Ofensas entre usuários e RDJs, a staff deve dar um alerta, se for caso mais grave que não param, dê o mute de 15 min mesmo sem alertar e o cargo de RDJ é perdido (mute aplicado a todos envolvidos não importa quem começou).

Ofensa entre staffs, seus superiores podem tirar o cargo se for necessário e aplicar mute com /mute @nick do RCS. Reportem o ocorrido aos hosts para que possam tomar as devidas providências.

Todos staffs devem ser amigáveis com todos da sala e ser receptivo com novos usuários ajudando-os com suas dúvidas.

Erros da staff, reportem aos hosts, não desfaçam as ações de outros staffs e não chamem atenção no chat do Plug.

Coordenadores devem ativar o bot quando o mesmo se encontrar desligado.

Ban pode ser dado após o usuário já ter sido alertado uma ou mais vezes e em casos que mute não resolva. Dê preferência a resolver os problemas na conversa, utilize ban somente quando necessário. 

O ban mais leve pode ser dado clicando no nick da pessoa (ban de 1 hora), o ban de 1 dia pode ser dado com o comando do bot !ban @nick. Após aplicado o ban, o responsável deve preencher o formulário de ban, quem baniu, dia e horário e print com motivo do banimento https://goo.gl/forms/KKWotaCfmzv8i3q83.


**Comandos:**

- !skip (motivo) - Pula a música e move o DJ para a posição 1. (ex.: !skip som)
Os motivos que podem ser utilizados, estão definidos abaixo, são 4 motivos: 

   som - "A música tocada tinha qualidade de som ruim ou não tinha som. "</br>
   tema - "Sua música não estava de acordo com o tema da sala."</br>
   nudes - "A música continha conteúdo impróprio NSFW :underage:"</br>
   ind - "A música não estava disponível para alguns usuários"</br>

- !mute @user (X) - (Onde X pode ser - 15, 30 ou 45 min) - Utilize o mute para usuários sem cargos, que estão fazendo flood no chat, ofendendo alguém, etc.
- !ban @user - Dá ban de 1 dia
- !meh @nick - Utilize esse comando quando derem 3 chatos seguidos nas músicas ou muitos em um curto período de tempo. Chato está liberado, mas com moderação. Músicas com muitos chatos serão puladas. 
- !move @nick (posição) - Move usuário para a posição X na lista de espera (ex: !move @shadow 1)
- !dc @nick - Caso alguém tenha caído ou saiu da sala, voltou e não sabe como voltar a sua posição na fila.
- !blinfo - Se tocarem alguma música contra as regras, digite esse comando, copia as informações que o bot mostrar e passe para os hosts colocarem na blacklist. Em seguida utilize o (!skip tema)
