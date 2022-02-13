import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@ws/landingPage",
  app: () => System.import("@ws/landingPage"),
  activeWhen: ["/landingPage"],
});

registerApplication({
  name: "@ws/LoginPage",
  app: () => System.import("@ws/LoginPage"),
  activeWhen: ["/LoginPage"],
});

registerApplication({
  name: "@ws/HomePage",
  app: () => System.import("@ws/HomePage"),
  activeWhen: ["/homePage"],
});

start({
  urlRerouteOnly: true,
});
