const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item'); 

function selectItem(e) {
	removeItem()

	removeContent()

	this.classList.add('tab-border')

	const tabContentItem = document.querySelector(`#${this.id}-content`);

	tabContentItem.classList.add('show')

}


function removeItem() {
    
tabItems.forEach(item=> item.classList.remove('tab-border'))
}




function removeContent() {
	tabContentItems.forEach(item=> {
		item.classList.remove('show')
	})
	}

tabItems.forEach(item => {
	item.addEventListener("click",selectItem)
})


