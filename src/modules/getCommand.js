const getCommand = () =>{
    const command = document.getElementById('command');
    const  getPhoto = (event) => {
		      let target = event.target;
		if (target.classList.contains('command__photo')) {
				const src = target.src;
        target.src = target.dataset.img;
				target.dataset.img = src;
			}
		};
  command.addEventListener('mouseover', getPhoto);
  command.addEventListener('mouseout',  getPhoto);
};
export default getCommand;