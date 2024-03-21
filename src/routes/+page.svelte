<script lang="ts">
	import { goto } from '$app/navigation';
	import { isLoggedIn } from '$lib/services';
	import { onMount } from 'svelte';
	import { Navbar } from '$lib/components';
	import { fetchCategories, logout } from '$lib/api';

	// Tabs Management
	let tabs: any[] = [];
	let activeTab = '';

	const tabChange = async (tab: { detail: string }) => {
		activeTab = tab.detail;

		if (activeTab.toLowerCase() === 'logout') {
			await logout();
			sessionStorage.removeItem('userData');
			goto('/auth/login');
		}
	};

	onMount(async () => {
		// Basic Authentication //
		// If the user hasn't logged in, then redirects to login page
		if (!isLoggedIn()) goto('/auth/login');

		// Navbar //
		// Fetch Categories
		const categories = await fetchCategories();
		// This will sort the categories alphabetically.
		categories.sort();
		// Set the tabs
		tabs = [...categories, 'Logout'];
		// Set the active tab
		activeTab = tabs[0];
	});
</script>

<title>Dashboard</title>
<div class="wrapper">
	<Navbar {tabs} {activeTab} on:tabChange={tabChange} />
	<main>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugit nulla eos accusamus
			molestiae officia magni consectetur iusto temporibus repellat, cupiditate eveniet quis
			corporis deleniti distinctio laborum atque ea quasi dignissimos eum similique totam harum.
			Dicta sint blanditiis, veniam consequuntur provident temporibus illo qui autem. Minima ullam
			asperiores modi nesciunt a. Praesentium repellat, excepturi odio placeat in dolores, fugit
			ducimus illo obcaecati, accusamus iure quibusdam recusandae cupiditate voluptatum delectus
			neque! Commodi veritatis laudantium ex sit fugit quos necessitatibus. Similique molestiae
			aspernatur odit repudiandae. Tempora necessitatibus esse repudiandae repellat amet, sint
			beatae animi fugit? Molestias iste explicabo delectus veritatis ad cumque consequuntur eum in
			similique non, ipsa eaque repudiandae sed quaerat eos soluta ea voluptate ipsum minus illo
			obcaecati quam maxime esse adipisci. Hic nihil iure nesciunt alias optio quo aliquam ipsam
			ipsa debitis, perferendis ducimus qui consequuntur sint dolores eius magnam, ullam, magni
			consectetur. Consequatur itaque temporibus repellat voluptatibus nesciunt magnam labore,
			explicabo odit ad doloribus inventore optio vel nisi ullam exercitationem eveniet repudiandae
			ex. Obcaecati dignissimos animi, nam ipsum illum amet vitae laborum repudiandae, sequi aut
			illo iusto placeat ad, totam perspiciatis incidunt. Sunt, voluptas, accusantium nesciunt
			officiis animi sint doloribus tenetur, minima illo reprehenderit quam magnam. Eum voluptates
			neque quisquam soluta, perspiciatis doloribus quia sint ipsum adipisci id in molestias odio
			tenetur earum voluptas. Sunt sequi tenetur non doloribus quia tempore laudantium ad vitae
			adipisci obcaecati. Molestiae sunt fugiat similique aspernatur id, sit libero unde nemo
			reprehenderit obcaecati nam quam fugit sapiente velit totam dolorum ullam illum laudantium
			nobis ipsum fuga optio possimus! Enim eos saepe ad atque velit qui est quia perspiciatis
			numquam repellendus ipsa vitae mollitia porro corporis autem vero provident consequuntur cum
			blanditiis, hic quod amet recusandae voluptatum deleniti? Magnam reprehenderit, ab sapiente
			similique consequuntur nemo quasi amet aut assumenda quod quibusdam, cumque optio voluptatem
			distinctio cupiditate dolor eos dicta quia aliquid. Animi illo asperiores, repudiandae ab
			ratione dignissimos quam sint facere, autem fugiat exercitationem ipsa incidunt excepturi
			aspernatur voluptates soluta consequuntur harum quas eaque error impedit provident. Cumque
			nesciunt sit quasi itaque nihil fugiat vel illo voluptas explicabo beatae dicta odit,
			doloribus, voluptate expedita earum debitis numquam porro. Nulla dolore harum, corporis nemo
			necessitatibus esse beatae! Doloribus libero itaque nesciunt aspernatur in exercitationem
			nihil veritatis odio maxime accusamus maiores delectus, esse mollitia dolore repudiandae
			excepturi voluptatibus aliquam assumenda numquam quibusdam hic culpa. Deserunt excepturi
			error, nisi quasi modi ad ea voluptatem ex labore laudantium, temporibus ab perspiciatis
			deleniti animi autem incidunt accusamus numquam quo? Blanditiis porro natus libero voluptatem,
			quam corporis mollitia commodi, iure iste perspiciatis, placeat sint tempora. Nihil ex
			pariatur impedit est veniam voluptates et. Vel dolores aut quibusdam debitis nihil eius.
			Pariatur, quis veniam! Dolorum saepe, vero quisquam unde ullam eligendi suscipit dolores
			provident molestiae. Pariatur, sapiente dolore minus doloribus unde odio quaerat non, quidem
			itaque saepe aperiam corrupti tempora blanditiis officia numquam labore maxime nam explicabo,
			fuga eveniet. Distinctio, suscipit beatae sint blanditiis odio tenetur vitae! Pariatur, ea
			praesentium illum laboriosam debitis dicta molestias veniam dolorem autem quo ducimus, tenetur
			qui beatae, modi laudantium perferendis eius. Nemo architecto aspernatur velit saepe itaque
			explicabo? Tenetur repellat corporis omnis officia sequi id error natus quasi saepe eum modi
			illo qui quae ipsa perspiciatis at minima suscipit nobis, fuga eaque cumque mollitia impedit
			voluptatum. Suscipit asperiores possimus, inventore aliquid maxime corporis? Autem sed officia
			neque earum, recusandae impedit labore voluptatem porro molestiae eaque. Repellendus amet
			recusandae aspernatur nostrum laborum perferendis aperiam autem reprehenderit molestiae neque
			omnis cum sapiente iusto qui quam beatae ab, nesciunt, similique nemo, ut quas esse illum
			nihil maiores? Eum ab autem exercitationem porro perferendis! Nam perspiciatis ipsa sint
			tenetur dolor mollitia veritatis officiis porro esse. Aliquam quasi beatae omnis mollitia quis
			adipisci laudantium sit laborum quae sed illo consequuntur ut officia, est ab error nobis
			ullam in eius dicta dolorem non iure? Ex veniam nulla necessitatibus vel! Eos voluptatibus
			esse veritatis magnam minima atque facere asperiores. Architecto, est. Commodi saepe expedita
			adipisci omnis? Velit libero perspiciatis animi fugit voluptatum. Debitis culpa cumque id amet
			voluptates nam molestiae illo tenetur placeat iste nemo voluptas impedit perspiciatis illum
			ipsam consequatur quod, nobis libero quasi, exercitationem error earum est! Modi saepe minima
			quod corporis repudiandae id voluptatibus fugit nostrum facere harum commodi laboriosam nihil
			consequuntur nesciunt unde, quisquam odit non vitae pariatur quidem autem quas! In repudiandae
			tenetur esse, architecto accusamus quia molestias dolor soluta iure ducimus autem vero placeat
			non blanditiis ipsam iusto quisquam hic explicabo quis accusantium libero corporis harum at
			odit. Totam exercitationem repudiandae officia placeat dignissimos dolores velit? Ad eum
			laudantium reiciendis accusantium itaque. Natus, labore? Numquam ea enim quod exercitationem,
			facilis blanditiis minima. Reiciendis nulla nam minus dignissimos ab suscipit labore a
			blanditiis quaerat nobis sit animi consectetur odio sed assumenda beatae accusantium, dolorum
			ducimus quia impedit consequatur explicabo deleniti! Necessitatibus error, dolor quia itaque
			eveniet nobis inventore placeat officiis molestias! Tenetur modi quaerat ad enim atque quidem
			aliquid id blanditiis ipsum consequatur animi nisi consequuntur alias, sit dicta molestiae
			possimus aut magni quod optio ex, autem dolores. Eligendi deserunt tenetur, reiciendis
			pariatur exercitationem labore rerum atque error minus earum suscipit, natus veritatis.
			Eligendi, ab. Deleniti labore rerum rem sequi est aperiam! Asperiores, praesentium fugit quam
			eum quisquam veritatis magnam deleniti accusamus molestias ducimus, vero quos omnis, officiis
			itaque voluptatem earum consectetur quibusdam! Maxime ipsum error accusantium dolorum sequi
			repudiandae, sed exercitationem numquam ea, molestiae amet nulla! Pariatur, debitis quia
			voluptate sapiente dolorem neque! Quidem quisquam asperiores deserunt minus. Ducimus eligendi
			corporis alias impedit, a quae fugiat aspernatur mollitia voluptate possimus adipisci
			repellendus eaque expedita facere accusamus atque hic modi velit nam, ad dolorum. Repudiandae
			non, aut quo accusamus, dolores recusandae omnis temporibus nulla deleniti commodi, sint
			placeat modi optio minima cum ea atque voluptatem ducimus debitis suscipit. Deleniti dicta
			dolores animi laboriosam cumque, porro temporibus laudantium, quidem velit, nostrum dolorem
			architecto. Quia dolorum minus sit voluptatum officia, velit quaerat, nisi necessitatibus
			nobis optio molestiae ab sint rem eligendi totam assumenda corrupti qui cupiditate minima! Ex
			sequi hic nulla quos distinctio reiciendis quaerat. Voluptatibus cumque perferendis molestias
			similique perspiciatis nemo quisquam praesentium laudantium pariatur, enim quibusdam aliquam
			aspernatur, eveniet magnam. Veritatis ipsum inventore facere atque perferendis, numquam nulla?
			Optio maiores aspernatur iure asperiores earum, saepe obcaecati mollitia. Molestias autem
			velit dolor alias veniam aperiam tempora, debitis dignissimos, deleniti molestiae vitae.
			Debitis consequuntur error maiores eligendi ut sequi voluptatem ad! Dicta rerum assumenda
			iusto id beatae, vel neque nulla odio quasi deleniti aliquam voluptatem, mollitia vero,
			voluptates accusantium possimus rem ex necessitatibus esse placeat? Nostrum commodi
			consequuntur quis dignissimos quibusdam facere perspiciatis, sequi sit error repudiandae. Amet
			distinctio molestiae velit neque dicta aliquid vitae quibusdam, animi est itaque rem dolor cum
			repudiandae tenetur magni eos dignissimos, eveniet expedita totam adipisci aperiam. Aspernatur
			quae nisi, soluta, quasi enim illum dicta dolorum cumque temporibus iusto architecto ab
			asperiores quisquam distinctio impedit veniam tempore, vero deleniti consectetur voluptatibus
			ex cum modi alias! Facilis nemo saepe, nostrum dolore inventore nam soluta nisi dolorum eius
			laudantium odio deserunt possimus atque tenetur et sint impedit? Tenetur eos porro similique
			error perferendis ipsam quas numquam maxime recusandae consectetur. Asperiores magni doloribus
			assumenda quasi fuga voluptatem aperiam accusantium. Sunt quaerat corporis earum reiciendis
			quo, iste quia expedita dolores aspernatur sapiente, adipisci incidunt dignissimos architecto
			ex consequatur odio maiores quis vel, similique quam id. Autem quisquam aliquid alias ut
			suscipit temporibus eius veritatis quae a quo, aspernatur sed sunt incidunt dolor laboriosam
			inventore laborum harum repellendus tempore pariatur dicta enim rerum impedit. Optio atque
			delectus suscipit, maxime itaque dolore! Magni expedita veritatis, hic doloribus ducimus
			eligendi! Dignissimos quisquam saepe blanditiis atque odit, facere, voluptas distinctio iusto
			accusamus mollitia ex quo itaque velit doloremque nisi sed dolorum quia. Odit incidunt a,
			consequatur ullam eveniet recusandae aperiam deserunt, voluptatum veritatis possimus cum neque
			nam doloribus error. Repellendus nesciunt labore non incidunt, adipisci expedita suscipit
			assumenda corporis repellat molestiae illo. Porro eaque minus doloremque dolor eveniet
			voluptatibus corrupti! Itaque deserunt quos ea, sunt placeat magnam dolorum cum rerum dolores
			eius quasi officia quas perspiciatis reiciendis pariatur deleniti dolor consequuntur vel
			excepturi praesentium eos minima tempora! Non molestias ipsam officia enim nobis tempore nisi,
			ut incidunt vitae porro minima assumenda, dolorum similique? Error, illum ab! Voluptate dolore
			nemo excepturi sapiente et. Quaerat, hic? Reprehenderit, quidem expedita. At dolores,
			excepturi quos aliquid doloribus veritatis adipisci incidunt ducimus modi recusandae suscipit
			culpa animi facilis delectus numquam iusto eaque voluptates vel qui vero enim. Odit itaque
			obcaecati ipsam distinctio asperiores at, quae illo, laborum accusantium iste doloremque
			voluptatum vero maxime ad labore animi eum nihil consequatur quia aspernatur vitae nobis magni
			eos? Architecto, eius similique, magnam nemo aperiam fugit quam unde id, quaerat atque maxime
			iusto placeat? Ratione doloribus qui eveniet quo blanditiis aliquid similique quas recusandae!
			Commodi recusandae reiciendis architecto, maiores nisi sit doloribus consectetur ipsam ipsum?
			Totam, odit! Labore harum, voluptate ullam aspernatur laboriosam beatae magnam expedita, enim
			voluptas odit quisquam. Voluptatum nam iusto quia eveniet aliquam aspernatur quaerat dolore
			earum fuga consequatur impedit ad modi, officiis esse vitae vel beatae blanditiis eius.
			Architecto ipsam asperiores quia repellat, dolores reiciendis, omnis optio consectetur porro
			eum alias quam! Neque repudiandae eius repellendus pariatur soluta tempore facere, commodi
			architecto dicta a quas accusamus, impedit ex dolorum distinctio error, maxime aliquid qui
			dolorem ab nisi. Saepe magni laboriosam inventore molestias, commodi rerum aliquam dolores,
			facilis temporibus alias neque ab, exercitationem ut est consequuntur autem aliquid? Quia enim
			iste similique sed neque, sit hic, quod, corrupti cum pariatur suscipit quidem exercitationem
			veniam optio? Animi, delectus? Nostrum, totam quo voluptatem quidem dicta explicabo nam
			aspernatur quod ipsum temporibus optio fugiat quibusdam corrupti, magnam praesentium minus
			molestiae saepe laudantium? Tempore necessitatibus deserunt magni dolores atque, id alias
			expedita dolor temporibus deleniti ex fugiat dolore ducimus non dolorum voluptate quisquam
			eius consequuntur. Blanditiis doloribus similique placeat, ratione quis incidunt in nobis
			reiciendis possimus eligendi distinctio voluptate deserunt repellat. Sed nam accusantium error
			facilis harum, recusandae maxime necessitatibus omnis voluptas asperiores doloremque, odit
			illum? Libero in rem ad obcaecati minus. Exercitationem quos odio dicta ipsum, id laudantium
			ad quam, libero, fuga eaque minus illo. Totam quasi, nihil quos consectetur quis quaerat
			recusandae, eum unde error accusantium iusto odio, dolores id alias ex perspiciatis. Esse
			dolores officia perferendis ipsa hic inventore est voluptas fuga! Est ratione cumque incidunt
			neque, cum esse delectus? Aperiam nihil possimus, architecto consequatur tenetur molestiae.
			Aliquid, beatae? Qui, in ex. Veritatis nesciunt repudiandae perferendis eos error possimus
			sit! Eaque autem ducimus possimus atque tempora veniam aut nihil odio aperiam tempore!
			Veritatis, tenetur repellendus laborum magnam magni cumque, soluta est quis, sint quas
			officia? Aut, unde officiis blanditiis nihil deleniti sit beatae numquam quasi dolorum
			delectus minus illum iste ipsum impedit, facere consequatur corrupti adipisci temporibus
			nostrum distinctio animi voluptates hic reiciendis. Temporibus repudiandae iste dolorem quasi
			repellendus eveniet eligendi, alias libero? Excepturi voluptatibus sequi praesentium provident
			nulla eius nisi nostrum dicta vero. Ad earum eaque quidem, veniam illum praesentium! Veniam in
			alias rem ipsum error consectetur ullam necessitatibus eveniet culpa eos iure reprehenderit
			esse nam explicabo dolores quidem consequatur exercitationem veritatis nulla incidunt minus
			tenetur, accusantium omnis sequi! Voluptatibus voluptatem aspernatur fugiat, neque quibusdam
			mollitia commodi recusandae cumque eum consequuntur error dicta illo ipsum est doloremque
			nulla ex repellendus omnis aliquid esse. Iste vel sit repudiandae eveniet, porro, hic totam
			dolore saepe cupiditate pariatur dolor sed? Incidunt officia, distinctio cum eos impedit velit
			eveniet perferendis. Quos praesentium, debitis incidunt assumenda rem, quisquam aliquid
			maxime, ipsa molestiae aperiam et est. Voluptate id, illo porro eius ipsam ipsum officiis
			debitis, iusto magni fugit eos, eligendi quis? Earum voluptatibus, ipsum quia deserunt quos
			dolore enim quo doloremque. Veniam inventore id minima, rerum itaque dolor a error iste
			quaerat soluta recusandae architecto exercitationem delectus consequuntur officiis debitis
			asperiores assumenda accusantium enim aliquid! Repellendus, explicabo nemo! Tenetur similique
			totam maiores labore ullam recusandae laboriosam! Soluta, iure ducimus porro illo nostrum
			numquam beatae adipisci consectetur facere cum ipsa, impedit maiores. Qui veritatis error
			molestias eius fuga architecto amet ducimus iste deleniti, consequatur est repellat doloremque
			modi culpa sint minima sit tempora pariatur reiciendis quos assumenda quo cupiditate
			recusandae rem? Eaque animi eos saepe vitae harum sapiente quam asperiores, incidunt suscipit,
			illo impedit ut debitis ad quidem, quo cupiditate deserunt quia eum tempore iste. Quasi
			aperiam dicta minima, iusto nesciunt quod sit non, distinctio a assumenda sint omnis totam
			recusandae ipsam. Ratione, tempore, asperiores animi ducimus accusamus magni id quasi quam
			nesciunt reprehenderit porro quisquam obcaecati? Odio placeat, nesciunt commodi delectus
			itaque consectetur ipsum, aperiam dolorem, ullam quis laudantium a pariatur modi possimus
			debitis quasi voluptates aliquid magni est provident? Recusandae vero ex excepturi dicta quis
			quisquam ducimus quam. Consectetur facilis eligendi distinctio temporibus blanditiis beatae
			delectus, ipsa animi in, doloribus aliquid minus facere aperiam officia a perspiciatis
			voluptate qui? Provident quaerat a eos iusto magni similique tempore hic necessitatibus
			suscipit, excepturi dolores tempora vel commodi minus quis facilis laborum maiores numquam.
			Dolores quo fuga vero, molestiae voluptate autem? Maxime totam, nulla labore eligendi nobis
			numquam ipsum voluptatum aspernatur vel praesentium delectus fuga iure quae cupiditate animi
			dolores, quaerat ullam deserunt? Iste consequatur nobis, illo quia vitae aperiam quo
			reprehenderit et ea, facere quas nam cum voluptatem fuga repellendus, corrupti qui blanditiis
			ut dolores vero iusto? Dolorum, pariatur, optio facilis omnis totam asperiores eos illo
			blanditiis nam nisi veniam voluptatum in aut quod sapiente ducimus, similique non vel
			quibusdam possimus? Enim ipsum molestias ad quam corrupti itaque eaque, voluptates
			consequatur, dolore earum soluta nam eum minus dicta aspernatur vero dolores optio laudantium
			facilis. Dolores magni accusamus dolore odio veritatis quis repellendus ut ab quas labore odit
			omnis laudantium a fugiat qui, sit accusantium maiores dolorum porro beatae error? Consectetur
			rerum ipsa voluptatem dignissimos architecto sequi vero asperiores commodi, soluta velit
			quisquam possimus quae provident ab quidem aut quas sapiente! Nostrum doloremque molestias
			dolorum, natus dignissimos quidem est quos delectus voluptates, molestiae voluptate, corrupti
			quam optio corporis temporibus eum repellendus quae! Eaque explicabo cum aspernatur tempora
			minima tempore alias provident ea quis necessitatibus excepturi incidunt blanditiis sint minus
			quasi similique deleniti quae, molestiae quod fugit qui est? Ducimus, dolores! Qui reiciendis,
			quaerat deserunt eum tempore praesentium pariatur, culpa repudiandae, sed quidem doloribus
			nostrum provident quo dolorem natus expedita dolore aliquid! Eveniet officiis incidunt dolorem
			non sequi dolorum rerum enim atque similique minima assumenda excepturi in, necessitatibus
			saepe debitis tempora optio iste, provident voluptatem sunt veritatis laudantium quis
			accusamus dignissimos. Fugit rerum minima beatae quia eos similique adipisci vero voluptates
			possimus sapiente, perspiciatis delectus est molestias eum, autem porro nostrum quae itaque
			sed? Aliquam accusantium, quidem asperiores vel cum quibusdam. Sit earum tempore, assumenda
			mollitia provident officiis sequi iure iusto facere fuga optio quod, animi itaque consequuntur
			quaerat cupiditate est similique nostrum praesentium corporis dolorum ratione, quo beatae.
			Pariatur est rem soluta nemo dolorum quo possimus quasi esse dignissimos explicabo, itaque qui
			quos ipsam sequi. Qui iusto, temporibus expedita asperiores reprehenderit non beatae aut quis
			explicabo, magnam incidunt alias rem quos ab, autem suscipit. Corporis corrupti laudantium
			necessitatibus dicta aliquam magni adipisci, quibusdam modi est facilis quis nulla dolor
			laboriosam, nobis maxime. Alias nostrum rerum nam fugiat laudantium, maiores dolore mollitia
			quibusdam sunt autem sapiente perferendis?
		</p>
	</main>
</div>

<style>
	.wrapper {
		margin: 0;
		padding: 0;
		background-color: var(--white-200);
		height: 100vh;
		width: 100vw;
		display: flex;
	}
	main {
		width: 100%;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		/* justify-content: center; */
	}
	p {
		width: 60ch;
	}
	/* Small Screens */
	@media only screen and (max-width: 600px) {
		.wrapper {
			flex-direction: column-reverse;
		}
	}
	/* Large Screens */
	@media only screen and (min-width: 600px) {
		.wrapper {
			flex-direction: row;
		}
		main {
			margin-left: 5rem;
		}
	}
</style>
