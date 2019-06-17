var wakeuptime = 7;
var noon = 12;
var lunchtime = 13;
var naptime = lunchtime + 2;
var doorbell;
var evening = 18;

// Getting it to show the current time on the page
var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours
	  if (hours >= noon)
	  {
		  meridian = "PM";
	  }

	  if (hours > noon)
	  {
		  hours = hours - 12;
	  }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

// Getting the clock to increment on its own and change out messages and pictures
var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var dogeImageJS = document.getElementById('dogeImage');
  
  if (time == doorbell)
  {
    image = "https://img.thrfun.com/img/077/040/dog_jumping_x1.jpg";
    messageText = "Get 'em!";
  }
  else if (time == wakeuptime)
  {
    image = "https://3milliondogs.com/blog-assets-two/2015/02/husky1.jpg";
    messageText = "I hAtE mOrNiNgS";
  }
  else if (time == lunchtime)
  {
    image = "https://farm5.static.flickr.com/4298/35809387571_3ac0f36a8d_b.jpg";
    messageText = "Luncheon.. nom nom!";
  }
  else if (time == naptime)
  {
    image = "https://i.barkpost.com/wp-content/uploads/2014/12/dog-awkwardly-sleeping-on-couch.jpg?q=70&fit=crop&crop=entropy&w=808&h=500";
    messageText = "Ima just nap here!";
  }
  else if (time < noon)
  {
    image = "https://media.self.com/photos/57d89f154b76f0f832a0e297/4:3/w_728,c_limit/dog-bed-870.jpg";
    messageText = "MoRnInG.. fetch tiem?";
  }
  else if (time >= evening)
  {
    image = "https://farm5.static.flickr.com/4672/40560128611_9d1cde6d61_b.jpg";
    messageText = "GeT r 4 bed?";
  }
  else
  {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
    messageText = "Good afternoon!";
  }

  console.log(messageText); 
  timeEventJS.innerText = messageText;
  dogeImage.src = image;
  
  showCurrentTime();
};
updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);


// Getting the Party Time Button To Work
var partyButton = document.getElementById("doorbellButton");

var partyEvent = function()
{
    if (doorbell < 0) 
    {
        doorbell = new Date().getHours();
        doorbellButton.innerText = "Back to food hunting..";
        doorbellButton.style.backgroundColor = "#0A8DAB";
    }
    else
    {
        doorbell = -1;
        doorbellButton.innerText = "DoOrBeLL???1?";
        doorbellButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener("click", partyEvent);
partyEvent(); 


// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function()
{
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var lunchEvent = function()
{
    lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// Activates Nap-Time selector
var napTimeSelector =  document.getElementById("napTimeSelector");

var napEvent = function()
{
    naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);