//A lista "artigos" representa os Jogos na página de Artigos.
//O primeiro valor da lista é o nome do Jogo. Por exemplo: "Hollow Knight"

//O segundo valor da lista é um link de uma imagem que representa o Jogo. Por exemplo: "https://i.imgur.com/iW9hFhu.png"
//É recomendado usar um serviço como o imgur.com para dar host das imagens.
//NOTA: Tenham a certeza que o link acaba em '.png' ou '.jpg' para que este funcione corretamente.

//O terceiro valor da lista são os nomes de quem escreveu o Artigo. Por exemplo: "Jenifer Lagoaça & Lara Moreira"

//O quarto e ultimo valor da lista é um link do Artigo PDF em questão. Por exemplo: "https://criticaanalisevideojogos.files.wordpress.com/2021/02/hollowknight_jenifer_lara.pdf"
//NOTA: Tenham a certeza que o link acaba em '.pdf' para que este funcione corretamente.

let artigos = new Array();
artigos[0] = new Array("Hollow Knight","https://i.imgur.com/iW9hFhu.png","Jenifer Lagoaça & Lara Moreira","https://criticaanalisevideojogos.files.wordpress.com/2021/02/hollowknight_jenifer_lara.pdf");
artigos[1] = new Array("Doom 3","https://i.imgur.com/GA9jd6D.png","Gonçalo Indi","https://criticaanalisevideojogos.files.wordpress.com/2021/01/goncaloindi_doom3.pdf");
artigos[2] = new Array("Agony","https://i.imgur.com/Q7O1qOf.png","Rita Lopes","https://criticaanalisevideojogos.files.wordpress.com/2020/12/ritalopes_agony.pdf");
artigos[3] = new Array("Bastion","https://i.imgur.com/1yefMAL.png","Carolina Costa","https://criticaanalisevideojogos.files.wordpress.com/2020/12/carolinacosta_bastion.pdf");
artigos[4] = new Array("A Walk in the Dark","https://i.imgur.com/BGTFpuo.png","Jenifer Lagoaça","https://criticaanalisevideojogos.files.wordpress.com/2021/01/jeniferlagoaca_awalkinthedark.pdf");
artigos[5] = new Array("Darkwood","https://i.imgur.com/h9imyPu.png","Hugo Van Esch","https://criticaanalisevideojogos.files.wordpress.com/2020/12/hugovanesch_darkwood.pdf");
artigos[6] = new Array("Fez","https://i.imgur.com/TuUpqgY.png","Sérgio Batista","https://criticaanalisevideojogos.files.wordpress.com/2020/11/sergiobatista_fez.pdf");
artigos[7] = new Array("Gris","https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2018/12/17/a869023c-5f01-4552-8640-21ea24cad3f5/gris-logo","Inês Correia");
artigos[8] = new Array("Gorogoa","https://i.imgur.com/9gT5eUV.png","Carolina Ribeiro","https://criticaanalisevideojogos.files.wordpress.com/2020/11/carolinaribeiro_gorogoa.pdf");
artigos[9] = new Array("Dark Souls III","https://i.imgur.com/lFTmAYi.png","Hugo Van Esch","https://criticaanalisevideojogos.files.wordpress.com/2020/11/hugovanesch_darksoulsiii.pdf");
artigos[10] = new Array("Sekiro: Shadows Die Twice","https://i.imgur.com/0SRdONz.png","Carolina Costa","https://criticaanalisevideojogos.files.wordpress.com/2020/11/carolinacosta_sekiroshadowsdietwice.pdf");
artigos[11] = new Array("Crime no Hotel Lisboa","https://i.imgur.com/rtG61DH.png","Melissa Cébola","https://criticaanalisevideojogos.files.wordpress.com/2020/10/melissacebola_inspectorzerobotpalhaco.pdf");
artigos[12] = new Array("Serial Cleaner","https://i.imgur.com/itaBbGY.png","Francisco Lamelas & Hugo Almeida","https://criticaanalisevideojogos.files.wordpress.com/2020/10/serialcleaner_francisco_hugo.pdf");
artigos[13] = new Array("Papers, Please","https://i.imgur.com/1LQ2Qzw.png","Inácio Maio e José Fonseca","https://criticaanalisevideojogos.files.wordpress.com/2020/01/papersplease_inacio_jose.pdf");
artigos[14] = new Array("Decay of Logos","https://i.imgur.com/bc0nJ1e.png","Gustavo Maldonado","https://criticaanalisevideojogos.files.wordpress.com/2020/01/gustavomaldonado_decayoflogos.pdf");
artigos[15] = new Array("Elifoot","https://i.imgur.com/LlWdiG6.png","Pedro Barbosa","https://criticaanalisevideojogos.files.wordpress.com/2020/01/pedrobarbosa_elifoot.pdf");
artigos[16] = new Array("Paradise Café","https://i.imgur.com/bvgpQux.png","José Santos","https://criticaanalisevideojogos.files.wordpress.com/2019/12/josesantos_paradisecafe.pdf");
artigos[17] = new Array("Enter the Matrix","https://i.imgur.com/jVI6fmY.png","Melissa Cébola","https://criticaanalisevideojogos.files.wordpress.com/2019/12/melissacebola_enterthematrix.pdf");
artigos[18] = new Array("Daikatana","https://i.imgur.com/vUc2xDS.png","Giuseppe Accorsini","https://criticaanalisevideojogos.files.wordpress.com/2019/12/giuseppeaccorsini_daikatana.pdf");
artigos[19] = new Array("Duke Nukem Forever","https://i.imgur.com/AV3mEA5.png","Luiz dos Santos","https://criticaanalisevideojogos.files.wordpress.com/2019/12/luizsantos_dukenukemforever.pdf");
artigos[20] = new Array("Ride to Hell: Retribution","https://i.imgur.com/4AuWW7Q.png","Francisco Lamelas","https://criticaanalisevideojogos.files.wordpress.com/2019/12/franciscolamelas_ride-to-hell.pdf");
artigos[21] = new Array("Undertale","https://i.imgur.com/FhqYGff.png","Francisco Martim & Pedro Barbosa","https://criticaanalisevideojogos.files.wordpress.com/2019/12/undertale_francisco_pedro.pdf");
artigos[22] = new Array("Oxenfree","https://i.imgur.com/W7HqyBG.png","Bernardo Santos","https://criticaanalisevideojogos.files.wordpress.com/2019/11/oxenfree_bernardo.pdf");
artigos[23] = new Array("Assassin’s Creed II","https://i.imgur.com/6tTh6I6.png","Gustavo Maldonado","https://criticaanalisevideojogos.files.wordpress.com/2019/11/gustavomaldonado_critica-assassins-creed-2.pdf");
artigos[24] = new Array("CrossCode","https://i.imgur.com/ob52tkv.png","João Esteves","https://criticaanalisevideojogos.files.wordpress.com/2019/11/joc3a3oesteves_a21903378_crosscode.pdf");
artigos[25] = new Array("A Hat in Time","https://i.imgur.com/Q0BFFCO.png","Melissa Cébola","https://criticaanalisevideojogos.files.wordpress.com/2019/11/melissacebola_21903446_ahatintime.pdf");
artigos[26] = new Array("NieR: Automata","https://i.imgur.com/9jGcYql.png","Inácio Maio","https://criticaanalisevideojogos.files.wordpress.com/2019/11/inacio_maio_a21902705_nierautomata.pdf");
artigos[27] = new Array("Bloodborne","https://i.imgur.com/YcdwuhP.png","Vinicius Laurindo","https://criticaanalisevideojogos.files.wordpress.com/2019/06/vinc3adcius-ensaio-crc3adtico-bloodborne.pdf");
artigos[28] = new Array("The Begginer’s Guide","https://i.imgur.com/1to5MyS.png","Bernardo Fosquinha","https://criticaanalisevideojogos.files.wordpress.com/2019/06/beginners-guide-review_bernardofosquinha.pdf");
artigos[29] = new Array("Metal Gear Solid","https://i.imgur.com/pBenh86.png","Fábio França","https://criticaanalisevideojogos.files.wordpress.com/2019/05/metal-gear-solid-review-fc3a1bio-franc3a7a.pdf");
artigos[30] = new Array("Silent Hill 2","https://i.imgur.com/24DA8Tw.png","Simão Gonçalves","https://criticaanalisevideojogos.files.wordpress.com/2019/06/silent-hill-2-critica.pdf");

//A lista "jogos" representa os Jogos na página de Jogos.
//O primeiro valor da lista é o nome do Jogo. Por exemplo: "KHABA RUN"

//O segundo valor da lista é um link de uma imagem que representa o Jogo. Por exemplo: "https://i.imgur.com/yPqZfwP.png"
//É recomendado usar um serviço como o imgur.com para dar host das imagens.
//NOTA: Tenham a certeza que o link acaba em '.png' ou '.jpg' para que este funcione corretamente.

//O terceiro valor da lista são os nomes de quem fez o Jogo. Por exemplo: "Vasco Coelho, Simão Gonçalves, Diogo Alves, Bruno Fonseca & Bernardo Fosquinha"

//O quarto valor da lista é um link do Jogo em questão. Por exemplo: "http://videojogos.ulp.pt/jogos/khabarun/"

//O quinto valor da lista é uma breve descrição do Jogo. Por exemplo: "Corridas labirínticas até ao centro de pistas com inspiração na arte da civilização Maia. Khaba Run é um jogo arcade frenético de 1 a 4 jogadores."

//O sexto e ultimo valor da lista é para o género(s) do Jogo. Por exemplo: "Arcade"

let jogos = new Array();
jogos[0] = new Array("KHABA RUN","https://i.imgur.com/yPqZfwP.png","Vasco Coelho, Simão Gonçalves, Diogo Alves, Bruno Fonseca & Bernardo Fosquinha","http://videojogos.ulp.pt/jogos/khabarun/","Corridas labirínticas até ao centro de pistas com inspiração na arte da civilização Maia. Khaba Run é um jogo arcade frenético de 1 a 4 jogadores.","Arcade");
jogos[1] = new Array("ASS","https://i.imgur.com/6yVCNg0.png","Fábio Filho, Lucas Tamaki, José Ribeiro & Rui Lima","https://linktr.ee/Airplane_Saviour_Simulator","Airplane Savior Simulator is an asymmetric cooperative puzzle game, in which two people will have to work collectively to save a plane from crashing.","");
jogos[2] = new Array("BEHIND THE SCENES","https://i.imgur.com/L89ivBq.png","Bruno Fonseca, Lucas Kenji, Francisco Vaz, Simão Gonçalves & Vasco Coelho","","","");
jogos[3] = new Array("CARTA","https://i.imgur.com/1PkJtIN.png","Francisco Gonçalves","https://arboresis.itch.io/carta","Carta is a casual adventure game which aims to offer a new perspective on what letters mean in a digital, virtual world.","Adventure / Abstract / Casual / Experimental / Narrative");
jogos[4] = new Array("CHEMY","https://i.imgur.com/sRSOCuj.png","","","","");
jogos[5] = new Array("DEVIL´S LICENSE","https://img.itch.zone/aW1hZ2UvMTQwNDUyNS84MTg0MTM3LnBuZw==/347x500/X5o4fY.png","Pedro Barbosa, Melissa Cébola, Inácio Maio & Sofia Silva","https://pedrobarbosa.itch.io/devils-license","You play as the devil, who runs a driving school. Your goal is to fail students by changing traffic lights and signs before the end of each driving course.","Strategy");
jogos[6] = new Array("DKTDW","https://i.imgur.com/UYwcHBF.png","Fábio França, Luana Baía & Ricardo Oliveira","https://www.youtube.com/watch?v=vpx-Zz0Rrlg&t=0s","","");
jogos[7] = new Array("KIRO","https://i.imgur.com/KJUbbz5.png","Marcos Engelhard, João Ribeiro, José Ribeiro & Rui Lima","https://joseribeiro.itch.io/kiro","","Platformer / Puzzle / Shooter");
jogos[8] = new Array("TALK TO WALK","https://i.imgur.com/9k97Ack.png","Bruno Fonseca, Diogo Alves, João Ribeiro, Roberto Fernandes & Vasco Coelho","https://youtu.be/xs0wBEW2E6E","","");
jogos[9] = new Array("WLITD","https://i.imgur.com/Lnda0j6.png","Gean Silva, Giuseppe Accorsini, João Esteves & Luiz dos Santos","https://www.youtube.com/watch?v=yRdHomEWz9M&t=0s","","");
jogos[10] = new Array("SHREDDY TEDDY","https://i.imgur.com/0EQsPai.png","","","","");
jogos[11] = new Array("STEEL ON WHEELS","https://i.imgur.com/k5tjja4.png","Fábio França, José Ribeiro & Rui Lima","https://youtu.be/xpC51wAYNmw","","");
jogos[12] = new Array("THERMOJUMP","https://i.imgur.com/qL5Ihm0.png","Pedro Barbosa & Bernardo Santos","https://pedrobarbosa.itch.io/thermojump","A first person puzzle platformer where you are an adventurer and your goal is to collect treasures and complete levels by rocket jumping!","Adventure / Puzzle");
jogos[13] = new Array("THOUGHT SCAPE","https://i.imgur.com/iF4rmqN.png","Gustavo Maldonado & Bernado Santos","https://woushpt.itch.io/thoughtscape","You play as Sam, a young guy, that tends to get lost on his thoughts when he gets a shower. Who doesn't?","Educational");
jogos[14] = new Array("WILLY THE FIXER","https://i.imgur.com/qiK403c.png","José Fonseca, Melissa Cebola, Nuno Morgado & Sofia Silva","https://poronite.itch.io/willy-the-fixer","Inside the piano lives Willy, a spirit that is tasked in repairing the piano and protecting it from the Yamas, creatures who once were spirits like Willy but turned evil and started destroying the insides of the piano.","Adventure");
jogos[15] = new Array("THE CORE PROBLEM","https://i.imgur.com/0kx8ghD.png","Francisco Silva, João Esteves & Inácio Maio","https://youtu.be/gOxl7yK98-M","A fast-paced 3D FPS game, where you need to get to the core of a planet as fast as possible in order to cool it down.","First Person Shooter");
jogos[16] = new Array("A TYPE OF ADVENTURE","https://img.itch.zone/aW1hZ2UvMTM4Mzk3Ny85MzkyMjc0LnBuZw==/original/g78KeV.png","Bernardo Santos / José Silva / José Fonseca / Melissa Cébola","https://poronite.itch.io/a-type-of-adventure","Go and live through a unique and fun quest in order to immortalize the tales of one of the greatest adventurers to have ever lived.","2D / Typing / Puzzle / Combat / Side-Scroller");

//A lista "videos" representa os videos na página de Multimedia.
//O primeiro valor da lista é o nome do video. Por exemplo: "Making Of Chronicles of Anur"

//O segundo e ultimo valor da lista é o link do video no YouTube. Por exemplo: "https://www.youtube.com/embed/182olT19s9Q"
//NOTA: Tenham a certeza que o formato do link é "https://www.youtube.com/embed/XXXX" para que este funcione corretamente. (XXXX é o ID do video em questão, encontrado no URL)

let videos = new Array();
videos[0] = new Array("Making Of Chronicles of Anur","https://www.youtube.com/embed/182olT19s9Q");
videos[1] = new Array("Making of Talk to Walk","https://www.youtube.com/embed/xs0wBEW2E6E");
videos[2] = new Array("Making of CookMania","https://www.youtube.com/embed/7ls0aLWVOoY");
videos[3] = new Array("Making of ASS","https://www.youtube.com/embed/rI0KApW5cG8");
videos[4] = new Array("Hollow Knight - Video Review","https://www.youtube.com/embed/39lYC6aqPAQ");
videos[5] = new Array("Portal - Video Review","https://www.youtube.com/embed/_2c0Rvk58ks");
videos[6] = new Array("Celeste - Video Review","https://www.youtube.com/embed/NcZEkp-8bAc");
videos[7] = new Array("No Man's Sky - Video Review","https://www.youtube.com/embed/F6wQPgyEsrQ");
videos[8] = new Array("Florence - Video Review","https://www.youtube.com/embed/M4dAlTRea5E");
videos[9] = new Array("Resident Evil VII - Video Review","https://www.youtube.com/embed/dGgiRvUad6s");
videos[10] = new Array("Dishonored - Video Review","https://www.youtube.com/embed/jiUFsNwaIzs");
videos[11] = new Array("Monster Hunter - Video Review","https://www.youtube.com/embed/BPTvlpgIFzw");
videos[12] = new Array("Bully - Video Review","https://www.youtube.com/embed/Dv8jk2q8e3E");
videos[13] = new Array("Global Game Jam 2020","https://www.youtube.com/embed/9dGcElzaHvw");
videos[14] = new Array("Steel on Wheels - Entrevista aos estudantes","https://www.youtube.com/embed/mpdp26cIv0c");
videos[15] = new Array("FallOut New Vegas - Video Review","https://www.youtube.com/embed/8jeefljUd1M");
videos[16] = new Array("ICO - Video Review","https://www.youtube.com/embed/kh78S5HsO-k");