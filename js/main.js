// Tabs Menu using data Attributes


//console.log(e.target);                Target click
//console.log(e.target.dataset);        Data Set
/*
//  prvi komplikovaniji nacin bez varijabli
mainContent.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        tabs.forEach(function (tab) {
            tab.classList.remove('active');
        });
        e.target.classList.add('active');
        content.forEach(function (content) {
        content.classList.remove('active');
        });
        const activeTab = document.getElementById(id);
        activeTab.classList.add('active');
    }
});
*/

/*
const mainContent = document.querySelector('main');
const tabs = document.querySelectorAll('.tabs-container > .btn');
const content = document.querySelectorAll('.tabs-content > .content');
mainContent.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabs.forEach(tab => tab.classList.remove('active'));
        e.target.classList.add('active');
        content.forEach(content => content.classList.remove('active'));
        const activeTab = document.getElementById(id);
        activeTab.classList.add('active');
    }
};
*/

// Tabs Menu using data Attributes
(function () {
    let tabsMenu = {
        mainContent: document.querySelector('main'),
        tabs: document.querySelectorAll('.tabs-container > .btn'),
        content: document.querySelectorAll('.tabs-content > .content'),
        init: () => tabsMenu.mainContent.addEventListener('click', tabsMenu.changeTabs),
        changeTabs: e => {
            id = e.target.dataset.id;
            if (id) {
                tabsMenu.tabs.forEach(tab => tab.classList.remove('active'));
                e.target.classList.add('active');
                tabsMenu.content.forEach(content => content.classList.remove('active'));
                activeTab = document.getElementById(id);
                activeTab.classList.add('active');
            }
        }
    }
    tabsMenu.init();
})()