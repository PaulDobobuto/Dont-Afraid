const dont_afraid = [
    "Génesis 15:1 Después de estas cosas vino la palabra de Jehová a Abram en visión, diciendo: No temas, Abram; yo soy tu escudo, y tu galardón será sobremanera grande.",

"Génesis 21:17 Y oyó Dios la voz del muchacho; y el ángel de Dios llamó a Agar desde el cielo, y le dijo: ¿Qué  tienes, Agar? No temas; porque Dios ha oído la voz del muchacho en donde está,",

"Génesis 26:24 Y se le apareció Jehová aquella noche, y le dijo: Yo soy el Dios de Abraham tu padre; no temas, porque yo estoy contigo, y yo bendeciré, y multiplicaré tu descendencia por amor de Abraham mi siervo.",

"Génesis 35:17 Y aconteció, como había trabajo en su parto, que le dijo la partera: No temas, que también tendrás este hijo.",

"Génesis 43:23 El les respondió: Paz a vosotros, no temáis; vuestro Dios y el Dios de vuestro padre os dio el tesoro en vuestros costales; yo recibí vuestro dinero. Y sacó a Simeón a ellos.",

"Génesis 46:3 Y dijo: Yo soy Dios, el Dios de tu padre; no temas de descender a Egipto, porque allí yo haré de ti una gran nación.",

"Génesis 50:19 Y les respondió José: No temáis; ¿acaso estoy yo en lugar de Dios?",

"Génesis 50:21 Ahora pues, no tengáis miedo. Yo os sustentaré a vosotros y a vuestros hijos. Así les confortó y les habló al corazón.",

"Éxodo 14:13 Y Moisés dijo al pueblo: No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros; porque los egipcios que hoy habéis visto, nunca más para siempre los veréis.",

"Éxodo 20:20 Y Moisés respondió al pueblo: No temáis; porque para probaros vino Dios, y para que su temor esté delante de vosotros, para que no pequéis.",

"Números 21:34 Y Jehovah dijo a Moisés: No le tengas miedo, porque en tu mano he entregado a él, a todo su pueblo y su tierra. Tú harás con él como hiciste con Sejón, rey de los amorreos, que habitaba en Hesbón.",

"Deuteronomio 1:17 No hagáis distinción de personas en el juicio; oiréis tanto al pequeño como al grande. No tengáis temor de nadie, porque el juicio es de Dios. Pero la causa que os sea difícil la traeréis a mí, y yo la oiré.",

"Deuteronomio 1:21 Mira, Jehová tu Dios te ha entregado la tierra; sube y toma posesión de ella, como Jehová el Dios de tus padres te ha dicho; no temas ni desmayes.,",

"Deuteronomio 1:29 Entonces os dije: ‘No os aterroricéis ni tengáis temor de ellos.",

"Deuteronomio 3:2 Y Jehovah me dijo: ‘No le tengas miedo, porque en tu mano he entregado a él, a todo su pueblo y su tierra. Tú harás con él como hiciste con Sejón, rey de los amorreos, que habitaba en Hesbón.’",

"Deuteronomio 7:18 No tengas temor de ellas. Acuérdate bien de lo que Jehovah tu Dios hizo con el faraón y con todo Egipto;.",

"Deuteronomio 18:22 Cuando un profeta hable en el nombre de Jehovah y no se cumpla ni acontezca lo que dijo, ésa es la palabra que Jehovah no ha hablado. Con soberbia la habló aquel profeta; no tengas temor de él.",


"Deuteronomio 20:1 Cuando salgas a la guerra contra tus enemigos y veas caballos y carros, un pueblo más numeroso que tú, no tengas temor de ellos, porque contigo está Jehovah tu Dios que te sacó de la tierra de Egipto.",

" Deuteronomio 20:3 y les dirá: Oye, Israel, vosotros os juntáis hoy en batalla contra vuestros enemigos; no desmaye vuestro corazón, no temáis, ni os azoréis, ni tampoco os desalentéis delante de ellos;",
"Isaías 41:10 No temas, porque yo estoy contigo. No tengas miedo, porque yo soy tu Dios. Te fortaleceré, y también te ayudaré. También te sustentaré con la diestra de mi justicia.’",
];

function NoTemasbyGod() {
    const randomIndex = Math.floor(Math.random() * dont_afraid.length);
    document.getElementById('dont_afraid').innerHTML = dont_afraid[randomIndex];
}