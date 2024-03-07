export const treeModel = [
	{
		menuName: "Животные",
		content: "Живо́тные (лат. Animalia) — традиционно (со времён Аристотеля) выделяемая категория организмов, в настоящее время рассматриваемая в качестве биологического царства. Животные являются основным объектом изучения зоологии.",
		route: "animals"
	},
	[
		{
			menuName: "Членистоногие",
			content: "Членистоно́гие или артропо́ды (лат. Arthropoda, от др.-греч. ἄρθρον — «сустав» и πούς, род. п. ποδός — «нога»), — тип первичноротых животных, включающий насекомых, ракообразных, паукообразных, мечехвостов и многоножек. По количеству видов и распространённости может считаться самой процветающей группой живых организмов.",
			route: "arthropods"
		},
		{
			menuName: "Иглокожие",
			content: "Иглоко́жие (лат. Echinodermata) — тип исключительно морских донных животных, большей частью свободноживущих, реже сидячих, встречающихся на любых глубинах Мирового океана. Насчитывается около 7000 современных видов (в России — 400)[1]. Наряду с хордовыми и полухордовыми, иглокожие относятся к ветви вторичноротых животных (Deuterostomia). Современными представителями типа являются морские звёзды, морские ежи, офиуры (змеехвостки), голотурии (морские огурцы) и морские лилии. Некоторые представители, например голотурии, используются в пищу. В состав этого типа входят также приблизительно 13 000 вымерших видов, которые процветали в морях, начиная с раннего кембрия.",
			route: "echinoderms"
		},
		{
			menuName: "Моллюски",
			content: "Моллю́ски, или мягкоте́лые (лат. Mollusca), — тип первичноротых целомических животных со спиральным дроблением. Оценка общего количества видов моллюсков колеблется в разных публикациях в диапазоне от 100[1] до 200 тысяч[2]. В России насчитывают около 2900 видов[3]. Этот тип обычно делят на 7 или 8 современных классов, к которым добавляют минимум 3 полностью вымерших. Моллюски освоили практически все среды обитания: морские и пресноводные водоёмы, почву, наземно-воздушную средуПерейти к разделу «#Ареал». Некоторые моллюски стали временными или постоянными паразитами других животных.",
			route: "shellfish"
		},
		{
			menuName: "Хордовые",
			content: "Хо́рдовые (лат. Chordata) — тип вторичноротых животных, для которых характерно наличие энтодермального осевого скелета в виде хорды, которая у высших форм заменяется позвоночником. По степени развития нервной системы тип хордовых занимает высшее место среди всех животных. В мире известно более 60 000 видов хордовых.",
			route: "chordal"
		},	
		[
			{
				menuName: "Птицы",
				content: "Птицы - это группа теплокровных позвоночных, составляющих класс Aves (/ˈeɪv/), для которых характерны перья, челюсти с беззубым клювом, откладывание яиц с твердой скорлупой, высокий уровень метаболизма, четырехкамерное сердце и прочный, но легкий скелет, Птицы обитают по всему миру и имеют размеры от 5,5 см (2,2 дюйма) пчелиной колибри до 2,8 м (9 футов 2 дюйма) обыкновенного страуса.",
				route: "birds"
			},	
			{
				menuName: "Млекопитающие",
				content: "Млекопитающее (от латинского mamma -грудь) - это позвоночное животное класса Mammalia. Млекопитающие характеризуются наличием молочных желез, вырабатывающих молоко для кормления своих детенышей, области неокортекса головного мозга, меха или волос и трех костей среднего уха. Эти характеристики отличают их от рептилий и птиц, от которых их предки отделились в каменноугольном периоде более 300 миллионов лет назад. Около 6400 существующих видов млекопитающих были описаны и разделены на 29 отрядов.",
				route: "mammals"
			},
			{
				menuName: "Рептилии",
				content: "Рептилии, по общепринятому определению, представляют собой группу четвероногих с эктотермическим метаболизмом и амниотическим развитием. Живые рептилии состоят из четырех отрядов: тестудины (черепахи), крокодилы (крокодилы), чешуйчатые (ящерицы и змеи) и ринхоцефалии (туатара). По состоянию на май 2023 года в базе данных Reptile указано около 12 000 ныне живущих видов рептилий.[1] Изучение традиционных отрядов рептилий, обычно в сочетании с изучением современных амфибий, называется герпетологией.",
				route: "reptiles"
			},	
			{
				menuName: "Земноводные",
				content: "Земново́дные, или амфи́бии (лат. Amphibia), — класс четвероногих позвоночных животных, включающий в себя (в числе прочих) тритонов, саламандр, лягушек и червяг и насчитывающий около 8 700 современных видов. Земноводные обитают практически повсеместно (за исключением Антарктиды, Северного полюса и некоторых островов). В последние десятилетия по всему миру наблюдается резкое сокращение популяций амфибий, в основном из-за истребления людьми, разрушения среды обитания, опасных болезней: под серьёзной угрозой исчезновения находятся более 3045 видов.",
				route: "amphibians"
			},	
			{
				menuName: "Рыбы",
				content: "Рыбы (лат. Pisces) — обширная группа водных челюстноротых позвоночных животных, ранее считавшаяся надклассом. Рыбы характеризуются жаберным дыханием на всех этапах постэмбрионального развития организма[1]. С точки зрения кладистики четвероногие являются специализированными лопастепёрыми рыбами. Однако, поскольку традиционно понятие «рыбы» относится к парафилетической группе, не включающей четвероногих, в современной систематике рыбы отсутствуют как таксон",
				route: "fish"
			},												
		],
		{
			menuName: "Кишечнополостные",
			content: "Кишечнопо́лостны́е, или радиальные животные, (лат. Coelenterata, Radiata) — группа многоклеточных беспозвоночных животных. Обычно под этим названием объединяют два современных типа: стрекающих (Cnidaria) и гребневиков (Ctenophora). Эту группу традиционно противопоставляют двусторонне-симметричным.",
			route: "coelenterates"
		}
	]
];

/*export const treeModel = [
  {
    menuName: "Менюшка",
    content:"Менюшка",
    route: "menushka"
  },
  [
    {
      menuName: "Другая Менюшка",
      content:"Другая Менюшка",
      route: "drugayamenushka"
    },
    [
      {
        menuName: "Менюшка3",
        content:"Менюшка3",
        route: "menushka3"
      },
      {
        menuName: "Менюшка4",
        content:"Менюшка4",
        route: "menushka4"
      },
      [
         {
          menuName: "Менюшка6",
          content:"Менюшка6",
          route: "menushka6"
        },
        [
           {
            menuName: "Менюшка9",
            content:"Менюшка9",
            route: "menushka9"
          },
          {
            menuName: "Менюшка10",
            content:"Менюшка10",
            route: "menushka10"
          }
        ],
         {
          menuName: "Менюшка7",
          content:"Менюшка7",
          route: "menushka7"
        },
         {
          menuName: "Менюшка8",
          content:"Менюшка8",
          route: "menushka8"
        },        
      ],
      {
        menuName: "Менюшка5",
        content:"Менюшка5",
        route: "menushka5"
      } 
    ]
  ]
];*/

/*export const treeModel = [
  {
    menuName: "Менюшка1",
    content:"Менюшка1",
    route: "menushka1"
  },
  [
	  {
	    menuName: "Менюшка2",
	    content:"Менюшка2",
	    route: "menushka2"
	  },
	  [
		  {
		    menuName: "Менюшка4",
		    content:"Менюшка4",
		    route: "menushka4"
		  },
		  {
		    menuName: "Менюшка5",
		    content:"Менюшка5",
		    route: "menushka5"
		  },
		  {
		    menuName: "Менюшка6",
		    content:"Менюшка6",
		    route: "menushka6"
		  },
		  [
			  {
			    menuName: "Менюшка7",
			    content:"Менюшка7",
			    route: "menushka7"
			  }		  
		  ],
		  {
		    menuName: "Менюшка108",
		    content:"Менюшка108",
		    route: "menushka108"
		  },
		  [
			  {
			    menuName: "Менюшка9",
			    content:"Менюшка9",
			    route: "menushka9"
			  }		  
		  ]		  		  		  		  
	  ],		 
		{
			menuName: "Менюшка3",
			content:"Менюшка3",
			route: "menushka3"
		} 
  ]
];*/