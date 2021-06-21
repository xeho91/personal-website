<script>
	import { Metatags, Link, Flag, Message, Profile } from "$lib";
	import { Normal as Button } from "$lib/Buttons";

	import flagPoland from "@iconify-icons/twemoji/flag-for-poland.js";
	import flagTaiwan from "@iconify-icons/twemoji/flag-for-taiwan.js";
</script>

<Metatags
	title="Personal website"
	description="My space on the Internet. Includes information about me, a showcase of my developing skills shared notes, and a way to contact me."
/>

<article>
	<h1>Welcome to my site on&nbsp;the&nbsp;Internet!</h1>

	<Profile>
		<Message>
			My name is <strong>Mateusz Kadłubowski</strong>. Born in <Flag
				name="Poland"
				icon={flagPoland}
			/>, and currently, I live in <Flag
				name="Taiwan"
				icon={flagTaiwan}
			/>.<br />
			Feel free to call me <em>Matt</em> since Polish words might twist your
			tongue awkwardly. 😉
		</Message>

		<Message>
			I am passionate about <strong
				>software development and research</strong
			>. I started with <em>Digital Marketing</em>, then
			<em>Front-end</em>.
		</Message>

		<Message>
			You may notice me as a <strong
				>big fan <em>(nerd)</em> of terminal</strong
			>,
			<abbr title="Command Line Interface">CLI</abbr>
			& <abbr title="Terminal User Interface">TUI</abbr> tools. Being able
			to code and solve the cases through it, without the need to use
			<abbr title="Graphical User Interface">GUI</abbr>
			tools, is very exciting - the core reason is that I can work anywhere,
			remotely on my laptop, without draining so much battery while being unplugged.
			Also, it gives a hacker vibe! Cool, right? You might have guessed it
			right; I am <Link wiki="Linux" /> and <Link wiki="Neovim" /> user too.<br
			/>
			Those reasons mentioned pushed me to become a
			<em><strong>Full-stack</strong></em> developer now.
		</Message>

		<Message>
			At the moment, I feel the most confident in the <Link
				wiki="JavaScript"
			/>
			programming language. However, I keep my knowledge broaden by writing
			code in other languages to be adaptable and flexible in finding efficient,
			developer-friendly and performance-wise solutions to build accessible,
			user-friendly features.
		</Message>

		<Message>P.S. I also love <Link wiki="Svelte" />. 💜</Message>

		<Message>
			<strong>I am currently looking for the job opportunity.</strong><br
			/>
			Got something for me? Please contact me by sending a message, or reach
			ouch through social media.

			<Button
				slot="actions"
				type="link"
				title="Go to my contact subpgage"
				label="Contact me"
				href="/contact"
			/>
		</Message>
	</Profile>
</article>

<style lang="postcss">
	article {
		--gap: 1.5em;

		@mixin flex-center column {
			gap: var(--gap);
		}
	}
	:--no-flex-gap article :--owl {
		margin-top: var(--gap);
	}

	:global(#button_contact-me) {
		justify-self: center;
	}
</style>
