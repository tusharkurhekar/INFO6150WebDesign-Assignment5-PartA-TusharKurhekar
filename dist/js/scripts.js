
var form = document.querySelector("form");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zipcode = document.getElementById("zipcode");
var comments = document.getElementById("comments");
var favCityResponse = document.getElementById("favCity");
var dynamicCheckbox = document.getElementById("dynamicCheckbox");
var textReason = document.getElementById("textReason");
var favCityComment = document.getElementById("favCityComment");

var submitBtn = document.getElementById("submitBtn");
var resetBtn = document.getElementById("resetBtn");

let table = document.getElementById("tableData");
var titles = document.querySelectorAll('input[name="title"]');
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var emailId = document.getElementById("emailId");
var phoneNumber = document.getElementById("phoneNumber");
var streetAddress1 = document.getElementById("streetAddress1");
var streetAddress2 = document.getElementById("streetAddress2");


let validatationBool = false;
let validationErrors = {};

window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-times');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-times');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-times');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })


form.addEventListener("submit", e => {
  e.preventDefault();

  let title;

  for (let i=0; i<titles.length; i++) {
    console.log(titles[i].checked);
    if (titles[i].checked) {
      validatationBool = true;
      title = titles[i].value;
    }
  }

  console.log(validateEmail(emailId.value), " ", emailId.value);

  if (
    // Validate  selected
    validatationBool &&
    firstName.value != "" &&
    lastName.value != "" &&
    emailId.value != "" && validateEmail(emailId.value) &&
    phoneNumber.value != "" &&
    streetAddress1.value != "" &&
    city.value != "" &&
    state.value != "" &&
    zipcode.value != "" &&
    favCityResponse.value != "select" &&
    favCityComment.value != ""
    
  ) {
    tableData.innerHTML += `
      <tr>
        <td>${title.charAt(0).toUpperCase() + title.slice(1)}. ${firstName.value} ${lastName.value}</td>
        <td>${emailId.value}</td>
        <td>${phoneNumber.value}</td>
        <td>${streetAddress1.value}</td>
        <td>${streetAddress2.value}</td>
        <td>${city.value}</td>
        <td>${state.value}</td>
        <td>${zipcode.value}</td>
        <td>${comments.value}</td>
        <td>${favCityResponse.value}</td>
        <td>${favCityComment.value}</td>
      </tr>
    `;

    alert("Details have been uploaded to the table!");
    form.reset();
    validatationBool = false;
  } else {
    alert("Please enter details correctly!");
  }
})

    $(".send-button").click(function(){
        var firstname=$(".name").val(); 
        var check= /^[a-zA-Z\s]+$/;
        //name//
        
        if(firstname==""){
        $(".name-hide").text("Enter your name");
        return false;}
        else{true;}
        
        if(!firstname.match(check)){
        $(".name-hide").text("Enter your valid name");
            return false;}
            else{true;}
        
        if(firstname.length>20){
        $(".name-hide").text("More than 20 char. is not allowed");
        return false;
        }
        else{ $(".first-name-hide").text("");}
        
        //email //
        
        var check_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var email=$(".email").val();
        if(email==""){
            $(".email-hide").text("Enter your email id");
            return false;
        }
        else{true}
        if(!email.match(check_email)){
            $(".email-hide").text("Enter your valid email id");
            return false;
        }
        else{ $(".email-hide").text("");}
        //message//
        var message =$(".message").val();
        if(message==""){
            $(".hide-message").text("write something for us");
            return false;
        }
        else{$(".hide-message").text("")}
        //mobile no//
        var mobile=$(".mobile").val();
        var check_moblie=/^[0-9]+$/;
        if(mobile==""){
            $(".hide-message").text("enter your mobile no.");
            return false;
        }
        else{true}
        if(!mobile.match(check_moblie)){
            $(".hide-message").text("enter your valid mobile no.");
            return false;
        }
        else{$(".hide-message").text("");}
        })
    
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
