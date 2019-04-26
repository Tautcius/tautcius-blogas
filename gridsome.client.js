import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTwitter, faFacebookSquare, faFacebookMessenger, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import VueTyperPlugin from 'vue-typer'
import {
  faBars,
  faClock,
  faAngleDoubleLeft,
  faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";

library.add(faGithub, faTwitter, faBars, faClock, faAngleDoubleLeft, faExternalLinkAlt, faFacebookSquare, faFacebookMessenger, faLinkedin);

export default function(Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
  Vue.use(VueTyperPlugin);
}
