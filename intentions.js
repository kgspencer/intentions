'use strict';
(function() {
  window.addEventListener('load', init);
  let firstPopup = true;
  const height = 350;
  const width = 550;

  function init() {
    qs("select").addEventListener("change", changeView);
    let tickets = qsa(".ticket h2");
    tickets.forEach(ticket => {
      ticket.addEventListener("click", openPopup);
    });
  }

  function changeView() {
    if (qs("select").value === "Seeking services") {
      window.location.href = "index.html"
    } else {
      window.location.href = "offering.html"
    }
  }

  function openPopup(evt) {
    /* Generate and populate popup DOM */
    let button = gen("button");
    button.textContent = "X";
    button.addEventListener("click", closePopup);
    let user = gen("h3");
    user.textContent = evt.target.parentNode.querySelector("h3").textContent;
    let tag = gen("h2");
    tag.textContent = evt.target.parentNode.querySelector("h2").textContent;
    let price = gen("p");
    price.classList.add("price");
    price.textContent = evt.target.parentNode.querySelector(".price").textContent;
    let description = gen("p");
    description.classList.add("description");
    description.textContent = evt.target.parentNode.querySelector(".description").textContent;

    let popup = gen("article");
    popup.classList.add("popup");
    popup.append(button, user, tag, price, description);
    id("popups").appendChild(popup);

    if (!firstPopup) {
      /* Populate positions with random values*/
      let top = Math.floor(Math.random() * (window.innerHeight + 1 - height));
      let left = Math.floor(Math.random() * (window.innerWidth + 1 - width));

      popup.style['top'] = top + 'px';
      popup.style['left'] = left + 'px';
    } else {
      /* Center */
      popup.style['top'] = '50%';
      popup.style['left'] = '50%';
      popup.style['transform'] = 'translate(-50%, -50%)';
      firstPopup = false;
    }

    /*
    qs("#popup h3").textContent = evt.target.parentNode.querySelector("h3").textContent;
    qs("#popup h2").textContent = evt.target.parentNode.querySelector("h2").textContent;
    qs("#popup .price").textContent = evt.target.parentNode.querySelector(".price").textContent;
    qs("#popup .description").textContent = evt.target.parentNode.querySelector(".description").textContent;
    */

    /* Make popup visible
    id("popup").classList.remove("hidden");
     */
  }

  /**
   * Removes popup from DOM
   */
  function closePopup(evt) {
    evt.target.parentNode.remove();
    firstPopup = (id("popups").children.length <= 0);
  }

  /* ********************************* HELPER FUNCTIONS ********************************* */

  /**
   * Searches document for an object with passed idName
   * @param {string} idName - string of id name
   * @returns {object} dom element with id name
   */
  function id(idName) {
    let element = document.getElementById(idName);
    return element;
  }

  /**
   * Searches document for the first object of type selector
   * @param {string} selector - string of tag name
   * @returns {object} dom element of type selector
   */
  function qs(selector) {
    let element = document.querySelector(selector);
    return element;
  }

  /**
   * Searches document for all elements of type selector
   * @param {string} querySelector - string of query selector
   * @returns {NodeList} - dom elements of type selector
   */
  function qsa(querySelector) {
    let element = document.querySelectorAll(querySelector);
    return element;
  }

  /**
   * Generate dom element of passed type
   * @param {string} htmlType - tag of element to be created
   * @returns {object} - the generated element
   */
  function gen(htmlType) {
    let element = document.createElement(htmlType);
    return element;
  }

})();