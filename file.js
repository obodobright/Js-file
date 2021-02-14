var liListItem = document.querySelectorAll('.liListItem:nth-child(odd)')

for (var i = 0; i < liListItem.length; i++) {
    liListItem[i].style.background = "white";

}
var liListItemEven = document.querySelectorAll('.liListItem:nth-child(even)')
for (var i = 0; i < liListItemEven.length; i++) {
    liListItemEven[i].style.background = 'gray'
}

