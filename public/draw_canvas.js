				(function() {
					var canvas = document.getElementById('paint');
					// var canvas = document.querySelector('#paint');
					var ctx = canvas.getContext('2d');
	
					var sketch = document.getElementById('sketch');
					var sketch_style = getComputedStyle(sketch);
					canvas.width = parseInt(sketch_style.getPropertyValue('width'));
					canvas.height = parseInt(sketch_style.getPropertyValue('height'));
					console.log(canvas.width, canvas.height)
					var mouse = {x: 0, y: 0};
	 
					/* Mouse Capturing Work */
					canvas.addEventListener('mousemove', function(e) {
						mouse.x = e.pageX - $(paint).offset().left;

						mouse.y = e.pageY - $(paint).offset().top;
						//console.log(mouse.x, e.pageX, this.offsetLeft)
   						//console.log(mouse.y, e.pageY, this.offsetTop)
					}, false);
	
					/* Drawing on Paint App */
					ctx.lineWidth = 3;
					ctx.lineJoin = 'round';
					ctx.lineCap = 'round';
					ctx.strokeStyle = 'dark-gray';
	 
					canvas.addEventListener('mousedown', function(e) {
							ctx.beginPath();
							ctx.moveTo(mouse.x, mouse.y);
	 					   	// console.log('listening')
							canvas.addEventListener('mousemove', onPaint, false);
					}, false);
	 
					canvas.addEventListener('mouseup', function() {
							canvas.removeEventListener('mousemove', onPaint, false);
					}, false);
	 
					var onPaint = function() {
							ctx.lineTo(mouse.x, mouse.y);
							ctx.stroke();
							//console.log(mouse.x,mouse.y);
					};
	
				}());
				