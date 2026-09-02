document.addEventListener("DOMContentLoaded", function() {
  const refs = document.querySelectorAll(".footnote-ref a");

  refs.forEach(function(ref, index) {
    const id = "sn-" + (index + 1);
    const fnId = ref.getAttribute("href").replace("#", "");
    const footnote = document.querySelector("#" + fnId);

    if (!footnote) return;

    const content = footnote.querySelector("p").innerHTML
      .replace(/<a[^>]*class="footnote-backref"[^>]*>.*?<\/a>/g, "")
      .trim();

    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.classList.add("margin-toggle", "sidenote-number");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    checkbox.classList.add("margin-toggle");

    const sidenote = document.createElement("span");
    sidenote.classList.add("sidenote");
    sidenote.innerHTML = content;

    const sup = ref.closest("sup");
    sup.replaceWith(label, checkbox, sidenote);
  });

  const footnotesSection = document.querySelector(".footnotes");
  if (footnotesSection) footnotesSection.style.display = "none";
});