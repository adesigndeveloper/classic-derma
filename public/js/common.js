function fadeIn(element) {
  element.style.display = "block";
}

let interval = [];
function showMenu(element) {
  if (element) {
    if (element.classList) {
      element.classList.add("display");
      element.style.display = "block";
      isHideMenu = true;
    }
  }
}

function hideMenu(element) {
  if (element) {
    if (element.classList) {
      element.classList.remove("display");
      element.style.display = "none";
    }
  }
}

var elCollection = document.querySelectorAll(".heading-inner");
if (elCollection.length > 0) {
  for (let i = 0; i < elCollection.length; i++) {
    let el = elCollection[i];
    el.addEventListener("click", function () {
      let ele = this.nextElementSibling;
      if (ele) {
        //that means displayin
        if (ele.classList.contains("display")) {
          ele.style.transition = "all 1s ease-in-out";
          ele.classList.remove("display");
          ele.style.display = "none";
        } else {
          ele.style.transition = "all 1s ease-in-out";
          ele.classList.add("display");
          ele.style.display = null;
        }
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function (event) {
  window.addEventListener("scroll", function () {
    var B = document.body;
    var D = document.documentElement;
    D = D.clientHeight ? D : B;
    var winTop = D.scrollTop;
    if (winTop >= 30) {
      let header = document.querySelector(".header");
      if (header) {
        document.querySelector(".header").classList.add("fixed-header");
      }
    } else {
      let header = document.querySelector(".header");
      if (header) {
        document.querySelector(".header").classList.remove("fixed-header");
      }
    }

    if (winTop >= 550) {
      let filter = document.querySelector(".left-side");
      if (filter) {
        document.querySelector(".left-side").classList.add("fixed-filter");
      }
    } else {
      let filter = document.querySelector(".left-side");
      if (filter) {
        document.querySelector(".left-side").classList.remove("fixed-filter");
      }
    }

    if (winTop >= 550) {
      let category = document.querySelector(".right-side");
      if (category) {
        document.querySelector(".right-side").classList.add("fixed-product");
      }
    } else {
      let category = document.querySelector(".right-side");
      if (category) {
        document.querySelector(".right-side").classList.remove("fixed-product");
      }
    }
  });
  let cartCloseBtn = document.querySelector(".close");
  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", function () {
      let headerCart = document.querySelector(".header-cart");
      if (headerCart) {
        headerCart.classList.remove("display");
        headerCart.style.display = "none";
      }
    });
  }
  var searchMobile = document.querySelector(".search-bar");
  if (searchMobile) {
    searchMobile.addEventListener("click", function () {
      let ele = searchMobile.nextElementSibling;
      if (ele) {
        //that means displayin
        if (ele.classList.contains("display")) {
          // ele.style.transition = "all 1s ease-in-out";
          ele.classList.remove("display");
          ele.style.display = "none";
        } else {
          // ele.style.transition = "all 1s ease-in-out";
          ele.classList.add("display");
          ele.style.display = "block";
        }
      }
    });
  }

  var menuUlColl = document.querySelectorAll("ul.menu li.menu-top");
  if (menuUlColl.length > 0) {
    for (let i = 0; i < menuUlColl.length; i++) {
      let menuUl = menuUlColl[i];
      menuUl.addEventListener("mouseover", function () {
        if (window.innerWidth > 943) {
          let child = menuUl.childNodes;

          for (let j = 0; j < child.length; j++) {
            if (child[j]) {
              if (child[j].classList) {
                if (child[j].classList.contains("menu-open")) {
                  clearInterval(interval[i]);
                  showMenu(child[j]);
                }
              }
            }
          }
        }
      });

      menuUl.addEventListener("mouseleave", function () {
        let child = menuUl.childNodes;
        for (let j = 0; j < child.length; j++) {
          if (child[j]) {
            if (child[j].classList) {
              if (child[j].classList.contains("menu-open")) {
                // clearInterval(interval);
                interval[i] = setTimeout(function () {
                  hideMenu(child[j]);
                }, 150);
              }
            }
          }
        }
      });
    }
  }

  let productTabColl = document.querySelectorAll("ul.tabs li");
  if (productTabColl) {
    for (let i = 0; i < productTabColl.length; i++) {
      productTabColl[i].addEventListener("click", function () {
        var tab_id = this.getAttribute("data-tab");

        let productTabColl1 = document.querySelectorAll("ul.tabs li");
        for (let i = 0; i < productTabColl1.length; i++) {
          productTabColl1[i].classList.remove("current");
        }

        let productTabConColl1 = document.querySelectorAll(".tab-content");
        for (let i = 0; i < productTabConColl1.length; i++) {
          productTabConColl1[i].classList.remove("current");
        }

        this.classList.add("current");
        document.querySelector("#" + tab_id).classList.add("current");
      });
    }
  }

  var coll = document.getElementsByClassName("collapsible");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen")?.click();

  let tabNavColl = document.querySelectorAll(".tabs-nav ul li");

  if (tabNavColl) {
    for (let i = 0; i < tabNavColl.length; i++) {
      tabNavColl[i].addEventListener("click", function () {});
    }
  }
  merchContent();
});
var coll = document.getElementsByClassName("acc__title");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  let faqTabs = document.querySelectorAll(".tabs-content .tb-common");
  if (faqTabs) {
    for (let i = 0; i < faqTabs.length; i++) {
      faqTabs[i].classList.remove("active");
    }
  }
  document.getElementById(cityName).classList.add("active");
  evt.currentTarget.className += " active";
}
function lazyLoad(target) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-src");
          if (src) {
            img.setAttribute("src", src);
            img.classList.add("fade");

            observer.disconnect();
          }
        }
      });
    });

    io.observe(target);
  } else {
    const src = target.getAttribute("data-src");
    if (src) {
      target.setAttribute("src", src);
      target.classList.add("fade");
    }
  }
}

window.addEventListener("load", function () {
  const targets = document.querySelectorAll("img.lazyload:not(.fade)");
  for (let i = 0; i < targets.length; i++) {
    lazyLoad(targets[i]);
  }
  // targets.forEach(lazyLoad);
});

window.addEventListener("scroll", function () {
  const targets = document.querySelectorAll("img.lazyload:not(.fade)");

  for (let i = 0; i < targets.length; i++) {
    lazyLoad(targets[i]);
  }
});

window.addEventListener("click", function () {
  const targets = document.querySelectorAll("img.lazyload:not(.fade)");
  // targets.forEach(lazyLoad);
  for (let i = 0; i < targets.length; i++) {
    lazyLoad(targets[i]);
  }
});

window.addEventListener("DOMNodeInserted", function () {
  const targets = document.querySelectorAll("img.lazyload:not(.fade)");
  for (let i = 0; i < targets.length; i++) {
    lazyLoad(targets[i]);
  }
  // targets.forEach(lazyLoad);
});
window.addEventListener("DOMNodeRemoved", function () {
  const targets = document.querySelectorAll("img.lazyload:not(.fade)");
  for (let i = 0; i < targets.length; i++) {
    lazyLoad(targets[i]);
  }
  // targets.forEach(lazyLoad);
});

/*Footer */
function WeDeliveAreaLess() {
  newText1 = "...More location";
  var x = document.getElementById("WeDelvr");
  if (x.style.height === "auto") {
    x.style.height = "0px";

    document.querySelector(".remove-text-wedeliver").textContent = newText1;
  } else {
    x.style.height = "auto";
    x.style.position = "initial";
  }
}
newText = "";
function WeDeliveArea() {
  var x = document.getElementById("WeDelvr");
  if (x.style.height === "auto") {
    x.style.height = "0px";
  } else {
    x.style.height = "auto";
    x.style.position = "initial";
    document.querySelector(".remove-text-wedeliver").textContent = newText;
  }
}

function MoreCategoryLess() {
  newText1 = "...More Categories";
  var x = document.getElementById("load_more");
  if (x.style.height === "auto") {
    x.style.height = "0px";
    document.querySelector(".remove-text").textContent = newText1;
  } else {
    x.style.height = "auto";
    x.style.position = "initial";
  }
}
newText = "";
function MoreCategory() {
  var x = document.getElementById("load_more");
  if (x.style.height === "auto") {
    x.style.height = "0px";
  } else {
    x.style.height = "auto";
    x.style.position = "initial";
    document.querySelector(".remove-text").textContent = newText;
  }
}

/*Merchandise*/
let tabs = document.querySelectorAll(".tabs input");
if (tabs) {
  for (let i = 0; i < tabs.length; i++) {
    let tab = tabs[i];
    tab.addEventListener("change", function () {
      let content = document.querySelector("#" + tab.name + "-Content");
      merchContent(i);
    });
  }
}

function merchContent(index) {
  let content = document.querySelectorAll(".merc-content");
  if (content && content.length > 0) {
    for (let i = 0; i < content.length; i++) {
      content[i].classList.remove("active");
    }
    if (index) {
      content[index].classList.add("active");
    } else {
      content[0].classList.add("active");
    }
  }
}
/*Merchandise End*/

function addnotification() {
  document.getElementById("add-to-note").classList.add("mystyle");

  var notifictionclass = document.getElementsByClassName("mystyle");
  if (notifictionclass.length > 0) {
    setTimeout(function () {
      document.getElementById("add-to-note").classList.remove("mystyle");
    }, 3000);
  }
}

function openTab(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// window.onload = myFooter();
