"use strict";
var $ = function (id) { return document.getElementById(id); };
var $$ = function (query) { return document.querySelector(query); };
var $$$ = function (jquery) { return document.querySelectorAll(jquery); };
var navToggle = $$(".nav-toggle");
var navMenu = $$("menu");
navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("nav--visible");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2NyaXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLElBQU0sQ0FBQyxHQUFHLFVBQUMsRUFBRSxJQUFLLE9BQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBM0IsQ0FBMkIsQ0FBQztBQUM5QyxJQUFNLEVBQUUsR0FBRyxVQUFDLEtBQUssSUFBSyxPQUFBLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUM7QUFDcEQsSUFBTSxHQUFHLEdBQUcsVUFBQyxNQUFNLElBQUssT0FBQSxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUM7QUFFMUQsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3BDLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUUzQixTQUFTLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ2xDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyxDQUFDIn0=