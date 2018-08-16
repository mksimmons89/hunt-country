var img_arr = [
	{
		url: "./images/Barn_RockWall_Fence.jpg",
		name: "Barn RockWall"
	},
	{
		url: "./images/Treating-invasive-plants-with-back-pack-sprayer-and-herbicide.jpg",
		name: "herbicide treatment"
	},
	{
		url: "./images/father-and-son-hunting.jpg",
		name: "Father and son"
	},
	{
		url: "./images/Seneca-hiking-trail_-_West_Virginia_-_ForestWander.jpg",
		name: "Seneca"
	},
	{
		url: "./images/CanadaGeese.jpg",
		name: "Canada"
	},
	{
		url: "./images/thumbailanthus%20at%20pscp_tnc3.jpg",
		name: "thumbailanthus"
	},
	{
		url: "./images/wildflowers.png",
		name: "wildflowers"
	},
	{
		url: "./images/Drone_SunsetLakeHume2_DPreznuk.jpg",
		name: "sunset"
	},
	{
		url: "./images/Drone_SummerFarmFog_DPreznuk.jpg",
		name: "farm dog"
	},
	{
		url: "./images/Drone_WinterFarm2_DPreznuk.jpg",
		name: "winter farm 2"
	},
	{
		url: "./images/Drone_WinterFarm_DPreznuk.jpg",
		name: "winter farm"
	},
	{
		url: "./images/FencePost_DPreznuk.jpg",
		name: "fence post"
	},
	{
		url: "./images/Pano2_Ovoka.jpg",
		name: "Pano2"
	},
	{
		url: "./images/HistoricHouse_Mountain.jpg",
		name: "Historic House"
	},
	{
		url: "./images/Pano1_Ovoka.jpg",
		name: "pano1"
	},
	{
		url: "./images/Equipment_Tractor_MJWills.jpg",
		name: "tractor"
	},
	{
		url: "./images/Pano5_SkyMeadowPRC.jpg",
		name: "pano5"
	},
	{
		url: "./images/Pano4_SkyMeadowPRC.jpg",
		name: "pano4"
	},
	{
		url: "./images/Pano3_SkyMeadowPRC.jpg",
		name: "Pano3"
	},
	{
		url: "./images/Pano2_SkyMeadowPRC.jpg",
		name: "Pano2"
	},
	{
		url: "./images/Pano1_SkyMeadowPRC.jpg",
		name: "Pano1"
	},
	{
		url: "./images/Postcard_FadedBackground.jpg",
		name: ""
	},
	{
		url: "./images/Field_Mountains.jpg",
		name: "field moutains"
	},
	{
		url: "./images/HC_Shutterstock2.jpg.jpg",
		name: "shutter"
	},
	{
		url: "./images/BuckPhoto.jpg",
		name: "Buck"
	},
	{
		url: "./images/Ovoka_Field_Mountain_Mist_Blue.jpg",
		name: "mist mountains"
	},
	{
		url: "./images/Pond_Mist_Sun_Dock.jpg",
		name: "pond mist"
	},
	{
		url: "./images/Pond_Mist_Sun_Portrait.jpg",
		name: "pond mist sun2"
	},
	{
		url: "./images/Pond_Mist_Sun.jpg",
		name: "pond mist sun"
	},
	{
		url: "./images/Pond_Mist_Cattails.jpg",
		name: "cattails"
	},
	{
		url: "./images/Ovoka_Field_Moutains_Mist.jpg",
		name: "ovoka mountain mist"
	},
	{
		url: "./images/Ovoka_Field_Sun_Mountain_Portrait.jpg",
		name: "sun mountain portrait"
	},
	{
		url: "./images/Ovoka_Field_Sun_Moutains1.jpg",
		name: "ovoka field sun"
	},
	{
		url: "./images/Ovoka_Field_OldTree_Mountain_Mist.jpg",
		name: "Ovoka Old Tree"
	},
	{
		url: "./images/IMG_2026.JPG",
		name: "property 1"
	},
	{
		url: "./images/silo-barn-24451426.jpg",
		name: "barn"
	},
	{
		url: "./images/BarnShilloute.jpg",
		name: "barn 2"
	},
	{
		url: "./images/Barn_Winery.jpg",
		name: "barn winery"
	},
	{
		url: "./images/SplitFence_Barn.jpg",
		name: "split fence"
	},
	{
		url: "./images/Graphic_BW.jpg",
		name: "bw"
	},
	{
		url: "./images/Buck_Evening.jpg",
		name: "buck night"
	},
	{
		url: "./images/Grapevines.jpg",
		name: "grapevines"
	},
	{
		url: "./images/Fence_Pastures.jpg",
		name: "pastures"
	},
	{
		url: "./images/Mountains_Eveninig.jpg",
		name: "mountain eve"
	}
];

for (var i = 0; i < img_arr.length; i++) {
	var row = $("<div class='row'>");
	var div = $('<div>');
	div.attr('class', `col-lg-3 col-md-4 col-xs-6 img-pic`);
	div.attr('data-key', i);
	var a = $('<a>');
	a.attr('href', '#');
	a.attr('class', 'd-block mb-4 h-100');
	var img = $('<img>');
	img.attr('class', 'img-fluid img-thumbnail');
	img.attr('src', img_arr[i].url);
	img.attr('alt', img_arr[i].name);
	var tmp1 = div.append(a);
	var tmp2 = tmp1.append(img);
	$('.img-gall').append(tmp2);
}

$('.img-pic').on('click', function(event) {
	console.log(event.target)
})
