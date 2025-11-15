'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    qs("select").addEventListener("change", changeView);
    let tickets = qsa(".ticket h2");
    tickets.forEach(ticket => {
      ticket.addEventListener("click", openPopup);
    });
    qs("#popup button").addEventListener("click", closePopup);
  }

  function changeView() {
    if (qs("select").value === "Seeking services") {
      window.location.href = "index.html"
    } else {
      window.location.href = "offering.html"
    }
  }

  function openPopup(evt) {
    console.log(qs("#popup .price"));

    /* Populate popup DOM */
    qs("#popup h3").textContent = evt.target.parentNode.querySelector("h3").textContent;
    qs("#popup h2").textContent = evt.target.parentNode.querySelector("h2").textContent;
    qs("#popup .price").textContent = evt.target.parentNode.querySelector(".price").textContent;
    qs("#popup .description").textContent = evt.target.parentNode.querySelector(".description").textContent;

    /* Make popup visible */
    id("popup").classList.remove("hidden");
  }

  function closePopup() {
    id("popup").classList.add("hidden");
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