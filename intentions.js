'use strict';
(function() {
  window.addEventListener('load', init);

  function init() {
    qs("select").addEventListener("change", changeView);
  }

  function changeView() {
    if (qs("select").value === "Seeking services") {
      id("offering").classList.add("hidden");
      id("seeking").classList.remove("hidden");
    } else {
      id("seeking").classList.add("hidden");
      id("offering").classList.remove("hidden");
    }
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