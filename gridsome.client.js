import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faTwitter, faBars);

export default function(Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
}
