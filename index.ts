//Intercepts the push state function to detect if an url has changed
window.history.pushState = new Proxy(window.history.pushState, {
  apply: (
    target,
    thisArg,
    argArray: [data: any, title: string, url?: string | null | undefined]
  ) => {
    locationChange(argArray[2] || "");
    return target.apply(thisArg, argArray);
  },
});

const insertInHTML = (path: string, tries: number = 0) => {
  let timeout;
  if (path.match("/shop/(.*)")) {
    const element = document.querySelector(
      "div.category-header > div.category__title"
    );

    if (tries > 3) {
      if (timeout) {
        clearTimeout(timeout);
      }
      return;
    }

    if (!element) {
      timeout = setTimeout(() => insertInHTML(path, tries + 1), 3000);
    }
    if (element) {
      if (document.getElementById("__snippet_seo_description")) {
        document.getElementById("__snippet_seo_description")?.remove();
      }
      setTimeout(() => renderHTML(element), 500);
    }
  }
};

const locationChange = async (newUrl: string) => {
  insertInHTML(newUrl);
};

window.addEventListener("popstate", () => {
  insertInHTML(window.location.pathname);
});

window.addEventListener("load", () => {
  insertInHTML(window.location.pathname);
});

const renderHTML = (element: Element) => {
  const metaDesc: string | undefined | null = document
    .querySelector('meta[property="og:description"]')
    ?.getAttribute("content");
  if (metaDesc) {
    const description = document.createElement("div");
    description.setAttribute("id", "__snippet_seo_description");

    description.innerHTML = `
      <p>
        ${metaDesc}
        <br/>
      </p>
    `;
    element.appendChild(description);
  } else {
    return;
  }
};
