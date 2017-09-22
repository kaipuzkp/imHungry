

// var restaurantArray=[
// 	{
// 		name:"Federico's Supper Club",
// 		type: "Italian",
// 		address: "1728 Commercial Dr Vancouver" ,
// 		imgAddress: 'http://www.federicossupperclub.com/upload/slideshows/wedding/Layer_1.jpg',
// 		link:"http://www.federicossupperclub.com/",
// 		id:0

// 	},

// 	{
// 		name: "Max's Restaurant",
// 		type: "Filipino",
// 		address: "3546 Kingsway Vancouver",
// 		imgAddress: "https://media-cdn.tripadvisor.com/media/photo-s/0e/b8/7e/fd/max-s-fried-chicken.jpg",
// 		link:"https://www.maxschicken.com/",
// 		id:1
// 	},

// 	{
// 		name:"Chau Veggie Express",
// 		type:"Vietnamese",
// 		address:"5052 Victoria Dr Vancouver",
// 		imgAddress:"http://www.vancitybuzz.com/wp-content/uploads/2016/05/Chau_Veggie_Express-670x500.jpg",
// 		link:"https://www.chowatchau.ca/",
// 		id:2
// 	},
// 	{
// 		name:"Absinthe Bistro",
// 		type:"French",
// 		address:"1260 Commercial Dr Vancouver",
// 		imgAddress:"http://blog.his-j.com/photos/uncategorized/2015/01/12/dscn1771.jpg",
// 		link:"http://www.bistroabsinthe.com/",
// 		id:3
// 	},

// 	{
// 		name:"Kissa Tanto",
// 		type:"Italian-Japanese",
// 		address:"263 E Pender St Vancouver",
// 		imgAddress:"http://media.scoutmagazine.ca/2016/04/IMG_6620.jpg",
// 		link:"http://www.kissatanto.com/",
// 		id:4
// 	},

// 	{
// 		name:"L'Abattoir",
// 		type:"French",
// 		address:"217 Carrall St Vancouver",
// 		imgAddress:"http://lxly7dz9m3-flywheel.netdna-ssl.com/wp-content/uploads/2016/02/LynolLui_LAbattoir_2016CB100s_24F.jpg",
// 		link:"http://www.labattoir.ca/",
// 		id:5

// 	},
// 	{
// 		name:"Chambar Belgian Restaurant",
// 		type:"Belgian",
// 		address:"568 Beatty St Vancouver",
// 		imgAddress:"https://i.pinimg.com/originals/c1/8b/de/c18bdea6caeec1bd0aa8460194013c93.jpg",
// 		link:"https://www.chambar.com/",
// 		id:6
// 	}

// ]

// for (var i=0; i< restaurantArray.length; i++){
// 	var restaurantDiv = $('<div>').addClass('restaurant').attr("id",restaurantArray[i].id)



// 	var content = $('<div>').addClass('content')
// 	$('<h2>').text(restaurantArray[i].name).appendTo(content)
// 	$('<h3>').text(restaurantArray[i].type).addClass('type').appendTo(content)
// 	$('<h3>').text(restaurantArray[i].address).addClass('address').appendTo(content)
// 	$(content).appendTo(restaurantDiv)

// 	$(restaurantDiv).appendTo($('#restaurantContainer'))

// 	var img = restaurantArray[i].imgAddress

// 	// $('#'+i).css("background-image",'url('+img+')')
// 	$('#'+i).css({"background-image":'url('+img+')'})

// 	// var link = restaurantArray[i].link
// 	// console.log(link)
// 	// $("#restaurantContainer").on('click', '#'+i,function(){
			
// 	// 		window.location.href = link
// 	// })

// 	// $("#"+i).click(function(){
			
// 	// 		window.location.href = link
// 	// })

// }



	// var link = restaurantArray[i].link
	// console.log(link)
	// $("#restaurantContainer").on('click', '#'+i,function(){
			
	// 		window.location.href = link
	// })

	// $("#"+i).click(function(){
			
	// 		window.location.href = link
	// })

// }
////////////Get restaurant info from API
$.get('https://imhungry-app.herokuapp.com/restaurant/', function(response) {

	console.log(response)
	// $('#restaurantContainer').html("")
	for (var i=0; i< response.length; i++){


		var restaurantDiv = $('<div>').addClass('restaurant').attr("id",response[i]._id)

		var content = $('<div>').addClass('content')
		$('<h2>').text(response[i].name).appendTo(content)
		$('<h3>').text(response[i].type).addClass('type').appendTo(content)
		$('<h3>').text(response[i].address).addClass('address').appendTo(content)
		$(content).appendTo(restaurantDiv)

		$(restaurantDiv).appendTo($('#restaurantContainer'))

		var img = response[i].image

		// $('#'+i).css("background-image",'url('+img+')')
		// $('#'+response[i]._id).css({"background-image":'url('+img+')'})
		$('#'+response[i]._id).css({"background": "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("+img+") no-repeat center center"})
	}	

})	


////////////Create New Restaurant
$('#submit-form').click(function(){
	if(!($("#rname").val()=="") || !($("#rtype").val()=="") || !($("#raddress").val()=="") || !($("#rimage").val()=="") ){
		var newRestaurant = {

			"name": $('#rname').val(),
			"type": $('#rtype').val(),
			"address": $('#raddress').val(),
			"image": $('#rimage').val(),
			// "link": $('#rlink').val()

		}
		var clearText = function(id) {
	        $(id).val("");
	      }

	      clearText('#rname');
	      clearText('#rtype');
	      clearText('#raddress');
	      clearText('#rimage');
	      // clearText('#rlink')


		console.log(newRestaurant)
		$.ajax({
			type: 'POST',
			url: 'https://imhungry-app.herokuapp.com/restaurant',
			data: JSON.stringify(newRestaurant),
			success: function(data) { 
				console.log(data);
				alert("添加成功！");
				window.location.href="restaurantList.html"
				 },
	        contentType: "application/json",
	     	dataType: 'json'

		})
	}
	else{
		alert("请将带*号的空行填写完整");
	}

})

// $("#restaurantContainer").on('click', '.restaurant',function(event){

// 	var rid = $(this).attr('id')
// 	console.log(rid)
// 	$.get('https://imhungry-app.herokuapp.com/restaurant/' + rid, function(response){
// 		console.log(response)
// 		var link = response.link
// 		window.location.href = link
// 	})


// })


// $("#restaurantContainer").on('click', '.restaurant',function(event){
// 	for (var i=0; i< restaurantArray.length; i++){
// 		console.log(restaurantArray[i].link)
// 		var link = restaurantArray[i].link
// 		window.location.href = link
// 	}

// })

// for (var i=0; i< restaurantArray.length; i++){
// 	var link = restaurantArray[i].link
// 	$("#restaurantContainer").on('click', '#'+i,function(event){
		
// 			// console.log(restaurantArray[i].link)
			
// 			window.location.href = link

// 	})
// }

