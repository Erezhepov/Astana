/*----JS-DATE-----------------------------------------------------------------------*/
let date = new Date('November 30 2022 00:00');

function calculateDateParts() {
	let days = Math.floor(gap / 1000 / 60 / 60 / 24);
	let hours = Math.floor(gap / 1000 / 60 / 60) % 24;
	let minutes = Math.floor(gap / 1000 / 60) % 60;
	let seconds = Math.floor(gap / 1000) % 60;
	return { days, hours, minutes, seconds };
}

function counts() {
	let now = new Date();
	gap = date - now;

	let { days, hours, minutes, seconds } = calculateDateParts();

	if (gap < 0) {
		document.getElementById('group').innerText = "Время прошло.";
	} else {
		document.getElementById('d').innerText = days;
		document.getElementById('h').innerText = hours;
		document.getElementById('m').innerText = minutes;
		document.getElementById('s').innerText = seconds;
	}

}
counts();
setInterval(counts, 1000);
/*--СЛАЙДЕРЫ----------------------------------------------------------------------*/
$(document).ready(function () {
	$('.column__title').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300);
	});
});
/*---МУЛЬТИЯЗЫЧНОСТЬ---------------------------------------------*/
var arrLang = {
	"ru": {
		"prog": "Деловая программа",
		"cprog": "Культурная программа",
		"pprog": "Место проведения",
		"about": "О казахстане",
		"astana": "О столице г.Нур-Султан",
		"team": "Участникам",
		"media": "Медиа",
	},
	"kz": {
		"prog": "Бизнестік программа",
		"cprog": "Мәдени бағдарлама",
		"pprog": "Өткізу жері",
		"about": "Қазақстан жайлы",
		"astana": "Нұр-Сұлтан жайлы",
		"team": "Қатысушыларға",
		"media": "Медиа",
	},
	"en": {
		"prog": "Business program",
		"cprog": "Cultural program",
		"pprog": "Location",
		"about": "About Kazakhstan",
		"astana": "About capital",
		"team": "Participants",
		"media": "media",
	},
	"fr": {
		"prog": "Programme d'affaires",
		"cprog": "Programme culturel",
		"pprog": "Localisation",
		"about": "À propos du Kazakhstan",
		"astana": "A propos de la capitale",
		"team": "Participants",
		"media": "médias",
	},
	"sp": {
		"prog": "Programa de negocios",
		"cprog": "Programa cultural",
		"pprog": "Localización",
		"about": "Sobre Kazajstán",
		"astana": "Sobre el capital",
		"team": "participantes",
		"media": "medios",
	}
}
var arrHeader = {
	"ru": {
		"days": "Дней",
		"hours": "Часов",
		"minutes": "Минут",
		"seconds": "Секунд",
	},
	"kz": {
		"days": "Күн",
		"hours": "Сағат",
		"minutes": "Минут",
		"seconds": "Секунд",
	},
	"en": {
		"days": "Days",
		"hours": "Hours",
		"minutes": "Minutes",
		"seconds": "Seconds",
	},
	"fr": {
		"days": "Jours",
		"hours": "heures",
		"minutes": "Minutes",
		"seconds": "Secondes",
	},
	"sp": {
		"days": "Dias",
		"hours": "Horas",
		"minutes": "Minutos",
		"seconds": "Segundos",
	},
}
var arrFull = {
	"ru": {
		"text": "Равным образом дальнейшее развитие различных форм деятельности позволяет выполнять важные задания по разработке позиций, занимаемых участниками в отношении поставленных задач. Задача организации, в особенности же укрепление и развитие структуры в значительной степени обуславливает создание существенных финансовых и административных условий. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям. Товарищи! новая модель организационной деятельности позволяет оценить значение соответствующий условий активизации. Товарищи! постоянный количественный рост и сфера нашей активности позволяет оценить значение форм развития.",
		"other": "Подробнее",
	},
	"kz": {
		"text": "Дәл осылай әр түрлі қызмет түрлерін одан әрі дамыту қатысушылардың қойылған міндеттерге қатысты ұстанымдарын дамыту үшін маңызды міндеттерді орындауға мүмкіндік береді. Ұйымның міндеті, әсіресе құрылымды нығайту мен дамыту, көп жағдайда елеулі қаржылық және әкімшілік жағдайлардың жасалуын анықтайды. Дегенмен, біздің қызметіміздің тұрақты ақпараттық -насихаттық қамтамасыз етілуі кадрларды даярлау жүйесін қалыптастыруда маңызды рөл атқаратынын, шұғыл қажеттіліктерді қанағаттандыратынын ұмытпаған жөн.",
		"other": "Толығырақ",
	},
	"en": {
		"text": "Likewise, the further development of various forms of activity makes it possible to carry out important tasks to develop the positions taken by the participants in relation to the tasks set. The task of the organization, especially the strengthening and development of the structure, largely determines the creation of significant financial and administrative conditions. We should not, however, forget that the constant information and propaganda support of our activities plays an important role in the formation of the personnel training system, meets the urgent needs. Comrades! a new model of organizational activity allows you to assess the value of the corresponding activation conditions.",
		"other": "More details",
	},
	"fr": {
		"text": "De même, le développement ultérieur de diverses formes d'activité permet de réaliser des tâches importantes pour développer les positions prises par les participants par rapport aux tâches fixées. La tâche de l'organisation, en particulier le renforcement et le développement de la structure, détermine en grande partie la création de conditions financières et administratives importantes. Cependant, nous ne devons pas oublier que le soutien constant d'information et de propagande de nos activités joue un rôle important dans la formation du système de formation du personnel, répond à des besoins urgents. Camarades ! un nouveau modèle d'activité organisationnelle permet d'évaluer la valeur des conditions d'activation correspondantes.",
		"other": "Plus de détails",
	},
	"sp": {
		"text": "Asimismo, el mayor desarrollo de diversas formas de actividad posibilita la realización de importantes tareas para desarrollar las posiciones tomadas por los participantes en relación a las tareas planteadas. La tarea de la organización, especialmente el fortalecimiento y desarrollo de la estructura, determina en gran medida la creación de importantes condiciones financieras y administrativas. Sin embargo, no debemos olvidar que el constante apoyo informativo y propagandístico de nuestras actividades juega un papel importante en la formación del sistema de formación de personal, responde a necesidades urgentes. ¡Camaradas! un nuevo modelo de actividad organizativa permite valorar el valor de las correspondientes condiciones de activación.",
		"other": "Más detalles",
	},
}
$(function () {
	$('.translate').click(function () {
		var lang = $(this).attr('id');

		$('.lang').each(function (index, item) {
			$(this).text(arrLang[lang][$(this).attr('key')]);
			$(this).text(arrHeader[lang][$(this).attr('key')]);
			$(this).text(arrFull[lang][$(this).attr('key')]);
		});
	});
});
/*---SCROLL----------------------------------------------------*/
$(function () {
	const header = document.querySelector('.header');
	const headerH = header.offsetHeight;
	const screen = document.querySelector('.fullscreen');
	const screenH = screen.offsetHeight;
	window.addEventListener('scroll', () => {
		let scrolD = window.scrollY;
		if (scrolD >= 30) {
			header.classList.add('headerF');
		} else {
			header.classList.remove('headerF');
			screen.style.marginTop = null;
		}
	});
});

