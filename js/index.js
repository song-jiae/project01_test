let $list = document.getElementById('list');
let listItems = $list.getElementsByTagName('li');
console.log('$list,listItems')
for(let i = 0;i < listItems.length; i++){
  listItems[i].addEventListener('mouseenter',function(e){
    let subMenu = this.querySelector('.sub_menu');
    if(subMenu){subMenu.style.display='block';
  }
  });
  listItems[i].addEventListener('mouseleave',function(e){
    let subMenu = this.querySelector('.sub_menu');
    if(subMenu){subMenu.style.display='none';
  }
  });
}