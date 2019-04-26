<template>
<div>
	<p class="header-sub-title" id="word"></p><p class="header-sub-title blink">|</p>

</div>
</template>

<script>

</script>
export default {
    data() {
        return {
            words: ["interneta", "kompiuterius", "programavima"],
            i: 0,
            timer
        }
    },
    methods: {
        typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 500);
	};
	loopTyping();
};
    }
}

<sytle soped>
.blink {
  animation: blink 0.5s infinite;
}
@keyframes blink{
  to { opacity: .0; }
}
.flex {
	display: flex;
}
.header-sub-title {
  color: #fff;
  font-family: "Courier";
  font-size: 20px;
  padding: 0.1em;
}
</style>